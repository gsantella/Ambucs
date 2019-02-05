<template>
  <div class="filters-page">
    <vuestic-widget headerText="Show filters">
      <div class="row">
        <div class="col-md-12">
          <div slot="body">
            <div class="row filters-page__filter-bar-container">
              <filter-bar
                v-model="name"
                class="filters-page__filter-bar"
                label="First Name"
              />
              <filter-bar
                v-model="email"
                class="filters-page__filter-bar"
                label="Last Name"
              />
              <vuestic-simple-select
                class="filters-page__filter-bar"
                label="City"
                v-model="city"
                :options="cityList"
              />
            </div>
          </div>
          <div class="filters-page__tags">
            <vuestic-tag
              v-if="name"
              :name="`Name: ${ name }`"
              removable
              @remove="name = ''"
            />
            <vuestic-tag
              v-if="email"
              :name="`Email: ${ email }`"
              removable
              @remove="email = ''"
            />
            <vuestic-tag
              v-if="city"
              :name="`City: ${ city }`"
              removable
              @remove="city = ''"
            />
            <span
              v-if="this.city || this.name || this.email"
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
            <td class="filters-page__table-heading">Id</td>
            <td class="filters-page__table-heading">Link</td>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in filteredItems" v-bind:key="item.id">
            <td>{{ item.firstName }}</td>
            <td>{{ item.lastName }}</td>
            <td>{{ item.city }}</td>
            <td><a v-bind:href="`https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/Test/awardee/${item.id}`">Link</a></td>

            <router-link :to="{ name: 'form-elements', params: { id: item.id } }">Navigate to Page2</router-link>

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
export default {
  name: 'filters',
  components: {
    VuesticWidget, FilterBar, SpringSpinner, VuesticSimpleSelect
  },
  data () {
    return {
      id: '',
      firstName: '',
      lastName: '',
      name: '',
      email: '',
      city: '',
      cityList: cityList,
      itemList: itemList,
    }
  },
  methods: {
    clearAll () {
      this.name = ''
      this.email = ''
      this.city = ''
    }
  },
  computed: {
    filteredItems () {
      let filteredItems = this.itemList
      if (this.name) {
        filteredItems = filteredItems.filter(item => item.firstName.toUpperCase()
          .search(this.name.toUpperCase()) !== -1)
      }
      if (this.email) {
        filteredItems = filteredItems.filter(item => item.lastName.toUpperCase()
          .search(this.email.toUpperCase()) !== -1)
      }
      if (this.city) {
        filteredItems = filteredItems.filter(item => item.city.toUpperCase()
          .search(this.city.toUpperCase()) !== -1)
      }
      return filteredItems
    }
  },
  created () {
    fetch('https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/Test')
      .then(response => response.json())
      .then(json => {
        this.itemList = json
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
