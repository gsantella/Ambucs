<template>
  <div class="login">
    <h2>{{ $t('Reset Password') }}</h2>
    <form name="login" @submit.prevent="updateUser()">
      <div class="form-group">
        <div class="input-group">
          <input type="password" id="oldPassword" required="required" v-model="oldPassword" />
          <label class="control-label" for="oldPassword">
            {{ $t('Old Password') }}
          </label>
          <i class="bar"/>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <input type="password" id="newPassword" required="required" v-model="newPassword" />
          <label class="control-label" for="newPassword">
            {{ $t('New Password') }}
          </label>
          <i class="bar"/>
        </div>
      </div>

      <div class="va-row">
        <div class="flex md4">
          <button class="btn btn-primary btn-micro" type="submit">
            {{ $t('Reset') }}
          </button>
        </div>
        <div class="flex md8">
          <button class="btn btn-danger btn-micro"  style="float:right" @click="cancelUser()">
            {{ $t('Cancel') }}
          </button>
        </div>
      </div>
    </form>
  </div>

</template>

<script>
import swal from 'sweetalert'
import { Auth } from 'aws-amplify'

export default {
  name: 'Account',
  data () {
    return {
      newPassword: '',
      oldPassword: '',
      RawData: {},
      User: {
        email: '',
        password: '',
        writeAwardeePermission: '',
        writeUserPermission: '',
        writeChapterPermission: '',
      }
    }
  },
  created () {
    let self = this
    Auth.currentAuthenticatedUser()
      .then((data) => {
        this.User.email = data.attributes['email']
        this.User.password = data.attributes['sub']
        this.User.writeAwardeePermission = data.attributes['custom:writeAwardeePerm2']
        this.User.writeUserPermission = data.attributes['custom:writeUserPerm2']
        this.User.writeChapterPermission = data.attributes['custom:writeChapterPerm2']
      }).catch((err) => {
        console.log(err)
        self.$router.push({ name: 'login' })
      })
  },
  methods: {
    cancelUser () {
      swal({
        title: 'Are you sure you want to cancel your updates?',
        text: 'Once cancelled, your password will not be reset',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      })
        .then((willDelete) => {
          if (willDelete) {
            this.$router.push({ name: 'view-awardees' })
          } else {
            swal('Not Cancelled', 'Please continue to update your password.', 'warning')
          }
        })
    },
    updateUser () {
      Auth.currentAuthenticatedUser()
        .then(user => {
          Auth.changePassword(user, this.oldPassword, this.newPassword).then(() => {
            swal('Success', 'Password Updated', 'success')
          }).then(() => {
            this.$router.push({ name: 'view-awardees' })
          }).catch((err) => {
            console.log(err)
          })
        }).catch((err) => {
          console.log(err)
        })
    }
  },
}

</script>
