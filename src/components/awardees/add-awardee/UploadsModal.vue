<template>
    <div>
        <b-modal
        @hide="handleCloseModal()"
        ok-title="Add/Save"
        cancel-title="Cancel/Delete"
        @ok="addUpdate()"
        @cancel="cancelRemove()"
        v-model="showModal"
        size="xl"
        title="Add/Edit Document"
        >
        <div class="form-group">

          <!-- Notes -->
          <div  class="input-group">
            <input id="simple-input" v-model="document.notes" required/>
            <label class="control-label" for="simple-input">Notes</label><i class="bar"></i>
          </div>
        </div>

        <div class="hello" id="imageDiv">
          <div v-if="!image">
            <h2>Select an image</h2>
            <input type="file" @change="onFileChange">
          </div>
          <div v-else>
            <img :src="image" style="width: 100%" />
            <button class="btn btn-primary btn-micro" v-if="!uploadURL" @click="removeImage">Remove image</button>
            <button class="btn btn-primary btn-micro" v-if="!uploadURL" @click="uploadImage">Upload image</button>
          </div>
          <h2 v-if="uploadURL">Success! Image uploaded to:</h2>
          <a :href="uploadURL">{{ uploadURL }}</a>
        </div>

        <div class="form-group">

          <div class="input-group">
            <a id="imageLink" v-bind:href="document.url" target="_blank" style="display:none;color:black">{{document.url}}</a>
            <label class="control-label" for="imageLink">Link</label><i class="bar"></i>
          </div>

        </div>

          <div class="row"  style="margin-top:10px">
            <div class="col-md-3">
              <button id="btnUpdate" style="display:none" class="btn btn-primary btn-micro" @click="updateDocumentItem">Update</button>
            </div>
            <div class="col-md-3">
              <button id="btnDelete" style="display:none" class="btn btn-danger btn-micro" @click="deleteDocumentRow">Delete</button>
            </div>
          </div>

      </b-modal>
    </div>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'
const MAX_IMAGE_SIZE = 5000000

export default {
  name: 'DocumentModal',
  props: ['modalTitle', 'displayMode', 'editDocument', 'editId'],
  data () {
    return {
      show: true,
      showModal: false,
      documentModalTitle: '',
      document: {
        awardeeId: '',
        documentId: '',
        url: '',
        notes: ''
      },
      image: '',
      uploadURL: ''
    }
  },
  methods: {
    addUpdate () {
      this.displayMode === 'ADD' ? this.addDocumentToArray() : this.updateDocumentItem()
    },
    cancelRemove () {
      this.displayMode === 'ADD' ? this.handleCloseModal() : this.deleteDocumentRow()
    },
    handleCloseModal () {
      this.$emit('handleCloseModal', true)
    },
    // Add a new this.contact object into this.awardee.contacts array
    addDocumentToArray () {
      this.showModal = false
      this.$emit('sendDocumentData', this.document)
    },
    // Add a new this.contact object into this.awardee.contacts array
    updateDocumentItem () {
      fetch(`${URL}/Test/document/${this.document.documentId}`, {
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        method: 'PATCH',
        body: JSON.stringify(this.document.notes)
      })
      this.showModal = false
      this.$emit('updateDocumentItem', this.document)
    },
    // Delete Contact by Edit Id
    deleteDocumentRow () {
      fetch(`${URL}/Test/document/${this.document.documentId}`, {
        method: 'DELETE',
      })
      this.showModal = false
      this.$emit('deleteContactRow', this.editId)
    },
    onFileChange (e) {
      let files = e.target.files || e.dataTransfer.files
      if (!files.length) return
      this.createImage(files[0])
    },
    createImage (file) {
      // var image = new Image()
      let reader = new FileReader()
      reader.onload = (e) => {
        if (!e.target.result.includes('data:image/jpeg') && !e.target.result.includes('application/pdf')) {
          return alert('Wrong file type - JPG or PDF only.')
        }
        if (e.target.result.length > MAX_IMAGE_SIZE) {
          return alert('Image is loo large - 5MB maximum')
        }
        this.image = e.target.result
      }
      reader.readAsDataURL(file)
    },
    removeImage: function (e) {
      this.image = ''
    },
    uploadImage: async function (e) {
      // Get the presigned URL
      const response = await axios({
        method: 'GET',
        url: 'https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/Test/awardee/' + this.$route.params.id + '/upload'
      })
      let binary = atob(this.image.split(',')[1])
      let array = []
      for (var i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i))
      }
      let blobData = new Blob([new Uint8Array(array)], { type: 'image/jpeg' })
      let data = JSON.parse(response.data.body)
      await fetch(data.uploadURL, {
        method: 'PUT',
        body: blobData
      })
      // Final URL for the user doesn't need the query string params
      this.uploadURL = data.uploadURL.split('?')[0]
      this.document.awardeeId = this.awardee.id
      this.document.url = this.uploadURL

      try {
        fetch('https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/Test/document', {
          method: 'POST',
          body: JSON.stringify(this.document)
        }).then(swal('Added', 'The document has been added.', 'success'))
          .then(response => response.json())
          .then(json => {
            this.documents.push(Object.assign({}, json.Attributes))
          })
        this.$refs.largeModal.cancel()
      } catch (e) {
        swal('Error', 'There was an error adding that document, please try again.', 'error')
      }
    },
    clear (field) {
      this[field] = ''
    },
  },
  created () {
    setTimeout(() => {
      this.showModal = true

      if (this.displayMode === 'EDIT') {
        this.document.awardeeId = this.editContact.awardeeId
        this.document.documentId = this.editdocument.documentId
        this.document.url = this.editdocument.url
        this.document.notes = this.editdocument.notes
      }
    }, 100)
  }
}
</script>
