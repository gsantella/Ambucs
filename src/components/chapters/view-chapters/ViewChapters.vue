<template>
  <div>
    <div class="row">
      <div class="col-md-12">
          <div style="margin-bottom:15px;float:right"
          class="flex sm6 lg6 xl3 justify--center">
            <button class="btn btn-primary" @click="addChapter()" >
              {{'New Chapter' | translate}}
            </button>
          </div>
      </div>
    </div>

    <vuestic-widget headerText="View Chapters">
      <div class="table-responsive">
        <table class="table table-striped first-td-padding">
          <thead>
          <tr>
            <td class="filters-page__table-heading">Chapter City</td>
            <td class="filters-page__table-heading">Chapter State</td>
            <td class="filters-page__table-heading">Chapter Code</td>
          </tr>
          </thead>
          <tbody>
          <tr v-for="chapter in chapters" :key="chapter.id" v-on:click="clickList(chapter)">
            <td>{{chapter.city}}</td>
            <td>{{chapter.state}}</td>
            <td>{{chapter.code}}</td>
            <td></td>
            <td></td>
          </tr>
          </tbody>
        </table>
      </div>
    </vuestic-widget>

  </div>
</template>

<script>
export default {
  name: 'ViewChapters',
  date () {
    return {

    }
  },
  methods: {
    addChapter () {
      this.$router.push({ name: 'new-chapter' })
    }
  },
  created () {

  }
}
</script>
