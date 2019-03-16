<template>
  <div class="login">
    <h2>{{ $t('Reset Password') }}</h2>
    <form name="login" @submit.prevent="handleSubmit">
      <div class="form-group">
        <div class="input-group">
          <input type="email" id="email" required="required" v-model="email" />
          <label class="control-label" for="email">
            {{ $t('auth.email') }}
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
      <div class="va-row">
        <input type="code" id="code" v-model="code" />
            <label class="control-label" for="code">
              Code
            </label>
        <input type="password" id="password" v-model="password" />
            <label class="control-label" for="password">
              Password
            </label>
        <button class="btn btn-danger btn-micro"  style="float:right" @click="resetPassword()">
            Reset Password
          </button>
      </div>
    </form>
  </div>

</template>

<script>
import CognitoConfig from '../Cognito.config'
import Amplify, { Auth } from 'aws-amplify'
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
    handleSubmit () {
      Auth.forgotPassword(this.email)
        .then(data => console.log(data))
        .catch(err => console.log(err))
    },
    cancel () {
      this.$router.push({ name: 'login' })
    },
    resetPassword () {
      Auth.forgotPasswordSubmit(this.email, this.code, this.password)
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }
  },
  created () {

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
