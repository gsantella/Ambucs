<template>
  <div class="login">
    <h2>{{ $t('auth.welcome') }}</h2>
    <form name="login" @submit.prevent="handleSubmit">
      <div class="form-group">
        <div class="input-group">
          <input type="email" id="email" v-model="user.email" />
          <label class="control-label" for="email">
            {{ $t('auth.email') }}
          </label>
          <i class="bar"/>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <input type="password" id="password" v-model="user.password" />
          <label class="control-label" for="password">
            {{ $t('auth.password') }}
          </label>
          <i class="bar"/>
        </div>
      </div>
      <div class="va-row">
        <div class="flex md4">
          <button class="btn btn-primary btn-micro" style="font-size:13px" type="submit">
            {{ $t('auth.login') }}
          </button>
        </div>
        <div class="flex md8" >
          <button class="btn btn-danger btn-micro" style="float:right;font-size:13px" @click="forgotPassword()">
            {{ $t('Forgot Password') }}
          </button>
        </div>
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
      user: {
        email: '',
        password: '',
        writeUserPermission: '',
        writeAwardeePermission: ''
      },
      userSession: '',
      toastText: 'Authentication failed, username or password does not exist',
      toastDuration: 2500,
      toastIcon: 'fa-times',
      toastPosition: 'bottom-left',
      isToastFullWidth: false,
    }
  },
  methods: {
    forgotPassword () {
      this.$router.push({ name: 'forgot-password' })
    },
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
      Auth.signIn(this.user.email, this.user.password).then(() => {
        Auth.currentAuthenticatedUser({
          bypassCache: false
        }).then((user) => {
          let awardeePerm = user.attributes['custom:writeAwardeePerm2']
          let chapterPerm = user.attributes['custom:writeChapterPerm2']
          let userPerm = user.attributes['custom:writeUserPerm2']
          let email = user.attributes['email']
          let pass = user.attributes['sub']

          sessionStorage.setItem('email', email)
          sessionStorage.setItem('awardeePerm', awardeePerm)
          sessionStorage.setItem('chapterPerm', chapterPerm)
          sessionStorage.setItem('userPerm', userPerm)
          sessionStorage.setItem('pass', pass)
        })
          .catch(err => console.log(err))

        setTimeout(() => this.$router.push({ name: 'view-awardees' }), 1000)
      }).catch((response) => {
        this.launchToast(response.message)
        this.user.password = ''
      })
    }
  },
  created () {
    Auth.signOut()
    this.user.email = ''
    this.user.password = ''
    this.user.writeUserPermission = false
    this.user.writeAwardeePermission = false
    sessionStorage.removeItem('email')
    sessionStorage.removeItem('awardeePerm')
    sessionStorage.removeItem('chapterPerm')
    sessionStorage.removeItem('userPerm')
    sessionStorage.removeItem('pass')
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
