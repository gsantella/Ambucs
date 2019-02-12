<template>
  <div class="form-elements">
    <div class="va-row">
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
                      <textarea type="text" id="simple-textarea"
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
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
              <td style="width:5%"><img class="deleteIcon" src="../../../assets/images/delete.png" @click="deleteContactRow(item.id)"/></td>
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
              <td class="filters-page__table-heading">ID</td>
              <td style="float:right" class="filters-page__table-heading">Action</td>

            </tr>
          </thead>
          <tbody>
            <tr v-for="item in awardee.trykes" :key="item.id">
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td style="width:5%"><img class="deleteIcon" src="../../../assets/images/delete.png"  @click="deleteTrykeRow(item.id)"/></td>
            </tr>
          </tbody>
      </table>

    </div>

    <!--Save Delete Buttons -->
    <div class="va-row btn-margin-row">
      <div
        class="flex sm6 lg6 xl3 justify--center">
        <button class="btn btn-primary" @click="updateRecord()" >
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

    </div>

  </div>
</template>

<script>
import router from '../../../router'

// var url = 'https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/'

export default {
  name: 'form-elements',
  computed: {
    datePickerDisabled: () => [date => !(date.getDate() % 5)],
  },
  data () {
    return {
      showModal: false,
      objectToPass: null,
      awardee: {
        firstName: '',
        lastName: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: ''
      },
      award: {
        dateAwarded: '',
        dateReceived: '',
        fundedBy: '',
        locationAwarded: '',
        notes: ''
      },
      dateOfBirth: '',
      lastContacted: '',
      trykes: [
        {
          model: '',
          id: ''
        }
      ],
      contacts: [
        {
          firstName: '',
          lastname: '',
          type: ''
        }
      ]
    }
  },
  methods: {

    clear (field) {
      this[field] = ''
    },

    addNewContactRow () {
      var contactObject = {
        firstName: '',
        lastName: '',
        type: ''
      }
      this.awardee.contacts.push(contactObject)
      // creates the array but doesnt store the content editable data into array
    },

    addNewTrykeRow () {
      var trykeObject = {
        firstName: '',
        lastName: '',
        type: ''
      }
      this.awardee.trykes.push(trykeObject)
      // creates the array but doesnt store the content editable data into array
    },

    deleteContactRow (id) {
      this.awardee.contacts.splice(this.awardee.contacts.indexOf(id), 1)
    },

    deleteTrykeRow (id) {
      this.awardee.trykes.splice(this.awardee.contacts.indexOf(id), 1)
    },

    addRecord () {
      try {
        alert('The record has been updated.')
      } catch (e) {
        console.log(e)
        alert('There was an issue trying to update this record,please try again later.')
      }
    },

    cancelRecord () {
      if (confirm('Are you sure you want to cancel this record?')) {
        try {
          router.push({ name: 'filters' })
        } catch (e) {
          console.log(e)
          alert("I'm sorry there was an issue trying to delete that record,please try again later.")
        }
      } else {
        alert('You have chosen not to delete the record.')
      }
    }
  },

  created () {

  },
  components: {

  }
}
</script>

<style>
.deleteIcon {
  width: 55%;
  height: 5%;
}
</style>
