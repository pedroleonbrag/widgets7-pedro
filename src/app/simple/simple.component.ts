import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

declare const am5: any;
declare const am5xy: any;
declare const am5themes_Animated: any;

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements AfterViewInit {


  private root: any;

  public message: string = 'A';
  public chart_id: string ;

  public series!: any;
  public chartData: any[];
  public data: any[] = [
    {
      "year": "2014",
      "value": 0
    },
    {
      "year": "2015",
      "value": 15

    },
    {
      "year": "2016",
      "value": 20

    },
    {
      "year": "2017",
      "value": 20

    },
    {
      "year": "2018",
      "value": 30

    },
    {
      "year": "2019",
      "value": 15

    },
    {
      "year": "2020",
      "value": 37

    },
    {
      "year": "2021",
      "value": 34

    },
    {
      "year": "2022",
      "value": 39

    },
    {
      "year": "2023",
      "value": 40

    },
    {
      "year": "2024",
      "value": 60

    }
  ];

  constructor(@Inject('id') id: string) {
		this.chart_id = id;
    console.log("this.chart_id",this.chart_id);
	}

  ngAfterViewInit() {
    if(Math.random() > 0.5){
      this.renderChart5();
    }else{
      this.renderOther();
    }
  }

  renderOther() {
    let root = am5.Root.new("chartdiv-pie-"+this.chart_id);


    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);


    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    let chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: true,
      panY: true,
      wheelX: "panX",
      wheelY: "zoomX",
      pinchZoomX: true
    }));

    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
    cursor.lineY.set("visible", false);


    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    let xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
    xRenderer.labels.template.setAll({
      rotation: -90,
      centerY: am5.p50,
      centerX: am5.p100,
      paddingRight: 15
    });

    xRenderer.grid.template.setAll({
      location: 1
    })

    let xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
      maxDeviation: 0.3,
      categoryField: "country",
      renderer: xRenderer,
      tooltip: am5.Tooltip.new(root, {})
    }));

    let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      maxDeviation: 0.3,
      renderer: am5xy.AxisRendererY.new(root, {
        strokeOpacity: 0.1
      })
    }));


    // Create series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    let series = chart.series.push(am5xy.ColumnSeries.new(root, {
      name: "Series 1",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "value",
      sequencedInterpolation: true,
      categoryXField: "country",
      tooltip: am5.Tooltip.new(root, {
        labelText: "{valueY}"
      })
    }));

    series.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5, strokeOpacity: 0 });
    series.columns.template.adapters.add("fill", function (fill, target) {
      return chart.get("colors").getIndex(series.columns.indexOf(target));
    });

    series.columns.template.adapters.add("stroke", function (stroke, target) {
      return chart.get("colors").getIndex(series.columns.indexOf(target));
    });


    // Set data
    let data = [{
      country: "USA",
      value: 2025
    }, {
      country: "China",
      value: 1882
    }, {
      country: "Japan",
      value: 1809
    }, {
      country: "Germany",
      value: 1322
    }, {
      country: "UK",
      value: 1122
    }, {
      country: "France",
      value: 1114
    }, {
      country: "India",
      value: 984
    }, {
      country: "Spain",
      value: 711
    }, {
      country: "Netherlands",
      value: 665
    }, {
      country: "South Korea",
      value: 443
    }, {
      country: "Canada",
      value: 441
    }];

    xAxis.data.setAll(data);
    series.data.setAll(data);


    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);
  }

  renderChart5() {


    this.chartData = this.data;


    let root = am5.Root.new("chartdiv-pie-"+this.chart_id);

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    let chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: false,
      panY: false,
      pinchZoomX: false
    }));


    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    // let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
    // 	behavior: "none"
    // }));
    // cursor.lineY.set("visible", false);

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    let xRenderer = am5xy.AxisRendererX.new(root, {});
    xRenderer.grid.template.set("location", 0.5);
    xRenderer.labels.template.setAll({
      // location: 0.5,
      // multiLocation: 0.5,
      visible: false,
    });



    let xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
      categoryField: "year",
      renderer: xRenderer,
      tooltip: am5.Tooltip.new(root, {})
    }));




    xAxis.data.setAll(this.chartData);

    var yRenderer = am5xy.AxisRendererY.new(root, {})
    yRenderer.labels.template.set('visible', false);

    let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      maxPrecision: 0,
      renderer: yRenderer
    }));


    let series = chart.series.push(am5xy.LineSeries.new(root, {
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "value",
      categoryXField: "year",
      stroke: am5.color('#62a37b'),
      tooltip: am5.Tooltip.new(root, {
        labelText: "{valueY}",
        dy: -5
      })
    }));

    series.strokes.template.setAll({
      templateField: "strokeSettings",
      strokeWidth: 3,
    });

    series.fills.template.setAll({
      visible: true,
      fillOpacity: 0.8,
      templateField: "fillSettings"
    });

    series.fills.template.set("fillGradient", am5.LinearGradient.new(root, {
      stops: [
        {
          color: am5.color(0xafe0c2)
        },
        {
          color: am5.color(0xafe0c2)
        },
        {
          color: am5.color(0xcbf7dc)
        },
        {
          color: am5.color(0xdcf7e7)
        }
      ],
      rotation: 90
    }));


    series.bullets.push(function () {
      return am5.Bullet.new(root, {
        sprite: am5.Circle.new(root, {
          templateField: "bulletSettings",
          radius: 1
        })
      });
    });

    // xAxis.get("renderer").grid.template.set("forceHidden", true);
    // yAxis.get("renderer").grid.template.set("forceHidden", true);

    yAxis.get("renderer").grid.template.setAll({
      strokeWidth: 0,
      visible: false
    });


    xAxis.get("renderer").grid.template.setAll({
      location: 0,
      strokeWidth: 0,
      visible: false
    });

    series.data.setAll(this.chartData);
    series.appear(1000);

    // Add scrollbar
    // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
    // chart.set("scrollbarX", am5.Scrollbar.new(root, {
    // 	orientation: "horizontal",
    // 	marginBottom: 20
    // }));

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    chart.appear(1000, 100);

    this.series = series;
    // let root = am5.Root.new("chartdiv-pie");

    //   root.setThemes([am5themes_Animated.new(root)]);

    //   let chart = root.container.children.push(
    //     am5xy.XYChart.new(root, {
    //       panY: false,
    //       layout: root.verticalLayout
    //     })
    //   );

    //   // Define data
    //   let data = [
    //     {
    //       category: "Research",
    //       value1: 1000,
    //       value2: 588
    //     },
    //     {
    //       category: "Marketing",
    //       value1: 1200,
    //       value2: 1800
    //     },
    //     {
    //       category: "Sales",
    //       value1: 850,
    //       value2: 1230
    //     }
    //   ];

    //   // Create Y-axis
    //   let yAxis = chart.yAxes.push(
    //     am5xy.ValueAxis.new(root, {
    //       renderer: am5xy.AxisRendererY.new(root, {})
    //     })
    //   );

    //   // Create X-Axis
    //   let xAxis = chart.xAxes.push(
    //     am5xy.CategoryAxis.new(root, {
    //       renderer: am5xy.AxisRendererX.new(root, {}),
    //       categoryField: "category"
    //     })
    //   );
    //   xAxis.data.setAll(data);

    //   // Create series
    //   let series1 = chart.series.push(
    //     am5xy.ColumnSeries.new(root, {
    //       name: "Series",
    //       xAxis: xAxis,
    //       yAxis: yAxis,
    //       valueYField: "value1",
    //       categoryXField: "category"
    //     })
    //   );
    //   series1.data.setAll(data);

    //   let series2 = chart.series.push(
    //     am5xy.ColumnSeries.new(root, {
    //       name: "Series",
    //       xAxis: xAxis,
    //       yAxis: yAxis,
    //       valueYField: "value2",
    //       categoryXField: "category"
    //     })
    //   );
    //   series2.data.setAll(data);

    //   // Add legend
    //   let legend = chart.children.push(am5.Legend.new(root, {}));
    //   legend.data.setAll(chart.series.values);

    //   // Add cursor
    //   chart.set("cursor", am5xy.XYCursor.new(root, {}));

    //   this.root = root;
  }

  renderChart() {
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create("chartdiv-pie", am4charts.XYChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.data = [
      {
        country: "USA",
        visits: 23725
      },
      {
        country: "China",
        visits: 1882
      },
      {
        country: "Japan",
        visits: 1809
      },
      {
        country: "Germany",
        visits: 1322
      },
      {
        country: "UK",
        visits: 1122
      },
      {
        country: "France",
        visits: 1114
      },
      {
        country: "India",
        visits: 984
      },
      {
        country: "Spain",
        visits: 711
      },
      {
        country: "Netherlands",
        visits: 665
      },
      {
        country: "Russia",
        visits: 580
      },
      {
        country: "South Korea",
        visits: 443
      },
      {
        country: "Canada",
        visits: 441
      }
    ];

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.minGridDistance = 40;
    categoryAxis.fontSize = 11;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.max = 24000;
    valueAxis.strictMinMax = true;
    valueAxis.renderer.minGridDistance = 30;
    // axis break
    let axisBreak = valueAxis.axisBreaks.create();
    axisBreak.startValue = 2100;
    axisBreak.endValue = 22900;
    //axisBreak.breakSize = 0.005;

    // fixed axis break
    let d = (axisBreak.endValue - axisBreak.startValue) / (valueAxis.max - valueAxis.min);
    axisBreak.breakSize = 0.05 * (1 - d) / d; // 0.05 means that the break will take 5% of the total value axis height

    // make break expand on hover
    let hoverState = axisBreak.states.create("hover");
    hoverState.properties.breakSize = 1;
    hoverState.properties.opacity = 0.1;
    hoverState.transitionDuration = 1500;

    axisBreak.defaultState.transitionDuration = 1000;
    /*
    // this is exactly the same, but with events
    axisBreak.events.on("over", function() {
      axisBreak.animate(
        [{ property: "breakSize", to: 1 }, { property: "opacity", to: 0.1 }],
        1500,
        am4core.ease.sinOut
      );
    });
    axisBreak.events.on("out", function() {
      axisBreak.animate(
        [{ property: "breakSize", to: 0.005 }, { property: "opacity", to: 1 }],
        1000,
        am4core.ease.quadOut
      );
    });*/

    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = "country";
    series.dataFields.valueY = "visits";
    series.columns.template.tooltipText = "{valueY.value}";
    series.columns.template.tooltipY = 0;
    series.columns.template.strokeOpacity = 0;

    // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
    series.columns.template.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

  }

}
