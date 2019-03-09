export const breadcrumbs = {
  root: {
    name: '/',
    displayName: 'Home',
  },
  routes: [
    {
      name: 'view-chapters',
      displayName: 'Chapters',
      children: [
        {
          name: 'view-chapters',
          displayName: 'View Chapters',
        },
        {
          name: 'new-chapter',
          displayName: 'New Chapter',
        },
        {
          name: 'edit-chapter',
          displayName: 'Edit Chapter',
        },
      ],
    },
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
      displayName: 'Awardees',
      children: [
        {
          name: 'view-awardees',
          displayName: 'View Awardees',
        },
        {
          name: 'view-awardee',
          displayName: 'View Awardee',
        },
        {
          name: 'add-awardee',
          displayName: 'Add Awardee',
        },
        {
          name: 'edit-awardee',
          displayName: 'Edit Awardee',
        },
        {
          name: 'print-awardee',
          displayName: 'Print Awardee',
        },
      ],
    }
  ],
}
