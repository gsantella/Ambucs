<template>
  <div>

      <button style="margin:5px 5px" @click="print()"  class="btn btn-primary btn-micro" >
        {{'Print This' | translate}}
      </button>

    <div class="va-row">
      <div class="flex md3"></div>
      <div class="flex md3">
        <h4>Awardee First Name : {{awardee.firstName}}</h4>
      </div>
      <div class="flex md3">
        <h4>Awardee Last Name : {{awardee.lastName}}</h4>
      </div>
      <div class="flex md3"></div>
    </div>

    <div class="va-row">
      <div class="flex md12">
        <vuestic-widget style="margin-top:15px" :headerText=" 'Awardee Record' | translate">
          <fieldset>
            <div class="form-group">
              <div class="input-group">
                {{awardee.firstName}}
                <label class="control-label" for="simple-input">First Name</label><i class="bar"></i>
              </div>

              <!-- Last Name -->
              <div class="input-group">
                {{awardee.lastName}}
                <label class="control-label" for="simple-input">Last Name</label><i class="bar"></i>
              </div>
            </div>
             <div class="form-group">
              <!-- First Name -->
              <div class="input-group">
                {{ awardee.dateOfBirth }}
                <label class="control-label" for="simple-input">Birth Date</label><i class="bar"></i>
              </div>

              <!-- Last Name -->
              <div class="input-group">
                {{ awardee.lastContacted }}
                <label class="control-label" for="simple-input">Last Contacted</label><i class="bar"></i>
              </div>
            </div>
             <div class="form-group">
              <!-- First Name -->
              <div class="input-group">
                {{ awardee.address1 }}
                <label class="control-label" for="simple-input">Address 1</label><i class="bar"></i>
              </div>

              <!-- Last Name -->
              <div class="input-group">
                {{ awardee.address2 }}
                <label class="control-label" for="simple-input">Address 2</label><i class="bar"></i>
              </div>
            </div>
             <div class="form-group">
              <!-- First Name -->
              <div class="input-group">
                {{ awardee.city }}
                <label class="control-label" for="simple-input">City</label><i class="bar"></i>
              </div>

              <!-- Last Name -->
              <div class="input-group">
                {{ awardee.state }}
                <label class="control-label" for="simple-input">State</label><i class="bar"></i>
              </div>
            </div>
             <div class="form-group">
              <!-- First Name -->
              <div class="input-group">
                {{ awardee.zip }}
                <label class="control-label" for="simple-input">Zip</label><i class="bar"></i>
              </div>

              <!-- Last Name -->
              <div class="input-group">
                {{ awardee.phone }}
                <label class="control-label" for="simple-input">Phone</label><i class="bar"></i>
              </div>
            </div>
             <div class="form-group">
              <!-- First Name -->
              <div class="input-group">
                {{ awardee.notes }}
                <label class="control-label" for="simple-input">Notes</label><i class="bar"></i>
              </div>
            </div>
          </fieldset>
        </vuestic-widget>
      </div>

    </div>
    <!--
    <vuestic-widget style="margin-top:15px" :headerText=" 'Awardee Record' | translate">
     <table class="table table-striped first-td-padding">
      <thead>
        <tr>
          <td class="filters-page__table-heading">First Name</td>
          <td class="filters-page__table-heading">Last Name</td>
          <td class="filters-page__table-heading">Date of Birth</td>
          <td class="filters-page__table-heading">Last Contacted</td>
          <td class="filters-page__table-heading">Address 1</td>
          <td class="filters-page__table-heading">Address 2</td>
          <td class="filters-page__table-heading">City</td>
          <td class="filters-page__table-heading">State</td>
          <td class="filters-page__table-heading">Zip</td>
          <td class="filters-page__table-heading">Phone</td>
          <td class="filters-page__table-heading">Notes</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ awardee.firstName }}</td>
          <td>{{ awardee.lastName }}</td>
          <td>{{ awardee.dateOfBirth }}</td>
          <td>{{ awardee.lastContacted }}</td>
          <td>{{ awardee.address1 }}</td>
          <td>{{ awardee.address2 }}</td>
          <td>{{ awardee.city }}</td>
          <td>{{ awardee.state }}</td>
          <td>{{ awardee.zip }}</td>
          <td>{{ awardee.Phone }}</td>
          <td>{{ awardee.notes }}</td>
        </tr>
      </tbody>
    </table>
    </vuestic-widget>
  -->
    <vuestic-widget :headerText=" 'Awardee Contacts' | translate">
      <table class="table table-striped first-td-padding">
        <thead>
          <tr>
            <td class="filters-page__table-heading">Type</td>
            <td class="filters-page__table-heading">First Name</td>
            <td class="filters-page__table-heading">Last Name</td>
            <td class="filters-page__table-heading">Phone Number 1</td>
            <td class="filters-page__table-heading">Phone Number 2</td>
            <td class="filters-page__table-heading">Address 1</td>
            <td class="filters-page__table-heading">Address 2</td>
            <td class="filters-page__table-heading">City</td>
            <td class="filters-page__table-heading">State</td>
            <td class="filters-page__table-heading">Zip</td>
            <td class="filters-page__table-heading">Notes</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in contacts" :key="item.id">
            <td>{{ item.contactType }}</td>
            <td>{{ item.firstName }}</td>
            <td>{{ item.lastName }}</td>
            <td>{{ item.phone1 }}</td>
            <td>{{ item.phone2 }}</td>
            <td>{{ item.address1 }}</td>
            <td>{{ item.address2 }}</td>
            <td>{{ item.addressCity }}</td>
            <td>{{ item.addressState }}</td>
            <td>{{ item.addressZip }}</td>
            <td>{{ item.notes }}</td>
          </tr>
        </tbody>
      </table>
    </vuestic-widget>

    <vuestic-widget :headerText=" 'Awardee Trykes' | translate">
      <table class="table table-striped first-td-padding">
        <thead>
          <tr>
            <td class="filters-page__table-heading">Model</td>
            <td class="filters-page__table-heading">Date Awarded</td>
            <td class="filters-page__table-heading">Date Received</td>
            <td class="filters-page__table-heading">Funded By</td>
            <td class="filters-page__table-heading">Location Awarded</td>
            <td class="filters-page__table-heading">Notes</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in trykes" :key="item.id">
            <td>{{ item.model }}</td>
            <td>{{ item.dateAwarded }}</td>
            <td>{{ item.dateReceived }}</td>
            <td>{{ item.fundedBy }}</td>
            <td>{{ item.locationAwarded }}</td>
            <td>{{ item.notes }}</td>
          </tr>
        </tbody>
      </table>
    </vuestic-widget>
  </div>
</template>

<style scoped>

</style>

<script>
import swal from 'sweetalert'
import { Auth } from 'aws-amplify'

export default {

  name: 'ViewAwardee',

  data () {
    return {
      awardee: {},
      contacts: [],
      trykes: []
    }
  },

  created () {
    Auth.currentAuthenticatedUser()
      .then((data) => {
        var awardeeId = localStorage.getItem('awardee-id')
        if (awardeeId === null) {
          swal('Error', 'That is not a valid user.', 'error')
          this.$router.push({ name: 'view-awardees' })
        } else {
          try {
            fetch('https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/Test/awardee/' + awardeeId)
              .then(response => response.json())
              .then(json => {
                this.awardee = json.Item
              })
            fetch(`https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/Test/awardee/${awardeeId}/contacts`)
              .then(response => response.json())
              .then(json => {
                this.contacts = json.Items
              })
            fetch(`https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/Test/awardee/${awardeeId}/trykes`)
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
        this.$router.push({ name: 'login' })
      })
  },
  methods: {
    print () {
      window.print()
    }
  }

}

</script>
