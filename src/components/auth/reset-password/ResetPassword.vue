<template>
  <div class="login">
    <h2>{{ $t('Reset Password') }}</h2>
    <form name="login" @submit.prevent="resetPassword()">
        <div class="form-group">
            <div class="input-group">
            <input type="email" id="email" required="required" readonly v-model="email" />
            <label class="control-label" for="email">
                {{ $t('auth.email') }}
            </label>
            <i class="bar"/>
            </div>
        </div>
       <div class="form-group">
        <div class="input-group">
          <input type="text" id="code" required="required" v-model="code" />
          <label class="control-label" for="code">
            {{ $t('Code') }}
          </label>
          <i class="bar"/>
        </div>
      </div>
       <div class="form-group">
        <div class="input-group">
          <input type="password" id="password" required="required" v-model="password" />
          <label class="control-label" for="password">
            {{ $t('Password') }}
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
          <button class="btn btn-danger btn-micro"  style="float:right" @click="cancel()">
            {{ $t('Cancel') }}
          </button>
        </div>
      </div>
    </form>
  </div>

</template>

<script>
import CognitoConfig from '../Cognito.config'
import Amplify, { Auth } from 'aws-amplify'
import swal from 'sweetalert'
Amplify.configure(CognitoConfig)

export default {

  name: 'login',
  data () {
    return {
      email: '',
      code: '',
      password: '',
      userSession: '',
      toastText: '',
      toastDuration: 2500,
      toastIcon: 'fa-times',
      toastPosition: 'bottom-left',
      isToastFullWidth: false,
    }
  },
  methods: {
    launchToast (msg) {
      this.showToast(
        this.toastText = msg,
        {
          icon: this.toastIcon,
          position: this.toastPosition,
          duration: this.toastDuration,
          fullWidth: this.isToastFullWidth,
        },
      )
    },
    cancel () {
      this.$router.push({ name: 'login' })
    },
    resetPassword () {
      Auth.forgotPasswordSubmit(this.email, this.code, this.password)
        .then(swal('Success', 'Password Reset Successfully', 'success'))
        .then(this.$router.push({ name: 'login' }))
        .catch(err => swal('Error', err, 'error'))
    }
  },
  created () {
    this.email = this.$route.params.email
  }
}

</script>

<style lang="scss">
.login {

  @include media-breakpoint-down(md) {
    width: 100%;
    padding-right: 2rem;
    padding-left: 2rem;
    .down-container {
      display: none;
    }
  }

  h2 {
    text-align: center;
  }
  width: 21.375rem;

  .down-container {
    margin-top: 3.125rem;
  }
}
</style>
