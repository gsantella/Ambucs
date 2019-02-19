<template>
  <div class="form-elements">
    <div class="va-row">

<!-- START OF MAIN FORM -->

      <div class="flex md6">
        <vuestic-widget :headerText="'Edit Awardee' | translate">
          <form>
                <fieldset>
                  <div class="form-group">

                    <!-- First Name -->
                    <div class="input-group">
                      <input id="simple-input" v-model="awardee.firstName" required/>
                      <label class="control-label" for="simple-input">First Name</label><i class="bar"></i>
                    </div>
                    <!-- Took this out :disable was making input box display weird
                    <div class="input-group">
                      <input :disabled="true" id="simple-input" v-model="awardee.firstName" required />
                      <label class="control-label" for="simple-input">First Name</label><i class="bar"></i>
                    </div>
                    -->

                    <!-- Last Name -->
                    <div class="input-group">
                      <input id="simple-input" v-model="awardee.lastName" required/>
                      <label class="control-label" for="simple-input">Last Name</label><i class="bar"></i>
                    </div>
                  </div>

                  <div class="form-group">

                    <!-- Phone Number -->
                    <div class="input-group">
                      <input id="simple-input" v-model="awardee.phone" required/>
                      <label class="control-label" for="simple-textarea">Phone Number</label><i class="bar"></i>
                    </div>

                    <!-- Birth Date -->
                    <div class="input-group">
                      <vuestic-date-picker
                        id="date-picker-custom-date-format"
                        :config="{altInput: true, altFormat: 'F j, Y'}"
                        v-model="awardee.dateOfBirth"
                      />
                      <label class="control-label" for="date-picker-custom-date-format">
                        Birth Date
                      </label>
                      <i class="bar"></i>

                    </div>

                    <!-- Last Contacted -->
                    <div class="input-group">
                      <vuestic-date-picker
                        id="date-picker-custom-date-format"
                        :config="{altInput: true, altFormat: 'F j, Y'}"
                        v-model="awardee.lastContacted"
                      />
                      <label class="control-label" for="date-picker-custom-date-format">
                        Last Contacted
                      </label>
                      <i class="bar"></i>

                    </div>

                  </div>

                  <div class="form-group with-icon-left">
                    <!-- Street 1 -->
                    <div class="input-group">
                      <input id="simple-input" v-model="awardee.address1" required/>
                      <label class="control-label" for="simple-input">Address 1</label><i class="bar"></i>
                    </div>
                  </div>

                  <div class="form-group with-icon-left">
                    <!-- Street 2 -->
                    <div class="input-group">
                      <input id="simple-input" v-model="awardee.address2" required/>
                      <label class="control-label" for="simple-input">Address 2</label><i class="bar"></i>
                    </div>
                  </div>

                  <div class="form-group with-icon-right">

                    <!-- City -->
                    <div class="input-group">
                      <input id="simple-input" v-model="awardee.city" required/>
                      <label class="control-label" for="simple-input">City</label><i class="bar"></i>
                    </div>
                    <!-- State -->
                    <div class="input-group">
                      <input id="simple-input" v-model="awardee.state" required/>
                      <label class="control-label" for="simple-input">State</label><i class="bar"></i>
                    </div>
                    <!-- Zip -->
                    <div class="input-group">
                      <input id="simple-input" v-model="awardee.zip" required/>
                      <label class="control-label" for="simple-input">Zipcode</label><i class="bar"></i>
                    </div>

                  </div>

                   <!-- Notes -->
                  <div class="form-group">
                    <div class="input-group">
                      <textarea type="text" id="simple-textarea" v-model="awardee.notes"
                                required></textarea>
                      <label class="control-label" for="simple-textarea">Notes</label><i class="bar"></i>
                    </div>
                  </div>

                </fieldset>

          </form>
        </vuestic-widget>

<!-- END OF MAIN FORM -->

      </div>

<!-- START OF TABLES RIGHT SIDE -->

    <div class="flex md6">

<!-- CONTACTS TABLE -->

      <button style="float:right;margin:10px;width:30%" class="btn btn-primary btn-micro" @click="addNewContactRecord()">
        {{'Add' | translate}}
      </button>
      <vuestic-widget headerText="Contacts" style="margin-bottom:5px" />
      <table class="table table-striped first-td-padding">
          <thead>
            <tr>
              <td class="filters-page__table-heading">Type</td>
              <td class="filters-page__table-heading">First Name</td>
              <td class="filters-page__table-heading">Last Name</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in awardee.contacts" :key="item.id" @click="displayModal(item,index,1)">
              <td>{{ item.firstName }}</td>
              <td>{{ item.lastName }}</td>
              <td>{{ item.type }}</td>
            </tr>
          </tbody>
      </table>

<!-- END OF CONTACTS TABLE -->

      <br style="margin-bottom:2%"/>

<!-- START OF TRYKES TABLE -->

      <button style="float:right;margin:10px;width:30%" class="btn btn-primary btn-micro" @click="addNewTrykeRecord()">
        {{'Add' | translate}}
      </button>
      <vuestic-widget headerText="Trykes" style="margin-bottom:5px" />
      <table class="table table-striped first-td-padding">
          <thead>
            <tr>
              <td class="filters-page__table-heading">Model</td>
              <td class="filters-page__table-heading">Date Awarded</td>
              <td class="filters-page__table-heading">Funded By</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in awardee.trykes" :key="item.id" @click="displayModal(item,index,2)">
              <td>{{ item.model }}</td>
              <td>{{ item.dateAwarded }}</td>
              <td>{{ item.fundedBy }}</td>
            </tr>
          </tbody>
      </table>

    </div>

<!-- END OF TRYKES TABLE -->

<!-- END OF TABLES RIGHT SIDE -->

<!-- START OF CANCEL ADD BUTTONS -->

    <div class="va-row btn-margin-row">
      <div
        class="flex md3 justify--center">
        <button class="btn btn-primary" @click="updateRecord()" >
          {{'Save' | translate}}
        </button>
      </div>
      <div
        class="flex md3 justify--center">
        <button class="btn btn-danger" @click="deleteRecord()">
          {{'Delete' | translate}}
        </button>
      </div>
    </div>

<!-- END OF CANCEL ADD BUTTONS -->

<!-- START OF CONTACTS MODAL -->

      <vuestic-modal v-bind:noButtons="true"  :show.sync="show" v-bind:large="true" ref="largeModal"
          :okText="'modal.confirm' | translate"
          :cancelText="'modal.cancel' | translate">
      <div slot="title">{{ contactModalTitle | translate}}</div>
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
                  <input id="simple-input" v-model="contact.type" required/>
                  <label class="control-label" for="simple-input">Type</label><i class="bar"></i>
                </div>
              </div>
              <div class="form-group">
                <!-- Street -->
                <div class="input-group">
                  <input id="simple-input" v-model="contact.street" required/>
                  <label class="control-label" for="simple-input">Street</label><i class="bar"></i>
                </div>
                <!-- City -->
                <div class="input-group">
                  <input id="simple-input" v-model="contact.city" required/>
                  <label class="control-label" for="simple-input">City</label><i class="bar"></i>
                </div>

              </div>

              <div class="form-group">
                <!-- State -->
                <div class="input-group">
                  <input id="simple-input" v-model="contact.state" required/>
                  <label class="control-label" for="simple-input">State</label><i class="bar"></i>
                </div>
                <!-- Zip -->
                <div class="input-group">
                  <input id="simple-input" v-model="contact.zip" required/>
                  <label class="control-label" for="simple-input">Zip Code</label><i class="bar"></i>
                </div>
              </div>

            </fieldset>
          </form>
        <input v-if="displayMode=='ADD'" id="addContact" class="styleBtn" type="submit" value="Add" @click="addContactToAwardeeObject()" />

        <div class="va-row" v-if="displayMode=='EDIT'">
          <div class="flex md6">
            <input id="updateContact" class="styleBtn" type="submit" value="Save" @click="updateContactRecord()" />
          </div>
          <div class="flex md6">
            <input id="deleteContact" class="styleBtn" style="background-color:red" type="submit" value="Delete" @click="deleteContactRecord()" />
          </div>
        </div>

      </div>
    </vuestic-modal>

<!-- END OF CONTACTS MODAL -->

<!-- START OF TRYKES MODAL -->

      <vuestic-modal v-bind:noButtons="true" :show.sync="show" ref="mediumModal"
                   :okText="'modal.confirm' | translate"
                   :cancelText="'modal.cancel' | translate">
      <div slot="title">{{ trykeModalTitle | translate}}</div>
      <div>

        <div class="form-group">
          <!-- Model -->
          <div class="input-group">
            <input id="simple-input" v-model="tryke.model" required/>
            <label class="control-label" for="simple-input">Model</label><i class="bar"></i>
          </div>
        </div>

        <div class="form-group">
          <!-- Date Awarded -->
          <div class="input-group">
            <vuestic-date-picker
              id="date-picker-custom-date-format"
              :config="{altInput: true, altFormat: 'F j, Y'}"
              v-model="tryke.dateAwarded"
            />
            <label class="control-label" for="date-picker-custom-date-format">
              Date Awarded
            </label>
            <i class="bar"></i>
          </div>

          <!-- Date Recieved -->
          <div class="input-group">
            <vuestic-date-picker
              id="date-picker-custom-date-format"
              :config="{altInput: true, altFormat: 'F j, Y'}"
              v-model="tryke.dateReceived"
            />
            <label class="control-label" for="date-picker-custom-date-format">
              Date Recieved
            </label>
            <i class="bar"></i>
          </div>
        </div>

        <div class="form-group">
          <!-- Funded By -->
          <div class="input-group">
            <input id="simple-input" v-model="tryke.fundedBy" required/>
            <label class="control-label" for="simple-input">Funded By</label><i class="bar"></i>
          </div>

          <!-- Location Awarded -->
          <div class="input-group">
            <input id="simple-input" v-model="tryke.locationAwarded" required/>
            <label class="control-label" for="simple-input">Location Awarded</label><i class="bar"></i>
          </div>
        </div>

        <div class="form-group">
          <!-- Notes -->
          <div class="input-group">
            <input id="simple-input" v-model="tryke.notes" required/>
            <label class="control-label" for="simple-input">Notes</label><i class="bar"></i>
          </div>
        </div>

        <input v-if="displayMode=='ADD'" id="addTryke" class="styleBtn" type="submit" value="Add" @click="addTrykeToAwardeeObject()" />

        <div v-if="displayMode=='EDIT'" class="va-row">
          <div class="flex md6">
            <input id="updateTryke" class="styleBtn" type="submit" value="Update" @click="updateTrykeRecord()" />
          </div>
          <div class="flex md6">
            <input id="deleteTryke" class="styleBtn" style="background-color:red" type="submit" value="Delete" @click="deleteTrykeRecord()" />
          </div>
        </div>

      </div>
    </vuestic-modal>

<!-- END OF TRYKES MODAL -->

    </div>

  </div>
</template>

<script>
import router from '../../../router'
import swal from 'sweetalert'

export default {
  name: 'EditAwardee',

  /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

  computed: {

    datePickerDisabled: () => [date => !(date.getDate() % 5)],

    isSuccessfulEmailValid () {
      let isValid = false
      if (this.formFields.successfulEmail) {
        isValid = this.formFields.successfulEmail.validated && this.formFields.successfulEmail.valid
      }
      return isValid
    },

    awardeeCleaned () {
      let newObj = {}
      Object.keys(this.awardee).forEach((prop) => {
        if (this.awardee[prop] !== '') { newObj[prop] = this.awardee[prop] }
      })
      return newObj
      // return this.awardee;
    }

  },

  /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

  data () {
    return {
      editId: '',
      displayMode: '',
      trykeModalTitle: '',
      contactModalTitle: '',
      show: false,
      contact: {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        phone1: '',
        phone2: '',
        type: '',
        city: '',
        state: '',
        street: '',
        zip: ''
      },
      tryke: {
        id: '',
        model: '',
        dateAwarded: '',
        dateReceived: '',
        fundedBy: '',
        locationAwarded: '',
        notes: ''
      },
      awardee: {
        id: '',
        firstName: '',
        lastName: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
        dateOfBirth: '',
        lastContacted: '',
        notes: '',
        trykes: [],
        contacts: []
      }

    }
  },

  /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

  methods: {

    clear (field) {
      this[field] = ''
    },

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Check this.awardee | this.contact | this.tryke for nulls when adding/updating
    checkInputsForNulls (obj) {
      var isValid = false
      for (var key in obj) {
        if (key !== 'id') {
          if (obj[key] === null || obj[key] === '') {
            isValid = false
            break
          } else {
            isValid = true
          }
        }
      }
      return isValid
    },

    /// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Attemps to make a PATCH request to AWS sending up this.awardee to get updated
    updateRecord () {
      try {
        if (this.checkInputsForNulls(this.awardee)) {
          fetch('https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/Test/awardee/' + this.$route.params.id, {
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            method: 'PATCH',
            body: JSON.stringify(this.awardee)
          }).then(swal('Updated', 'The Awardee has been updated.', 'success'))

          router.push({ name: 'view-awardees' })
        } else {
          swal('Error', 'These fields cannot be empty.', 'error')
        }
      } catch (e) {
        swal('Error', 'There was an issue trying to update this record,please try again later.', 'error')
      }
    },

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Attemps to make a DELETE request to AWS sending up this.awardee to be deleted
    deleteRecord () {
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
              fetch('https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/Test/awardee/' + this.$route.params.id, {
                method: 'delete'
              }).then(swal('Deleted', 'The Awardee has been deleted.', 'success'))

              router.push({ name: 'view-awardees' })
            } catch (e) {
              swal('Error', "I'm sorry there was an issue trying to delete that record,please try again later.", 'error')
            }
          } else {
            swal('Cancelled', 'You have chosen not to delete the record.', 'warning')
          }
        })
    },

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Loop through this.contact object and reset all items to null string
    addNewContactRecord () {
      for (var key in this.contact) {
        this.contact[key] = ''
      }

      this.displayMode = 'ADD'
      this.contactModalTitle = 'Add Contact'
      this.$refs.largeModal.open()
    },

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Add a new this.contact object into this.awardee.contacts array
    addContactToAwardeeObject () {
      this.contact.id = this.awardee.id
      if (this.checkInputsForNulls(this.contact)) {
        try {
          fetch('https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/Test/awardee/contact', {
            method: 'post',
            body: JSON.stringify(this.contact)
          }).then(swal('Added', 'The contact has been added.', 'success'))
          this.awardee.contacts.push(Object.assign({}, this.contact))
          this.$refs.largeModal.cancel()
        } catch (e) {
          swal('Error', 'There was an error adding that contact, please try again.', 'error')
        }
      } else {
        swal('Error', 'These fields cannot be empty.', 'error')
      }
    },

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Find the item in this.awardee.contacts array by index and replace it with this.contact object
    updateContactRecord () {
      try {
        if (this.checkInputsForNulls(this.contact)) {
          // Send up this.contacts up to AWS overwrite to update object
          // update locally in array aswell
          swal('Updated', 'The contact has been updated.', 'success')
          this.$refs.largeModal.cancel()
        } else {
          swal('Error', 'These fields cannot be empty.', 'error')
        }
      } catch (e) {
        alert('')
        swal('Error', 'An error occurred please try again.', 'error')
      }
    },

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Find the object in this.awardees.contacts array by index and delete it
    deleteContactRecord () {
      var deleteObject = {
        'id': this.awardee.id,
        'index': this.editId
      }

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
              fetch('https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/Test/awardee/contact', {
                method: 'delete',
                body: JSON.stringify(deleteObject)
              }).then(swal('Deleted', 'The contact has been deleted.', 'success'))
              this.awardee.contacts.splice(this.editId, 1)
              this.$refs.largeModal.cancel()
            } catch (e) {
              swal('Error', "I'm sorry there was an issue trying to delete that contact,please try again later.", 'error')
            }
          } else {
            swal('Cancelled', 'You have chosen not to delete the contact.', 'warning')
          }
        })
    },

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Loop through this.tryke object and reset all items to null string
    addNewTrykeRecord () {
      for (var key in this.tryke) {
        this.tryke[key] = ''
      }
      this.displayMode = 'ADD'
      this.trykeModalTitle = 'Add Tryke'
      this.$refs.mediumModal.open()
    },

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Add a new this.trkye object into this.awardee.trykes array
    addTrykeToAwardeeObject () {
      this.tryke.id = this.awardee.id
      if (this.checkInputsForNulls(this.tryke)) {
        try {
          this.awardee.trykes.push(Object.assign({}, this.tryke))
          this.$refs.mediumModal.cancel()
        } catch (e) {
          swal('Error', 'There was an error adding that contact, please try again.', 'error')
        }
      } else {
        swal('Error', 'These fields cannot be empty.', 'error')
      }
    },

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Find the item in this.awardee.trykes array by index and replace it with this.tryke object
    updateTrykeRecord () {
      try {
        if (this.checkInputsForNulls(this.tryke)) {
          // Send this.trykes up to AWS to update
          // update locally in array aswell
          swal('Updated', 'The tryke has been updated.', 'success')
          this.$refs.mediumModal.cancel()
        } else {
          swal('Error', 'Please fill in all fields.', 'error')
        }
      } catch (e) {
        swal('Error', 'An error occurred please try again.', 'error')
      }
    },

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Find the object in this.awardees.trykes array by index and delete it
    deleteTrykeRecord () {
      var deleteObject = {
        'id': this.awardee.id,
        'index': this.editId
      }

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
              fetch('https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/Test/awardee/tryke', {
                method: 'delete',
                body: JSON.stringify(deleteObject)
              }).then(swal('Deleted', 'The tryke has been deleted.', 'success'))
              this.awardee.trykes.splice(this.editId, 1)
              this.$refs.mediumModal.cancel()
            } catch (e) {
              swal('Error', "I'm sorry there was an issue trying to delete that tryke,please try again later.", 'error')
            }
          } else {
            swal('Cancelled', 'You have chosen not to delete the tryke.', 'warning')
          }
        })
    },

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Depending on which id is sent it will open the Contacts MODAL or Trykes MODAL --> params - item = onClick item from Array, index = index where it was found in array id = 1 for Contact or 2 for Tryke
    displayModal (item, index, id) {
      this.displayMode = 'EDIT'
      this.editId = index
      if (id === 1) {
        this.contact.id = item.id
        this.contact.firstName = item.firstName
        this.contact.lastName = item.lastName
        this.contact.email = item.email
        this.contact.phone1 = item.phone1
        this.contact.phone2 = item.phone2
        this.contact.type = item.type
        this.contact.city = item.city
        this.contact.state = item.state
        this.contact.street = item.street
        this.contact.zip = item.zip
        this.contactModalTitle = 'Edit Contact'
        this.$refs.largeModal.open()
      } else {
        this.tryke.id = item.id
        this.tryke.model = item.model
        this.tryke.dateAwarded = item.dateAwarded
        this.tryke.dateReceived = item.dateReceived
        this.tryke.fundedBy = item.fundedBy
        this.tryke.locationAwarded = item.locationAwarded
        this.tryke.notes = item.notes
        this.trykeModalTitle = 'Edit Tryke'
        this.$refs.mediumModal.open()
      }
    }

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

  }, // end of methods sections

  /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

  created () {
    this.$nextTick(() => {
      this.$validator.validateAll()
    })
    // alert(this.$route.params.id)
    fetch('https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/Test/awardee/' + this.$route.params.id)
      .then(response => response.json())
      .then(json => {
        this.awardee = json.Item
      })
  },

  /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

  components: {
  }

}

</script>
