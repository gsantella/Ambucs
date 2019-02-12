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

      </div>

    <div class="flex md6">

      <!-- Contacts Table -->
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
              <td>{{ item.type }}</td>
              <td>{{ item.firstName }}</td>
               <td>{{ item.lastName }}</td>
            </tr>
          </tbody>
      </table>

      <br style="margin-bottom:2%"/>

      <!-- Trykes Table -->
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
        <button class="btn btn-danger" @click="deleteRecord()">
          {{'Delete' | translate}}
        </button>
      </div>
    </div>

      <!-- Contacts Modal -->
      <vuestic-modal v-bind:noButtons="true"  :show.sync="show" v-bind:large="true" ref="largeModal"
          :okText="'modal.confirm' | translate"
          :cancelText="'modal.cancel' | translate">
      <div slot="title">{{'Edit Contact' | translate}}</div>
      <div>

        <input class="styleInput" type="text" v-model="awardee.contacts.firstName" placeholder="First Name" />
        <input class="styleInput" type="text" v-model="awardee.contacts.lastName" placeholder="Last Name" />
        <input class="styleInput" type="text" v-model="awardee.contacts.type" placeholder="Type" />
        <div class="va-row">
          <div class="flex md6">
            <input class="styleBtn" type="submit" value="Save" @click="updateContactRecord()" />
          </div>
          <div class="flex md6">
            <input class="styleBtn" style="background-color:red" type="submit" value="Delete" @click="deleteContactRecord()" />
          </div>
        </div>

      </div>
    </vuestic-modal>

      <!-- Trykes Modal -->
      <vuestic-modal v-bind:noButtons="true" :show.sync="show" ref="mediumModal"
                   :okText="'modal.confirm' | translate"
                   :cancelText="'modal.cancel' | translate">
      <div slot="title">{{'Edit Tryke' | translate}}</div>
      <div>

        <input class="styleInput" type="text" v-model="awardee.trykes.model" placeholder="Model" />
        <input class="styleInput" type="text" v-model="awardee.trykes.dateAwarded" placeholder="Date Awarded" />
        <input class="styleInput" type="text" v-model="awardee.trykes.dateReceived" placeholder="Date Recieved" />
        <input class="styleInput" type="text" v-model="awardee.trykes.fundedBy" placeholder="Funded By" />
        <input class="styleInput" type="text" v-model="awardee.trykes.locationAwarded" placeholder="Location Awarded" />
        <input class="styleInput" type="text" v-model="awardee.trykes.notes" placeholder="Notes" />
        <div class="va-row">
          <div class="flex md6">
            <input class="styleBtn" type="submit" value="Save" @click="updateTrykeRecord()" />
          </div>
          <div class="flex md6">
            <input class="styleBtn" style="background-color:red" type="submit" value="Delete" @click="deleteTrykeRecord()" />
          </div>
        </div>
      </div>
    </vuestic-modal>

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

  },

  /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

  data () {
    return {

      show: false,
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
        trykes: [
          {
            model: '',
            dateAwarded: '',
            dateReceived: '',
            fundedBy: '',
            locationAwarded: '',
            notes: ''
          }
        ],
        contacts: [
          {
            firstName: '',
            lastName: '',
            type: ''
          }
        ]
      }

    }
  },

  /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

  methods: {

    clear (field) {
      this[field] = ''
    },

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

    updateRecord () {
      try {
        alert('The record has been updated.')
      } catch (e) {
        console.log(e)
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
            .then(console.log(this.$route.params.id))
            .then(router.push({ name: 'view-awardees' }))
        } catch (e) {
          console.log(e)
          alert("I'm sorry there was an issue trying to delete that record,please try again later.")
        }
      } else {
        alert('You have chosen not to delete the record.')
      }
    },

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

    updateContactRecord () {

    },

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

    deleteContactRecord () {

    },

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

    updateTrykeRecord () {

    },

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

    deleteTrykeContact () {

    },

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

    displayModal (item, id) {
      if (id === 1) {
        this.$refs.largeModal.open()
        this.awardee.contacts.firstName = item.firstName
        this.awardee.contacts.lastName = item.lastName
        this.awardee.contacts.type = item.type
      } else {
        this.$refs.mediumModal.open()
        this.awardee.trykes.model = item.model
        this.awardee.trykes.dateAwarded = item.dateAwarded
        this.awardee.trykes.dateReceived = item.dateReceived
        this.awardee.trykes.fundedBy = item.fundedBy
        this.awardee.trykes.locationAwarded = item.locationAwarded
        this.awardee.trykes.notes = item.notes
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
        console.log(json)
        this.awardee = json.Item
      })
  },

  /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

  components: {
  }

}

</script>
