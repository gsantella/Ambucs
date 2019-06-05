<template>
  <div class="form-elements">
    <div class="va-row">
      <div class="flex md6">
      <vuestic-checkbox
        v-if="showCheckBox"
        :label="$t('Enable Edit Mode')"
        v-model="isDisabled"
      />
      </div>
      <div class="flex md6">
      <button @click="printAwardee()" style="float:right" class="btn btn-primary btn-micro">
        {{'Print' | translate}}
      </button>
      </div>
    </div>
    <div class="va-row">
      <div class="flex md6">
        <AwardeeInput
        :awardeeId="awardeeId"
        :IsDisabled="IsDisabled"
        :HeaderText="HeaderText"
        @updateAwardeObject="updateAwardeeObject"
        />
      </div>

    <div class="flex md6">

      <EditContactTable
      :awardeeId="awardeeId"
      :IsDisabled="IsDisabled"
      @updateContactsInAwardee="updateContactsInAwardee"
      />

      <br style="margin-bottom:2%"/>

      <EditTrykeTable
      :awardeeId="awardeeId"
      :IsDisabled="IsDisabled"
      @updateTrkyesInAwardee="updateTrykesInAwardee"
      />

      <br style="margin-bottom:2%"/>

      <EditUploadTable
      :awardeeId="awardeeId"
      :IsDisabled="IsDisabled"
      @updateDocumentsInAwardee="updateDocumentsInAwardee"
      />
    </div>

    <div class="va-row btn-margin-row">
      <div
        class="flex md3 justify--center">
        <button v-if="isDisabled" class="btn btn-primary" @click="updateRecord()" >
          {{'Save' | translate}}
        </button>
      </div>
      <div
        class="flex md3 justify--center">
        <button v-if="isDisabled" class="btn btn-danger" @click="deleteRecord()">
          {{'Delete' | translate}}
        </button>
      </div>
    </div>

    </div>

  </div>

</template>

<script>
import swal from 'sweetalert'
// import _ from 'lodash'
import AwardeeInput from './AwardeeInput'
import EditContactTable from './EditContactTable'
import EditTrykeTable from './EditTrykeTable'
import EditUploadTable from './EditUploadTable'

export default {
  name: 'EditAwardee',

  /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

  data () {
    return {
      URL: '',
      awardeeId: '',
      isDisabled: false,
      show: false,
      contact: {},
      tryke: {},
      document: {},
      awardee: {},
      contacts: [],
      trykes: [],
      documents: [],
      User: {
        writeAwardeePermission: false,
      },
      showCheckBox: true,
    }
  },

  /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

  computed: {

    HeaderText () {
      return this.isDisabled ? 'Edit Recipient' : 'View Recipient'
    },
    IsDisabled () {
      return this.isDisabled
    },
  },
  methods: {
    // Emitter Returning updated awardee object.
    updateAwardeeObject (awardee) {
      this.awardee = awardee
    },
    updateContactsInAwardee (contacts) {
      this.contacts = contacts
    },
    updateTrykesInAwardee (trykes) {
      this.trykes = trykes
    },
    updateDocumentsInAwardee (documents) {
      this.documents = documents
    },
    // Attemps to make a PATCH request to AWS sending up this.awardee to get updated
    updateRecord () {
      try {
        fetch(`${this.URL}/awardee/${this.$route.params.id}`, {
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
          method: 'PATCH',
          body: JSON.stringify(this.awardee)
        }).then(() => {
          this.$router.push({ name: 'view-awardees' })
        }).then(() => {
          swal('Updated', 'The Awardee has been updated.', 'success')
        })
      } catch (e) {
        swal('Error', 'There was an issue trying to update this record,please try again later.', 'error')
      }
    },
    // Attemps to make a DELETE request to AWS sending up this.awardee to be deleted
    deleteRecord () {
      swal({
        title: 'Are you sure you want to delete this record?',
        text: 'Once deleted, you will not be able to recover this file.',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      })
        .then((willDelete) => {
          if (willDelete) {
            try {
              this.contacts.forEach(element => {
                fetch(`${this.URL}/contact/${element.id}`, {
                  method: 'DELETE',
                })
              })

              this.trykes.forEach(element => {
                fetch(`${this.URL}/tryke/${element.id}`, {
                  method: 'DELETE',
                })
              })

              this.documents.forEach(element => {
                fetch(`${this.URL}/document/${element.documentId}`, {
                  method: 'DELETE',
                })
              })

              fetch(`${this.URL}/awardee/${this.$route.params.id}`, {
                method: 'DELETE'
              }).then(swal('Deleted', 'The Awardee has been deleted.', 'success'))

              setTimeout(() => this.$router.push({ name: 'view-awardees' }), 2500)
            } catch (e) {
              swal('Error', "I'm sorry there was an issue trying to delete that record,please try again later.", 'error')
            }
          } else {
            swal('Cancelled', 'You have chosen not to delete the record.', 'warning')
          }
        })
    },
    printAwardee () {
      this.$router.push({ name: 'print-awardee', params: { id: this.$route.params.id } })
    }
  },
  created () {
    this.URL = this.API_URL
    this.$nextTick(() => {
      this.$validator.validateAll()
    })
    this.awardeeId = localStorage.getItem('awardee-id')
    if (this.awardeeId === null) {
      swal('Error', 'That is not a valid user.', 'error')
      this.$router.push({ name: 'view-awardees' })
    } else {
      this.User.writeAwardeePermission = localStorage.getItem('awardeePerm') === 'true'
      if (!this.User.writeAwardeePermission) { this.showCheckBox = false }
    }
  },
  components: {
    AwardeeInput,
    EditContactTable,
    EditTrykeTable,
    EditUploadTable
  }
}

</script>

<style>
html {
  overflow-y: scroll;
}
</style>
