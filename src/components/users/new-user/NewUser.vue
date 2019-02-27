<template>
  <div class="form-elements">
    <div class="va-row">
      <div class="flex md12">

        <vuestic-widget :headerText="'Add User' | translate">
          <form>
            <fieldset>
              <div class="form-group">

                <!-- Email -->
                <div class="input-group">
                  <input id="simple-input" type="email" required v-model="user.username" />
                  <label class="control-label" for="simple-input" >Email</label><i class="bar"></i>
                </div>

                <!-- Password -->
                <div class="input-group">
                  <input id="simple-input" type="password" required v-model="user.password" />
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
        <button class="btn btn-primary" @click="addUser()" >
          {{'Save' | translate}}
        </button>
      </div>
      <div
        class="flex sm6 lg6 xl3 justify--center">
        <button class="btn btn-danger" @click="cancelUser()">
          {{'Cancel' | translate}}
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
  name: 'NewUser',
  components: {
    VuesticWidget, FilterBar, SpringSpinner, VuesticSimpleSelect
  },
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      writeUserPermission: false,
      writeAwardeePermission: false
    }
  },
  computed: {

  },
  methods: {
    addUser () {
      Auth.signUp({
        'username': this.user.username,
        'password': this.user.password,
        'attributes': {
          'custom:writeUserPermission': this.writeUserPermission,
          'custom:writeAwardeePermission': this.writeAwardeePermission
        }
      })
    },
    cancelUser () {
      if (confirm('Are you sure you want to cancel?')) {
        router.push({ name: 'view-users' })
      }
    }
  }
}
</script>

<style>
</style>
