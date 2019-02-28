<template>
  <div class="form-elements">

    <div class="va-row">
      <div class="flex md12">
          <div style="float:right"
          class="flex sm6 lg6 xl3 justify--center">
            <button class="btn btn-primary btn-micro" @click="resetPassword()" >
              {{'Reset Password' | translate}}
            </button>
          </div>
      </div>
    </div>
    <div class="va-row">
      <div class="flex md12">
        <vuestic-widget :headerText="'Edit User' | translate">
          <form>

                <fieldset>
                  <div class="form-group">
                    <!-- Display Name -->
                    <div class="input-group">
                      <input id="simple-input" type="email" required v-model="user.displayName"/>
                      <label class="control-label" for="simple-input">Display Name</label><i class="bar"></i>
                    </div>
                  </div>
                  <div class="form-group">

                    <!-- Email -->
                    <div class="input-group">
                      <input id="simple-input" type="email" required v-model="user.email"/>
                      <label class="control-label" for="simple-input">Email</label><i class="bar"></i>
                    </div>

                  </div>

              <div class="form-group">
                <div class="va-row">
                  <div class="flex md3">
                    <vuestic-checkbox
                      :label="$t('Write Awardee Permission')"
                      v-model="user.writeAwardeePermission"
                    />
                  </div>
                  <div class="flex md3">
                    <vuestic-checkbox
                      :label="$t('Write User Permission')"
                      v-model="user.writeUserPermission"
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
        <button class="btn btn-primary" @click="updateUser()" >
          {{'Update' | translate}}
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
        displayName: '',
        email: '',
        code: '',
        password: '',
        writeUserPermission: false,
        writeAwardeePermission: false
      }
    }
  },
  methods: {
    updateUser () {
      /*
      Auth.Update({
        'displayName': this.user.displayName,
        'email': this.user.email,
        'password': this.user.password,
        'attributes': {
          'custom:writeUserPermission': this.user.writeUserPermission,
          'custom:writeAwardeePermission': this.user.writeAwardeePermission
        }
      })
      */
    },
    resetPassword () {
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
