<template>
  <div :id="element" :style="'height: '+height+'px;'"></div>
</template>
<script>
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import * as am4maps from '@amcharts/amcharts4/maps'
// eslint-disable-next-line camelcase
import am4themes_animated from '@amcharts/amcharts4/themes/animated'
import am4geodataWorldLow from '@amcharts/amcharts4-geodata/worldLow'
// eslint-disable-next-line camelcase
import am4themes_dark from '@amcharts/amcharts4/themes/amchartsdark'

am4core.useTheme(am4themes_animated)
export default {
  name: 'AmChart',
  props: {
    element: { type: String, default: 'am-chart' },
    type: { type: String, default: 'bar' },
    option: { type: (Object, Array), default: () => {} },
    height: { type: Number, default: 500 }
  },
  mounted () {
    let chart
    switch (this.type) {
      case 'line':
        chart = am4core.create(this.element, am4charts.XYChart)
        this.line(chart)
        break
      case 'column':
        chart = am4core.create(this.element, am4charts.XYChart)
        this.column(chart)
        break
      case 'mixes-column':
        chart = am4core.create(this.element, am4charts.XYChart)
        this.mixesColumn(chart)
        break
      case 'stacked':
        chart = am4core.create(this.element, am4charts.XYChart)
        this.stacked(chart)
        break
      case 'bar-line':
        chart = am4core.create(this.element, am4charts.XYChart)
        this.barLine(chart)
        break
      case 'data-based':
        chart = am4core.create(this.element, am4charts.XYChart)
        this.dataBased(chart)
        break
      case 'line-zoom-h':
        chart = am4core.create(this.element, am4charts.XYChart)
        this.lineZoomH(chart)
        break
      case 'line-zoom-v':
        chart = am4core.create(this.element, am4charts.XYChart)
        this.lineZoomV(chart)
        break
      case 'radar':
        chart = am4core.create(this.element, am4charts.RadarChart)
        this.radar(chart)
        break
      case 'polar-scatter':
        chart = am4core.create(this.element, am4charts.RadarChart)
        this.polarScatter(chart)
        break
      case 'polar':
        chart = am4core.create(this.element, am4charts.RadarChart)
        this.polar(chart)
        break
      case 'pie':
        chart = am4core.create(this.element, am4charts.PieChart3D)
        this.pie(chart)
        break
      case 'line-bar':
        chart = am4core.create(this.element, am4charts.XYChart)
        this.lineBar(chart)
        break
      case 'dashboard-map':
        this.map(chart)
        break
      case 'dashboard2':
        chart = am4core.create(this.element, am4charts.XYChart)
        this.linierChart(chart)
        break
      case 'radial-pie':
        chart = am4core.create(this.element, am4charts.PieChart)
        this.radialPieChart(chart)
        break
      case 'dash-3':
        chart = am4core.create(this.element, am4charts.RadarChart)
        this.dash3(chart)
        break
      default:
        break
    }
  },
  methods: {
    line (chart) {
      chart.colors.list = []
      for (let j = 0; j < this.option.colors.length; j++) {
        chart.colors.list.push(am4core.color(this.option.colors[j]))
      }
      chart.data = this.option.data
      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
      categoryAxis.dataFields.category = this.option.xAxis[0]
      categoryAxis.renderer.grid.template.location = 0
      categoryAxis.renderer.minGridDistance = 30

      categoryAxis.renderer.labels.template.adapter.add('dy', function (dy, target) {
        // eslint-disable-next-line no-self-compare
        if (target.dataItem && target.dataItem.index & 2 === 2) {
          return dy + 25
        }
        return dy
      })

      // eslint-disable-next-line no-unused-lets
      chart.yAxes.push(new am4charts.ValueAxis())

      // Create series
      let series = chart.series.push(new am4charts.ColumnSeries())
      series.dataFields.valueY = this.option.yAxis[0]
      series.dataFields.categoryX = this.option.xAxis[0]
      series.name = this.option.labels[0]
      series.columns.template.tooltipText = '{categoryX}: [bold]{valueY}[/]'
      series.columns.template.fillOpacity = 0.8

      let columnTemplate = series.columns.template
      columnTemplate.strokeWidth = 2
      columnTemplate.strokeOpacity = 1
    },
    column (chart) {
      chart.exporting.menu = new am4core.ExportMenu()
      /* Create axes */

      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
      categoryAxis.dataFields.category = 'year'
      categoryAxis.renderer.minGridDistance = 30

      /* Create value axis */
      chart.yAxes.push(new am4charts.ValueAxis())

      /* Create series */
      let columnSeries = chart.series.push(new am4charts.ColumnSeries())
      columnSeries.name = 'Income'
      columnSeries.dataFields.valueY = 'income'
      columnSeries.dataFields.categoryX = 'year'

      columnSeries.columns.template.tooltipText = '[#fff font-size: 15px]{name} in {categoryX}:\n[/][#fff font-size: 20px]{valueY}[/] [#fff]{additional}[/]'
      columnSeries.columns.template.propertyFields.fillOpacity = 'fillOpacity'
      columnSeries.columns.template.propertyFields.stroke = 'stroke'
      columnSeries.columns.template.propertyFields.strokeWidth = 'strokeWidth'
      columnSeries.columns.template.propertyFields.strokeDasharray = 'columnDash'
      columnSeries.tooltip.label.textAlign = 'middle'

      let lineSeries = chart.series.push(new am4charts.LineSeries())
      lineSeries.name = 'Expenses'
      lineSeries.dataFields.valueY = 'expenses'
      lineSeries.dataFields.categoryX = 'year'

      lineSeries.stroke = am4core.color(this.option.color)
      lineSeries.strokeWidth = 3
      lineSeries.propertyFields.strokeDasharray = 'lineDash'
      lineSeries.tooltip.label.textAlign = 'middle'

      let bullet = lineSeries.bullets.push(new am4charts.Bullet())
      bullet.fill = am4core.color(this.option.fill) // tooltips grab fill from parent by default
      bullet.tooltipText = '[#fff font-size: 15px]{name} in {categoryX}:\n[/][#fff font-size: 20px]{valueY}[/] [#fff]{additional}[/]'
      let circle = bullet.createChild(am4core.Circle)
      circle.radius = 4
      circle.fill = am4core.color('#fff')
      circle.strokeWidth = 3

      chart.data = this.option.data
    },
    mixesColumn (chart) {
      chart.colors.list = []
      for (let j = 0; j < this.option.colors.length; j++) {
        chart.colors.list.push(am4core.color(this.option.colors[j]))
      }
      chart.numberFormatter.numberFormat = "#.#'%'"
      chart.data = this.option.data
      // Create axes

      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
      categoryAxis.dataFields.category = this.option.xAxis[0]
      categoryAxis.renderer.grid.template.location = 0
      categoryAxis.renderer.minGridDistance = 30
      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
      valueAxis.title.text = this.option.title
      valueAxis.title.fontWeight = 800

      // Create series

      let series = chart.series.push(new am4charts.ColumnSeries())
      series.dataFields.valueY = this.option.yAxis[0]
      series.dataFields.categoryX = this.option.xAxis[0]
      series.clustered = false
      series.tooltipText = this.option.labels[0]

      let series2 = chart.series.push(new am4charts.ColumnSeries())
      series2.dataFields.valueY = this.option.yAxis[1]
      series2.dataFields.categoryX = this.option.xAxis[0]
      series2.clustered = false
      series2.columns.template.width = am4core.percent(50)
      series2.tooltipText = this.option.labels[1]

      chart.cursor = new am4charts.XYCursor()
      chart.cursor.lineX.disabled = true
      chart.cursor.lineY.disabled = true
    },
    stacked (chart) {
      chart.colors.list = []
      for (let j = 0; j < this.option.colors.length; j++) {
        chart.colors.list.push(am4core.color(this.option.colors[j]))
      }
      chart.data = this.option.data

      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
      categoryAxis.dataFields.category = 'year'
      categoryAxis.renderer.grid.template.location = 0
      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
      valueAxis.renderer.inside = true
      valueAxis.renderer.labels.template.disabled = true
      valueAxis.min = 0

      // Create series
      let _this = this
      // eslint-disable-next-line no-inner-declarations
      function createSeries (field, name) {
        // Set up series
        let series = chart.series.push(new am4charts.ColumnSeries())
        series.name = name
        series.dataFields.valueY = field
        series.dataFields.categoryX = _this.option.xAxis[0]
        series.sequencedInterpolation = true

        // Make it stacked
        series.stacked = true

        // Configure columns
        series.columns.template.width = am4core.percent(60)
        series.columns.template.tooltipText = '[bold]{name}[/]\n[font-size:14px]{categoryX}: {valueY}'

        // Add label
        let labelBullet = series.bullets.push(new am4charts.LabelBullet())
        labelBullet.label.text = '{valueY}'
        labelBullet.locationY = 0.5

        return series
      }
      for (let j = 0; j < this.option.yAxis.length; j++) {
        createSeries(this.option.yAxis[j], this.option.yAxis[j])
      }
      // Legend
      chart.legend = new am4charts.Legend()
    },
    barLine (chart) {
      chart.colors.list = []
      for (let j = 0; j < this.option.colors.length; j++) {
        chart.colors.list.push(am4core.color(this.option.colors[j]))
      }
      chart.data = this.option.data
      // create category axis for years

      let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis())
      categoryAxis.dataFields.category = this.option.yAxis[0]
      categoryAxis.renderer.inversed = true
      categoryAxis.renderer.grid.template.location = 0

      // create value axis for income and expenses

      let valueAxis = chart.xAxes.push(new am4charts.ValueAxis())
      valueAxis.renderer.opposite = true

      // create columns

      let series = chart.series.push(new am4charts.ColumnSeries())
      series.dataFields.categoryY = this.option.yAxis[0]
      series.dataFields.valueX = this.option.xAxis[0]
      series.name = this.option.labels[0]
      series.columns.template.fillOpacity = 0.5
      series.columns.template.strokeOpacity = 0
      series.tooltipText = this.option.labels[0] + ' in {categoryY}: {valueX.value}'

      // create line

      let lineSeries = chart.series.push(new am4charts.LineSeries())
      lineSeries.dataFields.categoryY = this.option.yAxis[0]
      lineSeries.dataFields.valueX = this.option.xAxis[1]
      lineSeries.name = this.option.labels[1]
      lineSeries.strokeWidth = 3
      lineSeries.tooltipText = this.option.labels[1] + ' in {categoryY}: {valueX.value}'

      // add bullets
      let circleBullet = lineSeries.bullets.push(new am4charts.CircleBullet())
      circleBullet.circle.fill = am4core.color('#fff')
      circleBullet.circle.strokeWidth = 2

      // add chart cursor
      chart.cursor = new am4charts.XYCursor()
      chart.cursor.behavior = 'zoomY'

      // add legend
      chart.legend = new am4charts.Legend()
    },
    dataBased (chart) {
      chart.colors.list = []
      for (let j = 0; j < this.option.colors.length; j++) {
        chart.colors.list.push(am4core.color(this.option.colors[j]))
      }
      chart.data = this.option.data
      // Set input format for the dates
      chart.dateFormatter.inputDateFormat = 'yyyy-MM-dd'

      // Create axes
      let dateAxis = chart.xAxes.push(new am4charts.DateAxis())

      chart.yAxes.push(new am4charts.ValueAxis())

      // Create series

      let series = chart.series.push(new am4charts.LineSeries())
      series.dataFields.valueY = this.option.yAxis[0]
      series.dataFields.dateX = this.option.xAxis[0]
      series.tooltipText = '{value}'
      series.strokeWidth = 2
      series.minBulletDistance = 15

      // Drop-shaped tooltips
      series.tooltip.background.cornerRadius = 20
      series.tooltip.background.strokeOpacity = 0
      series.tooltip.pointerOrientation = 'vertical'
      series.tooltip.label.minWidth = 40
      series.tooltip.label.minHeight = 40
      series.tooltip.label.textAlign = 'middle'
      series.tooltip.label.textValign = 'middle'

      // Make bullets grow on hover

      let bullet = series.bullets.push(new am4charts.CircleBullet())
      bullet.circle.strokeWidth = 2
      bullet.circle.radius = 4
      bullet.circle.fill = am4core.color('#fff')

      let bullethover = bullet.states.create('hover')
      bullethover.properties.scale = 1.3

      // Make a panning cursor
      chart.cursor = new am4charts.XYCursor()
      chart.cursor.behavior = 'panXY'
      chart.cursor.xAxis = dateAxis
      chart.cursor.snapToSeries = series

      // Create vertical scrollbar and place it before the value axis
      chart.scrollbarY = new am4core.Scrollbar()
      chart.scrollbarY.parent = chart.leftAxesContainer
      chart.scrollbarY.toBack()

      // Create a horizontal scrollbar with previe and place it underneath the date axis
      chart.scrollbarX = new am4charts.XYChartScrollbar()
      chart.scrollbarX.series.push(series)
      chart.scrollbarX.parent = chart.bottomAxesContainer

      dateAxis.start = 0.79
      dateAxis.keepSelection = true
    },
    lineZoomH (chart) {
      chart.colors.list = []
      for (let j = 0; j < this.option.colors.length; j++) {
        chart.colors.list.push(am4core.color(this.option.colors[j]))
      }

      // Add data
      chart.data = this.option.data

      // Create axes
      let dateAxis = chart.xAxes.push(new am4charts.DateAxis())
      dateAxis.renderer.minGridDistance = 50

      // eslint-disable-next-line no-unused-vars
      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis())

      // Create series
      let series = chart.series.push(new am4charts.LineSeries())
      series.dataFields.valueY = this.option.yAxis
      series.dataFields.dateX = this.option.xAxis
      series.strokeWidth = 2
      series.minBulletDistance = 10
      series.tooltipText = '{valueY}'
      series.tooltip.pointerOrientation = 'vertical'
      series.tooltip.background.cornerRadius = 20
      series.tooltip.background.fillOpacity = 0.5
      series.tooltip.label.padding(12, 12, 12, 12)

      // Add scrollbar
      chart.scrollbarX = new am4charts.XYChartScrollbar()
      chart.scrollbarX.series.push(series)

      // Add cursor
      chart.cursor = new am4charts.XYCursor()
      chart.cursor.xAxis = dateAxis
      chart.cursor.snapToSeries = series
    },
    lineZoomV (chart) {
      chart.colors.list = []
      for (let j = 0; j < this.option.colors.length; j++) {
        chart.colors.list.push(am4core.color(this.option.colors[j]))
      }

      // Add data
      chart.data = this.option.data

      // Create axes
      let dateAxis = chart.xAxes.push(new am4charts.DateAxis())
      dateAxis.renderer.grid.template.location = 0
      dateAxis.renderer.minGridDistance = 50

      chart.yAxes.push(new am4charts.ValueAxis())

      // Create series
      let series = chart.series.push(new am4charts.LineSeries())
      series.dataFields.valueY = this.option.yAxis
      series.dataFields.dateX = this.option.xAxis
      series.strokeWidth = 3
      series.fillOpacity = 0.5

      // Add vertical scrollbar
      chart.scrollbarY = new am4core.Scrollbar()
      chart.scrollbarY.marginLeft = 0

      // Add cursor
      chart.cursor = new am4charts.XYCursor()
      chart.cursor.behavior = 'zoomY'
      chart.cursor.lineX.disabled = true
    },
    radar (chart) {
      chart.data = this.option.data
      /* Create axes */
      var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
      categoryAxis.dataFields.category = this.option.xAxis[0]

      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
      valueAxis.renderer.axisFills.template.fill = chart.colors.getIndex(2)
      valueAxis.renderer.axisFills.template.fillOpacity = 0.05

      /* Create and configure series */
      var series = chart.series.push(new am4charts.RadarSeries())
      series.dataFields.valueY = this.option.yAxis[0]
      series.dataFields.categoryX = this.option.xAxis[0]
      series.name = this.option.labels[0]
      series.strokeWidth = 3
    },
    polarScatter (chart) {
      chart.data = this.option.data
      /* Create axes */
      /* Create axes */
      var xAxis = chart.xAxes.push(new am4charts.ValueAxis())
      xAxis.renderer.maxLabelPosition = 0.99

      var yAxis = chart.yAxes.push(new am4charts.ValueAxis())
      yAxis.renderer.labels.template.verticalCenter = 'bottom'
      yAxis.renderer.labels.template.horizontalCenter = 'right'
      yAxis.renderer.maxLabelPosition = 0.99
      yAxis.renderer.labels.template.paddingBottom = 1
      yAxis.renderer.labels.template.paddingRight = 3

      /* Create and configure series */
      let series1 = chart.series.push(new am4charts.RadarSeries())
      series1.bullets.push(new am4charts.CircleBullet())
      series1.strokeOpacity = 0
      series1.dataFields.valueX = 'x'
      series1.dataFields.valueY = 'y'
      series1.name = 'Series #1'
      series1.sequencedInterpolation = true
      series1.sequencedInterpolationDelay = 10
      series1.data = [
        { 'x': 83, 'y': 5.1 },
        { 'x': 44, 'y': 5.8 },
        { 'x': 76, 'y': 9 },
        { 'x': 2, 'y': 1.4 },
        { 'x': 100, 'y': 8.3 },
        { 'x': 96, 'y': 1.7 },
        { 'x': 68, 'y': 3.9 },
        { 'x': 0, 'y': 3 },
        { 'x': 100, 'y': 4.1 },
        { 'x': 16, 'y': 5.5 },
        { 'x': 71, 'y': 6.8 },
        { 'x': 100, 'y': 7.9 },
        { 'x': 35, 'y': 8 },
        { 'x': 44, 'y': 6 },
        { 'x': 64, 'y': 0.7 },
        { 'x': 53, 'y': 3.3 },
        { 'x': 92, 'y': 4.1 },
        { 'x': 43, 'y': 7.3 },
        { 'x': 15, 'y': 7.5 },
        { 'x': 43, 'y': 4.3 },
        { 'x': 90, 'y': 9.9 }
      ]

      let series2 = chart.series.push(new am4charts.RadarSeries())
      series2.bullets.push(new am4charts.CircleBullet())
      series2.strokeOpacity = 0
      series2.dataFields.valueX = 'x'
      series2.dataFields.valueY = 'y'
      series2.name = 'Series #2'
      series2.sequencedInterpolation = true
      series2.sequencedInterpolationDelay = 10
      series2.data = [
        { 'x': 178, 'y': 1.3 },
        { 'x': 129, 'y': 3.4 },
        { 'x': 99, 'y': 2.4 },
        { 'x': 80, 'y': 9.9 },
        { 'x': 118, 'y': 9.4 },
        { 'x': 103, 'y': 8.7 },
        { 'x': 91, 'y': 4.2 },
        { 'x': 151, 'y': 1.2 },
        { 'x': 168, 'y': 5.2 },
        { 'x': 168, 'y': 1.6 },
        { 'x': 152, 'y': 1.2 },
        { 'x': 138, 'y': 7.7 },
        { 'x': 107, 'y': 3.9 },
        { 'x': 124, 'y': 0.7 },
        { 'x': 130, 'y': 2.6 },
        { 'x': 86, 'y': 9.2 },
        { 'x': 169, 'y': 7.5 },
        { 'x': 122, 'y': 9.9 },
        { 'x': 100, 'y': 3.8 },
        { 'x': 172, 'y': 4.1 },
        { 'x': 140, 'y': 7.3 },
        { 'x': 161, 'y': 2.3 },
        { 'x': 141, 'y': 0.9 }
      ]

      let series3 = chart.series.push(new am4charts.RadarSeries())
      series3.bullets.push(new am4charts.CircleBullet())
      series3.strokeOpacity = 0
      series3.dataFields.valueX = 'x'
      series3.dataFields.valueY = 'y'
      series3.name = 'Series #3'
      series3.sequencedInterpolation = true
      series3.sequencedInterpolationDelay = 10
      series3.data = [
        { 'x': 419, 'y': 4.9 },
        { 'x': 417, 'y': 5.5 },
        { 'x': 434, 'y': 0.1 },
        { 'x': 344, 'y': 2.5 },
        { 'x': 279, 'y': 7.5 },
        { 'x': 307, 'y': 8.4 },
        { 'x': 279, 'y': 9 },
        { 'x': 220, 'y': 8.4 },
        { 'x': 201, 'y': 9.7 },
        { 'x': 288, 'y': 1.2 },
        { 'x': 333, 'y': 7.4 },
        { 'x': 308, 'y': 1.9 },
        { 'x': 330, 'y': 8 },
        { 'x': 408, 'y': 1.7 },
        { 'x': 274, 'y': 0.8 },
        { 'x': 296, 'y': 3.1 },
        { 'x': 279, 'y': 4.3 },
        { 'x': 379, 'y': 5.6 },
        { 'x': 175, 'y': 6.8 }
      ]

      /* Add legend */
      chart.legend = new am4charts.Legend()

      /* Add cursor */
      chart.cursor = new am4charts.RadarCursor()
    },
    polar (chart) {
      chart.data = this.option.data
      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
      categoryAxis.dataFields.category = 'direction'

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
      valueAxis.renderer.gridType = 'polygons'

      let range = categoryAxis.axisRanges.create()
      range.category = 'NW'
      range.endCategory = 'NW'
      range.axisFill.fill = am4core.color('#0084ff')
      range.axisFill.fillOpacity = 0.3

      let range2 = categoryAxis.axisRanges.create()
      range2.category = 'N'
      range2.endCategory = 'N'
      range2.axisFill.fill = am4core.color('#e64141')
      range2.axisFill.fillOpacity = 0.3

      let range3 = categoryAxis.axisRanges.create()
      range3.category = 'SE'
      range3.endCategory = 'SW'
      range3.axisFill.fill = am4core.color('#00ca00')
      range3.axisFill.fillOpacity = 0.3
      range3.locations.endCategory = 0

      /* Create and configure series */

      let series = chart.series.push(new am4charts.RadarSeries())
      series.dataFields.valueY = 'value'
      series.dataFields.categoryX = 'direction'
      series.name = 'Wind direction'
      series.strokeWidth = 3
      series.fillOpacity = 0.2
    },
    pie (chart) {
      chart.data = this.option.data
      let series = chart.series.push(new am4charts.PieSeries3D())
      series.colors.list = []
      for (let j = 0; j < this.option.colors.length; j++) {
        series.colors.list.push(am4core.color(this.option.colors[j]))
      }
      series.dataFields.value = this.option.value[0]
      series.dataFields.category = this.option.category[0]
    },
    lineBar (chart) {
      chart.colors.list = [am4core.color('#827af3')]
      if (this.$route.meta.dark) {
        chart.stroke = am4core.color('#8c91b6')
      }
      let chartdata = []
      let value = 120

      let names = ['ra',
        'De',
        'Ca',
        'Ja',
        'Ri',
        'An'
      ]

      for (let i = 0; i < names.length; i++) {
        value += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 5)
        chartdata.push({ category: names[i], value: value })
      }

      chart.data = chartdata
      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
      categoryAxis.renderer.grid.template.location = 0
      categoryAxis.dataFields.category = 'category'
      categoryAxis.renderer.minGridDistance = 15
      categoryAxis.renderer.grid.template.location = 0.5
      categoryAxis.renderer.grid.template.strokeDasharray = '1,3'
      categoryAxis.renderer.labels.template.rotation = -90
      categoryAxis.renderer.labels.template.horizontalCenter = 'left'
      categoryAxis.renderer.labels.template.location = 0.5

      categoryAxis.renderer.labels.template.adapter.add('dx', function (dx, target) {
        return -target.maxRight / 2
      })

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
      valueAxis.tooltip.disabled = true
      valueAxis.renderer.ticks.template.disabled = true
      valueAxis.renderer.axisFills.template.disabled = true

      let series = chart.series.push(new am4charts.ColumnSeries())
      series.dataFields.categoryX = 'category'
      series.dataFields.valueY = 'value'
      series.tooltipText = '{valueY.value}'
      series.sequencedInterpolation = true
      series.fillOpacity = 0
      series.strokeOpacity = 1
      series.strokeDashArray = '1,3'
      series.columns.template.width = 0.01
      series.tooltip.pointerOrientation = 'horizontal'

      series.bullets.create(am4charts.CircleBullet)
      chart.cursor = new am4charts.XYCursor()
    },
    map () {
      // Themes begin
      if (this.$route.meta.dark) {
        am4core.useTheme(am4themes_dark)
      }
      am4core.useTheme(am4themes_animated)
      // Themes end

      // Define marker path
      let targetSVG = 'M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z'

      // Create map instance
      let chart = am4core.create(this.element, am4maps.MapChart)
      let interfaceColors = new am4core.InterfaceColorSet()

      // Set map definition
      chart.geodata = am4geodataWorldLow

      // Set projection
      chart.projection = new am4maps.projections.Mercator()

      // Add zoom control
      chart.zoomControl = new am4maps.ZoomControl()

      // Set initial zoom
      chart.homeZoomLevel = 2.5
      chart.homeGeoPoint = {
        latitude: 51,
        longitude: -23
      }

      // Create map polygon series
      let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries())
      polygonSeries.exclude = ['AQ']
      polygonSeries.useGeodata = true
      polygonSeries.mapPolygons.template.nonScalingStroke = true

      // Add images
      let imageSeries = chart.series.push(new am4maps.MapImageSeries())
      let imageTemplate = imageSeries.mapImages.template
      imageTemplate.tooltipText = '{title}'
      imageTemplate.nonScaling = true

      let marker = imageTemplate.createChild(am4core.Sprite)
      marker.path = targetSVG
      marker.horizontalCenter = 'middle'
      marker.verticalCenter = 'middle'
      marker.scale = 0.7
      marker.fill = interfaceColors.getFor('alternativeBackground')

      imageTemplate.propertyFields.latitude = 'latitude'
      imageTemplate.propertyFields.longitude = 'longitude'
      imageSeries.data = [ {
        'id': 'london',
        'svgPath': targetSVG,
        'title': 'London',
        'latitude': 51.5002,
        'longitude': -0.1262,
        'scale': 1
      }, {
        'svgPath': targetSVG,
        'title': 'Brussels',
        'latitude': 50.8371,
        'longitude': 4.3676,
        'scale': 0.5
      }, {
        'svgPath': targetSVG,
        'title': 'Prague',
        'latitude': 50.0878,
        'longitude': 14.4205,
        'scale': 0.5
      }, {
        'svgPath': targetSVG,
        'title': 'Bratislava',
        'latitude': 48.2116,
        'longitude': 17.1547,
        'scale': 0.5
      }, {
        'svgPath': targetSVG,
        'title': 'Kiev',
        'latitude': 50.4422,
        'longitude': 30.5367,
        'scale': 0.5
      }, {
        'svgPath': targetSVG,
        'title': 'Paris',
        'latitude': 48.8567,
        'longitude': 2.3510,
        'scale': 0.5
      }, {
        'svgPath': targetSVG,
        'title': 'New York',
        'latitude': 40.43,
        'longitude': -74,
        'scale': 0.5
      } ]

      // Add lines
      let lineSeries = chart.series.push(new am4maps.MapLineSeries())
      lineSeries.dataFields.multiGeoLine = 'multiGeoLine'

      let lineTemplate = lineSeries.mapLines.template
      lineTemplate.nonScalingStroke = true
      lineTemplate.arrow.nonScaling = true
      lineTemplate.arrow.width = 4
      lineTemplate.arrow.height = 6
      lineTemplate.stroke = interfaceColors.getFor('alternativeBackground')
      lineTemplate.fill = interfaceColors.getFor('alternativeBackground')
      lineTemplate.line.strokeOpacity = 0.4

      lineSeries.data = [
        {
          'multiGeoLine': [
            [
              { 'latitude': 51.5002, 'longitude': -0.1262 },
              { 'latitude': 50.4422, 'longitude': 30.5367 }
            ]
          ]
        },
        {
          'multiGeoLine': [
            [
              { 'latitude': 51.5002, 'longitude': -0.1262 },
              { 'latitude': 40.4300, 'longitude': -74.0000 }
            ]
          ]
        }, {
          'multiGeoLine': [
            [
              { 'latitude': 51.5002, 'longitude': -0.1262 },
              { 'latitude': 64.1353, 'longitude': -21.8952 }
            ]
          ]
        }, {
          'multiGeoLine': [
            [
              { 'latitude': 51.5002, 'longitude': -0.1262 },
              { 'latitude': 37.9792, 'longitude': 23.7166 }
            ]
          ]
        }, {
          'multiGeoLine': [
            [
              { 'latitude': 51.5002, 'longitude': -0.1262 },
              { 'latitude': 38.7072, 'longitude': -9.1355 }
            ]
          ]
        }, {
          'multiGeoLine': [
            [
              { 'latitude': 51.5002, 'longitude': -0.1262 },
              { 'latitude': 55.7558, 'longitude': 37.6176 }
            ]
          ]
        }, {
          'multiGeoLine': [
            [
              { 'latitude': 51.5002, 'longitude': -0.1262 },
              { 'latitude': 44.8048, 'longitude': 20.4781 }
            ]
          ]
        }, {
          'multiGeoLine': [
            [
              { 'latitude': 51.5002, 'longitude': -0.1262 },
              { 'latitude': 48.2116, 'longitude': 17.1547 }
            ]
          ]
        }, {
          'multiGeoLine': [
            [
              { 'latitude': 51.5002, 'longitude': -0.1262 },
              { 'latitude': 46.0514, 'longitude': 14.5060 }
            ]
          ]
        }, {
          'multiGeoLine': [
            [
              { 'latitude': 51.5002, 'longitude': -0.1262 },
              { 'latitude': 40.4167, 'longitude': -3.7033 }
            ]
          ]
        }, {
          'multiGeoLine': [
            [
              { 'latitude': 51.5002, 'longitude': -0.1262 },
              { 'latitude': 59.3328, 'longitude': 18.0645 }
            ]
          ]
        }, {
          'multiGeoLine': [
            [
              { 'latitude': 51.5002, 'longitude': -0.1262 },
              { 'latitude': 46.9480, 'longitude': 7.4481 }
            ]
          ]
        }]
    },
    linierChart (chart) {
      chart.colors.list = [am4core.color('#827af3'), am4core.color('#6ce6f4')]
      if (this.$route.meta.dark) {
        chart.stroke = am4core.color('#8c91b6')
      }
      let data = []
      let open = 100
      let close = 120

      let names = ['Rai',
        'Dem',
        'Caro',
        'Jac',
        'Rich',
        'Ano',
        'Amd',
        'Idal',
        'Joi',
        'Mar',
        'Cur',
        'Shl',
        'Meg'
      ]

      for (let i = 0; i < names.length; i++) {
        open += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 5)
        close = open + Math.round(Math.random() * 10) + 3
        data.push({ category: names[i], open: open, close: close })
      }

      chart.data = data
      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
      categoryAxis.renderer.grid.template.location = 0
      categoryAxis.dataFields.category = 'category'
      categoryAxis.renderer.minGridDistance = 15
      categoryAxis.renderer.grid.template.location = 0.5
      categoryAxis.renderer.grid.template.strokeDasharray = '1,3'
      categoryAxis.renderer.labels.template.rotation = -90
      categoryAxis.renderer.labels.template.horizontalCenter = 'left'
      categoryAxis.renderer.labels.template.location = 0.5
      categoryAxis.renderer.inside = true

      categoryAxis.renderer.labels.template.adapter.add('dx', function (dx, target) {
        return -target.maxRight / 2
      })

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
      valueAxis.tooltip.disabled = true
      valueAxis.renderer.ticks.template.disabled = true
      valueAxis.renderer.axisFills.template.disabled = true

      let series = chart.series.push(new am4charts.ColumnSeries())
      series.dataFields.categoryX = 'category'
      series.dataFields.openValueY = 'open'
      series.dataFields.valueY = 'close'
      series.tooltipText = 'open: {openValueY.value} close: {valueY.value}'
      series.sequencedInterpolation = true
      series.fillOpacity = 0
      series.strokeOpacity = 1
      series.columns.template.width = 0.01
      series.tooltip.pointerOrientation = 'horizontal'

      let openBullet = series.bullets.create(am4charts.CircleBullet)
      openBullet.locationY = 1

      let closeBullet = series.bullets.create(am4charts.CircleBullet)

      closeBullet.fill = chart.colors.getIndex(4)
      closeBullet.stroke = closeBullet.fill

      chart.cursor = new am4charts.XYCursor()
    },
    radialPieChart (chart) {
      chart.hiddenState.properties.opacity = 0
      chart.data = this.option

      chart.radius = am4core.percent(70)
      chart.innerRadius = am4core.percent(40)
      chart.startAngle = 180
      chart.endAngle = 360
      var series = chart.series.push(new am4charts.PieSeries())
      series.dataFields.value = 'value'
      series.dataFields.category = 'country'
      series.colors.list = [am4core.color('#089bab'), am4core.color('#2ca5b2'), am4core.color('#faa264'),
        am4core.color('#fcb07a')]

      series.slices.template.cornerRadius = 0
      series.slices.template.innerCornerRadius = 0
      series.slices.template.draggable = true
      series.slices.template.inert = true
      series.alignLabels = false

      series.hiddenState.properties.startAngle = 90
      series.hiddenState.properties.endAngle = 90

      chart.legend = new am4charts.Legend()
    },
    dash3 (chart) {
      chart.data = [{
        'country': 'USA',
        'visits': 2025
      }, {
        'country': 'China',
        'visits': 1882
      }, {
        'country': 'Japan',
        'visits': 1809
      }, {
        'country': 'Germany',
        'visits': 1322
      }, {
        'country': 'UK',
        'visits': 1122
      }, {
        'country': 'France',
        'visits': 1114
      }, {
        'country': 'India',
        'visits': 984
      }, {
        'country': 'Spain',
        'visits': 711
      }, {
        'country': 'Netherlands',
        'visits': 665
      }, {
        'country': 'Russia',
        'visits': 580
      }, {
        'country': 'South Korea',
        'visits': 443
      }, {
        'country': 'Canada',
        'visits': 441
      }]

      chart.innerRadius = am4core.percent(40)

      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
      categoryAxis.renderer.grid.template.location = 0
      categoryAxis.dataFields.category = 'country'
      categoryAxis.renderer.minGridDistance = 60
      categoryAxis.renderer.inversed = true
      categoryAxis.renderer.labels.template.location = 0.5
      categoryAxis.renderer.grid.template.strokeOpacity = 0.08

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
      valueAxis.min = 0
      valueAxis.extraMax = 0.1
      valueAxis.renderer.grid.template.strokeOpacity = 0.08

      chart.seriesContainer.zIndex = -10

      let series = chart.series.push(new am4charts.RadarColumnSeries())
      series.dataFields.categoryX = 'country'
      series.dataFields.valueY = 'visits'
      series.tooltipText = '{valueY.value}'
      series.columns.template.strokeOpacity = 0
      series.columns.template.radarColumn.cornerRadius = 5
      series.columns.template.radarColumn.innerCornerRadius = 0
      chart.colors.list = [am4core.color('#279fac'),
        am4core.color('#ffb57e'),
        am4core.color('#279fac'),
        am4core.color('#ffb57e'),
        am4core.color('#279fac'),
        am4core.color('#ffb57e'),
        am4core.color('#279fac'),
        am4core.color('#ffb57e'),
        am4core.color('#279fac'),
        am4core.color('#ffb57e'),
        am4core.color('#279fac'),
        am4core.color('#ffb57e')
      ]

      chart.zoomOutButton.disabled = true

      // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
      series.columns.template.adapter.add('fill', (fill, target) => {
        return chart.colors.getIndex(target.dataItem.index)
      })

      setInterval(() => {
        am4core.array.each(chart.data, (item) => {
          item.visits *= Math.random() * 0.5 + 0.5
          item.visits += 10
        })
        chart.invalidateRawData()
      }, 2000)

      categoryAxis.sortBySeries = series

      chart.cursor = new am4charts.RadarCursor()
      chart.cursor.behavior = 'none'
      chart.cursor.lineX.disabled = true
      chart.cursor.lineY.disabled = true
    }
  }
}
</script>
