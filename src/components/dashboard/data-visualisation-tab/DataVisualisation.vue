<template>
  <div class="data-visualisation-tab dashboard-tab">
      <div>
        <vuestic-data-table
          :apiMode="apiMode"
          :tableData="tableData"
          :tableFields="tableFields"
          :itemsPerPage="itemsPerPage"
          :onEachSide="onEachSide"
          :sortFunctions="sortFunctions"
          :dataModeFilterableFields="dataModeFilterableFields"
        />
      </div>
    </div>
</template>

<script>
import Vue from 'vue'
import BadgeColumn from 'components/tables/BadgeColumn.vue'
import TableData from './TableData'
import DonutChartData from './DonutChartData'
import FieldsDef from './fields-definition'

Vue.component('badge-column', BadgeColumn)

export default {
  name: 'data-visualisation-tab',

  data () {
    return {
      donutChartData: DonutChartData,
      apiMode: false,
      sortFunctions: FieldsDef.sortFunctions,
      tableData: TableData,
      onEachSide: 1,
      tableFields: FieldsDef.tableFields,
      dataModeFilterableFields: ['name'],
      itemsPerPage: [
        {
          value: 5,
        },
        {
          value: 6,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.chart-container {
  padding: 0 2rem;
  height: 24rem;
}

</style>
