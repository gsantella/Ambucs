<template>
  <div class="login">
    <h2>{{ $t('auth.welcome') }}</h2>
    <form name="login" @submit.prevent="handleSubmit">
      <div class="form-group">
        <div class="input-group">
          <input type="email" id="email" required="required" v-model="user.email" />
          <label class="control-label" for="email">
            {{ $t('auth.email') }}
          </label>
          <i class="bar"/>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <input type="password" id="password" required="required" v-model="user.password" />
          <label class="control-label" for="password">
            {{ $t('auth.password') }}
          </label>
          <i class="bar"/>
        </div>
      </div>
      <div  align="center">
        <button class="btn btn-primary" type="submit">
          {{ $t('auth.login') }}
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
        Auth.currentAuthenticatedUser()
          .then((data) => {
            this.user.email = data.attributes.email
            this.user.password = data.attributes.sub
            this.user.writeUserPermission = data.attributes['custom:writeUserPerm2']
            this.user.writeAwardeePermission = data.attributes['custom:writeAwardeePerm2']
            // this.$store.commit('setUser', this.user)
            localStorage.setItem('setUser', JSON.stringify(this.user))
            this.userSession = setTimeout(() => {
              this.user.email = ''
              this.user.password = ''
              this.user.writeUserPermission = false
              this.user.writeAwardeePermission = false
              localStorage.setItem('setUser', JSON.stringify(this.user))
              this.$router.push({ name: 'login' })
            }, 1800000) // 30min
            this.$router.push({ name: 'view-awardees' })
          })
          .catch(err => console.log(err))
      }).catch((response) => {
        this.launchToast(response.message)
      })
    }
  },
  created () {
    Auth.signOut()
    this.user.email = ''
    this.user.password = ''
    this.user.writeUserPermission = false
    this.user.writeAwardeePermission = false
    // this.$store.commit('setUser', this.user)
    localStorage.setItem('setUser', JSON.stringify(this.user))
    clearTimeout(this.userSession)
    localStorage.removeItem('awardee-id')
    localStorage.removeItem('user-id')
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
