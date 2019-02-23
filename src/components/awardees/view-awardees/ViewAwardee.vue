<template>
  <div>
    <a href="javascript:window.print()">Print This</a>
    <h1>{{ awardee }}</h1>
    <h2>{{ contacts }}</h2>
    <h2>{{ trykes }}</h2>

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

  </div>
</template>

<style scoped>

</style>

<script>
import router from '../../../router'
import swal from 'sweetalert'

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
      router.push({ name: 'view-awardee' })
    }
  }

}

</script>
