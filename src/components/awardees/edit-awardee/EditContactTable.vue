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
        :editId="editId"
        :IsDisabled="IsDisabled"/>

        <button v-if="IsDisabled" style="float:right;margin:10px;width:30%" class="btn btn-primary btn-micro" @click="addNewContactRow()">
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
import swal from 'sweetalert'

export default {
  name: 'AddContactTable',
  props: ['awardeeId', 'IsDisabled'],
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
    orderedByPrimaryContacts: function () {
      // return this.contacts
      /*eslint-disable */
      //suppress all warnings between comments
      return this.contacts.sort((a, b) => (a.IsPrimary < b.IsPrimary) ? 1 : ((b.IsPrimary < a.IsPrimary) ? -1 : 0)) // eslint-disable-line no-use-before-define
      /* eslint-enable */
    },
  },
  methods: {
    // Emitter - On ContactModal Close Hide Modal
    hideModal (bool) {
      this.showModal = false
    },
    // Emitter - Add Contact To Contacts Array
    addDataToContactsArray (contact) {
      try {
        contact.awardeeId = this.awardeeId
        fetch(`${this.URL}/Test/contact`, {
          method: 'POST',
          body: JSON.stringify(contact)
        }).then(response => response.json())
          .then(json => {
            this.contacts.push(Object.assign({}, json.Attributes))
            this.showModal = false
            this.$emit('updateContactsInAwardee', this.contacts)
            swal('Added', 'The contact has been added.', 'success')
          })
      } catch (e) {
        swal('Error', 'There was an error adding that contact, please try again.', 'error')
      }
    },
    // Emitter - Update Contact In Contacts Array
    updateContactItem (contact) {
      try {
        fetch(`${this.URL}/Test/contact/${contact.contactId}`, {
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
          method: 'PATCH',
          body: JSON.stringify(contact)
        }).then(response => response.json())
          .then(json => {
            this.$set(this.contacts, this.editId, Object.assign({}, json.Attributes))
            this.showModal = false
            this.$emit('updateContactsInAwardee', this.contacts)
          }).then(swal('Updated', 'The contact has been updated.', 'success'))
      } catch (e) {
        swal('Error', 'An error occurred please try again.', 'error')
      }
    },
    // Emitter - Delete Contact From Contacts Array
    deleteContactRow (editId) {
      swal({
        title: 'Are you sure you want to delete this contact?',
        text: 'Once deleted, you will not be able to recover this file.',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      })
        .then((willDelete) => {
          if (willDelete) {
            try {
              fetch(`${this.URL}/Test/contact/${this.contact.contactId}`, {
                method: 'DELETE',
              }).then(() => {
                this.contacts.splice(editId, 1)
                this.showModal = false
                this.$emit('updateContactsInAwardee', this.contacts)
              }).then(swal('Deleted', 'The contact has been deleted.', 'success'))
            } catch (e) {
              swal('Error', "I'm sorry there was an issue trying to delete that contact,please try again later.", 'error')
            }
          } else {
            swal('Cancelled', 'You have chosen not to delete the contact.', 'warning')
          }
        })
    },
    // Pop Modal Open And Set Props {For Add Contact}
    addNewContactRow () {
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
  created () {
    this.URL = this.API_URL
    fetch(`${this.URL}/Test/awardee/${this.awardeeId}/contacts`)
      .then(response => response.json())
      .then(json => {
        this.contacts = json.Items
      })
  },
  components: {
    ContactModal
  }

}
</script>
