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
                  <input id="simple-input1" type="email" required v-model="user.email" />
                  <label class="control-label" for="simple-input1" >Email</label><i class="bar"></i>
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

import VuesticWidget
  from '../../../vuestic-theme/vuestic-components/vuestic-widget/VuesticWidget'
import FilterBar
  from '../../../vuestic-theme/vuestic-components/vuestic-datatable/datatable-components/FilterBar.vue'
import VuesticSimpleSelect
  from '../../../vuestic-theme/vuestic-components/vuestic-simple-select/VuesticSimpleSelect'
import { SpringSpinner } from 'epic-spinners'
import swal from 'sweetalert'

export default {
  name: 'NewUser',
  components: {
    VuesticWidget, FilterBar, SpringSpinner, VuesticSimpleSelect
  },
  data () {
    return {
      user: {
        email: '',
        password: '',
        userPermission: '',
        awardeePermission: ''
      },
      writeUserPermission: false,
      writeAwardeePermission: false,
    }
  },
  computed: {

  },
  methods: {
    addUser () {
      if (this.writeAwardeePermission) {
        this.user.awardeePermission = 'true'
      }
      if (this.writeUserPermission) {
        this.user.userPermission = 'true'
      }
      Auth.signUp({
        'username': this.user.email,
        'password': this.user.password,
        'attributes': {
          'custom:writeUserPerm2': this.user.userPermission,
          'custom:writeAwardeePerm2': this.user.awardeePermission
        }

      })

      swal('Added', 'The User has been added.', 'success')
      setTimeout(() => this.$router.push({ name: 'view-users' }), 2500)
    },
    cancelUser () {
      swal({
        title: 'Are you sure you want to cancel this user?',
        text: 'Once deleted, you will not be able to recover this file.',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      })
        .then((willDelete) => {
          if (willDelete) {
            swal('Deleted', 'The user has been deleted.', 'success')
            this.$router.push({ name: 'view-users' })
          } else {
            swal('Cancelled', 'You have chosen not to delete the user.', 'warning')
          }
        })
    }
  }
}
</script>

<style>
</style>
