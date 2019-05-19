<template>
    <vuestic-widget :headerText="'Add Recipient' | translate">
          <form>
            <fieldset>
              <div class="form-group">
                <!-- First Name -->
                <div class="input-group">
                  <input @change="awardeeObject" id="simple-input" v-model="awardee.firstName" required/>
                  <label class="control-label" for="simple-input">First Name</label><i class="bar"></i>
                </div>

                <!-- Last Name -->
                <div class="input-group">
                  <input  @change="awardeeObject" id="simple-input" v-model="awardee.lastName" required/>
                  <label class="control-label" for="simple-input">Last Name</label><i class="bar"></i>
                </div>
              </div>

              <div class="form-group">

                <!-- Phone Number -->
                <div class="input-group">
                  <input  @change="awardeeObject" id="simple-input" v-model="awardee.phone" required/>
                  <label class="control-label" for="simple-textarea">Phone Number</label><i class="bar"></i>
                </div>

                <!-- Birth Date -->
                <div class="input-group">
                  <input  id="simple-input" v-model="awardee.dateOfBirth" required/>
                  <label class="control-label" for="simple">
                    Age at Application
                  </label>
                  <i class="bar"></i>

                </div>

                <!-- Last Contacted -->
                <div class="input-group">
                  <vuestic-date-picker
                    id="date-picker-custom-date-format"
                    :config="{altInput: true, altFormat: 'F j, Y'}"
                    v-model="awardee.lastContacted"
                     @change="awardeeObject"
                  />
                  <label class="control-label" for="date-picker-custom-date-format">
                    Last Contacted
                  </label>
                  <i class="bar"></i>

                </div>
              </div>

                  <div class="form-group with-icon-left">

                    <!-- Street 1 -->
                    <div class="input-group">
                      <input  @change="awardeeObject" id="simple-input" v-model="awardee.address1" required/>
                      <label class="control-label" for="simple-input">Address 1</label><i class="bar"></i>
                    </div>
                  </div>

                  <div class="form-group with-icon-left">
                    <!-- Street 2 -->
                    <div class="input-group">
                      <input  id="simple-input" v-model="awardee.address2" required/>
                      <label class="control-label" for="simple-input">Address 2</label><i class="bar"></i>
                    </div>
                  </div>

                  <div class="form-group with-icon-right">

                    <!-- City -->
                    <div class="input-group">
                      <input  @change="awardeeObject" id="simple-input" v-model="awardee.addressCity" required/>
                      <label class="control-label" for="simple-input">City</label><i class="bar"></i>
                    </div>
                    <!-- State -->
                    <div class="input-group">
                      <input  @change="awardeeObject" id="simple-input" v-model="awardee.addressState" required/>
                      <label class="control-label" for="simple-input">State</label><i class="bar"></i>
                    </div>
                    <!-- Zip -->
                    <div class="input-group">
                      <input  @change="awardeeObject" id="simple-input" v-model="awardee.addressZip" required/>
                      <label class="control-label" for="simple-input">Zip</label><i class="bar"></i>
                    </div>

                  </div>

                   <!-- Notes -->
                  <div class="form-group">
                    <div class="input-group">
                      <textarea  @change="awardeeObject" type="text" v-model="awardee.notes" id="simple-textarea"
                                required></textarea>
                      <label class="control-label" for="simple-textarea">Notes</label><i class="bar"></i>
                    </div>
                  </div>

                </fieldset>

          </form>
        </vuestic-widget>
</template>

<script>
export default {
  name: 'AwardeeInput',
  methods: {
    awardeeObject () {
      this.$emit('updateAwardeObject', this.awardee)
    },
  },
  data () {
    return {
      awardee: {
        firstName: '',
        lastName: '',
        address1: '',
        address2: '',
        phone: '',
        addressCity: '',
        addressState: '',
        addressZip: '',
        dateOfBirth: '',
        lastContacted: '',
        notes: ''
      },
    }
  }
}
</script>
