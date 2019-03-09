<template>
  <div>
    <div class="row">
      <div class="col-md-12">
          <div style="margin-bottom:15px;float:right"
          class="flex sm6 lg6 xl3 justify--center">
            <button class="btn btn-primary" @click="addUser()" >
              {{'New User' | translate}}
            </button>
          </div>
      </div>
    </div>
        <vuestic-widget headerText="Search">
      <div class="row">
        <div class="col-md-12">
          <div slot="body">

            <div class="row filters-page__filter-bar-container">
              <filter-bar
                v-model="email"
                class="filters-page__filter-bar"
                label="Email"
              />
            </div>
          </div>
          <div class="filters-page__tags">
            <vuestic-tag
              v-if="email"
              :name="`Email: ${ email }`"
              removable
              @remove="email = ''"
            />
            <span
              v-if="this.email"
              class="filters-page__clear-all-text"
              @click="clearAll"
            >
              Clear all filters
            </span>
          </div>
        </div>
      </div>
    </vuestic-widget>

    <vuestic-widget>
      <div class="table-responsive">
        <table class="table table-striped first-td-padding">
          <thead>
          <tr>
            <td class="filters-page__table-heading">Email</td>
          </tr>
          </thead>
          <tbody>
          <tr v-for="user in filteredItems" :key="user.id" v-on:click="clickList(user)">
            <td class="pointer">{{user.Attributes[4].Value}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </vuestic-widget>

  </div>
</template>

<script>
import VuesticWidget
  from '@/vuestic-theme/vuestic-components/vuestic-widget/VuesticWidget'
import FilterBar
  from '@/vuestic-theme/vuestic-components/vuestic-datatable/datatable-components/FilterBar.vue'
import VuesticSimpleSelect
  from '@/vuestic-theme/vuestic-components/vuestic-simple-select/VuesticSimpleSelect'
import swal from 'sweetalert'
import { Auth } from 'aws-amplify'

export default {
  name: 'ViewUsers',
  data () {
    return {
      users: [],
      email: '',
      count: 0,
    }
  },
  computed: {
    filteredItems () {
      let filteredItemsLocal = this.users
      if (this.email) {
        filteredItemsLocal = filteredItemsLocal.filter(item => item.email.toUpperCase()
          .search(this.email.toUpperCase()) !== -1)
      }
      return filteredItemsLocal
    },
  },
  methods: {
    clearAll () {
      this.email = ''
    },
    clickList (user) {
      this.$router.push({ name: 'edit-user', params: { user: user } })
      localStorage.setItem('user-id', user.id)
    },
    addUser () {
      this.$router.push({ name: 'new-user' })
    }
  },
  created () {
    let self = this
    Auth.currentAuthenticatedUser()
      .then((data) => {
        fetch('https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/Test/user')
          .then(response => response.json())
          .then(json => {
            this.users = json.Users
          })
      }).catch(function (err) {
        swal('Not Authenticated', err, 'error')
        self.$router.push({ name: 'login' })
      })
  },
  components: {
    VuesticWidget, FilterBar, VuesticSimpleSelect
  },
}
</script>

<style lang="scss" scoped>

</style>
