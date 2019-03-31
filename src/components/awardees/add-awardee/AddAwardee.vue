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
                      <input id="simple-input" v-model="awardee.addressCity" required/>
                      <label class="control-label" for="simple-input">City</label><i class="bar"></i>
                    </div>
                    <!-- State -->
                    <div class="input-group">
                      <input id="simple-input" v-model="awardee.addressState" required/>
                      <label class="control-label" for="simple-input">State</label><i class="bar"></i>
                    </div>
                    <!-- Zip -->
                    <div class="input-group">
                      <input id="simple-input" v-model="awardee.addressZip" required/>
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
              <td>Type</td>
              <td>First Name</td>
              <td>Last Name</td>
              <td>Phone Number</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in contacts" :key="item.id" @click="displayModal(item,index,1)">
              <td>{{item.contactType}}</td>
              <td>{{item.firstName}}</td>
              <td>{{item.lastName}}</td>
              <td>{{item.phone1}}</td>
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
              <td class="filters-page__table-heading">Order Num</td>
              <td class="filters-page__table-heading">Model</td>
              <td class="filters-page__table-heading">Date Awarded</td>
              <td class="filters-page__table-heading">Date Recieved</td>
              <td class="filters-page__table-heading">Funded By</td>

            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in trykes" :key="item.id" @click="displayModal(item,index,2)">
                <td>{{item.orderNumber}}</td>
                <td>{{item.model}}</td>
                <td>{{item.dateAwarded}}</td>
                <td>{{item.dateReceived}}</td>
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
          {{'Delete' | translate}}
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

        <input v-if="displayMode == 'ADD'" id="addContact" class="styleBtn" type="submit" value="Add" @click="addContactToArray()" />

        <div v-if="displayMode == 'EDIT'" class="va-row">
          <div class="flex md6">
            <input id="updateContact" class="styleBtn" type="submit" value="Update" @click="updateContactItem()" />
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
          <!-- Order Number -->
          <div class="input-group">
            <input id="simple-input" v-model="tryke.orderNumber" required/>
            <label class="control-label" for="simple-input">Order Number</label><i class="bar"></i>
          </div>
        </div>

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

        <div class="form-group">
          <!-- Make Is Primary -->
          <div class="flex md6">
              <vuestic-checkbox
                :label="$t('Set Primary Tryke')"
                v-model="tryke.IsPrimary"
              />
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
import swal from 'sweetalert'

export default {
  name: 'AddAwardee',

  /// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  computed: {

    datePickerDisabled: () => [date => !(date.getDate() % 5)],

    IsTrykePrimary () {
      if (this.tryke.IsPrimary) {
        return 'true'
      } else {
        return 'false'
      }
    },

    IsContactPrimary () {
      if (this.contact.IsPrimary) {
        return 'true'
      } else {
        return 'false'
      }
    },
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
      tryke: {
        awardeeId: '',
        orderNumber: '',
        model: '',
        dateAwarded: '',
        dateReceived: '',
        fundedBy: '',
        locationAwarded: '',
        notes: '',
        IsPrimary: false
      },
      awardee: {
        firstName: '',
        lastName: '',
        address1: '',
        address2: '',
        phone: '',
        addressCity: '',
        addressState: '',
        addressZip: '',
        dateOfBirth: '',
        lastContacted: '',
        notes: ''
      },
      trykes: [],
      contacts: []
    }
  },

  /// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  methods: {

    clear (field) {
      this[field] = ''
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
      this.contacts.push(Object.assign({}, this.contact))
      this.$refs.largeModal.cancel()
    },

    /// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Find the item in this.awardee.contacts array by index and replace it with this.contact object
    updateContactItem () {
      this.$set(this.contacts, this.editId, Object.assign({}, this.contact))
      this.$refs.largeModal.cancel()
    },

    /// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Find the object in this.awardees.contacts array by index and delete it
    deleteContactRow () {
      this.contacts.splice(this.editId, 1)
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
      this.trykes.push(Object.assign({}, this.tryke))
      this.$refs.mediumModal.cancel()
    },

    /// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Find the item in this.awardee.trykes array by index and replace it with this.tryke object
    updateTrykeItem () {
      this.$set(this.trykes, this.editId, Object.assign({}, this.tryke))
      this.$refs.mediumModal.cancel()
    },

    /// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Find the object in this.awardees.trykes array by index and delete it
    deleteTrykeRow () {
      this.trykes.splice(this.editId, 1)
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
        this.contact.contactType = item.contactType
        this.contact.addressCity = item.addressCity
        this.contact.addressState = item.addressState
        this.contact.address1 = item.address1
        this.contact.address2 = item.address2
        this.contact.addressZip = item.addressZip
        this.contacts.notes = item.notes
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
      try {
        fetch('https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/Test', {
          method: 'POST',
          body: JSON.stringify(this.awardee)
        }).then(response => response.json())
          .then(json => {
            this.contacts.forEach(element => {
              element.awardeeId = json.Attributes.id
              fetch(`https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/Test/contact`, {
                method: 'POST',
                body: JSON.stringify(element)
              })
            })
            this.trykes.forEach(element => {
              element.awardeeId = json.Attributes.id
              fetch(`https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/Test/tryke`, {
                method: 'POST',
                body: JSON.stringify(element)
              })
            })
          })
        swal('Added', 'The record has been added.', 'success')
        // setTimeout(() => this.$router.push({ name: 'view-awardees' }), 2500)
      } catch (e) {
        swal('Error', 'There was an issue trying to add this record,please try again later.', 'error')
      }
    },

    /// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // The record gets canceled and redirects user back to View Awardee page
    cancelRecord () {
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
              swal('Deleted', 'The record has been deleted.', 'success')
              // this.$router.push({ name: 'view-awardees' })
            } catch (e) {
              swal('Error', "I'm sorry there was an issue trying to delete that record,please try again later.", 'error')
            }
          } else {
            swal('Cancelled', 'You have chosen not to delete the record.', 'warning')
          }
        })
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

.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

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
