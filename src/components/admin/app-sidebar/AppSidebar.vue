<template>
  <vuestic-sidebar :hidden="isOpen">
    <template slot="menu">

      <sidebar-link
        :to="{ name: 'view-awardees' }">
        <span slot="title">
          <span
            class="sidebar-menu-item-icon vuestic-icon vuestic-icon-dashboard"></span>
          <span>Search</span>
        </span>
      </sidebar-link>
      <div v-if="User.userRole === 'writter'">
        <sidebar-link
        :to="{ name: 'view-users' }">
        <span slot="title">
          <span
            class="sidebar-menu-item-icon vuestic-icon vuestic-icon-dashboard"></span>
          <span>Users</span>
        </span>
      </sidebar-link>
      </div>
      <!--
        <div v-if="User.writeAwardeePermission">
        <sidebar-link
        :to="{ name: 'view-users' }">
        <span slot="title">
          <span
            class="sidebar-menu-item-icon vuestic-icon vuestic-icon-dashboard"></span>
          <span>Users</span>
        </span>
      </sidebar-link>
      </div>
       -->
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
      User: this.$store.getters.User,
    }
  }
}

</script>
