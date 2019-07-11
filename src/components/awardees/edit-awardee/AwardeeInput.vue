<template>
    <vuestic-widget :headerText=" HeaderText | translate">
      <form>
        <fieldset>
          <div class="form-group">

            <!-- First Name View Mode-->
            <div v-if="!IsDisabled" class="input-group">
              <input id="simple-input" v-model="awardee.firstName" readonly required/>
              <label style="" class="control-label" for="simple-input">First Name</label><i class="bar"></i>
            </div>

            <!-- First Name -->
            <div v-if="IsDisabled" class="input-group">
              <input @change="awardeeObject" id="simple-input" v-model="awardee.firstName" required/>
              <label class="control-label" for="simple-input">First Name</label><i class="bar"></i>
            </div>

            <!-- Last Name View Mode -->
            <div v-if="!IsDisabled" class="input-group">
              <input id="simple-input" v-model="awardee.lastName" readonly/>
              <label style="" class="control-label" for="simple-input">Last Name</label><i class="bar"></i>
            </div>

            <!-- Last Name -->
            <div v-if="IsDisabled" class="input-group">
              <input @change="awardeeObject" id="simple-input" v-model="awardee.lastName"/>
              <label class="control-label" for="simple-input">Last Name</label><i class="bar"></i>
            </div>

          </div>

          <div class="form-group">

            <!-- Phone Number View Mode -->
            <div v-if="!IsDisabled" class="input-group">
              <input id="simple-input" v-model="awardee.phone" readonly required/>
              <label style="" class="control-label" for="simple-input">Phone Number</label><i class="bar"></i>
            </div>

            <!-- Phone Number -->
            <div v-if="IsDisabled" class="input-group">
              <input @change="awardeeObject" id="simple-input" v-model="awardee.phone" type="text" required/>
              <label class="control-label" for="simple-textarea">Phone Number</label><i class="bar"></i>
            </div>

            <!-- Birth Date View Mode -->
            <div v-if="!IsDisabled" class="input-group">
              <input id="simple-input" v-model="awardee.dateOfBirth" readonly required/>
              <label style="" class="control-label" for="simple-input">Age at Application</label><i class="bar"></i>
            </div>

            <!-- Birth Date -->
            <div v-if="IsDisabled" class="input-group">
              <input @change="awardeeObject" id="simple-input" v-model="awardee.dateOfBirth" required />
              <!--<vuestic-date-picker
                id="date-picker-custom-date-format"
                :config="{altInput: true, altFormat: 'F j, Y'}"
                v-model="awardee.dateOfBirth"
              />-->
              <label class="control-label" for="simple-input">
                Age at Application
              </label>
              <i class="bar"></i>
            </div>

            <!-- Last Contacted Date View Mode -->
            <div v-if="!IsDisabled" class="input-group">
              <input id="simple-input" v-model="awardee.lastContacted" readonly required/>
              <label style="" class="control-label" for="simple-input">Last Contacted</label><i class="bar"></i>
            </div>

            <!-- Last Contacted -->
            <div v-if="IsDisabled" class="input-group">
              <input type="date"
                v-model="awardee.lastContacted"
                @change="awardeeObject"
              />
              <!--<vuestic-date-picker
                id="date-picker-custom-date-format"
                :config="{altInput: true, altFormat: 'F j, Y'}"
                v-model="awardee.lastContacted"
                @change="awardeeObject"
              />-->
              <label class="control-label" for="date-picker-custom-date-format">
                Last Contacted
              </label>
              <i class="bar"></i>

            </div>

          </div>

          <div class="form-group with-icon-left">

            <!-- Street 1 View Mode -->
            <div v-if="!IsDisabled" class="input-group">
              <input id="simple-input" v-model="awardee.address1" readonly required/>
              <label style="" class="control-label" for="simple-input">Address 1</label><i class="bar"></i>
            </div>

            <!-- Street 1 -->
            <div v-if="IsDisabled" class="input-group">
              <input @change="awardeeObject" id="simple-input" v-model="awardee.address1" required/>
              <label class="control-label" for="simple-input">Address 1</label><i class="bar"></i>
            </div>
          </div>

          <div class="form-group with-icon-left">

            <!-- Street 2 View Mode -->
            <div v-if="!IsDisabled" class="input-group">
              <input id="simple-input" v-model="awardee.address2" readonly required/>
              <label style="" class="control-label" for="simple-input">Address 2</label><i class="bar"></i>
            </div>

            <!-- Street 2 -->
            <div v-if="IsDisabled" class="input-group">
              <input @change="awardeeObject" id="simple-input" v-model="awardee.address2" required/>
              <label class="control-label" for="simple-input">Address 2</label><i class="bar"></i>
            </div>
          </div>

          <div class="form-group with-icon-right">

            <!-- City View Mode -->
            <div v-if="!IsDisabled" class="input-group">
              <input id="simple-input" v-model="awardee.addressCity" readonly required/>
              <label style="" class="control-label" for="simple-input">City</label><i class="bar"></i>
            </div>

            <!-- City -->
            <div v-if="IsDisabled" class="input-group">
              <input @change="awardeeObject" id="simple-input" v-model="awardee.addressCity" required/>
              <label class="control-label" for="simple-input">City</label><i class="bar"></i>
            </div>

            <!-- State View Mode -->
            <div v-if="!IsDisabled" class="input-group">
              <input id="simple-input" v-model="awardee.addressState" readonly required/>
              <label style="" class="control-label" for="simple-input">State</label><i class="bar"></i>
            </div>

            <!-- State -->
            <div v-if="IsDisabled" class="input-group">
              <input @change="awardeeObject" id="simple-input" v-model="awardee.addressState" required/>
              <label class="control-label" for="simple-input">State</label><i class="bar"></i>
            </div>

            <!-- Zip View Mode -->
            <div v-if="!IsDisabled" class="input-group">
              <input id="simple-input" v-model="awardee.addressZip" readonly required/>
              <label style="" class="control-label" for="simple-input">Zip</label><i class="bar"></i>
            </div>

            <!-- Zip -->
            <div v-if="IsDisabled" class="input-group">
              <input @change="awardeeObject" id="simple-input" v-model="awardee.addressZip" required/>
              <label class="control-label" for="simple-input">Zip</label><i class="bar"></i>
            </div>

          </div>

          <div class="form-group">

            <!-- Notes View Mode -->
            <div v-if="!IsDisabled" class="input-group">
              <textarea id="simple-input" v-model="awardee.notes" readonly required/>
              <label style="" class="control-label" for="simple-input">Notes</label><i class="bar"></i>
            </div>

              <!-- Notes -->
            <div v-if="IsDisabled" class="input-group">
              <textarea @change="awardeeObject" type="text" id="simple-textarea" v-model="awardee.notes"
                        required></textarea>
              <label class="control-label" for="simple-textarea">Notes</label><i class="bar"></i>
            </div>
          </div>

        </fieldset>

      </form>

    </vuestic-widget>
</template>

<script>
import { Auth } from 'aws-amplify'

export default {
  name: 'AwardeeInput',
  props: ['awardeeId', 'IsDisabled', 'HeaderText'],
  methods: {
    awardeeObject () {
      this.$emit('updateAwardeObject', this.awardee)
    },
  },
  data () {
    return {
      URL: '',
      TOKEN: '',
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
  },
  async created () {
    this.URL = this.API_URL
    this.TOKEN = (await Auth.currentSession()).idToken.jwtToken
    console.log(this.awardeeId)
    fetch(`${this.URL}/awardee/${this.awardeeId}`, {
      headers: new Headers({
        'Authorization': `Bearer ${this.TOKEN}`
      })
    })
      .then(response => response.json())
      .then(json => {
        this.awardee = json.Item
      })
  }
}
</script>
