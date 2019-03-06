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
                  <div  class="flex md3">
                    <vuestic-checkbox
                    :label="$t('Account Enabled')"
                    :disabled="true"
                    v-model="user.enabled"
                    />
                  </div>
                   <div class="flex md3">
                    <vuestic-checkbox
                    :label="$t('Account Confirmed')"
                    :disabled="true"
                    v-model="user.userStatus"
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

import VuesticWidget
  from '../../../vuestic-theme/vuestic-components/vuestic-widget/VuesticWidget'
import FilterBar
  from '../../../vuestic-theme/vuestic-components/vuestic-datatable/datatable-components/FilterBar.vue'
import VuesticSimpleSelect
  from '../../../vuestic-theme/vuestic-components/vuestic-simple-select/VuesticSimpleSelect'
import { SpringSpinner } from 'epic-spinners'
import swal from 'sweetalert'

export default {
  name: 'EditUser',
  components: {
    VuesticWidget, FilterBar, SpringSpinner, VuesticSimpleSelect
  },
  data () {
    return {
      user: {
        uuid: '',
        email: '',
        password: '',
        writeUserPermission: false,
        writeAwardeePermission: false,
        enabled: '',
        userStatus: ''
      },
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
          'custom:writeUserPerm2': this.user.writeUserPermission,
          'custom:writeAwardeePerm2': this.user.writeAwardeePermission
        }
      })
      this.$store.commit('setLoading', true)
      */
    },
    resetPassword () {
      Auth.forgotPasswordSubmit(this.user.username, this.user.code, this.user.password)
        .then(data => console.log(data))
        .catch(err => console.log(err))
    },
    deleteUser () {
      swal({
        title: 'Are you sure you want to delete this record?',
        text: 'Once deleted, you will not be able to recover this file.',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      })
        .then((willDelete) => {
          if (willDelete) {
            try {
              fetch(`https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/Test/user/${this.user.uuid}`, {
                method: 'DELETE'
              }).then(swal('Deleted', 'The User has been deleted.', 'success'))
              this.$store.commit('setLoading', true)
              setTimeout(() => this.$router.push({ name: 'view-users' }), 2500)
            } catch (e) {
              swal('Error', "I'm sorry there was an issue trying to delete that user,please try again later.", 'error')
            }
          } else {
            swal('Cancelled', 'You have chosen not to delete the user.', 'warning')
          }
        })
    }
  },
  created () {
    let self = this
    Auth.currentAuthenticatedUser()
      .then((data) => {
        this.user.email = this.$route.params.user.Attributes[4].Value
        if (this.$route.params.user.Attributes[3].Value === 'true') {
          this.user.writeUserPermission = true
        } else {
          this.user.writeUserPermission = false
        }
        if (this.$route.params.user.Attributes[1].Value === 'true') {
          this.user.writeAwardeePermission = true
        } else {
          this.user.writeAwardeePermission = false
        }
        if (this.$route.params.user.UserStatus === 'CONFIRMED') {
          this.user.userStatus = true
        } else {
          this.user.userStatus = false
        }
        this.user.enabled = this.$route.params.user.Enabled
        this.user.uuid = this.$route.params.user.Username
      }).catch(function (err) {
        var user = {
          email: '',
          password: '',
          writeUserPermission: false,
          writeAwardeePermission: false
        }
        localStorage.setItem('setUser', JSON.stringify(user))
        swal('Not Authenticated', err, 'error')
        self.$router.push({ name: 'login' })
      })
  }
}
</script>

<style>

</style>
