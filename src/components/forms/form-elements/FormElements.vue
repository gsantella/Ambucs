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
                      <label class="control-label" for="simple-input">Last Name</label><i class="bar"></i>
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
                      <input id="simple-input" v-model="awardee.address.street1" required/>
                      <label class="control-label" for="simple-input">Address 1</label><i class="bar"></i>
                    </div>
                  </div>

                  <div class="form-group with-icon-left">
                    <!-- Street 2 -->
                    <div class="input-group">
                      <input id="simple-input" v-model="awardee.address.street2" required/>
                      <label class="control-label" for="simple-input">Address 2</label><i class="bar"></i>
                    </div>
                  </div>

                  <div class="form-group with-icon-right">

                    <!-- City -->
                    <div class="input-group">
                      <input id="simple-input" v-model="awardee.address.city" required/>
                      <label class="control-label" for="simple-input">City</label><i class="bar"></i>
                    </div>
                    <!-- State -->
                    <div class="input-group">
                      <input id="simple-input" v-model="awardee.address.state" required/>
                      <label class="control-label" for="simple-input">State</label><i class="bar"></i>
                    </div>
                    <!-- Zip -->
                    <div class="input-group">
                      <input id="simple-input" v-model="awardee.address.zip" required/>
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
            <tr v-for="item in awardee.contacts" :key="item.id" @click="displayModal(item)">
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
              <td class="filters-page__table-heading">ID</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in awardee.trykes" :key="item.id" @click="displayModal(item)">
              <td>{{ item.model }}</td>
              <td>{{ item.id }}</td>
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

    <!--MODAL -->
    <modal v-if="showModal"  :passedObject="objectToPass" @close="showModal = false">
      <h3 slot="header">Edit / View</h3>

    </modal>

    </div>

  </div>
</template>

<script>
import router from '../../../router'
import modal from '@/components/forms/form-elements/modal.vue'

// var url = 'https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/'

export default {
  name: 'form-elements',
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
  data () {
    return {
      showModal: false,
      objectToPass: null,
      awardee: {
        firstName: 'FirstNameDefault',
        lastName: 'LastNameDefault',
        address: {
          street1: '123 Main Street',
          street2: 'Apt 2',
          city: 'Altoona',
          state: 'PA'
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
        trykes: {},
        contacts: {}
      }
    }
  },
  methods: {
    clear (field) {
      this[field] = ''
    },
    updateRecord () {
      try {
        alert('The record has been updated.')
      } catch (e) {
        console.log(e)
        alert('There was an issue trying to update this record,please try again later.')
      }
    },
    deleteRecord () {
      if (confirm('Are you sure you want to delete this record?')) {
        try {
          // axios.delete(url + 'Test', { data: awardee })
          alert('The record has been deleted.')
          router.push({ name: 'filters' })
        } catch (e) {
          console.log(e)
          alert("I'm sorry there was an issue trying to delete that record,please try again later.")
        }
      } else {
        alert('You have chosen not to delete the record.')
      }
    },
    displayModal (item) {
      this.showModal = true
      this.objectToPass = item
    }
  },
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
  components: {
    'modal': modal
  }
}
</script>
