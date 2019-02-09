export const breadcrumbs = {
  root: {
    name: '/',
    displayName: 'Home',
  },
  routes: [
    {
      name: 'users',
      displayName: 'Users',
      children: [
        {
          name: 'view-users',
          displayName: 'View Users',
        },
        {
          name: 'new-user',
          displayName: 'New User',
        },
        {
          name: 'edit-user',
          displayName: 'Edit User',
        },
      ],
    },
    {
      name: 'forms',
      displayName: 'menu.forms',
      disabled: true,
      children: [
        {
          name: 'form-elements',
          displayName: 'menu.formElements',
        },
        {
          name: 'form-wizards',
          displayName: 'menu.formWizards',
        },
        {
          name: 'medium-editor',
          displayName: 'menu.mediumEditor',
        },
        {
          name: 'new-awardee',
          displayName: 'New Awardee',
        },
      ],
    },
    {
      name: 'tables',
      displayName: 'menu.tables',
    },
    {
      name: 'ui',
      displayName: 'menu.uiElements',
      disabled: true,
      children: [
        {
          name: 'typography',
          displayName: 'menu.typography',
        },
        {
          name: 'buttons',
          displayName: 'menu.buttons',
        },
        {
          name: 'collapse',
          displayName: 'menu.collapse',
        },
        {
          name: 'filters',
          displayName: 'menu.filters'
        },
        {
          name: 'color-pickers',
          displayName: 'menu.colorPickers',
        },
        {
          name: 'timelines',
          displayName: 'menu.timelines',
        },
        {
          name: 'notifications',
          displayName: 'menu.notifications',
        },
        {
          name: 'dropdowns',
          displayName: 'menu.dropdowns',
        },
        {
          name: 'icon-sets',
          displayName: 'menu.icons',
          children: [
            {
              displayName: 'concrete',
              name: 'icon-set',
            },
          ],
        },
        {
          name: 'spinners',
          displayName: 'menu.spinners',
        },
        {
          name: 'grid',
          displayName: 'menu.grid',
        },
        {
          name: 'modals',
          displayName: 'menu.modals',
        },
        {
          name: 'file-upload',
          displayName: 'menu.fileUpload',
        },
        {
          name: 'tags',
          displayName: 'menu.tags',
        },
        {
          name: 'cards',
          displayName: 'menu.cards',
        },
        {
          name: 'tree-view',
          displayName: 'menu.treeView',
        },
      ],
    }
  ],
}
