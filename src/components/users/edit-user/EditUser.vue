<template>
  <div class="form-elements">
    <div class="va-row">
      <div class="flex md12">

        <vuestic-widget :headerText="'Edit User' | translate">
          <form>

                <fieldset>

                  <div class="form-group">

                    <!-- Email -->
                    <div class="input-group">
                      <input id="simple-input" type="email" required v-model="user.username"/>
                      <label class="control-label" for="simple-input">Email</label><i class="bar"></i>
                    </div>
                      <!-- First Name -->
                    <div class="input-group">
                      <input id="simple-input" required v-model="user.code"/>
                      <label class="control-label" for="simple-input">Code</label><i class="bar"></i>
                    </div>
                  </div>

                  <div class="form-group">

                    <!-- Last Name -->
                    <div class="input-group">
                      <input id="simple-input" required v-model="user.password"/>
                      <label class="control-label" for="simple-input">Password</label><i class="bar"></i>
                    </div>

                  </div>

                  <div class="form-group">
                <div class="va-row">
                  <div class="flex md3">
                    <vuestic-checkbox
                      :label="$t('Write Awardee Permission')"
                      v-model="writeAwardeePermission"
                    />
                  </div>
                  <div class="flex md3">
                    <vuestic-checkbox
                      :label="$t('Write User Permission')"
                      v-model="writeUserPermission"
                    />
                  </div>
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
        <button class="btn btn-primary" @click="resetUser()" >
          {{'Reset' | translate}}
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
import { Auth } from 'aws-amplify'

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
  data () {
    return {
      user: {
        username: '',
        code: '',
        password: '',
        role: ''
      }
    }
  },
  methods: {
    resetUser () {
      Auth.forgotPasswordSubmit(this.user.username, this.user.code, this.user.password)
        .then(data => console.log(data))
        .catch(err => console.log(err))
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
