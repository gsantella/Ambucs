<template>
    <div>
        <TrykeModal v-if="showModal"
        @handleCloseModal="hideModal"
        @sendTrykeData="addDataToTrykesArray"
        @updateTrykeItem="updateTrykeItem"
        @deleteTrykeRow="deleteTrykeRow"
        :modalTitle="modalTitle"
        :displayMode="displayMode"
        :editTryke="tryke"
        :editId="editId"
        :IsDisabled="IsDisabled"/>

        <button v-if="IsDisabled" style="float:right;margin:10px;width:30%" class="btn btn-primary btn-micro" @click="addNewTrykeRow()">
            {{'Add' | translate}}
        </button>
        <vuestic-widget headerText="Trykes" style="margin-bottom:5px" />
        <table class="table table-striped first-td-padding">
            <thead>
                <tr>
                <td>Order Num</td>
                <td>Model</td>
                <td>Date of Application</td>
                <td>Date Awarded</td>
                <td>Funded By</td>

                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in trykes" :key="item.id" @click="displayModal(item,index,2)">
                    <td>{{item.orderNumber}}</td>
                    <td>{{item.model}}</td>
                    <td>{{item.dateReceived}}</td>
                    <td>{{item.dateAwarded}}</td>
                    <td>{{item.fundedBy}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import TrykeModal from './TrykeModal'
import swal from 'sweetalert'

export default {
  name: 'EditTrykeTable',
  props: ['awardeeId', 'IsDisabled'],
  data () {
    return {
      URL: '',
      showModal: false,
      displayMode: '',
      editId: 0,
      tryke: {},
      trykes: [],
      trykeModalTitle: '',
      modalTitle: '',
    }
  },
  computed: {
    IsTrykePrimary () {
      return this.tryke.IsPrimary ? 'true' : 'false'
    },
    orderedByPrimaryTrykes: function () {
      // return this.trykes
      /*eslint-disable */
      //suppress all warnings between comments
      return this.trykes.sort((a, b) => (a.IsPrimary < b.IsPrimary) ? 1 : ((b.IsPrimary < a.IsPrimary) ? -1 : 0)) // eslint-disable-line no-use-before-define
       /* eslint-enable */
    }
  },
  methods: {
    // Emitter - On TrykeModal Close Hide Modal
    hideModal (bool) {
      this.showModal = false
    },
    // Emitter - Add Contact To Contacts Array
    addDataToTrykesArray (tryke) {
      try {
        tryke.awardeeId = this.awardeeId
        fetch(`${this.URL}/tryke`, {
          method: 'POST',
          body: JSON.stringify(tryke)
        }).then(response => response.json())
          .then(json => {
            this.trykes.push(Object.assign({}, json.Attributes))
            this.showModal = false
            this.$emit('updateTrykesInAwardee', this.trykes)
            swal('Added', 'The Tryke has been added.', 'success')
          })
      } catch (e) {
        swal('Error', 'There was an error adding that tryke, please try again.', 'error')
      }
    },
    // Emitter - Update Contact In Contacts Array
    updateTrykeItem (tryke) {
      try {
        fetch(`${this.URL}/tryke/${tryke.trykeId}`, {
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
          method: 'PATCH',
          body: JSON.stringify(tryke)
        }).then(response => response.json())
          .then(json => {
            this.$set(this.trykes, this.editId, Object.assign({}, json.Attributes))
            this.showModal = false
            this.$emit('updateTrykesInAwardee', this.trykes)
          }).then(swal('Updated', 'The Tryke has been updated.', 'success'))
      } catch (e) {
        swal('Error', 'An error occurred please try again.', 'error')
      }
    },
    // Emitter - Delete Contact From Contacts Array
    deleteTrykeRow (editId) {
      swal({
        title: 'Are you sure you want to delete this tryke?',
        text: 'Once deleted, you will not be able to recover this file.',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      })
        .then((willDelete) => {
          if (willDelete) {
            try {
              fetch(`${this.URL}/tryke/${this.tryke.trykeId}`, {
                method: 'DELETE',
              }).then(swal('Deleted', 'The tryke has been deleted.', 'success'))
              this.trykes.splice(editId, 1)
              this.showModal = false
              this.$emit('updateTrykesInAwardee', this.trykes)
            } catch (e) {
              swal('Error', "I'm sorry there was an issue trying to delete that tryke,please try again later.", 'error')
            }
          } else {
            swal('Cancelled', 'You have chosen not to delete the tryke.', 'warning')
          }
        })
    },
    // Pop Modal Open And Set Props {For Add Contact}
    addNewTrykeRow () {
      this.displayMode = 'ADD'
      this.modalTitle = 'Add Tryke'
      this.showModal = true
    },
    // Pop Modal Open And Set Props {For Edit Contact}
    displayModal (tryke, index) {
      this.tryke = tryke
      this.editId = index
      this.displayMode = 'EDIT'
      this.modalTitle = 'Edit Tryke'
      this.showModal = true
    },
  },
  created () {
    this.URL = this.API_URL
    fetch(`${this.URL}/awardee/${this.awardeeId}/trykes`)
      .then(response => response.json())
      .then(json => {
        this.trykes = json.Items
      })
  },
  components: {
    TrykeModal
  }
}
</script>
