export default {
  tableFields: [
    {
      name: 'name',
      title: 'firstName',
      sortField: 'firstName',
    },
    {
      name: 'lastName',
      title: 'lastName',
      sortField: 'firstName',
    },
    {
      name: 'city',
      title: 'city',
      sortField: 'city',
    },
  ],
  sortFunctions: {
    'firstName': function (item1, item2) {
      return item1 >= item2 ? 1 : -1
    },
    'lastName': function (item1, item2) {
      return item1 >= item2 ? 1 : -1
    },
    'city': function (item1, item2) {
      return item1 >= item2 ? 1 : -1
    },
  },
}
