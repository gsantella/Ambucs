<template>
  <div class="form-elements">
    <div class="va-row">

<!-- START OF VUESTIC WIDGET FOR FORM INPUTS -->

      <div class="flex md6">

        <vuestic-widget :headerText="'Add Awardee' | translate">
          <form>
            <fieldset>

              <div class="form-group">
                <!-- First Name -->
                <div class="input-group">
                  <input id="simple-input" v-model="awardee.firstName" required/>
                  <label class="control-label" for="simple-input">First Name</label><i class="bar"></i>
                </div>

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
                      <textarea type="text" v-model="awardee.notes" id="simple-textarea"
                                required></textarea>
                      <label class="control-label" for="simple-textarea">Notes</label><i class="bar"></i>
                    </div>
                  </div>

                </fieldset>

          </form>
        </vuestic-widget>

      </div>

<!-- END OF VUESTIC WIDGET FOR FORM INPUTS -->

<!-- START OF RIGHT SIDE FLEX MD6-->
    <div class="flex md6">

<!-- START OF CONTACTS TABLE-->
      <button style="float:right;margin:10px;width:30%" class="btn btn-primary btn-micro" @click="addNewContactRow()">
        {{'Add' | translate}}
      </button>
      <vuestic-widget headerText="Contacts" style="margin-bottom:5px" />
      <table class="table table-striped first-td-padding">
          <thead>
            <tr>
              <td class="filters-page__table-heading">First Name</td>
              <td class="filters-page__table-heading">Last Name</td>
              <td class="filters-page__table-heading">Type</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in awardee.contacts" :key="item.id" @click="displayModal(item,index,1)">
              <td>{{item.firstName}}</td>
              <td>{{item.lastName}}</td>
              <td>{{item.type}}</td>
            </tr>
          </tbody>
      </table>
<!-- END OF CONTACTS TABLE -->

<br style="margin:10%"/>

<!-- START OF TRYKES TABLE -->
      <button style="float:right;margin:10px;width:30%" class="btn btn-primary btn-micro" @click="addNewTrykeRow()">
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
                <td>{{item.model}}</td>
                <td>{{item.dateAwarded}}</td>
                <td>{{item.fundedBy}}</td>
            </tr>
          </tbody>
      </table>
<!-- END OF TRYKES TABLE -->

    </div>
<!-- END OF RIGHT SIDE FLEX MD6 -->

<!-- START OF SAVE/DELETE BUTTONS -->
    <div class="va-row btn-margin-row">
      <div
        class="flex sm6 lg6 xl3 justify--center">
        <button class="btn btn-primary" @click="addRecord()" >
          {{'Save' | translate}}
        </button>
      </div>
      <div
        class="flex sm6 lg6 xl3 justify--center">
        <button class="btn btn-danger" @click="cancelRecord()">
          {{'Cancel' | translate}}
        </button>
      </div>
    </div>
<!-- END OF SAVE/DELETE BUTTONS -->

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

        <input v-if="displayMode == 'ADD'" id="addContact" class="styleBtn" type="submit" value="Add" @click="addContactToArray()" />

        <div v-if="displayMode == 'EDIT'" class="va-row">
          <div class="flex md6">
            <input id="updateContact" style="display:none" class="styleBtn" type="submit" value="Update" @click="updateContactItem()" />
          </div>
          <div class="flex md6">
            <input id="deleteContact" class="styleBtn" style="background-color:red" type="submit" value="Delete" @click="deleteContactRow()" />
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

        <input v-if="displayMode == 'ADD'" id="addTryke" class="styleBtn" type="submit" value="Add" @click="addTrykeToArray()" />

        <div v-if="displayMode == 'EDIT'" class="va-row">
          <div class="flex md6">
            <input id="updateTryke" class="styleBtn" type="submit" value="Update" @click="updateTrykeItem()" />
          </div>
          <div class="flex md6">
            <input id="deleteTryke" class="styleBtn" style="background-color:red" type="submit" value="Delete" @click="deleteTrykeRow()" />
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

export default {
  name: 'AddAwardee',

  /// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  computed: {

    datePickerDisabled: () => [date => !(date.getDate() % 5)],

  },

  /// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  data () {
    return {
      displayMode: '',
      trykeModalTitle: '',
      contactModalTitle: '',
      editId: 0,
      show: true,
      objectToPass: null,
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

  /// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  methods: {

    clear (field) {
      this[field] = ''
    },

    /// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Check this.awardee | this.contact | this.tryke for nulls when adding/updating
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

    // Loop through this.contact object and reset all items to null string
    addNewContactRow () {
      for (var key in this.contact) {
        this.contact[key] = ''
      }

      this.displayMode = 'ADD'
      this.contactModalTitle = 'Add Contact'
      this.$refs.largeModal.open()
    },

    /// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Add a new this.contact object into this.awardee.contacts array
    addContactToArray () {
      if (this.checkInputsForNulls(this.contact)) {
        this.awardee.contacts.push(Object.assign({}, this.contact))
        this.$refs.largeModal.cancel()
      } else {
        alert('Please fill in all fields')
      }
    },

    /// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Find the item in this.awardee.contacts array by index and replace it with this.contact object
    updateContactItem () {
      if (this.checkInputsForNulls(this.contact)) {
        this.$set(this.awardee.contacts, this.editId, Object.assign({}, this.contact))
        this.$refs.largeModal.cancel()
      } else {
        alert('Please fill in all fields.')
      }
    },

    /// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Find the object in this.awardees.contacts array by index and delete it
    deleteContactRow () {
      this.awardee.contacts.splice(this.editId, 1)
      this.$refs.largeModal.cancel()
    },

    /// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Loop through this.tryke object and reset all items to null string
    addNewTrykeRow () {
      for (var key in this.tryke) {
        this.tryke[key] = ''
      }
      this.displayMode = 'ADD'
      this.trykeModalTitle = 'Add Tryke'
      this.$refs.mediumModal.open()
    },

    /// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Add a new this.trkye object into this.awardee.trykes array
    addTrykeToArray () {
      if (this.checkInputsForNulls(this.tryke)) {
        this.awardee.trykes.push(Object.assign({}, this.tryke))
        this.$refs.mediumModal.cancel()
      } else {
        alert('Please fill in all fields.')
      }
    },

    /// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Find the item in this.awardee.trykes array by index and replace it with this.tryke object
    updateTrykeItem () {
      if (this.checkInputsForNulls(this.tryke)) {
        // this.awardee.trykes.splice(this.editId, 1, Object.assign({}, this.trykes))
        this.$set(this.awardee.trykes, this.editId, Object.assign({}, this.tryke))
        this.$refs.mediumModal.cancel()
      } else {
        alert('Please fill in all fields.')
      }
    },

    /// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Find the object in this.awardees.trykes array by index and delete it
    deleteTrykeRow () {
      this.awardee.trykes.splice(this.editId, 1)
      this.$refs.mediumModal.cancel()
    },

    /// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Depending on which id is sent it will open the Contacts MODAL or Trykes MODAL --> params - item = onClick item from Array, index = index where it was found in array id = 1 for Contact or 2 for Tryke
    displayModal (item, index, id) {
      this.editId = index
      this.displayMode = 'EDIT'
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
        this.$refs.largeModal.open()
      } else {
        this.tryke.model = item.model
        this.tryke.dateAwarded = item.dateAwarded
        this.tryke.dateReceived = item.dateReceived
        this.tryke.fundedBy = item.fundedBy
        this.tryke.locationAwarded = item.locationAwarded
        this.tryke.notes = item.notes
        this.trykeModalTitle = 'Edit Tryke'
        this.$refs.mediumModal.open()
      }
    },

    /// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Attemps to make a POST request to AWS sending up this.awardee to add
    addRecord () {
      if (this.checkInputsForNulls(this.awardee)) {
        try {
          fetch('https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/Test', {
            method: 'post',
            body: JSON.stringify(this.awardee)
          }).then(alert('The record has been added.'))

          router.push({ name: 'view-awardees' })
        } catch (e) {
          alert('There was an issue trying to update this record,please try again later.')
        }
      } else {
        alert('Please fill in all fields.')
      }
    },

    /// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // The record gets canceled and redirects user back to View Awardee page
    cancelRecord () {
      if (confirm('Are you sure you want to cancel this record?')) {
        try {
          router.push({ name: 'view-awardees' })
        } catch (e) {
          alert("I'm sorry there was an issue trying to delete that record,please try again later.")
        }
      } else {
        alert('You have chosen not to delete the record.')
      }
    }
  },

  /// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  created () {

  },

  /// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  components: {

  }
}

</script>

<style>

.deleteIcon {
  width: 55%;
  height: 5%;
}

.styleInput {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.styleBtn {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.styleBtn:hover {
background-color: #45a049;
}

</style>
