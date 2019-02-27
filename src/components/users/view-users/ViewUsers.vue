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
    <vuestic-widget>
      <div class="table-responsive">
        <table class="table table-striped first-td-padding">
          <thead>
          <tr>
            <td class="filters-page__table-heading">Display Name</td>
            <td class="filters-page__table-heading">Email</td>
            <td class="filters-page__table-heading">User Role</td>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in users" :key="item.id" v-on:click="clickList(item)">
            <td>{{ item.displayName }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.userRole }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </vuestic-widget>

  </div>
</template>

<script>
import router from '../../../router'

export default {
  name: 'ViewUsers',
  data () {
    return {
      user: []
    }
  },
  components: {
  },

  methods: {
    clickList (user) {
      router.push({ name: 'edit-user', params: { id: user.id } })
    },
    addUser () {
      router.push({ name: 'new-user' })
    }
  },
  created: {

  }
}
</script>

<style lang="scss" scoped>

</style>
