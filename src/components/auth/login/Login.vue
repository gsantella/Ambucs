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
import router from '../../../router'
import CognitoConfig from '../Cognito.config'
import Amplify, { Auth } from 'aws-amplify'
Amplify.configure(CognitoConfig)

export default {

  name: 'login',
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    handleSubmit () {
      Auth.signIn(this.user.email, this.user.password).then(() => {
        router.push({ name: 'view-awardees' })
      }).catch((response) => {
        if (response.message) {
          console.log(response.message)
        }
      })
    }
  },
  created () {
    Auth.signOut()
      .then(data => console.log(data))
      .catch(err => console.log(err))
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
