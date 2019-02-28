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
          <tr v-for="item in users" :key="item.id" v-on:click="clickList(item)">
            <td>{{ item.email }}</td>
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

export default {
  name: 'ViewUsers',
  data () {
    return {
      users: [],
      email: '',
    }
  },

  methods: {
    clearAll () {
      this.email = ''
    },
    clickList (user) {
      this.$router.push({ name: 'edit-user', params: { id: user.id } })
    },
    addUser () {
      this.$router.push({ name: 'new-user' })
    }
  },
  created: {

  },
  components: {
    VuesticWidget, FilterBar, VuesticSimpleSelect
  },
}
</script>

<style lang="scss" scoped>

</style>
