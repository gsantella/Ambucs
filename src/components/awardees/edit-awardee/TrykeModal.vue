<template>
    <div>
      <b-modal v-if="IsDisabled"
      ref="trykeModal"
      @hide="handleCloseModal()"
      ok-title="Save"
      cancel-title="Delete"
      @ok="addUpdate()"
      @cancel="cancelRemove()"
      v-model="showModal"
      size="xl"
      title="Add/Edit Tryke"
      >
      <div>

        <div class="form-group">
          <!-- Order Number -->
          <div class="input-group">
            <input id="simple-input" v-model="tryke.orderNumber" required/>
            <label class="control-label" for="simple-input">Order Number</label><i class="bar"></i>
          </div>
        </div>

        <div class="form-group">
          <!-- Model -->
          <div class="input-group">
            <input id="simple-input" v-model="tryke.model" required/>
            <label class="control-label" for="simple-input">Model</label><i class="bar"></i>
          </div>
        </div>

        <div class="form-group">
           <!-- Date of Application -->
          <div class="input-group">
            <input type="date"
                v-model="tryke.dateReceived"
            />
            <!--<vuestic-date-picker
              id="date-picker-custom-date-format"
              :config="{altInput: true, altFormat: 'F j, Y'}"
              v-model="tryke.dateReceived"
            />-->
            <label class="control-label" for="date-picker-custom-date-format">
              Date of Application
            </label>
            <i class="bar"></i>
          </div>

          <!-- Date Awarded -->
          <div class="input-group">
            <input type="date"
                v-model="tryke.dateAwarded"
            />
            <!--<vuestic-date-picker
              id="date-picker-custom-date-format"
              :config="{altInput: true, altFormat: 'F j, Y'}"
              v-model="tryke.dateAwarded"
            />-->
            <label class="control-label" for="date-picker-custom-date-format">
              Date Awarded
            </label>
            <i class="bar"></i>
          </div>

        </div>

        <div class="form-group">
          <!-- Funded By -->
          <div class="input-group">
            <input id="simple-input" v-model="tryke.fundedBy" required/>
            <label class="control-label" for="simple-input">Funded By</label><i class="bar"></i>
          </div>

          <!-- Location Awarded -->
          <div class="input-group">
            <input id="simple-input" v-model="tryke.locationAwarded" required/>
            <label class="control-label" for="simple-input">Location Awarded</label><i class="bar"></i>
          </div>
        </div>

        <div class="form-group">
          <!-- Notes -->
          <div class="input-group">
            <input id="simple-input" v-model="tryke.notes" required/>
            <label class="control-label" for="simple-input">Notes</label><i class="bar"></i>
          </div>
        </div>

        <div class="form-group" v-show="true">
          <!-- Make Is Primary -->
          <div class="flex md6">
              <vuestic-checkbox
                :label="$t('Set Primary Tryke')"
                v-model="tryke.IsPrimary"
              />
          </div>
        </div>
      </div>
      </b-modal>

      <b-modal v-if="!IsDisabled"
      ref="trykeModal"
      @hide="handleCloseModal()"
      ok-title="Close"
      ok-only
      v-model="showModal"
      size="xl"
      title="View"
      >
      <div>

        <div class="form-group">
          <!-- OrderNumber View Mode-->
          <div class="input-group">
            <input id="simple-input" v-model="tryke.orderNumber" readonly required/>
            <label style="" class="control-label" for="simple-input">Order Number</label><i class="bar"></i>
          </div>
        </div>

        <div class="form-group">
          <!-- Model View Mode-->
          <div class="input-group">
            <input id="simple-input" v-model="tryke.model" readonly required/>
            <label style="" class="control-label" for="simple-input">Model</label><i class="bar"></i>
          </div>
        </div>

        <div class="form-group">
          <!-- Date of Application View Mode-->
          <div class="input-group">
            <input id="simple-input" v-model="tryke.dateReceived" readonly required/>
            <label style="" class="control-label" for="simple-input">Date of Application</label><i class="bar"></i>
          </div>

          <!-- Date Awarded -->
          <div class="input-group">
            <input id="simple-input" v-model="tryke.dateAwarded" readonly required/>
            <label style="" class="control-label" for="simple-input">Date Awarded</label><i class="bar"></i>
          </div>

        </div>

        <div class="form-group">
          <!-- Funded By View Mode-->
          <div class="input-group">
            <input id="simple-input" v-model="tryke.fundedBy" readonly required/>
            <label style="" class="control-label" for="simple-input">Funded By</label><i class="bar"></i>
          </div>

          <!-- Location Awarded View Mode-->
          <div class="input-group">
            <input id="simple-input" v-model="tryke.locationAwarded" readonly required/>
            <label style="" class="control-label" for="simple-input">Location Awarded</label><i class="bar"></i>
          </div>
        </div>

        <div class="form-group">
          <!-- Notes View Mode-->
          <div class="input-group">
            <input id="simple-input" v-model="tryke.notes" readonly required/>
            <label style="" class="control-label" for="simple-input">Notes</label><i class="bar"></i>
          </div>
        </div>

        <div class="form-group" v-show="true">
          <!-- Make Is Primary -->
          <div class="flex md6">
              <vuestic-checkbox
                :label="$t('Set Primary Tryke')"
                v-model="tryke.IsPrimary"
                readonly
              />
          </div>
        </div>

      </div>
      </b-modal>
    </div>
</template>

<script>
export default {
  name: 'TrykeModal',
  props: ['modalTitle', 'displayMode', 'editTryke', 'editId', 'IsDisabled'],
  data () {
    return {
      show: true,
      showModal: false,
      trykeModalTitle: '',
      tryke: {
        awardeeId: '',
        trykeId: '',
        orderNumber: '',
        model: '',
        dateAwarded: '',
        dateReceived: '',
        fundedBy: '',
        locationAwarded: '',
        notes: '',
        IsPrimary: false
      },
    }
  },
  methods: {
    addUpdate () {
      this.displayMode === 'ADD' ? this.addTrykeToArray() : this.updateTrykeItem()
    },
    cancelRemove () {
      this.displayMode === 'ADD' ? this.handleCloseModal() : this.deleteTrykeRow()
    },
    handleCloseModal () {
      this.$emit('handleCloseModal', true)
    },
    // Add a new this.contact object into this.awardee.contacts array
    addTrykeToArray () {
      this.showModal = false
      this.$emit('sendTrykeData', this.tryke)
    },
    // Find the item in this.awardee.trykes array by index and replace it with this.tryke object
    updateTrykeItem () {
      this.showModal = false
      this.$emit('updateTrykeItem', this.tryke)
    },
    // Delete Contact by Edit Id
    deleteTrykeRow () {
      this.showModal = false
      this.$emit('deleteTrykeRow', this.editId)
    }
  },
  created () {
    setTimeout(() => {
      this.showModal = true

      if (this.displayMode === 'EDIT') {
        this.tryke.awardeeId = this.editTryke.awardeeId
        this.tryke.trykeId = this.editTryke.trykeId
        this.tryke.orderNumber = this.editTryke.orderNumber
        this.tryke.model = this.editTryke.model
        this.tryke.dateAwarded = this.editTryke.dateAwarded
        this.tryke.dateReceived = this.editTryke.dateReceived
        this.tryke.fundedBy = this.editTryke.fundedBy
        this.tryke.locationAwarded = this.editTryke.locationAwarded
        this.tryke.notes = this.editTryke.notes
        this.tryke.IsPrimary = this.editTryke.IsPrimary
      }
    }, 100)
  }
}
</script>
