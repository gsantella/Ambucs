<template>
  <div class="filters-page">

    <div class="row" style="margin-bottom:10px">
      <div class="col-md-4">
        <download-csv
            class = "btn btn-default btn-micro"
            :data = "itemList"
            name  = "AmbucsDatabaseExport.csv">
            Export Database CSV
        </download-csv>
      </div>
      <div v-if="User.writeAwardeePermission" class="col-md-8">
          <div style="margin-bottom:15px;float:right">
            <button class="btn btn-primary btn-micro" style="text-align:center" @click="newAwardee()" >
              {{'New Recipient' | translate}}
            </button>
          </div>
      </div>
    </div>

    <b-container fluid>

    <b-input-group>
      <b-form-input v-model="filter" placeholder="Type to Search" style="padding: 25px; font-size: 1.2em; border: 1px solid"></b-form-input>
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
import swal from 'sweetalert'

export default {
  name: 'ViewAwardees',
  components: {
    VuesticWidget, FilterBar, SpringSpinner, VuesticSimpleSelect
  },
  data () {
    return {
      URL: '',
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
      perPage: 20,
      totalRows: null,
      sortBy: null,
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
    }
  },
  methods: {
    csvExport () {
      let csvContent = 'data:text/csv;charset=utf-8,'
      csvContent += [
        Object.keys(this.itemList[0]).join(';'),
        ...this.itemList.map(item => Object.values(item).join(';'))
      ]
        .join('\n')
        .replace(/(^\[)|(\]$)/gm, '')

      const data = encodeURI(csvContent)
      const link = document.createElement('a')
      link.setAttribute('href', data)
      link.setAttribute('download', 'Ambucs-Database-Export.csv')
      link.click()
    },
    clearAll () {
      this.firstName = ''
      this.lastName = ''
      this.city = ''
    },
    clickList (item) {
      sessionStorage.setItem('awardee-id', item.id)
      this.$router.push({ name: 'edit-awardee', params: { id: item.id } })
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
    this.URL = this.API_URL
    this.User.email = localStorage.getItem('email')
    this.User.password = localStorage.getItem('pass')
    this.User.writeAwardeePermission = localStorage.getItem('awardeePerm') === 'true'
    this.User.writeUserPermission = localStorage.getItem('userPerm') === 'true'
    this.User.writeChapterPermission = localStorage.getItem('chapterPerm') === 'true'
    try {
      fetch(`${this.URL}/Test`)
        .then(response => response.json())
        .then(json => {
          this.itemList = json
          this.totalRows = json.length
        })
    } catch (e) {
      swal('error', "I'm sorry there was an issue getting awardees,please try again.", 'error')
    }
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
