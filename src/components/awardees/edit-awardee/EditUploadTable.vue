<template>
    <div>
        <UploadsModal v-if="showModal"
        @handleCloseModal="hideModal"
        @sendDocumentData="addDataToDocumentsArray"
        @updateDocumentsItem="updateDocumentItem"
        @deleteDocumentsRow="deleteDocumentRow"
        :modalTitle="modalTitle"
        :displayMode="displayMode"
        :editDocuments="document"
        :editId="editId" />

        <button style="float:right;margin:10px;width:30%" class="btn btn-primary btn-micro" @click="addNewDocumentRow()">
            {{'Add' | translate}}
        </button>
        <vuestic-widget headerText="Documents" style="margin-bottom:5px" />
        <table class="table table-striped first-td-padding">
            <thead>
                <tr>
                <td>Description</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in documents" :key="item.documentId" @click="displayModal(item,index,3)">
                <td>{{ item.notes }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import UploadsModal from './UploadsModal'
export default {
  name: 'AddUploadTable',
  data () {
    return {
      URL: 'https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com',
      showModal: false,
      displayMode: '',
      documentModalTitle: '',
      modalTitle: '',
      editId: 0,
      documents: [],
      document: {},
    }
  },
  methods: {
    // Emitter - On ContactModal Close Hide Modal
    hideModal (bool) {
      this.showModal = false
    },
    // Emitter - Add Contact To Contacts Array
    addDataToDocumentsArray (document) {
      this.documents.push(Object.assign({}, document))
      this.$emit('addDocumentsToAwardee', this.documents)
      this.showModal = false
    },
    // Emitter - Update Contact In Contacts Array
    updateDocumentItem (document) {
      this.$set(this.documents, this.editId, Object.assign({}, document))
      this.$emit('addDocumentsToAwardee', this.documents)
      this.showModal = false
    },
    // Emitter - Delete Contact From Contacts Array
    deleteDocumentRow (editId) {
      this.documents.splice(this.editId, 1)
      this.showModal = false
    },
    // Pop Modal Open And Set Props {For Add Contact}
    addNewDocumentRow () {
      for (var key in this.document) { this.document[key] = '' }

      this.displayMode = 'ADD'
      this.modalTitle = 'Add Document'
      this.showModal = true
    },
    // Pop Modal Open And Set Props {For Edit Contact}
    displayModal (document, index) {
      this.document = document
      this.editId = index
      this.displayMode = 'EDIT'
      this.modalTitle = 'Edit Document'
      this.showModal = true
    },
  },
  components: {
    UploadsModal
  }
}
</script>
