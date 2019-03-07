<template>
  <vuestic-sidebar :hidden="isOpen">
    <template slot="menu">

      <sidebar-link
        :to="{ name: 'view-awardees' }">
        <span slot="title">
          <span
            class="sidebar-menu-item-icon vuestic-icon vuestic-icon-dashboard"></span>
          <span>Awardees</span>
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
import { Auth } from 'aws-amplify'
import swal from 'sweetalert'

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
      }).catch(function (err) {
        swal('Not Authenticated', err, 'error')
        self.$router.push({ name: 'login' })
      })
  },
}

</script>
