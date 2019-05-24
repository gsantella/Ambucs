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
      title="Add/Edit Contact"
      >
      <div>
          <form>
            <fieldset>
              <div class="form-group">
                <!-- First Name -->
                <div class="input-group">
                  <input id="simple-input" v-model="contact.firstName" required/>
                  <label class="control-label" for="simple-input">First Name</label><i class="bar"></i>
                </div>

                <!-- Last Name -->
                <div class="input-group">
                  <input id="simple-input" v-model="contact.lastName" required/>
                  <label class="control-label" for="simple-input">Last Name</label><i class="bar"></i>
                </div>
              </div>
              <div class="form-group">
                <!-- Email -->
                <div class="input-group">
                  <input id="simple-input" v-model="contact.email" required/>
                  <label class="control-label" for="simple-input">Email</label><i class="bar"></i>
                </div>
              </div>
              <div class="form-group">
                <!-- Phone 1 -->
                <div class="input-group">
                  <input id="simple-input" v-model="contact.phone1" required/>
                  <label class="control-label" for="simple-input">Phone 1</label><i class="bar"></i>
                </div>

                <!-- Phone 2 -->
                <div class="input-group">
                  <input id="simple-input" v-model="contact.phone2" required/>
                  <label class="control-label" for="simple-input">Phone 2</label><i class="bar"></i>
                </div>
              </div>
              <div class="form-group">
                <!-- Type -->
                <div class="input-group">
                  <input id="simple-input" v-model="contact.contactType" required/>
                  <label class="control-label" for="simple-input">Type</label><i class="bar"></i>
                </div>
              </div>
              <div class="form-group">
                <!-- Street 1 -->
                <div class="input-group">
                  <input id="simple-input" v-model="contact.address1" required/>
                  <label class="control-label" for="simple-input">Address 1</label><i class="bar"></i>
                </div>
                <!-- Street 2-->
                <div class="input-group">
                  <input id="simple-input" v-model="contact.address2" required/>
                  <label class="control-label" for="simple-input">Address 2</label><i class="bar"></i>
                </div>
                <!-- City -->
                <div class="input-group">
                  <input id="simple-input" v-model="contact.addressCity" required/>
                  <label class="control-label" for="simple-input">City</label><i class="bar"></i>
                </div>

              </div>

              <div class="form-group">
                <!-- State -->
                <div class="input-group">
                  <input id="simple-input" v-model="contact.addressState" required/>
                  <label class="control-label" for="simple-input">State</label><i class="bar"></i>
                </div>
                <!-- Zip -->
                <div class="input-group">
                  <input id="simple-input" v-model="contact.addressZip" required/>
                  <label class="control-label" for="simple-input">Zip Code</label><i class="bar"></i>
                </div>
              </div>

              <div class="form-group">
                <!-- Notes -->
                <div class="input-group">
                  <input id="simple-input" v-model="contact.notes" required/>
                  <label class="control-label" for="simple-input">Notes</label><i class="bar"></i>
                </div>
              </div>

              <div class="form-group">
                <!-- Make Is Primary -->
                <div class="flex md6">
                    <vuestic-checkbox
                      :label="$t('Set Primary Contact')"
                      v-model="contact.IsPrimary"
                    />
                </div>
              </div>

            </fieldset>
          </form>
      </div>
      </b-modal>
    </div>
</template>

<script>
export default {
  name: 'ContactModal',
  props: ['modalTitle', 'displayMode', 'editContact', 'editId'],
  data () {
    return {
      URL: '',
      show: true,
      showModal: false,
      contactModalTitle: '',
      contact: {
        awardeeId: '',
        firstName: '',
        lastName: '',
        email: '',
        phone1: '',
        phone2: '',
        address1: '',
        address2: '',
        addressCity: '',
        addressState: '',
        addressZip: '',
        notes: '',
        contactType: '',
        IsPrimary: false
      },
    }
  },
  methods: {
    addUpdate () {
      this.displayMode === 'ADD' ? this.addContactToArray() : this.updateContactItem()
    },
    cancelRemove () {
      this.displayMode === 'ADD' ? this.handleCloseModal() : this.deleteContactRow()
    },
    handleCloseModal () {
      this.$emit('handleCloseModal', true)
    },
    // Add a new this.contact object into this.awardee.contacts array
    addContactToArray () {
      this.showModal = false
      this.$emit('sendContactData', this.contact)
    },
    // Add a new this.contact object into this.awardee.contacts array
    updateContactItem () {
      this.showModal = false
      this.$emit('updateContactItem', this.contact)
    },
    // Delete Contact by Edit Id
    deleteContactRow () {
      this.showModal = false
      this.$emit('deleteContactRow', this.editId)
    }
  },
  created () {
    this.URL = this.API_URL
    setTimeout(() => {
      this.showModal = true

      if (this.displayMode === 'EDIT') {
        this.contact.firstName = this.editContact.firstName
        this.contact.lastName = this.editContact.lastName
        this.contact.email = this.editContact.email
        this.contact.phone1 = this.editContact.phone1
        this.contact.phone2 = this.editContact.phone2
        this.contact.contactType = this.editContact.contactType
        this.contact.addressCity = this.editContact.addressCity
        this.contact.addressState = this.editContact.addressState
        this.contact.address1 = this.editContact.address1
        this.contact.address2 = this.editContact.address2
        this.contact.addressZip = this.editContact.addressZip
        this.contact.notes = this.editContact.notes
        this.contact.IsPrimary = this.editContact.IsPrimary
      }
    }, 100)
  }
}
</script>
