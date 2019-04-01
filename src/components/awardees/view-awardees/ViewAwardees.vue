<template>
  <div class="filters-page">

    <div class="row">
      <div v-if="User.writeAwardeePermission" class="col-md-12">
          <div style="margin-bottom:15px;float:right"
          class="flex sm6 lg6 xl3 justify--center">
            <button class="btn btn-primary" @click="newAwardee()" >
              {{'New Recipient' | translate}}
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
        writeChapterPermission: false
      },
      id: '',
      firstName: '',
      lastName: '',
      city: '',
      cityList: cityList,
      itemList: itemList,
      fields: [
        { key: 'firstName', label: 'First Name', sortable: true },
        { key: 'lastName', label: 'Last Name', sortable: true },
        { key: 'addressCity', label: 'City', sortable: true }
      ],
      currentPage: 1,
      perPage: 5,
      totalRows: null,
      sortBy: null,
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
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
    },
    onFiltered (filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    myRowClickHandler (record, index) {
      // 'record' will be the row data from items
      // `index` will be the visible row number (available in the v-model 'shownItems')
      console.log(record) // This will be the item data for the row
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
        this.User.writeChapterPermission = data.attributes['custom:writeChapterPerm2']
        try {
          fetch('https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/Test')
            .then(response => response.json())
            .then(json => {
              console.log(json)
              this.itemList = json
              this.totalRows = json.length
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
tr td {
  cursor: pointer;
}

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
