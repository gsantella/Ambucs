<template>
    <div>
        <UploadsModal v-if="showModal"
        @handleCloseModal="hideModal"
        @sendDocumentData="addDataToDocumentsArray"
        @updateDocumentItem="updateDocumentItem"
        @deleteDocumentRow="deleteDocumentRow"
        :modalTitle="modalTitle"
        :displayMode="displayMode"
        :editDocument="document"
        :editId="editId"
        :IsDisabled="IsDisabled"
        :awardeeId="awardeeId"/>

        <button style="float:right;margin:10px;width:30%" class="btn btn-primary btn-micro" @click="addNewDocumentRow()">
            {{'Add' | translate}}
        </button>
        <vuestic-widget headerText="Documents" style="margin-bottom:5px" />
        <table class="table table-striped first-td-padding">
            <thead>
                <tr>
                  <td>Notes</td>
                  <td>Url</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in documents" :key="item.documentId" @click="displayModal(item,index,3)">
                <td>{{ item.notes }}</td>
                <td>{{ item.url }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import UploadsModal from './UploadsModal'
import swal from 'sweetalert'
export default {
  name: 'AddUploadTable',
  props: ['IsDisabled'],
  data () {
    return {
      awardeeId: '',
      URL: '',
      showModal: false,
      displayMode: '',
      modalTitle: '',
      editId: 0,
      documents: [],
      document: {},
    }
  },
  methods: {
    // Emitter - On DocumentModal Close Hide Modal
    hideModal (bool) {
      this.showModal = false
    },
    // Emitter - Add Document To Documents Array
    addDataToDocumentsArray (document) {
      try {
        fetch(`${this.URL}/document`, {
          method: 'POST',
          body: JSON.stringify(document)
        }).then(swal('Added', 'The document has been added.', 'success'))
          .then(response => response.json())
          .then(json => {
            this.documents.push(Object.assign({}, json.Attributes))
            this.$emit('updateDocumentsInAwardee', this.documents)
            this.showModal = false
          })
      } catch (e) {
        swal('Error', 'There was an error adding that document, please try again.', 'error')
      }
    },
    // Emitter - Update Document In Documents Array
    updateDocumentItem (document) {
      fetch(`${this.URL}/document/${document.documentId}`, {
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        method: 'PATCH',
        body: JSON.stringify(document.notes)
      }).then(swal('Update', 'The document has been updated.', 'success'))
        .then(() => {
          this.$set(this.documents, this.editId, Object.assign({}, document))
          this.$emit('updateDocumentsInAwardee', this.documents)
          this.showModal = false
        })
    },
    // Emitter - Delete Document From Documents Array
    deleteDocumentRow (editId) {
      fetch(`${this.URL}/document/${this.document.documentId}`, {
        method: 'DELETE',
      }).then(swal('Deleted', 'The document has been deleted.', 'success'))
        .then(() => {
          this.documents.splice(this.editId, 1)
          this.showModal = false
          this.$emit('updateDocumentsInAwardee', this.documents)
        })
    },
    // Pop Modal Open And Set Props {For Add Document}
    addNewDocumentRow () {
      for (var key in this.document) { this.document[key] = '' }

      this.displayMode = 'ADD'
      this.modalTitle = 'Add Document'
      this.showModal = true
    },
    // Pop Modal Open And Set Props {For Edit Document}
    displayModal (document, index) {
      this.document = document
      this.editId = index
      this.displayMode = 'EDIT'
      this.modalTitle = 'Edit Document'
      this.showModal = true
    },
  },
  created () {
    this.URL = this.API_URL
  },
  components: {
    UploadsModal
  }
}
</script>
