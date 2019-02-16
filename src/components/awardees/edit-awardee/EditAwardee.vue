<template>
  <div class="form-elements">
    <div class="va-row">

<!-- START OF MAIN FORM -->

      <div class="flex md6">
        <vuestic-widget :headerText="'forms.inputs.title' | translate">
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
            <tr v-for="item in awardee.contacts" :key="item.id" @click="displayModal(item,1)">
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
            <tr v-for="item in awardee.trykes" :key="item.id" @click="displayModal(item,2)">
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
        <input id="addContact" class="styleBtn" type="submit" value="Add" @click="addContactToAwardeeObject()" />

        <div class="va-row">
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

        <input id="addTryke" class="styleBtn" type="submit" value="Add" @click="addTrykeToAwardeeObject()" />

        <div class="va-row">
          <div class="flex md6">
            <input id="updateTryke" class="styleBtn" style="display:none" type="submit" value="Update" @click="updateTrykeRecord()" />
          </div>
          <div class="flex md6">
            <input id="deleteTryke" class="styleBtn" style="display:none;background-color:red" type="submit" value="Delete" @click="deleteTrykeRecord()" />
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

// var url = 'https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/'

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

      trykeModalTitle: '',
      contactModalTitle: '',
      show: false,
      contact: {
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
        model: '',
        dateAwarded: '',
        dateReceived: '',
        fundedBy: '',
        locationAwarded: '',
        notes: ''
      },
      awardee: {
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

    checkInputsForNulls (obj) {
      var isValid = false
      for (var key in obj) {
        if (obj[key] === null || obj[key] === '') {
          isValid = false
          break
        } else {
          isValid = true
        }
      }
      return isValid
    },

    /// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    hideUpdateBtnContact () {
      var addBtn = document.getElementById('addContact')
      var updateBtn = document.getElementById('updateContact')
      var deleteContactBtn = document.getElementById('deleteContact')
      addBtn.style.display = 'block'
      updateBtn.style.display = 'none'
      deleteContactBtn.style.display = 'none'
    },

    /// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    hideUpdateBtnTryke () {
      var addBtnTryke = document.getElementById('addTryke')
      var updateBtnContact = document.getElementById('updateTryke')
      var deleteTrykeBtn = document.getElementById('deleteTryke')
      addBtnTryke.style.display = 'block'
      updateBtnContact.style.display = 'none'
      deleteTrykeBtn.style.display = 'none'
    },

    /// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    showUpdateBtnContact () {
      var addBtn = document.getElementById('addContact')
      var updateBtn = document.getElementById('updateContact')
      var deleteContactBtn = document.getElementById('deleteContact')
      addBtn.style.display = 'none'
      updateBtn.style.display = 'block'
      deleteContactBtn.style.display = 'block'
    },

    /// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    showUpdateBtnTryke () {
      var addBtnTryke = document.getElementById('addTryke')
      var updateBtnContact = document.getElementById('updateTryke')
      var deleteTrykeBtn = document.getElementById('deleteTryke')
      addBtnTryke.style.display = 'none'
      updateBtnContact.style.display = 'block'
      deleteTrykeBtn.style.display = 'block'
    },

    /// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    updateRecord () {
      try {
        var isValid = false
        isValid = this.checkInputsForNulls(this.awardee)

        if (isValid) {
          fetch('https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/Test/awardee/' + this.$route.params.id, {
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            method: 'PATCH',
            body: JSON.stringify(this.awardee)
          }).then(alert('The record has been edited.'))

          router.push({ name: 'view-awardees' })
        } else {
          alert('Please ensure all fields are not empty.')
        }
      } catch (e) {
        alert('There was an issue trying to update this record,please try again later.')
      }
    },

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

    deleteRecord () {
      if (confirm('Are you sure you want to delete this record?')) {
        try {
          fetch('https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/Test/awardee/' + this.$route.params.id, {
            method: 'delete'
          }).then(alert('The record has been deleted.'))

          router.push({ name: 'view-awardees' })
        } catch (e) {
          alert("I'm sorry there was an issue trying to delete that record,please try again later.")
        }
      } else {
        alert('You have chosen not to delete the record.')
      }
    },

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

    addNewContactRecord () {
      this.contact.firstName = ''
      this.contact.lastName = ''
      this.contact.email = ''
      this.contact.phone1 = ''
      this.contact.phone2 = ''
      this.contact.type = ''
      this.contact.street = ''
      this.contact.city = ''
      this.contact.state = ''
      this.contact.zip = ''

      this.hideUpdateBtnContact()
      this.contactModalTitle = 'Add Contact'
      this.$refs.largeModal.open()
    },

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

    addContactToAwardeeObject () {
      var isValid = false
      isValid = this.checkInputsForNulls(this.contact)

      if (isValid) {
        this.awardee.contacts.push(Object.assign({}, this.contact))
        this.$refs.largeModal.cancel()
      } else {
        alert('Please fill in all fields')
      }
      // Here is where we will push this object up to AWS to add to awardee.contacts array --> Then refresh Table list
    },

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

    updateContactRecord () {
      try {
        var isValid = false
        isValid = this.checkInputsForNulls(this.contact)

        if (isValid) {
          // Send up this.contacts up to AWS overwrite to update object
          // update locally in array aswell
          alert('The contact has been updated.')
          this.$refs.largeModal.cancel()
        } else {
          alert('Please ensure all fields are not empty.')
        }
      } catch (e) {
        alert('An error occurred please try again.')
      }
    },

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

    deleteContactRecord () {
      try {
        if (confirm('Are you sure you want to delete this contact?')) {
          // Delete object from AWS
          // delete from array
          alert('The contact has been deleted.')
          this.$refs.largeModal.cancel()
        } else {
          alert('The contact was not deleted.')
        }
      } catch (e) {
        alert('An error occurred please try again.')
      }
    },

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

    addNewTrykeRecord () {
      this.tryke.model = ''
      this.tryke.dateAwarded = ''
      this.tryke.dateReceived = ''
      this.tryke.fundedBy = ''
      this.tryke.locationAwarded = ''
      this.tryke.notes = ''
      this.hideUpdateBtnTryke()
      this.trykeModalTitle = 'Add Tryke'
      this.$refs.mediumModal.open()
    },

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

    addTrykeToAwardeeObject () {
      var isValid = false
      isValid = this.checkInputsForNulls(this.tryke)

      if (isValid) {
        this.awardee.trykes.push(Object.assign({}, this.tryke))
        this.$refs.mediumModal.cancel()
      } else {
        alert('Please fill in all fields.')
      }
      // Here is where we will push this object up to AWS to add to awardee.trykes array --> Then refresh Table list
    },

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

    updateTrykeRecord () {
      try {
        var isValid = false
        isValid = this.checkInputsForNulls(this.tryke)

        if (isValid) {
          // Send this.trykes up to AWS to update
          // update locally in array aswell
          alert('The tryke has been updated.')
          this.$refs.mediumModal.cancel()
        } else {
          alert('Please ensure all fields are not empty.')
        }
      } catch (e) {
        alert('An error occurred please try again.')
      }
    },

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

    deleteTrykeRecord () {
      try {
        if (confirm('Are you sure you want to delete this tryke?')) {
          // Delete this.trykes object from AWS
          // delete from array
          alert('The tryke has been deleted.')
          this.$refs.mediumModal.cancel()
        } else {
          alert('The tryke was not deleted.')
        }
      } catch (e) {
        alert('An error occurred please try again.')
      }
    },

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

    displayModal (item, id) {
      if (id === 1) {
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
        this.showUpdateBtnContact()
        this.$refs.largeModal.open()
      } else {
        this.tryke.model = item.model
        this.tryke.dateAwarded = item.dateAwarded
        this.tryke.dateReceived = item.dateReceived
        this.tryke.fundedBy = item.fundedBy
        this.tryke.locationAwarded = item.locationAwarded
        this.tryke.notes = item.notes
        this.trykeModalTitle = 'Edit Tryke'
        this.showUpdateBtnTryke()
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
