export const breadcrumbs = {
  root: {
    name: '/',
    displayName: 'Home',
  },
  routes: [
    {
      name: 'view-users',
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
      name: 'view-awardees',
      displayName: 'Recipients',
      children: [
        {
          name: 'view-awardees',
          displayName: 'View Recipients',
        },
        {
          name: 'view-awardee',
          displayName: 'View Recipient',
        },
        {
          name: 'add-awardee',
          displayName: 'Add Recipient',
        },
        {
          name: 'edit-awardee',
          displayName: 'Edit Recipient',
        },
        {
          name: 'print-awardee',
          displayName: 'Print Recipient',
        },
      ],
    }
  ],
}
