<template>
  <div class="form-elements">
    <div class="va-row">
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

    <div class="flex md6">

      <!-- Contacts Table -->
      <button style="float:right;margin:10px;width:30%" class="btn btn-primary btn-micro" @click="addNewContactRow()">
        {{'Add Contact' | translate}}
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

      <hr style="margin:5% 0;" />

      <!-- Trykes Table -->
      <button style="float:right;margin:10px;width:30%" class="btn btn-primary btn-micro" @click="addNewTrykeRow()">
        {{'Add Tryke' | translate}}
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

    </div>

    <!--Save Delete Buttons -->
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

      <!-- Contacts Modal -->
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
                  <input id="simple-input" v-model="contacts.firstName" required/>
                  <label class="control-label" for="simple-input">First Name</label><i class="bar"></i>
                </div>

                <!-- Last Name -->
                <div class="input-group">
                  <input id="simple-input" v-model="contacts.lastName" required/>
                  <label class="control-label" for="simple-input">Last Name</label><i class="bar"></i>
                </div>
              </div>
              <div class="form-group">
                <!-- Email -->
                <div class="input-group">
                  <input id="simple-input" v-model="contacts.email" required/>
                  <label class="control-label" for="simple-input">Email</label><i class="bar"></i>
                </div>
              </div>
              <div class="form-group">
                <!-- Phone 1 -->
                <div class="input-group">
                  <input id="simple-input" v-model="contacts.phone1" required/>
                  <label class="control-label" for="simple-input">Phone 1</label><i class="bar"></i>
                </div>

                <!-- Phone 2 -->
                <div class="input-group">
                  <input id="simple-input" v-model="contacts.phone2" required/>
                  <label class="control-label" for="simple-input">Phone 2</label><i class="bar"></i>
                </div>
              </div>
              <div class="form-group">
                <!-- Type -->
                <div class="input-group">
                  <input id="simple-input" v-model="contacts.type" required/>
                  <label class="control-label" for="simple-input">Type</label><i class="bar"></i>
                </div>
              </div>
              <div class="form-group">
                <!-- Street -->
                <div class="input-group">
                  <input id="simple-input" v-model="contacts.street" required/>
                  <label class="control-label" for="simple-input">Street</label><i class="bar"></i>
                </div>
                <!-- City -->
                <div class="input-group">
                  <input id="simple-input" v-model="contacts.city" required/>
                  <label class="control-label" for="simple-input">City</label><i class="bar"></i>
                </div>

              </div>

              <div class="form-group">
                <!-- State -->
                <div class="input-group">
                  <input id="simple-input" v-model="contacts.state" required/>
                  <label class="control-label" for="simple-input">State</label><i class="bar"></i>
                </div>
                <!-- Zip -->
                <div class="input-group">
                  <input id="simple-input" v-model="contacts.zip" required/>
                  <label class="control-label" for="simple-input">Zip Code</label><i class="bar"></i>
                </div>
              </div>

            </fieldset>
          </form>

        <input id="addContact" class="styleBtn" type="submit" value="Add" @click="addContactToArray()" />

        <div class="va-row">
          <div class="flex md6">
            <input id="updateContact" style="display:none" class="styleBtn" type="submit" value="Update" @click="updateContactItem()" />
          </div>
          <div class="flex md6">
            <input id="deleteContact" class="styleBtn" style="display:none;background-color:red" type="submit" value="Delete" @click="deleteContactRow()" />
          </div>
        </div>

      </div>
    </vuestic-modal>

      <!-- Trykes Modal -->
      <vuestic-modal v-bind:noButtons="true" :show.sync="show" ref="mediumModal"
                   :okText="'modal.confirm' | translate"
                   :cancelText="'modal.cancel' | translate">
      <div slot="title">{{ trykeModalTitle | translate}}</div>
      <div>

        <div class="form-group">
          <!-- Model -->
          <div class="input-group">
            <input id="simple-input" v-model="trykes.model" required/>
            <label class="control-label" for="simple-input">Model</label><i class="bar"></i>
          </div>
        </div>

        <div class="form-group">
          <!-- Date Awarded -->
          <div class="input-group">
            <vuestic-date-picker
              id="date-picker-custom-date-format"
              :config="{altInput: true, altFormat: 'F j, Y'}"
              v-model="trykes.dateAwarded"
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
              v-model="trykes.dateReceived"
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
            <input id="simple-input" v-model="trykes.fundedBy" required/>
            <label class="control-label" for="simple-input">Funded By</label><i class="bar"></i>
          </div>

          <!-- Location Awarded -->
          <div class="input-group">
            <input id="simple-input" v-model="trykes.locationAwarded" required/>
            <label class="control-label" for="simple-input">Location Awarded</label><i class="bar"></i>
          </div>
        </div>

        <div class="form-group">
          <!-- Notes -->
          <div class="input-group">
            <input id="simple-input" v-model="trykes.notes" required/>
            <label class="control-label" for="simple-input">Notes</label><i class="bar"></i>
          </div>
        </div>

        <input id="addTryke" class="styleBtn" type="submit" value="Add" @click="addTrykeToArray()" />

        <div class="va-row">
          <div class="flex md6">
            <input id="updateTryke" class="styleBtn" style="display:none" type="submit" value="Update" @click="updateTrykeItem()" />
          </div>
          <div class="flex md6">
            <input id="deleteTryke" class="styleBtn" style="display:none;background-color:red" type="submit" value="Delete" @click="deleteTrykeRow()" />
          </div>
        </div>

      </div>
    </vuestic-modal>

    </div>

  </div>
</template>

<script>
import router from '../../../router'

export default {
  name: 'AddAwardee',

  /// /////////////////////////////////////////////////////////////////////////////////////////////////////

  computed: {

    datePickerDisabled: () => [date => !(date.getDate() % 5)],

  },

  /// /////////////////////////////////////////////////////////////////////////////////////////////////////

  data () {
    return {
      trykeModalTitle: '',
      contactModalTitle: '',
      editId: 0,
      show: true,
      objectToPass: null,
      contacts: {
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
      trykes: {
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

  /// /////////////////////////////////////////////////////////////////////////////////////////////////////

  methods: {

    clear (field) {
      this[field] = ''
    },

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////

    hideUpdateBtnContact () {
      var addBtn = document.getElementById('addContact')
      var updateBtn = document.getElementById('updateContact')
      var deleteContactBtn = document.getElementById('deleteContact')
      addBtn.style.display = 'block'
      updateBtn.style.display = 'none'
      deleteContactBtn.style.display = 'none'
    },

    /// ////////////////////////////////////////////////////////////////////////////////////////////////////

    hideUpdateBtnTryke () {
      var addBtnTryke = document.getElementById('addTryke')
      var updateBtnContact = document.getElementById('updateTryke')
      var deleteTrykeBtn = document.getElementById('deleteTryke')
      addBtnTryke.style.display = 'block'
      updateBtnContact.style.display = 'none'
      deleteTrykeBtn.style.display = 'none'
    },

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////

    showUpdateBtnContact () {
      var addBtn = document.getElementById('addContact')
      var updateBtn = document.getElementById('updateContact')
      var deleteContactBtn = document.getElementById('deleteContact')
      addBtn.style.display = 'none'
      updateBtn.style.display = 'block'
      deleteContactBtn.style.display = 'block'
    },

    /// ////////////////////////////////////////////////////////////////////////////////////////////////////

    showUpdateBtnTryke () {
      var addBtnTryke = document.getElementById('addTryke')
      var updateBtnContact = document.getElementById('updateTryke')
      var deleteTrykeBtn = document.getElementById('deleteTryke')
      addBtnTryke.style.display = 'none'
      updateBtnContact.style.display = 'block'
      deleteTrykeBtn.style.display = 'block'
    },

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////

    addNewContactRow () {
      this.contacts.firstName = ''
      this.contacts.lastName = ''
      this.contacts.email = ''
      this.contacts.phone1 = ''
      this.contacts.phone2 = ''
      this.contacts.type = ''
      this.contacts.street = ''
      this.contacts.city = ''
      this.contacts.state = ''
      this.contacts.zip = ''

      this.hideUpdateBtnContact()
      this.contactModalTitle = 'Add Contact'
      this.$refs.largeModal.open()
    },

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////

    addContactToArray () {
      this.awardee.contacts.push(Object.assign({}, this.contacts))
      this.$refs.largeModal.cancel()
    },

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////

    addNewTrykeRow () {
      this.trykes.model = ''
      this.trykes.dateAwarded = ''
      this.trykes.dateReceived = ''
      this.trykes.fundedBy = ''
      this.trykes.locationAwarded = ''
      this.trykes.notes = ''
      this.hideUpdateBtnTryke()
      this.trykeModalTitle = 'Add Tryke'
      this.$refs.mediumModal.open()
    },

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////

    addTrykeToArray () {
      this.awardee.trykes.push(Object.assign({}, this.trykes))
      this.$refs.mediumModal.cancel()
    },

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////

    deleteContactRow () {
      this.awardee.contacts.splice(this.editId, 1)
      this.hideUpdateBtnContact()
      this.$refs.largeModal.cancel()
    },

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////

    deleteTrykeRow () {
      this.awardee.trykes.splice(this.editId, 1)
      this.hideUpdateBtnTryke()
      this.$refs.mediumModal.cancel()
    },

    /// ////////////////////////////////////////////////////////////////////////////////////////////////////////

    displayModal (item, index, id) {
      if (id === 1) {
        this.$refs.largeModal.open()
        this.editId = index
        this.contacts.firstName = item.firstName
        this.contacts.lastName = item.lastName
        this.contacts.email = item.email
        this.contacts.phone1 = item.phone1
        this.contacts.phone2 = item.phone2
        this.contacts.type = item.type
        this.contacts.city = item.city
        this.contacts.state = item.state
        this.contacts.street = item.street
        this.contacts.zip = item.zip

        this.showUpdateBtnContact()
        this.contactModalTitle = 'Edit Contact'
      } else {
        this.$refs.mediumModal.open()
        this.editId = index
        this.awardee.trykes.model = item.model
        this.awardee.trykes.dateAwarded = item.dateAwarded
        this.awardee.trykes.dateReceived = item.dateReceived
        this.awardee.trykes.fundedBy = item.fundedBy
        this.awardee.trykes.locationAwarded = item.locationAwarded
        this.awardee.trykes.notes = item.notes

        this.showUpdateBtnTryke()
        this.trykeModalTitle = 'Edit Tryke'
      }
    },

    /// //////////////////////////////////////////////////////////////////////////////////////////////////////////

    updateContactItem () {
      this.$set(this.awardee.contacts, this.editId, this.contacts)
      this.hideUpdateBtnContact()
      this.$refs.largeModal.cancel()
      // THIS IS BROKEN WORKS TO UPDATE ON RECORD BUT BREAKS MUTLIPLE RECORDS
      // UPDATE ENTIRE AWARDEE.CONTACTS IN AWS -> DO WE WANT TO OVERWRITE REPLACE ALL ITEMS IN AWS WITH NEW?
    },

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

    updateTrykeItem () {
      this.awardee.trykes.splice(this.editId, 1, this.trykes)
      this.hideUpdateBtnTryke()
      this.$refs.mediumModal.cancel()
      // THIS IS BROKEN WORKS TO UPDATE ON RECORD BUT BREAKS MUTLIPLE RECORDS
      // UPDATE ENTIRE AWARDEE.TRYKES IN AWS -> DO WE WANT TO OVERWRITE REPLACE ALL ITEMS IN AWS WITH NEW?
    },

    /// ///////////////////////////////////////////////////////////////////////////////////////////////////////

    addRecord () {
      try {
        fetch('https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/Test', {
          method: 'post',
          body: JSON.stringify(this.awardee)
        }).then(alert('The record has been added.'))
          .then(router.push({ name: 'view-awardees' }))
      } catch (e) {
        console.log(e)
        alert('There was an issue trying to update this record,please try again later.')
      }
    },

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////

    cancelRecord () {
      if (confirm('Are you sure you want to cancel this record?')) {
        try {
          router.push({ name: 'view-awardees' })
        } catch (e) {
          console.log(e)
          alert("I'm sorry there was an issue trying to delete that record,please try again later.")
        }
      } else {
        alert('You have chosen not to delete the record.')
      }
    }
  },

  /// /////////////////////////////////////////////////////////////////////////////////////////////////////

  created () {

  },

  /// /////////////////////////////////////////////////////////////////////////////////////////////////////

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
