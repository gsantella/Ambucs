<template>
  <div class="form-elements">
    <div class="va-row">
      <div class="flex md12">

        <vuestic-widget :headerText="'Edit Account' | translate">
          <form>

                <fieldset>

                  <div class="form-group">

                    <!-- First Name -->
                    <div class="input-group">
                      <input id="simple-input" required/>
                      <label class="control-label" for="simple-input">First Name</label><i class="bar"></i>
                    </div>

                    <!-- Last Name -->
                    <div class="input-group">
                      <input id="simple-input" required/>
                      <label class="control-label" for="simple-input">Last Name</label><i class="bar"></i>
                    </div>
                  </div>

                  <div class="form-group">

                    <!-- Email -->
                    <div class="input-group">
                      <input id="simple-input" type="email" required/>
                      <label class="control-label" for="simple-input">Email</label><i class="bar"></i>
                    </div>

                  </div>

                  <div class="form-group">

                    <!-- New Password -->
                    <div class="input-group">
                      <input id="simple-input" required/>
                      <label class="control-label" for="simple-input">New Password</label><i class="bar"></i>
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
        <button class="btn btn-primary  btn-micro" @click="addUser()" >
          {{'Save' | translate}}
        </button>
      </div>
      <div
        class="flex sm6 lg6 xl3 justify--center">
        <button class="btn btn-danger  btn-micro" @click="cancelUser()">
          {{'Cancel' | translate}}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Account',
  methods: {
    cancelUser () {

    },
    updateUser () {

    }
  }
}

</script>
