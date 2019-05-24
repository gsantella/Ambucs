<template>
    <div>
      <b-modal
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

          <!-- Date Awarded -->
          <div class="input-group">
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

        <div class="form-group">
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
    </div>
</template>

<script>
export default {
  name: 'TrykeModal',
  props: ['modalTitle', 'displayMode', 'editTryke', 'editId'],
  data () {
    return {
      URL: '',
      show: true,
      showModal: false,
      trykeModalTitle: '',
      tryke: {
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
    this.URL = this.API_URL
    setTimeout(() => {
      this.showModal = true

      if (this.displayMode === 'EDIT') {
        this.tryke.awardeeId = this.editTryke.awardeeId
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
