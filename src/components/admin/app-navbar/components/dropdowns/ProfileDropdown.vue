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
        <router-link :to="{name: option.redirectTo}" style="color:white" class="plain-link"
                     href="#">
          {{ $t(`${option.name}`) }}
        </router-link>
      </div>
      <a class="dropdown-item plain-link-item" @click="logout">Logout</a>
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
  methods: {
    logout () {
      Auth.signOut()
      localStorage.removeItem('email')
      localStorage.removeItem('awardeePerm')
      localStorage.removeItem('chapterPerm')
      localStorage.removeItem('userPerm')
      localStorage.removeItem('pass')
      this.$router.push({ name: 'login' })
    }
  },
  created () {
    this.User.email = localStorage.getItem('email')
    this.User.password = localStorage.getItem('pass')
    this.User.writeAwardeePermission = localStorage.getItem('awardeePerm')
    this.User.writeUserPermission = localStorage.getItem('userPerm')
    this.User.writeChapterPermission = localStorage.getItem('chapterPerm')
  },
  props: {
    options: {
      type: Array,
      default: () => [
        {
          name: 'Account',
          redirectTo: 'account',
        }
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
