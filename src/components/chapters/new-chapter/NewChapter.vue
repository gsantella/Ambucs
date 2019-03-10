<template>
  <div class="form-elements">
    <div class="va-row">
      <div class="flex md12">
        <vuestic-widget :headerText="'Add Chapter' | translate">
          <form>
            <fieldset>
              <div class="form-group">
                <!-- City -->
                <div class="input-group">
                  <input id="simple-input1" type="text" required v-model="city" autocomplete="off"/>
                  <label class="control-label" for="simple-input1" >City</label><i class="bar"></i>
                </div>

                <!-- State -->
                <div class="input-group">
                  <input id="simple-input" type="text" required v-model="state" autocomplete="off" />
                  <label class="control-label" for="simple-input">State</label><i class="bar"></i>
                </div>
              </div>

              <div class="form-group">
                <!-- Code -->
                <div class="input-group">
                  <input id="simple-input1" type="text" required v-model="code" autocomplete="off"/>
                  <label class="control-label" for="simple-input1">Code</label><i class="bar"></i>
                </div>
              </div>

            </fieldset>

        </form>
        </vuestic-widget>

      </div>
    </div>
     <!--Save Delete Buttons -->
    <div class="va-row btn-margin-row">
      <div
        class="flex sm6 lg6 xl3 justify--center">
        <button class="btn btn-primary" @click="addChapter()" >
          {{'Save' | translate}}
        </button>
      </div>
      <div
        class="flex sm6 lg6 xl3 justify--center">
        <button class="btn btn-danger" @click="cancelChapter()">
          {{'Cancel' | translate}}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewChapter',
  date () {
    return {
      city: '',
      state: '',
      code: ''
    }
  },
  methods: {
    addChapter () {

    },
    cancelChapter () {

    }
  }
}
</script>
