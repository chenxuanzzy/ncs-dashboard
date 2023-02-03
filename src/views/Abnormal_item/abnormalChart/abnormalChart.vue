<template>
  <div>
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script>
export default {
  name: "abnormalChart",
  data() {
    return {
      loading: true,
      chartOptions: {
        chart: {
          borderColor: "rgba(255, 255, 255, 0.12)",
          backgroundColor: "#0c1321",
        },
        xAxis: {
          type: "datetime",
          crosshair: true,
          allowDecimals: false,
          dateTimeLabelFormats: {
            minute: "%H:%M",
          },
          lineColor: "rgba(255, 255, 255, 0.12)",
          tickColor: "rgba(255, 255, 255, 0.12)",
          labels: {
            style: {
              color: "#666666",
            },
          },
        },
        yAxis: {
          title: {
            enabled: false,
          },
          gridLineColor: "rgba(255, 255, 255, 0.12)",
          gridLineDashStyle: "longdash",
        },
        title: {
          text: "人數",
          style: {
            color: "white",
          },
        },
        subtitle: {
          text: "時間區間 17:30~18:30",
          align: "right",
          margin: 10,
          y: 15,
          style: {
            color: "white",
            fontSize: "18px",
          },
        },
        tooltip: {
          shared: true,
          useHTML: true,
          formatter: function () {
            let text = `<b style="color:#8b8b8b">AA 人數</b><br>`;
            text += `2021/08/06 18:00 5,134<br>`;
            text += `昨天 (08/05)<i class="el-icon-top"></i>4,363<br>`;
            text += `上週 (08/05)<i class="el-icon-top"></i>4,363<br>`;
            text += `上月 (07/06)<i class="el-icon-top"></i>4,363<br>`;
            text += "<hr>";
            text += `<span style="color:#8b8b8b">\u25CF</span>AA 人數 ${this.points[0].y}<br>`;
            text += `<span style="color:#a1a1a1">\u25CF</span>BA 人數 ${this.points[1].y}<br>`;
            text += `<span style="color:#e3b6b6">\u25CF</span>數量 ${this.points[2].y}<br>`;
            text += `<span style="color:#616060">\u25CF</span>BB 數量 ${this.points[3].y}<br>`;
            return text;
          },
        },
        plotOptions: {
          bubble: {
            minSize: 3,
            maxSize: 15,
          },
        },
        series: [
          {
            // pointStart: Date.UTC(2010, 0, 1), // 开始值
            pointInterval: 60 * 60, // 间隔一天
            name: '<b style="color:#3c76f4">AA 人數</b>',
            color: "#3c76f4",
            dashStyle: "Solid",
            zIndex: 2,
            data: [
              5.655, 5.976, 6.005, 6.06, 5.988, 6.021, 6.049, 5.882, 5.296,
              5.142, 4.701, 4.701, 4.647, 4.491, 4.48, 4.384, 4.263, 4.515,
              4.721, 5.084, 6.225, 6.302, 6.409, 6.52, 6.462, 6.525, 6.816,
              6.656, 6.566, 6.34, 6.177, 6.143, 7.462, 7.783, 7.885, 7.998,
              8.182, 8.352, 8.32, 8.5, 8.967, 8.474, 8.178, 7.89, 7.436, 7.634,
              7.777, 7.628,
            ],
            marker: {
              enabled: false,
            },
            dataLabels: {
              enabled: false,
            },
          },
          {
            pointInterval: 60 * 60,
            name: '<b style="color:#38a56e">離線人數</b>',
            color: "#38a56e",
            dashStyle: "shortdash",
            data: [
              5.026, 5, 4.941, 4.872, 4.751, 4.408, 4.425, 4.301, 4.134, 4.171,
              4.272, 4.34, 4.543, 4.826, 5.381, 5.374, 5.433, 5.483, 10.154,
              10.173, 10.361, 11.186, 11.226, 11.091, 10.899, 10.945, 10.892,
              9.618, 9.092, 8.465, 7.864, 7.396, 7.076, 7.053, 5.288, 5.428,
              5.539, 5.869, 6.956, 7.443, 7.654, 5.15, 5.106, 4.989, 5.103,
              8.005, 8.181, 8.386,
            ],
            marker: {
              enabled: false,
            },
          },
          {
            pointInterval: 60 * 60,
            name: '<b style="color:#e3b6b6">單量</b>',
            color: "#e3b6b6",
            zIndex: 1, // 控制显示层叠
            dashStyle: "shortdash",
            data: [
              5.15, 5.106, 4.989, 5.103, 5.288, 5.428, 5.363, 5.026, 5, 4.941,
              4.872, 4.751, 4.408, 4.425, 4.301, 4.134, 4.171, 4.272, 4.34,
              4.543, 4.826, 5.381, 5.374, 5.433, 5.483, 5.539, 5.869, 6.956,
              7.443, 7.654, 8.005, 8.181, 8.386, 9.202, 9.51, 9.66, 9.141, 8.79,
              8.747, 8.949, 9.188, 9.625, 10.154, 10.173, 10.361, 11.186,
              11.226, 11.091,
            ],
            marker: {
              enabled: false,
            },
          },
          {
            pointInterval: 60 * 60,
            name: '<b style="color:#f1e04d">BB</b>',
            color: "#f1e04d",
            zIndex: 1, // 控制显示层叠
            dashStyle: "shortdash",
            data: [
              5.655, 5.976, 6.005, 6.06, 5.988, 6.021, 6.049, 5.882, 5.296,
              5.142, 4.701, 4.701, 4.647, 4.491, 4.48, 4.384, 4.263, 4.515,
              4.721, 5.084, 6.787, 6.048, 6.003, 6.189, 6.216, 6.389, 6.353,
              7.341, 7.899, 6.225, 6.302, 6.409, 6.52, 6.462, 6.525, 6.816,
              6.656, 6.566, 6.34, 6.177, 6.143, 7.462, 7.783, 7.885, 7.998,
              8.182, 8.352, 8.32,
            ],
            marker: {
              enabled: false,
            },
          },
          {
            type: "bubble",
            name: '<b style="color:#FF0000">告警值</b>',
            enableMouseTracking: false,
            opacity: 5,
            states: {
              inactive: {
                opacity: 1,
              },
            },
            // states: {
            //   hover: {
            //     halo: {
            //       size: 9,
            //       attributes: {
            //         fill: "red",
            //         stroke: "red",
            //       },
            //     },
            //   },
            // },
            data: [
              {
                x: 144090,
                y: 9,
              },
              {
                x: 115090,
                y: 7.5,
              },
            ],
            zIndex: 2,
            color: "red",
          },
        ],
        credits: {
          enabled: false,
        },
      },
    };
  },
};
</script>
