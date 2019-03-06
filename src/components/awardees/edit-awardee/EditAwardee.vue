<template>
  <div class="form-elements">
    <div class="va-row">
      <div class="flex md6">
      <vuestic-checkbox
        :label="$t('Enable Edit Mode')"
        v-model="isDisabled"
      />
      </div>
      <div class="flex md6">
      <button @click="printAwardee()" style="float:right" class="btn btn-primary btn-micro">
        {{'Print' | translate}}
      </button>
      </div>
    </div>
    <div class="va-row">

<!-- START OF MAIN FORM -->

      <div class="flex md6">
        <vuestic-widget :headerText=" HeaderText | translate">

          <form>
                <fieldset>
                  <div class="form-group">

                    <!-- First Name View Mode-->
                    <div v-if="!isDisabled" class="input-group">
                      <input id="simple-input" v-model="awardee.firstName" readonly required/>
                      <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">First Name</label><i class="bar"></i>
                    </div>

                    <!-- First Name -->
                    <div v-if="isDisabled" class="input-group">
                     <input id="simple-input" v-model="awardee.firstName" maxlength="65" required/>
                     <label abel class="control-label" for="simple-input">First Name</label><i class="bar"></i>
                    </div>

                    <!-- Last Name View Mode -->
                    <div v-if="!isDisabled" class="input-group">
                      <input id="simple-input" v-model="awardee.lastName" readonly/>
                      <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">Last Name</label><i class="bar"></i>
                    </div>

                    <!-- Last Name -->
                    <div v-if="isDisabled" class="input-group">
                      <input id="simple-input" maxlength="65" v-model="awardee.lastName"/>
                      <label class="control-label" for="simple-input">Last Name</label><i class="bar"></i>
                    </div>

                  </div>

                  <div class="form-group">

                    <!-- Phone Number View Mode -->
                    <div v-if="!isDisabled" class="input-group">
                      <input id="simple-input" v-model="awardee.phone" readonly required/>
                      <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">Phone Number</label><i class="bar"></i>
                    </div>

                    <!-- Phone Number -->
                    <div v-if="isDisabled" class="input-group">
                      <input id="simple-input" v-model="awardee.phone" type="number" required/>
                      <label class="control-label" for="simple-textarea">Phone Number</label><i class="bar"></i>
                    </div>

                    <!-- Birth Date View Mode -->
                    <div v-if="!isDisabled" class="input-group">
                      <input id="simple-input" v-model="awardee.dateOfBirth" readonly required/>
                      <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">Birth Date</label><i class="bar"></i>
                    </div>

                    <!-- Birth Date -->
                    <div v-if="isDisabled" class="input-group">
                      <vuestic-date-picker
                        id="date-picker-custom-date-format"
                        :config="{altInput: true, altFormat: 'F j, Y'}"
                        v-model="awardee.dateOfBirth"
                      />
                      <label class="control-label" for="date-picker-custom-date-format">
                        Birth Date
                      </label>
                      <i class="bar"></i>
                    </div>

                    <!-- Last Contacted Date View Mode -->
                    <div v-if="!isDisabled" class="input-group">
                      <input id="simple-input" v-model="awardee.lastContacted" readonly required/>
                      <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">Last Contacted</label><i class="bar"></i>
                    </div>

                    <!-- Last Contacted -->
                    <div v-if="isDisabled" class="input-group">
                      <vuestic-date-picker
                        id="date-picker-custom-date-format"
                        :config="{altInput: true, altFormat: 'F j, Y'}"
                        v-model="awardee.lastContacted"
                      />
                      <label class="control-label" for="date-picker-custom-date-format">
                        Last Contacted
                      </label>
                      <i class="bar"></i>

                    </div>

                  </div>

                  <div class="form-group with-icon-left">

                    <!-- Street 1 View Mode -->
                    <div v-if="!isDisabled" class="input-group">
                      <input id="simple-input" v-model="awardee.address1" readonly required/>
                      <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">Street 1</label><i class="bar"></i>
                    </div>

                    <!-- Street 1 -->
                    <div v-if="isDisabled" class="input-group">
                      <input id="simple-input" v-model="awardee.address1" maxlength="55" required/>
                      <label class="control-label" for="simple-input">Address 1</label><i class="bar"></i>
                    </div>
                  </div>

                  <div class="form-group with-icon-left">

                    <!-- Street 2 View Mode -->
                    <div v-if="!isDisabled" class="input-group">
                      <input id="simple-input" v-model="awardee.address2" readonly required/>
                      <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">Street 2</label><i class="bar"></i>
                    </div>

                    <!-- Street 2 -->
                    <div v-if="isDisabled" class="input-group">
                      <input id="simple-input" v-model="awardee.address2" maxlength="55" required/>
                      <label class="control-label" for="simple-input">Address 2</label><i class="bar"></i>
                    </div>
                  </div>

                  <div class="form-group with-icon-right">

                    <!-- City View Mode -->
                    <div v-if="!isDisabled" class="input-group">
                      <input id="simple-input" v-model="awardee.city" readonly required/>
                      <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">City</label><i class="bar"></i>
                    </div>

                    <!-- City -->
                    <div v-if="isDisabled" class="input-group">
                      <input id="simple-input" v-model="awardee.city" maxlength="55" required/>
                      <label class="control-label" for="simple-input">City</label><i class="bar"></i>
                    </div>

                    <!-- State View Mode -->
                    <div v-if="!isDisabled" class="input-group">
                      <input id="simple-input" v-model="awardee.state" readonly required/>
                      <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">State</label><i class="bar"></i>
                    </div>

                    <!-- State -->
                    <div v-if="isDisabled" class="input-group">
                      <input id="simple-input" v-model="awardee.state" maxlength="55" required/>
                      <label class="control-label" for="simple-input">State</label><i class="bar"></i>
                    </div>

                    <!-- Zip View Mode -->
                    <div v-if="!isDisabled" class="input-group">
                      <input id="simple-input" v-model="awardee.zip" readonly required/>
                      <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">Zip</label><i class="bar"></i>
                    </div>

                    <!-- Zip -->
                    <div v-if="isDisabled" class="input-group">
                      <input id="simple-input" v-model="awardee.zip" type="number" required/>
                      <label class="control-label" for="simple-input">Zipcode</label><i class="bar"></i>
                    </div>

                  </div>

                  <div class="form-group">

                    <!-- Notes View Mode -->
                    <div v-if="!isDisabled" class="input-group">
                      <input id="simple-input" v-model="awardee.notes" readonly required/>
                      <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">Notes</label><i class="bar"></i>
                    </div>

                     <!-- Notes -->
                    <div v-if="isDisabled" class="input-group">
                      <textarea type="text" id="simple-textarea" v-model="awardee.notes"
                                required></textarea>
                      <label class="control-label" for="simple-textarea">Notes</label><i class="bar"></i>
                    </div>
                  </div>

                </fieldset>

          </form>
        </vuestic-widget>

<!-- END OF MAIN FORM -->

      </div>

<!-- START OF TABLES RIGHT SIDE -->

    <div class="flex md6">

<!-- CONTACTS TABLE -->

      <button v-if="isDisabled" style="float:right;margin:10px;width:30%" class="btn btn-primary btn-micro" @click="addNewContactRecord()">
        {{'Add' | translate}}
      </button>
      <vuestic-widget headerText="Contacts" style="margin-bottom:5px" />
      <table class="table table-striped first-td-padding">
          <thead>
            <tr>
              <td class="filters-page__table-heading">Type</td>
              <td class="filters-page__table-heading">First Name</td>
              <td class="filters-page__table-heading">Last Name</td>
              <td class="filters-page__table-heading">Phone Number</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in contacts" :key="item.id" @click="displayModal(item,index,1)">
              <td>{{ item.contactType }}</td>
              <td>{{ item.firstName }}</td>
              <td>{{ item.lastName }}</td>
              <td>{{ item.phone1 }}</td>
            </tr>
          </tbody>
      </table>

<!-- END OF CONTACTS TABLE -->

      <br style="margin-bottom:2%"/>

<!-- START OF TRYKES TABLE -->

      <button v-if="isDisabled" style="float:right;margin:10px;width:30%" class="btn btn-primary btn-micro" @click="addNewTrykeRecord()">
        {{'Add' | translate}}
      </button>
      <vuestic-widget headerText="Trykes" style="margin-bottom:5px" />
      <table class="table table-striped first-td-padding">
          <thead>
            <tr>
              <td class="filters-page__table-heading">Model</td>
              <td class="filters-page__table-heading">Date Awarded</td>
              <td class="filters-page__table-heading">Date Recieved</td>
              <td class="filters-page__table-heading">Funded By</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in trykes" :key="item.id" @click="displayModal(item,index,2)">
              <td>{{ item.model }}</td>
              <td>{{ item.dateAwarded }}</td>
              <td>{{ item.dateReceived }}</td>
              <td>{{ item.fundedBy }}</td>
            </tr>
          </tbody>
      </table>

    </div>

<!-- END OF TRYKES TABLE -->

<!-- END OF TABLES RIGHT SIDE -->

<!-- START OF CANCEL ADD BUTTONS -->

    <div class="va-row btn-margin-row">
      <div
        class="flex md3 justify--center">
        <button v-if="isDisabled" class="btn btn-primary" @click="updateRecord()" >
          {{'Save' | translate}}
        </button>
      </div>
      <div
        class="flex md3 justify--center">
        <button v-if="isDisabled" class="btn btn-danger" @click="deleteRecord()">
          {{'Delete' | translate}}
        </button>
      </div>
    </div>

<!-- END OF CANCEL ADD BUTTONS -->

<!-- START OF CONTACTS MODAL -->

      <vuestic-modal v-bind:noButtons="true"  :show.sync="show" v-bind:large="true" ref="largeModal"
          :okText="'modal.confirm' | translate"
          :cancelText="'modal.cancel' | translate">
      <div slot="title">{{ contactModalTitle | translate}}</div>
      <div>
          <form>
            <fieldset>
              <div class="form-group">

                <!-- First Name View Mode-->
                <div v-if="!isDisabled" class="input-group">
                  <input id="simple-input" v-model="contact.firstName"  readonly required/>
                  <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">First Name</label><i class="bar"></i>
                </div>

                <!-- First Name -->
                <div v-if="isDisabled" class="input-group">
                  <input id="simple-input" v-model="contact.firstName" maxlength="65" required/>
                  <label class="control-label" for="simple-input">First Name</label><i class="bar"></i>
                </div>

                <!-- Last Name View Mode-->
                <div v-if="!isDisabled" class="input-group">
                  <input id="simple-input" v-model="contact.lastName" readonly required/>
                  <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">Last Name</label><i class="bar"></i>
                </div>

                <!-- Last Name -->
                <div v-if="isDisabled" class="input-group">
                  <input id="simple-input" v-model="contact.lastName" maxlength="65" required/>
                  <label class="control-label" for="simple-input">Last Name</label><i class="bar"></i>
                </div>
              </div>

              <div class="form-group">

                <!-- Email View Mode-->
                <div v-if="!isDisabled" class="input-group">
                  <input id="simple-input" v-model="contact.email" readonly required/>
                  <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">Email</label><i class="bar"></i>
                </div>

                <!-- Email -->
                <div v-if="isDisabled" class="input-group">
                  <input  id="simple-input" v-model="contact.email" maxlength="65" required/>
                  <label class="control-label" for="simple-input">Email</label><i class="bar"></i>
                </div>
              </div>

              <div class="form-group">

                <!-- Phone1 View Mode-->
                <div v-if="!isDisabled" class="input-group">
                  <input id="simple-input" v-model="contact.phone1" readonly required/>
                  <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">Phone 1</label><i class="bar"></i>
                </div>

                <!-- Phone 1 -->
                <div v-if="isDisabled" class="input-group">
                  <input id="simple-input" v-model="contact.phone1"  type="number" required/>
                  <label class="control-label" for="simple-input">Phone 1</label><i class="bar"></i>
                </div>

                <!-- Phone2 View Mode-->
                <div v-if="!isDisabled" class="input-group">
                  <input id="simple-input" v-model="contact.phone2" readonly required/>
                  <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">Phone 2</label><i class="bar"></i>
                </div>

                <!-- Phone 2 -->
                <div v-if="isDisabled" class="input-group">
                  <input id="simple-input" v-model="contact.phone2"  type="number" required/>
                  <label class="control-label" for="simple-input">Phone 2</label><i class="bar"></i>
                </div>
              </div>
              <div class="form-group">

                <!-- Type View Mode-->
                <div v-if="!isDisabled" class="input-group">
                  <input id="simple-input" v-model="contact.contactType" readonly required/>
                  <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">Type</label><i class="bar"></i>
                </div>

                <!-- Type -->
                <div v-if="isDisabled" class="input-group">
                  <input id="simple-input" v-model="contact.contactType" maxlength="20" required/>
                  <label class="control-label" for="simple-input">Type</label><i class="bar"></i>
                </div>
              </div>

              <div class="form-group">

                <!-- Street1 View Mode-->
                <div v-if="!isDisabled" class="input-group">
                  <input id="simple-input" v-model="contact.address1" readonly required/>
                  <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">Address 1</label><i class="bar"></i>
                </div>

                <!-- Street1 -->
                <div v-if="isDisabled" class="input-group">
                  <input id="simple-input" v-model="contact.address1" maxlength="55" required/>
                  <label class="control-label" for="simple-input">Address 1</label><i class="bar"></i>
                </div>

                <!-- Street2 View Mode-->
                <div v-if="!isDisabled" class="input-group">
                  <input id="simple-input" v-model="contact.address2" readonly required/>
                  <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">Address 2</label><i class="bar"></i>
                </div>

                <!-- Street2 -->
                <div v-if="isDisabled" class="input-group">
                  <input id="simple-input" v-model="contact.address2" maxlength="55" required/>
                  <label class="control-label" for="simple-input">Address 2</label><i class="bar"></i>
                </div>

                <!-- City View Mode-->
                <div v-if="!isDisabled" class="input-group">
                  <input id="simple-input" v-model="contact.addressCity" readonly required/>
                  <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">City</label><i class="bar"></i>
                </div>

                <!-- City -->
                <div v-if="isDisabled" class="input-group">
                  <input id="simple-input" v-model="contact.addressCity" maxlength="55" required/>
                  <label class="control-label" for="simple-input">City</label><i class="bar"></i>
                </div>

              </div>

              <div class="form-group">

                <!-- State View Mode-->
                <div v-if="!isDisabled" class="input-group">
                  <input id="simple-input" v-model="contact.addressState" readonly required/>
                  <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">State</label><i class="bar"></i>
                </div>

                <!-- State -->
                <div v-if="isDisabled" class="input-group">
                  <input id="simple-input" v-model="contact.addressState" maxlength="55" required/>
                  <label class="control-label" for="simple-input">State</label><i class="bar"></i>
                </div>

                <!-- Zip View Mode-->
                <div v-if="!isDisabled" class="input-group">
                  <input id="simple-input" v-model="contact.addressZip" readonly required/>
                  <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">Zip</label><i class="bar"></i>
                </div>

                <!-- Zip -->
                <div v-if="isDisabled" class="input-group">
                  <input id="simple-input" v-model="contact.addressZip"  type="number" required/>
                  <label class="control-label" for="simple-input">Zip Code</label><i class="bar"></i>
                </div>
              </div>

              <div class="form-group">

                <!-- Notes View Mode-->
                <div v-if="!isDisabled" class="input-group">
                  <input id="simple-input" v-model="contact.notes" readonly required/>
                  <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">Notes</label><i class="bar"></i>
                </div>

                <!-- Notes -->
                <div v-if="isDisabled" class="input-group">
                  <input id="simple-input" v-model="contact.notes" required/>
                  <label class="control-label" for="simple-input">Notes</label><i class="bar"></i>
                </div>
              </div>

            </fieldset>
          </form>

          <div v-if="isDisabled">
            <input v-if="displayMode=='ADD'" id="addContact" class="styleBtn" type="submit" value="Add" @click="addContactToAwardeeObject()" />
          </div>

        <div class="va-row" v-if="displayMode=='EDIT'">
          <div v-if="isDisabled" class="flex md6">
            <input id="updateContact" class="styleBtn" type="submit" value="Save" @click="updateContactRecord()" />
          </div>
          <div v-if="isDisabled" class="flex md6">
            <input id="deleteContact" class="styleBtn" style="background-color:red" type="submit" value="Delete" @click="deleteContactRecord()" />
          </div>
        </div>

      </div>
    </vuestic-modal>

<!-- END OF CONTACTS MODAL -->

<!-- START OF TRYKES MODAL -->

      <vuestic-modal v-bind:noButtons="true" :show.sync="show" ref="mediumModal"
                   :okText="'modal.confirm' | translate"
                   :cancelText="'modal.cancel' | translate">
      <div slot="title">{{ trykeModalTitle | translate}}</div>
      <div>

        <div class="form-group">

          <!-- Model View Mode-->
          <div v-if="!isDisabled" class="input-group">
            <input id="simple-input" v-model="tryke.model" readonly required/>
            <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">Model</label><i class="bar"></i>
          </div>

          <!-- Model -->
          <div v-if="isDisabled" class="input-group">
            <input id="simple-input" v-model="tryke.model" maxlength="65" required/>
            <label class="control-label" for="simple-input">Model</label><i class="bar"></i>
          </div>
        </div>

        <div class="form-group">

          <!-- Date Awarded View Mode-->
          <div v-if="!isDisabled" class="input-group">
            <input id="simple-input" v-model="tryke.dateAwarded" readonly required/>
            <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">Date Awarded</label><i class="bar"></i>
          </div>

          <!-- Date Awarded -->
          <div v-if="isDisabled" class="input-group">
            <vuestic-date-picker
              id="date-picker-custom-date-format"
              :config="{altInput: true, altFormat: 'F j, Y'}"
              v-model="tryke.dateAwarded"
            />
            <label class="control-label" for="date-picker-custom-date-format">
              Date Awarded
            </label>
            <i class="bar"></i>
          </div>

          <!-- Date Recieved View Mode-->
          <div v-if="!isDisabled" class="input-group">
            <input id="simple-input" v-model="tryke.dateReceived" readonly required/>
            <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">Date Recieved</label><i class="bar"></i>
          </div>

          <!-- Date Recieved -->
          <div v-if="isDisabled" class="input-group">
            <vuestic-date-picker
              id="date-picker-custom-date-format"
              :config="{altInput: true, altFormat: 'F j, Y'}"
              v-model="tryke.dateReceived"
            />
            <label class="control-label" for="date-picker-custom-date-format">
              Date Recieved
            </label>
            <i class="bar"></i>
          </div>
        </div>

        <div class="form-group">

          <!-- Funded By View Mode-->
          <div v-if="!isDisabled" class="input-group">
            <input id="simple-input" v-model="tryke.fundedBy" readonly required/>
            <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">Funded By</label><i class="bar"></i>
          </div>

          <!-- Funded By -->
          <div v-if="isDisabled" class="input-group">
            <input id="simple-input" v-model="tryke.fundedBy" maxlength="75" required/>
            <label class="control-label" for="simple-input">Funded By</label><i class="bar"></i>
          </div>

          <!-- Location Awarded View Mode-->
          <div v-if="!isDisabled" class="input-group">
            <input id="simple-input" v-model="tryke.locationAwarded" readonly required/>
            <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">Location Awarded</label><i class="bar"></i>
          </div>

          <!-- Location Awarded -->
          <div v-if="isDisabled" class="input-group">
            <input id="simple-input" v-model="tryke.locationAwarded" maxlength="55" required/>
            <label class="control-label" for="simple-input">Location Awarded</label><i class="bar"></i>
          </div>
        </div>

        <div class="form-group">

          <!-- Notes View Mode-->
          <div v-if="!isDisabled" class="input-group">
            <input id="simple-input" v-model="tryke.notes" readonly required/>
            <label style="font-size:0.6rem;color:#4ae387;font-weight:600;text-transform:uppercase;top:-0.6rem;left:0" class="control-label" for="simple-input">Notes</label><i class="bar"></i>
          </div>

          <!-- Notes -->
          <div v-if="isDisabled" class="input-group">
            <input id="simple-input" v-model="tryke.notes" required/>
            <label class="control-label" for="simple-input">Notes</label><i class="bar"></i>
          </div>
        </div>

        <div v-if="isDisabled">
          <input v-if="displayMode=='ADD'" id="addTryke" class="styleBtn" type="submit" value="Add" @click="addTrykeToAwardeeObject()" />
        </div>

        <div v-if="displayMode=='EDIT'" class="va-row">
          <div v-if="isDisabled" class="flex md6">
            <input id="updateTryke" class="styleBtn" type="submit" value="Update" @click="updateTrykeRecord()" />
          </div>
          <div v-if="isDisabled" class="flex md6">
            <input id="deleteTryke" class="styleBtn" style="background-color:red" type="submit" value="Delete" @click="deleteTrykeRecord()" />
          </div>
        </div>

      </div>
    </vuestic-modal>

<!-- END OF TRYKES MODAL -->

    </div>

  </div>
</template>

<script>
import swal from 'sweetalert'
import { Auth } from 'aws-amplify'

export default {
  name: 'EditAwardee',

  /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

  computed: {

    datePickerDisabled: () => [date => !(date.getDate() % 5)],

    isSuccessfulEmailValid () {
      let isValid = false
      if (this.formFields.successfulEmail) {
        isValid = this.formFields.successfulEmail.validated && this.formFields.successfulEmail.valid
      }
      return isValid
    },

    awardeeCleaned () {
      let newObj = {}
      Object.keys(this.awardee).forEach((prop) => {
        if (this.awardee[prop] !== '') { newObj[prop] = this.awardee[prop] }
      })
      return newObj
      // return this.awardee;
    },

    HeaderText () {
      if (this.isDisabled) {
        return 'Edit Awardee'
      } else {
        return 'View Awardee'
      }
    }

  },

  /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

  data () {
    return {
      isDisabled: false,
      editId: '',
      displayMode: '',
      trykeModalTitle: '',
      contactModalTitle: '',
      show: false,
      contact: {
        id: '',
        awardeeId: '',
        firstName: '',
        lastName: '',
        email: '',
        phone1: '',
        phone2: '',
        address1: '',
        address2: '',
        addressCity: '',
        addressState: '',
        addressZip: '',
        notes: '',
        contactType: ''
      },
      tryke: {
        id: '',
        awardeeId: '',
        model: '',
        dateAwarded: '',
        dateReceived: '',
        fundedBy: '',
        locationAwarded: '',
        notes: ''
      },
      awardee: {},
      contacts: [],
      trykes: []
    }
  },

  /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

  methods: {

    clear (field) {
      this[field] = ''
    },

    checkIfAwardeeIsValid (obj) {
      var isValid = false
      for (var key in obj) {
        if (key !== 'dateCreated' && key !== 'id' && key !== 'timestampCreated') {
          if (obj[key] === null || obj[key] === '') {
            isValid = false
          } else {
            isValid = true
            break
          }
        }
      }
      return isValid
    },

    /// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Attemps to make a PATCH request to AWS sending up this.awardee to get updated
    updateRecord () {
      if (this.checkIfAwardeeIsValid(this.awardee)) {
        console.log(this.awardee)
        try {
          fetch('https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/Test/awardee/' + this.$route.params.id, {
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            method: 'PATCH',
            body: JSON.stringify(this.awardee)
          }).then(swal('Updated', 'The Awardee has been updated.', 'success'))
          this.$store.commit('setLoading', true)
          setTimeout(() => this.$router.push({ name: 'view-awardees' }), 2500)
        } catch (e) {
          swal('Error', 'There was an issue trying to update this record,please try again later.', 'error')
        }
      } else {
        swal('Error', 'Entire Awardee cannot be blank.', 'error')
      }
    },

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Attemps to make a DELETE request to AWS sending up this.awardee to be deleted
    deleteRecord () {
      swal({
        title: 'Are you sure you want to delete this record?',
        text: 'Once deleted, you will not be able to recover this file.',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      })
        .then((willDelete) => {
          if (willDelete) {
            try {
              this.contacts.forEach(element => {
                fetch(`https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/Test/contact/${element.id}`, {
                  method: 'DELETE',
                })
              })

              this.trykes.forEach(element => {
                fetch(`https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/Test/tryke/${element.id}`, {
                  method: 'DELETE',
                })
              })

              fetch('https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/Test/awardee/' + this.$route.params.id, {
                method: 'DELETE'
              }).then(swal('Deleted', 'The Awardee has been deleted.', 'success'))

              // fetch delete all contacts the above is a hack but it works
              // fetch delete all trykes
              this.$store.commit('setLoading', true)
              setTimeout(() => this.$router.push({ name: 'view-awardees' }), 2500)
            } catch (e) {
              swal('Error', "I'm sorry there was an issue trying to delete that record,please try again later.", 'error')
            }
          } else {
            swal('Cancelled', 'You have chosen not to delete the record.', 'warning')
          }
        })
    },

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Loop through this.contact object and reset all items to null string
    addNewContactRecord () {
      for (var key in this.contact) {
        this.contact[key] = ''
      }

      this.displayMode = 'ADD'
      this.contactModalTitle = 'Add Contact'
      this.$refs.largeModal.open()
    },

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Add a new this.contact object into this.awardee.contacts array
    addContactToAwardeeObject () {
      this.contact.awardeeId = this.awardee.id

      try {
        fetch('https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/Test/contact', {
          method: 'POST',
          body: JSON.stringify(this.contact)
        }).then(swal('Added', 'The contact has been added.', 'success'))
          .then(response => response.json())
          .then(json => {
            this.contacts.push(Object.assign({}, json.Attributes))
          })
        this.$refs.largeModal.cancel()
      } catch (e) {
        swal('Error', 'There was an error adding that contact, please try again.', 'error')
      }
    },

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Find the item in this.awardee.contacts array by index and replace it with this.contact object
    updateContactRecord () {
      try {
        fetch(`https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/Test/contact/${this.contact.id}`, {
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
          method: 'PATCH',
          body: JSON.stringify(this.contact)
        }).then(swal('Updated', 'The contact has been updated.', 'success'))
          .then(response => response.json())
          .then(json => {
            this.$set(this.contacts, this.editId, Object.assign({}, json.Attributes))
          }) // fix this.editid to contactid
        this.$refs.largeModal.cancel()
      } catch (e) {
        alert('')
        swal('Error', 'An error occurred please try again.', 'error')
      }
    },

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Find the object in this.awardees.contacts array by index and delete it
    deleteContactRecord () {
      swal({
        title: 'Are you sure you want to delete this contact?',
        text: 'Once deleted, you will not be able to recover this file.',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      })
        .then((willDelete) => {
          if (willDelete) {
            try {
              fetch(`https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/Test/contact/${this.contact.id}`, {
                method: 'DELETE',
              }).then(swal('Deleted', 'The contact has been deleted.', 'success'))
              this.contacts.splice(this.editId, 1) // this is using index we need to change to contact id
              this.$refs.largeModal.cancel()
            } catch (e) {
              swal('Error', "I'm sorry there was an issue trying to delete that contact,please try again later.", 'error')
            }
          } else {
            swal('Cancelled', 'You have chosen not to delete the contact.', 'warning')
          }
        })
    },

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Loop through this.tryke object and reset all items to null string
    addNewTrykeRecord () {
      for (var key in this.tryke) {
        this.tryke[key] = ''
      }
      this.displayMode = 'ADD'
      this.trykeModalTitle = 'Add Tryke'
      this.$refs.mediumModal.open()
    },

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Add a new this.trkye object into this.awardee.trykes array
    addTrykeToAwardeeObject () {
      this.tryke.awardeeId = this.awardee.id

      try {
        fetch(`https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/Test/tryke/${this.tryke.id}`, {
          method: 'POST',
          body: JSON.stringify(this.tryke)
        }).then(swal('Added', 'The tryke has been added.', 'success'))
          .then(response => response.json())
          .then(json => {
            this.trykes.push(Object.assign({}, json.Attributes))
          })

        this.$refs.mediumModal.cancel()
      } catch (e) {
        swal('Error', 'There was an error adding that contact, please try again.', 'error')
      }
    },

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Find the item in this.awardee.trykes array by index and replace it with this.tryke object
    updateTrykeRecord () {
      try {
        fetch(`https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/Test/tryke/${this.tryke.id}`, {
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
          method: 'PATCH',
          body: JSON.stringify(this.tryke)
        }).then(swal('Updated', 'The tryke has been updated.', 'success'))
          .then(response => response.json())
          .then(json => {
            this.$set(this.trykes, this.editId, Object.assign({}, json.Attributes))
          }) // change away from using editid
        this.$refs.mediumModal.cancel()
      } catch (e) {
        swal('Error', 'An error occurred please try again.', 'error')
      }
    },

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Find the object in this.awardees.trykes array by index and delete it
    deleteTrykeRecord () {
      swal({
        title: 'Are you sure you want to delete this tryke?',
        text: 'Once deleted, you will not be able to recover this file.',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      })
        .then((willDelete) => {
          if (willDelete) {
            try {
              fetch('https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/Test/awardee/tryke' + this.tryke.id, {
                method: 'DELETE',
              }).then(swal('Deleted', 'The tryke has been deleted.', 'success'))
              this.trykes.splice(this.editId, 1)
              this.$refs.mediumModal.cancel()
            } catch (e) {
              swal('Error', "I'm sorry there was an issue trying to delete that tryke,please try again later.", 'error')
            }
          } else {
            swal('Cancelled', 'You have chosen not to delete the tryke.', 'warning')
          }
        })
    },

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Depending on which id is sent it will open the Contacts MODAL or Trykes MODAL --> params - item = onClick item from Array, index = index where it was found in array id = 1 for Contact or 2 for Tryke
    displayModal (item, index, id) {
      this.displayMode = 'EDIT'
      this.editId = index
      if (id === 1) {
        this.contact.id = item.contactId
        this.contact.firstName = item.firstName
        this.contact.lastName = item.lastName
        this.contact.email = item.email
        this.contact.phone1 = item.phone1
        this.contact.phone2 = item.phone2
        this.contact.contactType = item.contactType
        this.contact.addressCity = item.addressCity
        this.contact.addressState = item.addressState
        this.contact.address1 = item.address1
        this.contact.address2 = item.address2
        this.contact.addressZip = item.addressZip
        this.contact.notes = item.notes
        this.contactModalTitle = 'Edit Contact'
        this.$refs.largeModal.open()
      } else {
        this.tryke.id = item.trykeId
        this.tryke.model = item.model
        this.tryke.dateAwarded = item.dateAwarded
        this.tryke.dateReceived = item.dateReceived
        this.tryke.fundedBy = item.fundedBy
        this.tryke.locationAwarded = item.locationAwarded
        this.tryke.notes = item.notes
        this.trykeModalTitle = 'Edit Tryke'
        this.$refs.mediumModal.open()
      }
    },

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

    printAwardee () {
      this.$router.push({ name: 'print-awardee', params: { id: this.$route.params.id } })
    }

    /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

  }, // end of methods sections

  /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

  created () {
    Auth.currentAuthenticatedUser()
      .then((data) => {
        this.$nextTick(() => {
          this.$validator.validateAll()
        })
        var awardeeId = localStorage.getItem('awardee-id')
        if (awardeeId === null) {
          swal('Error', 'That is not a valid user.', 'error')
          this.$router.push({ name: 'view-awardees' })
        } else {
          try {
            fetch('https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/Test/awardee/' + awardeeId)
              .then(response => response.json())
              .then(json => {
                this.awardee = json.Item
              })
            fetch(`https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/Test/awardee/${awardeeId}/contacts`)
              .then(response => response.json())
              .then(json => {
                this.contacts = json.Items
              })
            fetch(`https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/Test/awardee/${awardeeId}/trykes`)
              .then(response => response.json())
              .then(json => {
                this.trykes = json.Items
              })
          } catch (e) {
            swal('Error', "I'm sorry we could not get that user for you please try again.", 'error')
            this.$router.push({ name: 'view-awardees' })
          }
        }
      }).catch(function (err) {
        swal('Not Authenticated', err, 'error')
        this.$router.push({ name: 'login' })
      })
  },

  /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

  components: {
  }

}

</script>

<style>
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
