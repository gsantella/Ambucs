<template>
  <div class="form-elements">
    <div class="va-row">
      <div class="flex md12">

        <vuestic-widget :headerText="'Edit User' | translate">
          <form>

                <fieldset>

                  <div class="form-group">

                    <!-- First Name -->
                    <div class="input-group">
                      <input id="simple-input" required/>
                      <label class="control-label" for="simple-input">First Name</label><i class="bar"></i>
                    </div>

                    <!-- Last Name -->
                    <div class="input-group">
                      <input id="simple-input" required/>
                      <label class="control-label" for="simple-input">Last Name</label><i class="bar"></i>
                    </div>
                  </div>

                  <div class="form-group">

                    <!-- Email -->
                    <div class="input-group">
                      <input id="simple-input" type="email" required/>
                      <label class="control-label" for="simple-input">Email</label><i class="bar"></i>
                    </div>

                  </div>

                  <div class="form-group">

                    <!-- User Role -->
                    <div class="input-group">
                      <input id="simple-input" required/>
                      <label class="control-label" for="simple-input">User Role</label><i class="bar"></i>
                    </div>
                  </div>

                </fieldset>

          </form>
        </vuestic-widget>

      </div>
    </div>
     <!--Save Delete Buttons -->
    <div class="va-row btn-margin-row">
      <div
        class="flex sm6 lg6 xl3 justify--center">
        <button class="btn btn-primary" @click="addUser()" >
          {{'Save' | translate}}
        </button>
      </div>
      <div
        class="flex sm6 lg6 xl3 justify--center">
        <button class="btn btn-danger" @click="deleteUser()">
          {{'Delete' | translate}}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import router from '../../../router'
import VuesticWidget
  from '../../../vuestic-theme/vuestic-components/vuestic-widget/VuesticWidget'
import FilterBar
  from '../../../vuestic-theme/vuestic-components/vuestic-datatable/datatable-components/FilterBar.vue'
import VuesticSimpleSelect
  from '../../../vuestic-theme/vuestic-components/vuestic-simple-select/VuesticSimpleSelect'
import { SpringSpinner } from 'epic-spinners'

export default {
  name: 'EditUser',
  components: {
    VuesticWidget, FilterBar, SpringSpinner, VuesticSimpleSelect
  },
  methods: {
    addUser () {

    },
    deleteUser () {
      if (confirm('Are you sure you want to delete this user?')) {
        router.push({ name: 'view-users' })
      }
    }
  }
}
</script>

<style>
</style>
