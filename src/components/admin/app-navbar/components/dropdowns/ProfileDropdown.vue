<template>
  <div class="profile-dropdown flex-center">
    <span class="profile-dropdown__avatar-container">
      <slot/>
    </span>
    <vuestic-dropdown
      v-model="isShown"
      position="bottom"
    >
      <span style="color:white;padding:35px">{{User.email}}</span>
      <div
        v-for="option in options"
        :key="option.name"
        class="dropdown-item plain-link-item"
      >
        <router-link :to="{name: option.redirectTo}" class="plain-link"
                     href="#">
          {{ $t(`${option.name}`) }}
        </router-link>
      </div>
    </vuestic-dropdown>
  </div>
</template>

<script>
import { Auth } from 'aws-amplify'

export default {
  name: 'profile-section',
  data () {
    return {
      isShown: false,
      RawUser: {},
      User: {
        email: '',
        password: '',
        writeAwardeePermission: false,
        writeUserPermission: false
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
      }).catch((err) => {
        console.log(err)
        self.$router.push({ name: 'login' })
      })
  },
  props: {
    options: {
      type: Array,
      default: () => [
        {
          name: 'Account',
          redirectTo: 'account',
        },
        {
          name: 'Logout',
          redirectTo: 'login',
        },
      ],
    },
  },
}
</script>

<style lang="scss">
@import '../../../../../vuestic-theme/vuestic-sass/resources/resources';

.profile-dropdown {
  cursor: pointer;

  &__avatar-container {
    display: inline-block;
    width: 50px;
    height: 50px;
    background-color: white;
    border: 2px solid $lighter-gray;
    overflow: hidden;
    border-radius: 50%;
    img {
      margin-left:3px;
      height: 85%;
      width: 85%;
    }
  }
}
</style>
