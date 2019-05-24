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
                    <input id="simple-input" type="email" required v-model="user.email" autocomplete="off" readonly/>
                    <label class="control-label" for="simple-input">Email</label><i class="bar"></i>
                  </div>
                </div>

              <div class="form-group">
                <div class="va-row">
                  <div class="flex md3">
                    <vuestic-checkbox
                      :label="$t('Add/Edit Recipient Permission')"
                      v-model="user.writeAwardeePermission"
                    />
                  </div>
                  <div class="flex md3">
                    <vuestic-checkbox
                      :label="$t('Add/Edit User Permission')"
                      v-model="user.writeUserPermission"
                    />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="va-row">
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
      <div v-if="sessionUser.email !== user.email"
        class="flex sm6 lg6 xl3 justify--center">
        <button class="btn btn-danger" @click="deleteUser()">
          {{'Delete' | translate}}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import FilterBar
  from '../../../vuestic-theme/vuestic-components/vuestic-datatable/datatable-components/FilterBar.vue'
import VuesticSimpleSelect
  from '../../../vuestic-theme/vuestic-components/vuestic-simple-select/VuesticSimpleSelect'
import { SpringSpinner } from 'epic-spinners'
import swal from 'sweetalert'

export default {
  name: 'EditUser',
  components: {
    FilterBar, SpringSpinner, VuesticSimpleSelect
  },
  data () {
    return {
      URL: '',
      user: {
        URL: '',
        uuid: '',
        email: '',
        password: '',
        writeUserPermission: false,
        writeAwardeePermission: false,
        writeChapterPermission: false,
        enabled: '',
        userStatus: '',
        chapter: ''
      },
      passedUser: {},
      sessionUser: {
        email: ''
      }
    }
  },
  methods: {
    updateUser () {
      let attrObject = {
        'writeAwardeePerm2': this.user.writeAwardeePermission.toString(),
        'writeUserPerm2': this.user.writeUserPermission.toString()
      }
      fetch(`${this.URL}/Test/user/${this.passedUser.Username}`, {
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        method: 'PATCH',
        body: JSON.stringify(attrObject)
      }).then(() => {
        this.$store.commit('setLoading', true)
        this.$router.push({ name: 'view-users' })
      }).then(() => {
        swal('Updated', 'The User has been updated.', 'success')
      })
    },
    deleteUser () {
      swal({
        title: 'Are you sure you want to delete this User?',
        text: 'Once deleted, you will not be able to recover this file.',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      })
        .then((willDelete) => {
          if (willDelete) {
            try {
              fetch(`${this.URL}/Test/user/${this.user.uuid}`, {
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
    this.URL = this.API_URL
    window.addEventListener('beforeunload', function (e) {
      e.preventDefault()
      e.returnValue = ''
    })

    this.passedUser = sessionStorage.getItem('user')
    this.passedUser = JSON.parse(this.passedUser)

    if (this.passedUser === null) {
      swal('Error', 'That is not a valid user.', 'error')
      this.$router.push({ name: 'view-users' })
    } else {
      this.sessionUser.email = this.passedUser.email
      this.user.email = this.passedUser.Attributes[5].Value
      this.user.writeUserPermission = this.passedUser.Attributes[4].Value === 'true'
      this.user.writeAwardeePermission = this.passedUser.Attributes[1].Value === 'true'
      this.user.writeChapterPermission = this.passedUser.Attributes[3].Value === 'true'
      this.user.userStatus = this.passedUser.UserStatus === 'CONFIRMED'
      this.user.enabled = this.passedUser.Enabled
      this.user.uuid = this.passedUser.Username
    }
  }
}
</script>

<style>

</style>
