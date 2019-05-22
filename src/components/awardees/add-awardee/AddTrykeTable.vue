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
        :editId="editId" />

        <button style="float:right;margin:10px;width:30%" class="btn btn-primary btn-micro" @click="addNewTrykeRow()">
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

export default {
  name: 'AddTrykeTable',
  data () {
    return {
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
  },
  methods: {
    // Emitter - On TrykeModal Close Hide Modal
    hideModal (bool) {
      this.showModal = false
    },
    // Emitter - Add Contact To Contacts Array
    addDataToTrykesArray (tryke) {
      this.trykes.push(Object.assign({}, tryke))
      this.$emit('addTrykesToAwardee', this.trykes)
      this.showModal = false
    },
    // Emitter - Update Contact In Contacts Array
    updateTrykeItem (tryke) {
      this.$set(this.trykes, this.editId, Object.assign({}, tryke))
      this.$emit('addTrykesToAwardee', this.trykes)
      this.showModal = false
    },
    // Emitter - Delete Contact From Contacts Array
    deleteTrykeRow (editId) {
      this.trykes.splice(editId, 1)
      this.showModal = false
    },
    // Pop Modal Open And Set Props {For Add Contact}
    addNewTrykeRow () {
      for (var key in this.tryke) { this.tryke[key] = '' }

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
  components: {
    TrykeModal
  }
}
</script>
