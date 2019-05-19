<template>
  <vuestic-sidebar :hidden="isOpen">
    <template slot="menu">

      <sidebar-link
        :to="{ name: 'view-awardees' }">
        <span slot="title">
          <span
            class="sidebar-menu-item-icon vuestic-icon vuestic-icon-dashboard"></span>
          <span>Recipients</span>
        </span>
      </sidebar-link>
      <div v-if="User.writeUserPermission">
        <sidebar-link
        :to="{ name: 'view-users' }">
        <span slot="title">
          <span
            class="sidebar-menu-item-icon vuestic-icon vuestic-icon-dashboard"></span>
          <span>Users</span>
        </span>
      </sidebar-link>
      </div>
    </template>
  </vuestic-sidebar>
</template>

<script>

import VuesticSidebar
  from '../../../vuestic-theme/vuestic-components/vuestic-sidebar/VuesticSidebar'
import SidebarLink from './components/SidebarLink'
import SidebarLinkGroup from './components/SidebarLinkGroup'

export default {
  name: 'app-sidebar',
  components: {
    VuesticSidebar,
    SidebarLink,
    SidebarLinkGroup,
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  data () {
    return {
      RawUser: {},
      User: {
        email: '',
        password: '',
        writeAwardeePermission: false,
        writeUserPermission: false,
        writeChapterPermission: false
      }
    }
  },
  created () {
    this.User.email = localStorage.getItem('email')
    this.User.password = localStorage.getItem('pass')
    this.User.writeAwardeePermission = localStorage.getItem('awardeePerm')
    this.User.writeUserPermission = localStorage.getItem('userPerm')
    this.User.writeChapterPermission = localStorage.getItem('chapterPerm')
  },
}

</script>
