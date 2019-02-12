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

                  </div>

                  <div class="form-group with-icon-left">

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
              <td class="filters-page__table-heading">Type</td>
              <td class="filters-page__table-heading">First Name</td>
              <td class="filters-page__table-heading">Last Name</td>
              <td style="float:right" class="filters-page__table-heading">Action</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in awardee.contacts" :key="item.id">
              <td>{{item.firstName}}</td>
              <td>{{item.lastName}}</td>
              <td>{{item.type}}</td>
              <td style="width:5%"><img class="deleteIcon" src="../../../assets/images/delete.png"  @click="deleteContactRow(item.id)"/></td>
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
              <td style="float:right" class="filters-page__table-heading">Action</td>

            </tr>
          </thead>
          <tbody>
            <tr v-for="item in awardee.trykes" :key="item.id">
                <td>{{item.model}}</td>
                <td>{{item.dateAwarded}}</td>
                <td>{{item.fundedBy}}</td>
                <td style="width:5%"><img class="deleteIcon" src="../../../assets/images/delete.png"  @click="deleteTrykeRow(item.id)"/></td>
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
      <div slot="title">{{'Add Contact' | translate}}</div>
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

        <input class="styleBtn" type="submit" value="Add" @click="addContactToArray()" />

      </div>
    </vuestic-modal>

      <!-- Trykes Modal -->
      <vuestic-modal v-bind:noButtons="true" :show.sync="show" ref="mediumModal"
                   :okText="'modal.confirm' | translate"
                   :cancelText="'modal.cancel' | translate">
      <div slot="title">{{'Add Tryke' | translate}}</div>
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

        <input class="styleBtn" type="submit" value="Add" @click="addTrykeToArray()" />

      </div>
    </vuestic-modal>

    </div>

  </div>
</template>

<script>
import router from '../../../router'

// var url = 'https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/'

export default {
  name: 'AddAwardee',

  /// /////////////////////////////////////////////////////////////////////////////////////////////////////

  computed: {

    datePickerDisabled: () => [date => !(date.getDate() % 5)],

  },

  /// /////////////////////////////////////////////////////////////////////////////////////////////////////

  data () {
    return {

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

      this.$refs.mediumModal.open()
    },

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////

    addTrykeToArray () {
      this.awardee.trykes.push(Object.assign({}, this.trykes))
      this.$refs.mediumModal.cancel()
    },

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////

    deleteContactRow (id) {
      this.awardee.contacts.splice(this.awardee.contacts.indexOf(id), 1)
    },

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////

    deleteTrykeRow (id) {
      this.awardee.trykes.splice(this.awardee.contacts.indexOf(id), 1)
    },

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////

    addRecord () {
      /*
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
      */
      console.log(this.awardee)
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
