<template>
    <div>
        <ContactModal v-if="showModal"
        @handleCloseModal="hideModal"
        @sendContactData="addDataToContactsArray"
        @updateContactItem="updateContactItem"
        @deleteContactRow="deleteContactRow"
        :modalTitle="modalTitle"
        :displayMode="displayMode"
        :editContact="contact"
        :editId="editId" />

        <button style="float:right;margin:10px;width:30%" class="btn btn-primary btn-micro" @click="addNewContactRow()">
        {{'Add' | translate}}
        </button>
        <vuestic-widget headerText="Contacts" style="margin-bottom:5px" />
            <table class="table table-striped first-td-padding">
                <thead>
                    <tr>
                        <td>Type</td>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Phone Number</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in contacts" :key="item.id" style="cursor: pointer;" @click="displayModal(item,index)">
                        <td>{{item.contactType}}</td>
                        <td>{{item.firstName}}</td>
                        <td>{{item.lastName}}</td>
                        <td>{{item.phone1}}</td>
                    </tr>
                </tbody>
            </table>
    </div>
</template>

<script>
import ContactModal from './ContactModal'

export default {
  name: 'AddContactTable',
  data () {
    return {
      URL: '',
      showModal: false,
      displayMode: '',
      contactModalTitle: '',
      modalTitle: '',
      editId: 0,
      contact: {},
      contacts: [],
    }
  },
  computed: {
    IsContactPrimary () {
      return this.contact.IsPrimary ? 'true' : 'false'
    },
  },
  methods: {
    // Emitter - On ContactModal Close Hide Modal
    hideModal (bool) {
      this.showModal = false
    },
    // Emitter - Add Contact To Contacts Array
    addDataToContactsArray (contact) {
      this.contacts.push(Object.assign({}, contact))
      this.$emit('addContactsToAwardee', this.contacts)
      this.showModal = false
    },
    // Emitter - Update Contact In Contacts Array
    updateContactItem (contact) {
      this.$set(this.contacts, this.editId, Object.assign({}, contact))
      this.$emit('addContactsToAwardee', this.contacts)
      this.showModal = false
    },
    // Emitter - Delete Contact From Contacts Array
    deleteContactRow (editId) {
      this.contacts.splice(editId, 1)
      this.$emit('addContactsToAwardee', this.contacts)
      this.showModal = false
    },
    // Pop Modal Open And Set Props {For Add Contact}
    addNewContactRow () {
      for (var key in this.contact) { this.contact[key] = '' }

      this.displayMode = 'ADD'
      this.modalTitle = 'Add Contact'
      this.showModal = true
    },
    // Pop Modal Open And Set Props {For Edit Contact}
    displayModal (contact, index) {
      this.contact = contact
      this.editId = index
      this.displayMode = 'EDIT'
      this.modalTitle = 'Edit Contact'
      this.showModal = true
    }
  },
  mounted () {
    this.URL = this.API_URL
  },
  components: {
    ContactModal
  }

}
</script>
