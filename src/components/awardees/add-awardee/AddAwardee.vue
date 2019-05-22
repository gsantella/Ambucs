<template>
  <div id="container" class="form-elements">
    <div class="va-row">
      <div class="flex md6">
        <AwardeeInput @updateAwardeObject="updateAwardee"/>
      </div>

      <div class="flex md6">
        <AddContactTable @addContactsToAwardee="addContactsToAwardee"/>
        <br style="margin:10%"/>
        <AddTrykeTable @addTrykesToAwardee="addTrykesToAwardee"/>
        <br style="margin:10%"/>
        <AddUploadTable @addDocumentsToAwardee="addDocumentsToAwardee"/>
      </div>

    </div>
    <div v-if="!submitted" class="va-row">
      <div
        class="flex md3">
        <button class="btn btn-primary" @click="addRecord()" >
          {{'Save' | translate}}
        </button>
      </div>
      <div
        class="flex md3">
        <button class="btn btn-danger" @click="cancelRecord()">
          {{'Cancel' | translate}}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert'
import AwardeeInput from './AwardeeInput'
import AddContactTable from './AddContactTable'
import AddTrykeTable from './AddTrykeTable'
import AddUploadTable from './AddUploadTable'

export default {
  name: 'AddAwardee',
  data () {
    return {
      contact: {},
      contacts: [],
      tryke: {},
      trykes: [],
      document: {},
      documents: [],
      awardee: {},
      submitted: false,
    }
  },
  methods: {
    updateAwardee (awardee) {
      this.awardee = awardee
    },
    addContactsToAwardee (contacts) {
      this.contacts = contacts
    },
    addTrykesToAwardee (trykes) {
      this.trykes = trykes
    },
    addDocumentsToAwardee (documents) {
      this.documents = documents
    },
    // Attempts to make a POST request to AWS sending up this.awardee to add
    addRecord () {
      this.submitted = true
      try {
        fetch('https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/Test', {
          method: 'POST',
          body: JSON.stringify(this.awardee)
        }).then(response => response.json())
          .then(json => {
            this.contacts.forEach(element => {
              element.awardeeId = json.Attributes.id
              fetch(`https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/Test/contact`, {
                method: 'POST',
                body: JSON.stringify(element)
              })
            })
            this.trykes.forEach(element => {
              element.awardeeId = json.Attributes.id
              fetch(`https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/Test/tryke`, {
                method: 'POST',
                body: JSON.stringify(element)
              })
            })
          }).then(() => {
            this.$router.push({ name: 'view-awardees' })
          }).then(() => {
            swal('Added', 'The record has been added.', 'success')
          })
      } catch (e) {
        swal('Error', 'There was an issue trying to add this record,please try again later.', 'error')
      }
    },

    // The record gets canceled and redirects user back to View Awardee page
    cancelRecord () {
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
              swal('Deleted', 'The record has been deleted.', 'success')
              // this.$router.push({ name: 'view-awardees' })
            } catch (e) {
              swal('Error', "I'm sorry there was an issue trying to delete that record,please try again later.", 'error')
            }
          } else {
            swal('Cancelled', 'You have chosen not to delete the record.', 'warning')
          }
        })
    }
  },
  components: {
    AwardeeInput,
    AddContactTable,
    AddTrykeTable,
    AddUploadTable
  }
}

</script>

<style>
html {
  overflow-y: scroll;
}
</style>
