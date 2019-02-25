<template>
  <vuestic-navbar>
    <header-selector slot="selector" :isOpen.sync="valueProxy"/>
    <span slot="logo">
      AMBUCS
    </span>

    <!--
    <message-dropdown class="col nav-item"/>
    <notification-dropdown class="col nav-item"/>
    <language-dropdown class="col nav-item"/>
    -->
    <profile-dropdown v-if="user.email !== ''" class="col nav-item">
      {{ user.email }}
    </profile-dropdown>
    <profile-dropdown v-if="user.email === ''" class="col nav-item">
      Not Authenticated
    </profile-dropdown>

  </vuestic-navbar>

</template>

<script>
// import CognitoConfig from '../Cognito.config'
// Amplify.configure(CognitoConfig)
import { Auth } from 'aws-amplify'

import VuesticIconVuestic
  from '../../../vuestic-theme/vuestic-components/vuestic-icon/VuesticIconVuestic'
import VuesticNavbar
  from '../../../vuestic-theme/vuestic-components/vuestic-navbar/VuesticNavbar'
import HeaderSelector from './components/HeaderSelector'

import LanguageDropdown from './components/dropdowns/LanguageDropdown'
import ProfileDropdown from './components/dropdowns/ProfileDropdown'
import NotificationDropdown from './components/dropdowns/NotificationDropdown'
import MessageDropdown from './components/dropdowns/MessageDropdown'

export default {
  name: 'app-navbar',
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  components: {
    VuesticIconVuestic,
    VuesticNavbar,
    HeaderSelector,
    MessageDropdown,
    NotificationDropdown,
    LanguageDropdown,
    ProfileDropdown,
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    valueProxy: {
      get () {
        return this.isOpen
      },
      set (opened) {
        this.$emit('toggle-menu', opened)
      },
    },
  },
  created () {
    Auth.currentAuthenticatedUser()
    // .then(data => console.log(data))
      .then((data) => { this.user = data.attributes })
      .catch(err => console.log(err))
  }
}
</script>
