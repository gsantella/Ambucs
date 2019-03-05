<template>
  <div style="width:75%" class="login">
    <h2>Edit Account</h2>
    <form>
      <div class="form-group">
        <div class="input-group">
          <input type="password" id="password2" v-model="newPassword" required="required"/>
          <label class="control-label" for="password2">
            {{ $t('New Password') }}
          </label>
          <i class="bar"/>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <input type="password" id="password3" v-model="confirmPassword" required="required"/>
          <label class="control-label" for="password3">
            {{ $t('Confirm New Password') }}
          </label>
          <i class="bar"/>
        </div>
      </div>
      <div class="va-row">
        <div class="flex md3" align="center">
          <button class="btn btn-primary btn-micro" @click="updateUser()">
            {{ $t('Update') }}
          </button>
        </div>
        <div class="flex md3" align="center">
          <button class="btn btn-danger btn-micro" @click="cancelUser()">
            {{ $t('Cancel')}}
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import swal from 'sweetalert'

export default {
  name: 'Account',
  data () {
    return {
      newPassword: '',
      confirmPassword: '',
      User: JSON.parse(localStorage.getItem('setUser'))
    }
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
      if (this.newPassword === this.confirmPassword) {
        // Post to AWS
      } else {
        swal('Error', 'Passwords do not match.', 'warning')
      }
    }
  },
}

</script>
