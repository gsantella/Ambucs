<template>
  <div class="form-elements">
    <div class="va-row">
      <div class="flex md6">
      <vuestic-checkbox
        v-if="showCheckBox"
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
                      <label style="" class="control-label" for="simple-input">First Name</label><i class="bar"></i>
                    </div>

                    <!-- First Name -->
                    <div v-if="isDisabled" class="input-group">
                     <input id="simple-input" v-model="awardee.firstName" required/>
                     <label abel class="control-label" for="simple-input">First Name</label><i class="bar"></i>
                    </div>

                    <!-- Last Name View Mode -->
                    <div v-if="!isDisabled" class="input-group">
                      <input id="simple-input" v-model="awardee.lastName" readonly/>
                      <label style="" class="control-label" for="simple-input">Last Name</label><i class="bar"></i>
                    </div>

                    <!-- Last Name -->
                    <div v-if="isDisabled" class="input-group">
                      <input id="simple-input" v-model="awardee.lastName"/>
                      <label class="control-label" for="simple-input">Last Name</label><i class="bar"></i>
                    </div>

                  </div>

                  <div class="form-group">

                    <!-- Phone Number View Mode -->
                    <div v-if="!isDisabled" class="input-group">
                      <input id="simple-input" v-model="awardee.phone" readonly required/>
                      <label style="" class="control-label" for="simple-input">Phone Number</label><i class="bar"></i>
                    </div>

                    <!-- Phone Number -->
                    <div v-if="isDisabled" class="input-group">
                      <input id="simple-input" v-model="awardee.phone" type="text" required/>
                      <label class="control-label" for="simple-textarea">Phone Number</label><i class="bar"></i>
                    </div>

                    <!-- Birth Date View Mode -->
                    <div v-if="!isDisabled" class="input-group">
                      <input id="simple-input" v-model="awardee.dateOfBirth" readonly required/>
                      <label style="" class="control-label" for="simple-input">Age at Application</label><i class="bar"></i>
                    </div>

                    <!-- Birth Date -->
                    <div v-if="isDisabled" class="input-group">
                      <input id="simple-input" v-model="awardee.dateOfBirth" required />
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
                    <div v-if="!isDisabled" class="input-group">
                      <input id="simple-input" v-model="awardee.lastContacted" readonly required/>
                      <label style="" class="control-label" for="simple-input">Last Contacted</label><i class="bar"></i>
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
                      <label style="" class="control-label" for="simple-input">Address 1</label><i class="bar"></i>
                    </div>

                    <!-- Street 1 -->
                    <div v-if="isDisabled" class="input-group">
                      <input id="simple-input" v-model="awardee.address1" required/>
                      <label class="control-label" for="simple-input">Address 1</label><i class="bar"></i>
                    </div>
                  </div>

                  <div class="form-group with-icon-left">

                    <!-- Street 2 View Mode -->
                    <div v-if="!isDisabled" class="input-group">
                      <input id="simple-input" v-model="awardee.address2" readonly required/>
                      <label style="" class="control-label" for="simple-input">Address 2</label><i class="bar"></i>
                    </div>

                    <!-- Street 2 -->
                    <div v-if="isDisabled" class="input-group">
                      <input id="simple-input" v-model="awardee.address2" required/>
                      <label class="control-label" for="simple-input">Address 2</label><i class="bar"></i>
                    </div>
                  </div>

                  <div class="form-group with-icon-right">

                    <!-- City View Mode -->
                    <div v-if="!isDisabled" class="input-group">
                      <input id="simple-input" v-model="awardee.addressCity" readonly required/>
                      <label style="" class="control-label" for="simple-input">City</label><i class="bar"></i>
                    </div>

                    <!-- City -->
                    <div v-if="isDisabled" class="input-group">
                      <input id="simple-input" v-model="awardee.addressCity" required/>
                      <label class="control-label" for="simple-input">City</label><i class="bar"></i>
                    </div>

                    <!-- State View Mode -->
                    <div v-if="!isDisabled" class="input-group">
                      <input id="simple-input" v-model="awardee.addressState" readonly required/>
                      <label style="" class="control-label" for="simple-input">State</label><i class="bar"></i>
                    </div>

                    <!-- State -->
                    <div v-if="isDisabled" class="input-group">
                      <input id="simple-input" v-model="awardee.addressState" required/>
                      <label class="control-label" for="simple-input">State</label><i class="bar"></i>
                    </div>

                    <!-- Zip View Mode -->
                    <div v-if="!isDisabled" class="input-group">
                      <input id="simple-input" v-model="awardee.addressZip" readonly required/>
                      <label style="" class="control-label" for="simple-input">Zip</label><i class="bar"></i>
                    </div>

                    <!-- Zip -->
                    <div v-if="isDisabled" class="input-group">
                      <input id="simple-input" v-model="awardee.addressZip" required/>
                      <label class="control-label" for="simple-input">Zip</label><i class="bar"></i>
                    </div>

                  </div>

                  <div class="form-group">

                    <!-- Notes View Mode -->
                    <div v-if="!isDisabled" class="input-group">
                      <textarea id="simple-input" v-model="awardee.notes" readonly required/>
                      <label style="" class="control-label" for="simple-input">Notes</label><i class="bar"></i>
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
              <td>Type</td>
              <td>First</td>
              <td>Last</td>
              <td>Phone Number</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in orderedByPrimaryContacts" :key="item.id" @click="displayModal(item,index,1)">
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
              <td>Order Num</td>
              <td>Model</td>
              <td>Date of Application</td>
              <td>Date Awarded</td>
              <td>Funded By</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in orderedByPrimaryTrykes" :key="item.id" @click="displayModal(item,index,2)">
              <td>{{ item.orderNumber }}</td>
              <td>{{ item.model }}</td>
              <td>{{ item.dateReceived }}</td>
              <td>{{ item.dateAwarded }}</td>
              <td>{{ item.fundedBy }}</td>
            </tr>
          </tbody>
      </table>

<!-- END OF TRYKES TABLE -->

      <br style="margin-bottom:2%"/>

<!-- UPLOADS TABLE -->

      <button v-if="isDisabled" style="float:right;margin:10px;width:30%" class="btn btn-primary btn-micro" @click="addNewDocumentRecord()">
        {{'Add' | translate}}
      </button>
      <vuestic-widget headerText="Documents" style="margin-bottom:5px" />
      <table class="table table-striped first-td-padding">
          <thead>
            <tr>
              <td>Description</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in documents" :key="item.documentId" @click="displayModal(item,index,3)">
              <td>{{ item.notes }}</td>
            </tr>
          </tbody>
      </table>

<!-- END OF UPLOADS TABLE -->

    </div>

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
                  <input id="simple-input" v-model="contact.firstName" readonly required/>
                  <label style="" class="control-label" for="simple-input">First Name</label><i class="bar"></i>
                </div>

                <!-- First Name -->
                <div v-if="isDisabled" class="input-group">
                  <input id="simple-input" v-model="contact.firstName" required/>
                  <label class="control-label" for="simple-input">First Name</label><i class="bar"></i>
                </div>

                <!-- Last Name View Mode-->
                <div v-if="!isDisabled" class="input-group">
                  <input id="simple-input" v-model="contact.lastName" readonly required/>
                  <label style="" class="control-label" for="simple-input">Last Name</label><i class="bar"></i>
                </div>

                <!-- Last Name -->
                <div v-if="isDisabled" class="input-group">
                  <input id="simple-input" v-model="contact.lastName" required/>
                  <label class="control-label" for="simple-input">Last Name</label><i class="bar"></i>
                </div>
              </div>

              <div class="form-group">

                <!-- Email View Mode-->
                <div v-if="!isDisabled" class="input-group">
                  <input id="simple-input" v-model="contact.email" readonly required/>
                  <label style="" class="control-label" for="simple-input">Email</label><i class="bar"></i>
                </div>

                <!-- Email -->
                <div v-if="isDisabled" class="input-group">
                  <input  id="simple-input" v-model="contact.email" required/>
                  <label class="control-label" for="simple-input">Email</label><i class="bar"></i>
                </div>
              </div>

              <div class="form-group">

                <!-- Phone1 View Mode-->
                <div v-if="!isDisabled" class="input-group">
                  <input id="simple-input" v-model="contact.phone1" readonly required/>
                  <label style="" class="control-label" for="simple-input">Phone 1</label><i class="bar"></i>
                </div>

                <!-- Phone 1 -->
                <div v-if="isDisabled" class="input-group">
                  <input id="simple-input" v-model="contact.phone1"  type="text" required/>
                  <label class="control-label" for="simple-input">Phone 1</label><i class="bar"></i>
                </div>

                <!-- Phone2 View Mode-->
                <div v-if="!isDisabled" class="input-group">
                  <input id="simple-input" v-model="contact.phone2" readonly required/>
                  <label style="" class="control-label" for="simple-input">Phone 2</label><i class="bar"></i>
                </div>

                <!-- Phone 2 -->
                <div v-if="isDisabled" class="input-group">
                  <input id="simple-input" v-model="contact.phone2" type="text" required/>
                  <label class="control-label" for="simple-input">Phone 2</label><i class="bar"></i>
                </div>
              </div>

              <div class="form-group">

                <!-- Type View Mode-->
                <div v-if="!isDisabled" class="input-group">
                  <input id="simple-input" v-model="contact.contactType" readonly required/>
                  <label style="" class="control-label" for="simple-input">Type</label><i class="bar"></i>
                </div>

                <!-- Type -->
                <div v-if="isDisabled">
                  <b-form-select v-model="contact.contactType" class="mb-3" style="width:100%" required>
                    <option :value="null">Please select an option</option>
                    <option value="Parent">Parent</option>
                    <option value="Guardian">Guardian</option>
                    <option value="Therapist">Therapist</option>
                  </b-form-select>
                  <label class="control-label" for="simple-input">Type</label><i class="bar"></i>
                </div>

              </div>

              <div class="form-group">

                <!-- Street1 View Mode-->
                <div v-if="!isDisabled" class="input-group">
                  <input id="simple-input" v-model="contact.address1" readonly required/>
                  <label style="" class="control-label" for="simple-input">Address 1</label><i class="bar"></i>
                </div>

                <!-- Street1 -->
                <div v-if="isDisabled" class="input-group">
                  <input id="simple-input" v-model="contact.address1" required/>
                  <label class="control-label" for="simple-input">Address 1</label><i class="bar"></i>
                </div>

                <!-- Street2 View Mode-->
                <div v-if="!isDisabled" class="input-group">
                  <input id="simple-input" v-model="contact.address2" readonly required/>
                  <label style="" class="control-label" for="simple-input">Address 2</label><i class="bar"></i>
                </div>

                <!-- Street2 -->
                <div v-if="isDisabled" class="input-group">
                  <input id="simple-input" v-model="contact.address2" required/>
                  <label class="control-label" for="simple-input">Address 2</label><i class="bar"></i>
                </div>

                <!-- City View Mode-->
                <div v-if="!isDisabled" class="input-group">
                  <input id="simple-input" v-model="contact.addressCity" readonly required/>
                  <label style="" class="control-label" for="simple-input">City</label><i class="bar"></i>
                </div>

                <!-- City -->
                <div v-if="isDisabled" class="input-group">
                  <input id="simple-input" v-model="contact.addressCity" required/>
                  <label class="control-label" for="simple-input">City</label><i class="bar"></i>
                </div>

              </div>

              <div class="form-group">

                <!-- State View Mode-->
                <div v-if="!isDisabled" class="input-group">
                  <input id="simple-input" v-model="contact.addressState" readonly required/>
                  <label style="" class="control-label" for="simple-input">State</label><i class="bar"></i>
                </div>

                <!-- State -->
                <div v-if="isDisabled" class="input-group">
                  <input id="simple-input" v-model="contact.addressState" required/>
                  <label class="control-label" for="simple-input">State</label><i class="bar"></i>
                </div>

                <!-- Zip View Mode-->
                <div v-if="!isDisabled" class="input-group">
                  <input id="simple-input" v-model="contact.addressZip" readonly required/>
                  <label style="" class="control-label" for="simple-input">Zip</label><i class="bar"></i>
                </div>

                <!-- Zip -->
                <div v-if="isDisabled" class="input-group">
                  <input id="simple-input" v-model="contact.addressZip" type="number" required/>
                  <label class="control-label" for="simple-input">Zip Code</label><i class="bar"></i>
                </div>
              </div>

              <div class="form-group">

                <!-- Notes View Mode-->
                <div v-if="!isDisabled" class="input-group">
                  <input id="simple-input" v-model="contact.notes" readonly required/>
                  <label style="" class="control-label" for="simple-input">Notes</label><i class="bar"></i>
                </div>

                <!-- Notes -->
                <div v-if="isDisabled" class="input-group">
                  <input id="simple-input" v-model="contact.notes" required/>
                  <label class="control-label" for="simple-input">Notes</label><i class="bar"></i>
                </div>
              </div>

              <div class="form-group">

                <!-- Make Is Primary View Mode -->
                <div v-if="!isDisabled" class="flex md6">
                    <vuestic-checkbox
                      :label="'Set Primary Contact'"
                      v-model="contact.IsPrimary"
                      readonly
                    />
                </div>

                <!-- Make Is Primary -->
                <div v-if="isDisabled" class="flex md6">
                    <vuestic-checkbox
                      :label="'Set Primary Contact'"
                      v-model="contact.IsPrimary"
                    />
                </div>
              </div>

            </fieldset>
          </form>

          <div v-if="isDisabled">
            <button v-if="displayMode=='ADD'" id="addContact" class="btn btn-primary btn-micro" @click="addContactToAwardeeObject()" >Add</button>
          </div>

        <div class="va-row" v-if="displayMode=='EDIT'">
          <div v-if="isDisabled" class="flex md6">
            <button id="updateContact" class="btn btn-primary" @click="updateContactRecord()" >Add</button>
          </div>
          <div v-if="isDisabled" class="flex md6">
            <button id="deleteContact" class="btn btn-danger" @click="deleteContactRecord()" >Delete</button>
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

        <div class="form-group">

           <!-- OrderNumber View Mode-->
          <div v-if="!isDisabled" class="input-group">
            <input id="simple-input" v-model="tryke.orderNumber" readonly required/>
            <label style="" class="control-label" for="simple-input">Order Number</label><i class="bar"></i>
          </div>

          <!-- OrderNumber -->
          <div v-if="isDisabled" class="input-group">
            <input id="simple-input" v-model="tryke.orderNumber" required/>
            <label class="control-label" for="simple-input">Order Number</label><i class="bar"></i>
          </div>
        </div>

        <div class="form-group">

          <!-- Model View Mode-->
          <div v-if="!isDisabled" class="input-group">
            <input id="simple-input" v-model="tryke.model" readonly required/>
            <label style="" class="control-label" for="simple-input">Model</label><i class="bar"></i>
          </div>

          <!-- Model -->
          <div v-if="isDisabled" class="input-group">
            <input id="simple-input" v-model="tryke.model" required/>
            <label class="control-label" for="simple-input">Model</label><i class="bar"></i>
          </div>
        </div>

        <div class="form-group">

          <!-- Date of Application View Mode-->
          <div v-if="!isDisabled" class="input-group">
            <input id="simple-input" v-model="tryke.dateReceived" readonly required/>
            <label style="" class="control-label" for="simple-input">Date of Application</label><i class="bar"></i>
          </div>

          <!-- Date of Application -->
          <div v-if="isDisabled" class="input-group">
            <vuestic-date-picker
              id="date-picker-custom-date-format"
              :config="{altInput: true, altFormat: 'F j, Y'}"
              v-model="tryke.dateReceived"
            />
            <label class="control-label" for="date-picker-custom-date-format">
              Date of Application
            </label>
            <i class="bar"></i>
          </div>

          <!-- Date Awarded View Mode-->
          <div v-if="!isDisabled" class="input-group">
            <input id="simple-input" v-model="tryke.dateAwarded" readonly required/>
            <label style="" class="control-label" for="simple-input">Date Awarded</label><i class="bar"></i>
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

        </div>

        <div class="form-group">

          <!-- Funded By View Mode-->
          <div v-if="!isDisabled" class="input-group">
            <input id="simple-input" v-model="tryke.fundedBy" readonly required/>
            <label style="" class="control-label" for="simple-input">Funded By</label><i class="bar"></i>
          </div>

          <!-- Funded By -->
          <div v-if="isDisabled" class="input-group">
            <input id="simple-input" v-model="tryke.fundedBy" required/>
            <label class="control-label" for="simple-input">Funded By</label><i class="bar"></i>
          </div>

          <!-- Location Awarded View Mode-->
          <div v-if="!isDisabled" class="input-group">
            <input id="simple-input" v-model="tryke.locationAwarded" readonly required/>
            <label style="" class="control-label" for="simple-input">Location Awarded</label><i class="bar"></i>
          </div>

          <!-- Location Awarded -->
          <div v-if="isDisabled" class="input-group">
            <input id="simple-input" v-model="tryke.locationAwarded" required/>
            <label class="control-label" for="simple-input">Location Awarded</label><i class="bar"></i>
          </div>
        </div>

        <div class="form-group">

          <!-- Notes View Mode-->
          <div v-if="!isDisabled" class="input-group">
            <input id="simple-input" v-model="tryke.notes" readonly required/>
            <label style="" class="control-label" for="simple-input">Notes</label><i class="bar"></i>
          </div>

          <!-- Notes -->
          <div v-if="isDisabled" class="input-group">
            <input id="simple-input" v-model="tryke.notes" required/>
            <label class="control-label" for="simple-input">Notes</label><i class="bar"></i>
          </div>
        </div>

        <div class="form-group">

          <!-- Make Is Primary View Mode -->
          <div v-if="!isDisabled" class="flex md6">
              <vuestic-checkbox
                :label="$t('Set Primary Tryke')"
                v-model="tryke.IsPrimary"
                readonly
              />
          </div>

          <!-- Make Is Primary -->
          <div v-if="isDisabled" class="flex md6">
              <vuestic-checkbox
                :label="$t('Set Primary Tryke')"
                v-model="tryke.IsPrimary"
              />
          </div>
        </div>

        <div v-if="isDisabled">
          <button v-if="displayMode=='ADD'" id="addTryke" class="btn btn-primary btn-micro" @click="addTrykeToAwardeeObject()" >Add</button>
        </div>

        <div v-if="displayMode=='EDIT'" class="va-row">
          <div v-if="isDisabled" class="flex md6">
            <button id="updateTryke" class="btn btn-primary" @click="updateTrykeRecord()" >Update</button>
          </div>
          <div v-if="isDisabled" class="flex md6">
            <button id="deleteTryke" class="btn btn-danger" @click="deleteTrykeRecord()" >Delete</button>
          </div>
        </div>

    </vuestic-modal>

<!-- END OF TRYKES MODAL -->

<!-- START OF DOCUMENTS MODAL -->
<vuestic-modal v-bind:noButtons="true" :show.sync="show" ref="smallModal"
                   :okText="'modal.confirm' | translate"
                   :cancelText="'modal.cancel' | translate">

        <div slot="title">Upload Document</div>

        <div class="form-group">

           <!-- Notes View Mode-->
          <div v-if="!isDisabled" class="input-group">
            <input id="simple-input" v-model="document.notes" readonly required/>
            <label style="" class="control-label" for="simple-input">Notes</label><i class="bar"></i>
          </div>

          <!-- Notes -->
          <div v-if="isDisabled" class="input-group">
            <input id="simple-input" v-model="document.notes" required/>
            <label class="control-label" for="simple-input">Notes</label><i class="bar"></i>
          </div>
        </div>

        <div class="hello" id="imageDiv">
          <div v-if="!image">
            <h2>Select an image</h2>
            <input type="file" @change="onFileChange">
          </div>
          <div v-else>
            <img :src="image" style="width: 100%" />
            <button class="btn btn-primary btn-micro" v-if="!uploadURL" @click="removeImage">Remove image</button>
            <button class="btn btn-primary btn-micro" v-if="!uploadURL" @click="uploadImage">Upload image</button>
          </div>
          <h2 v-if="uploadURL">Success! Image uploaded to:</h2>
          <a :href="uploadURL">{{ uploadURL }}</a>
        </div>

        <div class="form-group">

          <div class="input-group">
            <a id="imageLink" v-bind:href="document.url" target="_blank" style="display:none;color:black">{{document.url}}</a>
            <label class="control-label" for="imageLink">Link</label><i class="bar"></i>
          </div>

        </div>

          <div class="row"  style="margin-top:10px" v-if="isDisabled">
            <div class="col-md-3">
              <button id="btnUpdate" style="display:none" class="btn btn-primary btn-micro" @click="updateUpload">Update</button>
            </div>
            <div class="col-md-3">
              <button id="btnDelete" style="display:none" class="btn btn-danger btn-micro" @click="deleteUpload">Delete</button>
            </div>
          </div>

      </vuestic-modal>

<!-- END OF DOCUMENTS MODAL -->

    </div>

  </div>

</template>

<script>
import swal from 'sweetalert'
// import _ from 'lodash'
import axios from 'axios'

const MAX_IMAGE_SIZE = 5000000

export default {
  name: 'EditAwardee',

  /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

  data () {
    return {
      isDisabled: false,
      editId: '',
      displayMode: '',
      trykeModalTitle: '',
      contactModalTitle: '',
      documentModalTitle: '',
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
        contactType: '',
        IsPrimary: false
      },
      tryke: {
        id: '',
        awardeeId: '',
        orderNumber: '',
        model: '',
        dateAwarded: '',
        dateReceived: '',
        fundedBy: '',
        locationAwarded: '',
        notes: '',
        IsPrimary: false
      },
      document: {
        awardeeId: '',
        documentId: '',
        url: '',
        notes: ''
      },
      awardee: {},
      contacts: [],
      trykes: [],
      documents: [],
      image: '',
      uploadURL: '',
      User: {
        email: '',
        password: '',
        writeUserPermission: false,
        writeAwardeePermission: false,
        writeChapterPermission: false
      },
      showCheckBox: true,
    }
  },

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
        return 'Edit Recipient'
      } else {
        return 'View Recipient'
      }
    },

    IsTrykePrimary () {
      if (this.tryke.IsPrimary) {
        return 'true'
      } else {
        return 'false'
      }
    },

    IsContactPrimary () {
      if (this.contact.IsPrimary) {
        return 'true'
      } else {
        return 'false'
      }
    },

    orderedByPrimaryContacts: function () {
      // return this.contacts
      /*eslint-disable */
      //suppress all warnings between comments
      return this.contacts.sort((a, b) => (a.IsPrimary < b.IsPrimary) ? 1 : ((b.IsPrimary < a.IsPrimary) ? -1 : 0)) // eslint-disable-line no-use-before-define
      /* eslint-enable */
    },

    orderedByPrimaryTrykes: function () {
      // return this.trykes
      /*eslint-disable */
      //suppress all warnings between comments
      return this.trykes.sort((a, b) => (a.IsPrimary < b.IsPrimary) ? 1 : ((b.IsPrimary < a.IsPrimary) ? -1 : 0)) // eslint-disable-line no-use-before-define
       /* eslint-enable */
    }
  },

  /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

  methods: {
    deleteUpload () {
      fetch(`https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/Test/document/${this.document.documentId}`, {
        method: 'DELETE',
      })
      this.documents.splice(this.editId, 1)
      this.$refs.smallModal.close()
    },
    updateUpload () {
      fetch(`https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/Test/document/${this.document.documentId}`, {
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        method: 'PATCH',
        body: JSON.stringify(this.document.notes)
      })
      this.$refs.smallModal.close()
    },
    onFileChange (e) {
      let files = e.target.files || e.dataTransfer.files
      if (!files.length) return
      this.createImage(files[0])
    },
    createImage (file) {
      // var image = new Image()
      let reader = new FileReader()
      reader.onload = (e) => {
        if (!e.target.result.includes('data:image/jpeg') && !e.target.result.includes('application/pdf')) {
          return alert('Wrong file type - JPG or PDF only.')
        }
        if (e.target.result.length > MAX_IMAGE_SIZE) {
          return alert('Image is loo large - 5MB maximum')
        }
        this.image = e.target.result
      }
      reader.readAsDataURL(file)
    },
    removeImage: function (e) {
      this.image = ''
    },
    uploadImage: async function (e) {
      // Get the presigned URL
      const response = await axios({
        method: 'GET',
        url: 'https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/Test/awardee/' + this.$route.params.id + '/upload'
      })
      let binary = atob(this.image.split(',')[1])
      let array = []
      for (var i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i))
      }
      let blobData = new Blob([new Uint8Array(array)], { type: 'image/jpeg' })
      let data = JSON.parse(response.data.body)
      await fetch(data.uploadURL, {
        method: 'PUT',
        body: blobData
      })
      // Final URL for the user doesn't need the query string params
      this.uploadURL = data.uploadURL.split('?')[0]

      // const result = await axios({
      //  method: 'POST',
      //  url: 'https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/Test/document'
      // })

      this.document.awardeeId = this.awardee.id
      this.document.url = this.uploadURL

      try {
        fetch('https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/Test/document', {
          method: 'POST',
          body: JSON.stringify(this.document)
        }).then(swal('Added', 'The document has been added.', 'success'))
          .then(response => response.json())
          .then(json => {
            this.documents.push(Object.assign({}, json.Attributes))
          })
        this.$refs.largeModal.cancel()
      } catch (e) {
        swal('Error', 'There was an error adding that document, please try again.', 'error')
      }
    },

    clear (field) {
      this[field] = ''
    },

    addNewDocumentRecord () {
      for (var key in this.document) {
        if (key === 'IsPrimary') {
          this.document[key] = false
        } else {
          this.document[key] = ''
        }
      }
      document.getElementById('imageDiv').style.display = 'block'
      document.getElementById('btnUpdate').style.display = 'none'
      document.getElementById('btnDelete').style.display = 'none'
      this.displayMode = 'ADD'
      this.documentModalTitle = 'Add Document'
      this.$refs.smallModal.open()
    },

    /// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Attemps to make a PATCH request to AWS sending up this.awardee to get updated
    updateRecord () {
      try {
        fetch('https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/Test/awardee/' + this.$route.params.id, {
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
          method: 'PATCH',
          body: JSON.stringify(this.awardee)
        }).then(() => {
          this.$router.push({ name: 'view-awardees' })
        }).then(() => {
          swal('Updated', 'The Awardee has been updated.', 'success')
        })
      } catch (e) {
        swal('Error', 'There was an issue trying to update this record,please try again later.', 'error')
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

              this.documents.forEach(element => {
                fetch(`https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/Test/document/${element.documentId}`, {
                  method: 'DELETE',
                })
              })

              fetch('https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/Test/awardee/' + this.$route.params.id, {
                method: 'DELETE'
              }).then(swal('Deleted', 'The Awardee has been deleted.', 'success'))

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
        if (key === 'IsPrimary') {
          this.contact[key] = false
        } else {
          this.contact[key] = ''
        }
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
              this.contacts.splice(this.editId, 1)
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
        if (key === 'IsPrimary') {
          this.tryke[key] = false
        } else {
          this.tryke[key] = ''
        }
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
        fetch(`https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/Test/tryke`, {
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
              fetch('https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/Test/tryke/' + this.tryke.id, {
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
        this.contact.IsPrimary = item.IsPrimary
        this.contactModalTitle = 'Edit Contact'
        this.$refs.largeModal.open()
      } else if (id === 2) {
        this.tryke.id = item.trykeId
        this.tryke.orderNumber = item.orderNumber
        this.tryke.model = item.model
        this.tryke.dateAwarded = item.dateAwarded
        this.tryke.dateReceived = item.dateReceived
        this.tryke.fundedBy = item.fundedBy
        this.tryke.locationAwarded = item.locationAwarded
        this.tryke.notes = item.notes
        this.tryke.IsPrimary = item.IsPrimary
        this.trykeModalTitle = 'Edit Tryke'
        this.$refs.mediumModal.open()
      } else {
        // window.open(item.url, '_blank')

        this.$refs.smallModal.open()
        document.getElementById('imageLink').style.display = 'block'
        document.getElementById('imageDiv').style.display = 'none'
        if (this.isDisabled) {
          document.getElementById('btnUpdate').style.display = 'block'
          document.getElementById('btnDelete').style.display = 'block'
        }
        this.document.awardeeId = item.awardeeId
        this.document.documentId = item.documentId
        this.document.url = item.url
        this.document.notes = item.notes
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
    this.$nextTick(() => {
      this.$validator.validateAll()
    })
    let awardeeId = sessionStorage.getItem('awardee-id')
    if (awardeeId === null) {
      swal('Error', 'That is not a valid user.', 'error')
      this.$router.push({ name: 'view-awardees' })
    } else {
      this.User.email = localStorage.getItem('email')
      this.User.password = localStorage.getItem('pass')
      this.User.writeAwardeePermission = localStorage.getItem('awardeePerm') === 'true'
      this.User.writeUserPermission = localStorage.getItem('userPerm') === 'true'
      this.User.writeChapterPermission = localStorage.getItem('chapterPerm') === 'true'
      if (!this.User.writeAwardeePermission) {
        this.showCheckBox = false
      }
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
        fetch(`https://4ezbmsi1wg.execute-api.us-east-1.amazonaws.com/Test/awardee/${awardeeId}/documents`)
          .then(response => response.json())
          .then(json => {
            this.documents = json.Items
          })
      } catch (e) {
        swal('Error', "I'm sorry we could not get that user for you please try again.", 'error')
        this.$router.push({ name: 'view-awardees' })
      }
    }
  },

  /// /////////////////////////////////////////////////////////////////////////////////////////////////////////

  components: {
  }

}

</script>
