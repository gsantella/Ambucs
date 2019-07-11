<template>
    <div>
        <b-modal
        @hide="handleCloseModal()"
        ok-title="Save"
        cancel-title="Delete"
        @ok="addUpdate()"
        @cancel="cancelRemove()"
        v-model="showModal"
        size="xl"
        title="Add/Edit Document"
        >

        <div class="form-group">
          <!-- Notes -->
          <div class="input-group">
            <input id="simple-input" v-model="document.notes" required/>
            <label class="control-label" for="simple-input">Notes</label><i class="bar"></i>
          </div>
        </div>
        <div v-if="document !== ''">
          <a target="blank" :href="document.url" style="color:black">{{document.url}}</a>
        </div>
        <div class="hello" id="imageDiv" v-if="document.url === ''">
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

      </b-modal>

    </div>
</template>

<script>
import { Auth } from 'aws-amplify'

export default {
  name: 'DocumentModal',
  props: ['modalTitle', 'displayMode', 'editDocument', 'editId', 'IsDisabled', 'awardeeId'],
  data () {
    return {
      URL: '',
      TOKEN: '',
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
    addDocumentToArray () {
      this.showModal = false
      this.$emit('sendDocumentData', this.document)
    },
    updateDocumentItem () {
      this.showModal = false
      this.$emit('updateDocumentItem', this.document)
    },
    deleteDocumentRow () {
      this.showModal = false
      this.$emit('deleteDocumentRow', this.editId)
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
        /*
        if (!e.target.result.includes('data:image/jpeg') && !e.target.result.includes('application/pdf')) {
          return alert('Wrong file type - JPG or PDF only.')
        }
        if (e.target.result.length > MAX_IMAGE_SIZE) {
          return alert('Image is loo large - 5MB maximum')
        } */
        this.image = e.target.result
      }
      reader.readAsDataURL(file)
    },
    removeImage: function (e) {
      this.image = ''
    },
    uploadImage: async function (e) {
      // Get the presigned URL
      /* const response = await axios({
        method: 'GET',
        url: `${this.URL}/awardee/${this.awardeeId}/upload`
      })
      let binary = atob(this.image.split(',')[1])
      let array = []
      for (var i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i))
      }
      let blobData = new Blob([new Uint8Array(array)], { type: 'image/jpeg' })
      let data = JSON.parse(response.data.body)
      await fetch(data.uploadURL, {
        headers: new Headers({
          'Authorization': `Bearer ${this.TOKEN}`,
        }),
        method: 'PUT',
        body: blobData
      })
      // Final URL for the user doesn't need the query string params
      this.uploadURL = data.uploadURL.split('?')[0]
      this.document.awardeeId = this.awardeeId
      this.document.url = this.uploadURL */
    },
    clear (field) {
      this[field] = ''
    },
  },
  async created () {
    this.URL = this.API_URL
    this.TOKEN = (await Auth.currentSession()).idToken.jwtToken
    setTimeout(() => {
      this.showModal = true

      if (this.displayMode === 'EDIT') {
        this.document.awardeeId = this.editDocument.awardeeId
        this.document.documentId = this.editDocument.documentId
        this.document.url = this.editDocument.url
        this.document.notes = this.editDocument.notes
      } else {
        this.document.awardeeId = ''
        this.document.documentId = ''
        this.document.url = ''
        this.document.notes = ''
      }
    }, 100)
  }
}
</script>
