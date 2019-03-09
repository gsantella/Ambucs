<template>
  <div class="form-elements">
    <div class="va-row">

<!-- START OF MAIN FORM -->

      <div class="flex md6">
        <vuestic-widget :headerText="'View Awardee' | translate">
          <form>
                <fieldset>
                  <div class="form-group">

                    <!-- First Name -->
                    <div class="input-group">
                      <input id="simple-input" v-model="awardee.firstName" readonly required/>
                      <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">First Name</label><i class="bar"></i>
                    </div>

                    <!-- Last Name -->
                    <div class="input-group">
                      <input id="simple-input" v-model="awardee.lastName" readonly required/>
                      <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">Last Name</label><i class="bar"></i>
                    </div>
                  </div>

                  <div class="form-group">

                    <!-- Phone Number -->
                    <div class="input-group">
                      <input id="simple-input" v-model="awardee.phone" readonly required/>
                      <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-textarea">Phone Number</label><i class="bar"></i>
                    </div>

                    <!-- Birth Date -->
                    <div class="input-group">
                      <input id="simple-input" v-model="awardee.dateOfBirth" readonly required/>
                      <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">Birth Date</label><i class="bar"></i>
                    </div>

                    <!-- Last Contacted Date -->
                    <div class="input-group">
                      <input id="simple-input" v-model="awardee.lastContacted" readonly required/>
                      <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">Last Contacted</label><i class="bar"></i>
                    </div>

                  </div>

                  <div class="form-group with-icon-left">
                    <!-- Street 1 -->
                    <div class="input-group">
                      <input id="simple-input" v-model="awardee.address1" readonly required/>
                      <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">Address 1</label><i class="bar"></i>
                    </div>
                  </div>

                  <div class="form-group with-icon-left">
                    <!-- Street 2 -->
                    <div class="input-group">
                      <input id="simple-input" v-model="awardee.address2" readonly required/>
                      <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">Address 2</label><i class="bar"></i>
                    </div>
                  </div>

                  <div class="form-group with-icon-right">

                    <!-- City -->
                    <div class="input-group">
                      <input id="simple-input" v-model="awardee.city" readonly required/>
                      <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">City</label><i class="bar"></i>
                    </div>
                    <!-- State -->
                    <div class="input-group">
                      <input id="simple-input" v-model="awardee.state" readonly required/>
                      <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">State</label><i class="bar"></i>
                    </div>
                    <!-- Zip -->
                    <div class="input-group">
                      <input id="simple-input" v-model="awardee.zip" readonly required/>
                      <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">Zipcode</label><i class="bar"></i>
                    </div>

                  </div>

                   <!-- Notes -->
                  <div class="form-group">
                    <div class="input-group">
                      <textarea type="text" id="simple-textarea" v-model="awardee.notes"
                                readonly required></textarea>
                      <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-textarea">Notes</label><i class="bar"></i>
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

      <vuestic-widget headerText="Contacts" style="margin-bottom:5px" />
      <table class="table table-striped first-td-padding">
          <thead>
            <tr>
              <td class="filters-page__table-heading">Type</td>
              <td class="filters-page__table-heading">First Name</td>
              <td class="filters-page__table-heading">Last Name</td>
              <td class="filters-page__table-heading">Phone Number</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in contacts" :key="item.id" @click="displayModal(item,index,1)">
              <td>{{ item.contactType }}</td>
              <td>{{ item.firstName }}</td>
              <td>{{ item.lastName }}</td>
              <td>{{ item.phone1 }}</td>
            </tr>
          </tbody>
      </table>

<!-- END OF CONTACTS TABLE -->

      <br style="margin-bottom:2%"/>

<!-- START OF TRYKES TABLE -->

      <vuestic-widget headerText="Trykes" style="margin-bottom:5px" />
      <table class="table table-striped first-td-padding">
          <thead>
            <tr>
              <td class="filters-page__table-heading">Model</td>
              <td class="filters-page__table-heading">Date Awarded</td>
              <td class="filters-page__table-heading">Date Recieved</td>
              <td class="filters-page__table-heading">Funded By</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in trykes" :key="item.id" @click="displayModal(item,index,2)">
              <td>{{ item.model }}</td>
              <td>{{ item.dateAwarded }}</td>
              <td>{{ item.dateReceived }}</td>
              <td>{{ item.fundedBy }}</td>
            </tr>
          </tbody>
      </table>

    </div>

<!-- END OF TRYKES TABLE -->

<!-- END OF TABLES RIGHT SIDE -->

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
                  <input id="simple-input" v-model="contact.firstName" readonly required/>
                  <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">First Name</label><i class="bar"></i>
                </div>

                <!-- Last Name -->
                <div class="input-group">
                  <input id="simple-input" v-model="contact.lastName" readonly required/>
                  <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">Last Name</label><i class="bar"></i>
                </div>
              </div>
              <div class="form-group">
                <!-- Email -->
                <div class="input-group">
                  <input id="simple-input" v-model="contact.email" readonly required/>
                  <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">Email</label><i class="bar"></i>
                </div>
              </div>
              <div class="form-group">
                <!-- Phone 1 -->
                <div class="input-group">
                  <input id="simple-input" v-model="contact.phone1" readonly required/>
                  <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">Phone 1</label><i class="bar"></i>
                </div>

                <!-- Phone 2 -->
                <div class="input-group">
                  <input id="simple-input" v-model="contact.phone2" readonly required/>
                  <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">Phone 2</label><i class="bar"></i>
                </div>
              </div>
              <div class="form-group">
                <!-- Type -->
                <div class="input-group">
                  <input id="simple-input" v-model="contact.contactType" readonly required/>
                  <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">Type</label><i class="bar"></i>
                </div>
              </div>
              <div class="form-group">
                <!-- Street1 -->
                <div class="input-group">
                  <input id="simple-input" v-model="contact.address1" readonly required/>
                  <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">Address 1</label><i class="bar"></i>
                </div>
                <!-- Street2 -->
                <div class="input-group">
                  <input id="simple-input" v-model="contact.address2" readonly required/>
                  <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">Address 2</label><i class="bar"></i>
                </div>

                <!-- City -->
                <div class="input-group">
                  <input id="simple-input" v-model="contact.addressCity" readonly required/>
                  <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">City</label><i class="bar"></i>
                </div>

              </div>

              <div class="form-group">
                <!-- State -->
                <div class="input-group">
                  <input id="simple-input" v-model="contact.addressState" readonly required/>
                  <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">State</label><i class="bar"></i>
                </div>
                <!-- Zip -->
                <div class="input-group">
                  <input id="simple-input" v-model="contact.addressZip" readonly required/>
                  <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">Zip Code</label><i class="bar"></i>
                </div>
              </div>

              <div class="form-group">
                <!-- Notes -->
                <div class="input-group">
                  <input id="simple-input" v-model="contact.notes" readonly required/>
                  <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">Notes</label><i class="bar"></i>
                </div>
              </div>

            </fieldset>
          </form>

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

          <!-- Order # -->
          <div class="input-group">
            <input id="simple-input" v-model="tryke.orderNum" maxlength="150" required/>
            <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">Order Num</label><i class="bar"></i>
          </div>

          <!-- Model -->
          <div class="input-group">
            <input id="simple-input" v-model="tryke.model" readonly required/>
            <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">Model</label><i class="bar"></i>
          </div>
        </div>

        <div class="form-group">
           <!-- Date Awarded -->
          <div class="input-group">
            <input id="simple-input" v-model="tryke.dateAwarded" readonly required/>
            <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">Date Awarded</label><i class="bar"></i>
          </div>

          <!-- Date Recieved -->
          <div class="input-group">
            <input id="simple-input" v-model="tryke.dateAwarded" readonly required/>
            <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">Date Recieved</label><i class="bar"></i>
          </div>
        </div>

        <div class="form-group">
          <!-- Funded By -->
          <div class="input-group">
            <input id="simple-input" v-model="tryke.fundedBy" readonly required/>
            <label style="font-size:0.6rem;#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">Funded By</label><i class="bar"></i>
          </div>

          <!-- Location Awarded -->
          <div class="input-group">
            <input id="simple-input" v-model="tryke.locationAwarded" readonly required/>
            <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">Location Awarded</label><i class="bar"></i>
          </div>
        </div>

        <div class="form-group">
          <!-- Notes -->
          <div class="input-group">
            <input id="simple-input" v-model="tryke.notes" readonly required/>
            <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">Notes</label><i class="bar"></i>
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
import { Auth } from 'aws-amplify'

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
        contactType: ''
      },
      tryke: {
        id: '',
        orderNum: '',
        awardeeId: '',
        model: '',
        dateAwarded: '',
        dateReceived: '',
        fundedBy: '',
        locationAwarded: '',
        notes: ''
      },
      awardee: {},
      contacts: [],
      trykes: [],
    }
  },

  /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

  methods: {

    clear (field) {
      this[field] = ''
    },

    // Depending on which id is sent it will open the Contacts MODAL or Trykes MODAL --> params - item = onClick item from Array, index = index where it was found in array id = 1 for Contact or 2 for Tryke
    displayModal (item, index, id) {
      this.editId = index
      if (id === 1) {
        this.contact.id = item.contactId
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
        this.contact.notes = item.notes
        this.contactModalTitle = 'View Contact'
        this.$refs.largeModal.open()
      } else {
        this.tryke.id = item.trykeId
        this.tryke.orderNum = item.orderNum
        this.tryke.model = item.model
        this.tryke.dateAwarded = item.dateAwarded
        this.tryke.dateReceived = item.dateReceived
        this.tryke.fundedBy = item.fundedBy
        this.tryke.locationAwarded = item.locationAwarded
        this.tryke.notes = item.notes
        this.trykeModalTitle = 'View Tryke'
        this.$refs.mediumModal.open()
      }
    }

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

  }, // end of methods sections

  /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

  created () {
    let self = this
    Auth.currentAuthenticatedUser()
      .then((data) => {
        this.$nextTick(() => {
          this.$validator.validateAll()
        })
        if (this.$route.params.id == null) {
          swal('Error', 'That is not a valid user.', 'error')
          this.$router.push({ name: 'view-awardees' })
        } else {
          try {
            fetch('https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/Test/awardee/' + this.$route.params.id)
              .then(response => response.json())
              .then(json => {
                this.awardee = json.Item
              })
            fetch(`https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/Test/awardee/${this.$route.params.id}/contacts`)
              .then(response => response.json())
              .then(json => {
                this.contacts = json.Items
              })
            fetch(`https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/Test/awardee/${this.$route.params.id}/trykes`)
              .then(response => response.json())
              .then(json => {
                this.trykes = json.Items
              })
          } catch (e) {
            swal('Error', "I'm sorry we could not get that user for you please try again.", 'error')
            this.$router.push({ name: 'view-awardees' })
          }
        }
      }).catch(function (err) {
        swal('Not Authenticated', err, 'error')
        self.$router.push({ name: 'login' })
      })
  },

  /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

  components: {
  }

}

</script>
