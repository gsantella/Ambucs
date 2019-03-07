<template>
  <div class="filters-page">
    <div class="row">
      <div v-if="User.writeAwardeePermission" class="col-md-12">
          <div style="margin-bottom:15px;float:right"
          class="flex sm6 lg6 xl3 justify--center">
            <button class="btn btn-primary" @click="newAwardee()" >
              {{'New Awardee' | translate}}
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
                v-model="firstName"
                class="filters-page__filter-bar"
                label="First Name"
              />
              <filter-bar
                v-model="lastName"
                class="filters-page__filter-bar"
                label="Last Name"
              />
              <filter-bar
                v-model="city"
                class="filters-page__filter-bar"
                label="City"
              />
            </div>
          </div>
          <div class="filters-page__tags">
            <vuestic-tag
              v-if="firstName"
              :name="`First Name: ${ firstName }`"
              removable
              @remove="firstName = ''"
            />
            <vuestic-tag
              v-if="lastName"
              :name="`Last Name: ${ lastName }`"
              removable
              @remove="lastName = ''"
            />
            <vuestic-tag
              v-if="city"
              :name="`City: ${ city }`"
              removable
              @remove="city = ''"
            />
            <span
              v-if="this.city || this.firstName || this.lastName"
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
            <td class="filters-page__table-heading">First Name</td>
            <td class="filters-page__table-heading">Last Name</td>
            <td class="filters-page__table-heading">City</td>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in filteredItems" :key="item.id" v-on:click="clickList(item)">
            <td>{{ item.firstName }}</td>
            <td>{{ item.lastName }}</td>
            <td>{{ item.city }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </vuestic-widget>
  </div>
</template>

<script>
import VuesticWidget
  from '../../../vuestic-theme/vuestic-components/vuestic-widget/VuesticWidget'
import FilterBar
  from '../../../vuestic-theme/vuestic-components/vuestic-datatable/datatable-components/FilterBar.vue'
import VuesticSimpleSelect
  from '../../../vuestic-theme/vuestic-components/vuestic-simple-select/VuesticSimpleSelect'
import { SpringSpinner } from 'epic-spinners'
import { cityList, itemList } from './filtersData'
import _ from 'lodash'
import { Auth } from 'aws-amplify'
import swal from 'sweetalert'

export default {
  name: 'ViewAwardees',
  components: {
    VuesticWidget, FilterBar, SpringSpinner, VuesticSimpleSelect
  },
  data () {
    return {
      User: {
        email: '',
        password: '',
        writeAwardeePermission: false,
        writeUserPermission: false,
      },
      id: '',
      firstName: '',
      lastName: '',
      city: '',
      cityList: cityList,
      itemList: itemList
    }
  },
  methods: {
    clearAll () {
      this.firstName = ''
      this.lastName = ''
      this.city = ''
    },
    clickList (item) {
      if (this.User.writeAwardeePermission) {
        this.$router.push({ name: 'edit-awardee', params: { id: item.id } })
        localStorage.setItem('awardee-id', item.id)
      } else {
        this.$router.push({ name: 'view-awardee', params: { id: item.id } })
        localStorage.setItem('awardee-id', item.id)
      }
    },
    newAwardee () {
      this.$router.push({ name: 'add-awardee' })
    }
  },
  computed: {
    filteredItems () {
      let filteredItemsLocal = this.orderedItems
      if (this.firstName) {
        filteredItemsLocal = filteredItemsLocal.filter(item => item.firstName.toUpperCase()
          .search(this.firstName.toUpperCase()) !== -1)
      }
      return filteredItemsLocal
    },
    orderedItems: function () {
      return _.orderBy(this.itemList, 'timestampCreated', ['desc'])
    }
  },
  created () {
    let self = this
    Auth.currentAuthenticatedUser()
      .then((data) => {
        this.User.email = data.attributes['email']
        this.User.password = data.attributes['sub']
        this.User.writeAwardeePermission = data.attributes['custom:writeAwardeePerm2']
        this.User.writeUserPermission = data.attributes['custom:writeUserPerm2']
        try {
          fetch('https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/Test')
            .then(response => response.json())
            .then(json => {
              this.itemList = json
            })
        } catch (e) {
          swal('error', "I'm sorry there was an issue getting awardees,please try again.", 'error')
        }
      }).catch(function (err) {
        swal('Not Authenticated', err, 'error')
        self.$router.push({ name: 'login' })
      })
  }
}
</script>

<style lang="scss">
.filters-page {
  &__tags {
    display: flex;
  }
  &__filter-bar {
    width: 300px;
  }
  &__filter-bar-container {
    margin: 0;
    justify-content: space-between;
  }
  &__table-heading {
    color: $vue-green
  }
  &__collapse {
    .vuestic-collapse__body {
      background-color: white;
    }
  }
  &__clear-all-text {
    cursor: pointer;
    color: $vue-green;
    margin-top: 0.3rem;
  }
}
</style>
