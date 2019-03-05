<template>
  <vuestic-navbar>
    <header-selector slot="selector" :isOpen.sync="valueProxy"/>
    <span slot="logo">
      <img style="width:110px;heigh:65px" src="@/assets/icons/logo.png"/>
    </span>

    <profile-dropdown v-if="User.email !== ''"  class="col nav-item">

      <span style="margin-right:5px;font-size:47px" class="fa fa-user-circle-o"></span>
      <!--{{ User.email }}-->
    </profile-dropdown>
    <profile-dropdown v-if="User.email === ''" class="col nav-item">
      Not Authenticated
    </profile-dropdown>

  </vuestic-navbar>

</template>

<script>
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
      // User: this.$store.getters.User,
      User: JSON.parse(localStorage.getItem('setUser'))
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
  }
}
</script>
