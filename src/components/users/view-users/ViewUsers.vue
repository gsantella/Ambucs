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
          <b-container fluid>

    <b-input-group>
      <b-form-input v-model="filter" placeholder="Type to Search"></b-form-input>
    </b-input-group>

    <b-table striped hover
    :items="filteredItems"
    :fields="fields"
    @filtered="onFiltered"
    :filter="filter"
    :current-page="currentPage"
    :per-page="perPage"
    @row-clicked="clickList"
    />

    <b-row>
      <b-col md="6" class="my-1">
        <b-pagination
          :total-rows="totalRows"
          :per-page="perPage"
          v-model="currentPage"
          class="my-0"
        />
      </b-col>
    </b-row>

    </b-container>

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
      fields: [
        { key: 'Attributes[5].Value', label: 'Email', sortable: true }
      ],
      currentPage: 1,
      perPage: 5,
      totalRows: null,
      filter: null,
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
    onFiltered (filteredItems) {
      this.totalRows = filteredItems.length
      this.currentPage = 1
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
            this.totalRows = json.length
            console.log('test')
            console.log(json.Users)
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
