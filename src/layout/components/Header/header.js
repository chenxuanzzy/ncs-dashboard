import Card from "@/components/Card/card.vue";
import Setting from "../PopSetting/setting.vue";
import CurrentTime from "../CurrentTime/currentTime.vue";
import DataTime from "../DataTime/dataTime.vue";
import time from "@/assets/js/currentTime.js";

export default {
  name: "Header",
  components: {
    Card,
    Setting,
    CurrentTime,
    DataTime,
  },
  data() {
    return {
      dataTime: "", //資料時間
      pinningData: false, //判斷header釘選觀察顯示的資訊，demo先簡易判斷
      routerHomePage: true,
      timeAnimation: true,
      popSettingOpen: false,
      updateStatus: true,
      headerHeight: 0,
      tabContentHeight: 0,
      headerToggle: true,
      tabActiveIndex: 0,
      tabTitle: [
        {
          title: "監控摘要",
        },
        {
          title: "釘選觀察",
        },
      ],
      chartOptions: [
        {
          chart: {
            height: 115,
            backgroundColor: "rgba(255,255,255,0)",
          },
          title: {
            text: `
                    <div class="chartTitle">
                      <div class="title">All 人數</div>
                      <div class="count">193,072</div>
                    </div>
                  `,
            align: "left",
            // x: -10,
            // y: 7,
            margin: 0,
            useHTML: true,
          },
          credits: {
            enabled: false,
          },
          legend: {
            enabled: false,
          },
          xAxis: {
            // crosshair: true,
            visible: false,
            categories: [
              "2021/08/26 12:00",
              "2021/08/26 12:01",
              "2021/08/26 12:02",
              "2021/08/26 12:03",
              "2021/08/26 12:04",
              "2021/08/26 12:05",
              "2021/08/26 12:06",
              "2021/08/26 12:07",
            ],
            events: {
              // setExtremes: syncExtremes
            },
            labels: {
              // format: '{value} km'
            },
          },
          yAxis: {
            visible: false,
            title: {
              text: null,
            },
          },
          series: [
            {
              data: [108392, 201891, 229087, 109233, 139180, 110987, 193072],
              name: "",
              type: "line",
              color: "#999",
              zIndex: 2,
              fillOpacity: 0.3,
              marker: {
                enabled: false,
              },
              tooltip: {
                pointFormat: "<b>All 人數 {point.y}</b>",
                valueSuffix: " ",
              },
            },
            {
              type: "scatter",
              allowPointSelect: false,
              data: [
                // [1210000, 20],
                {
                  x: 2,
                  y: 229087,
                  // name: "Point2",
                  // color: "red",
                },
              ],
              // tooltip: {
              //   enabled: false,
              //   headerFormat: '',
              //   pointFormat: ''
              // },
              zIndex: 3,
              enableMouseTracking: false,
              color: "red",
              marker: {
                symbol: "\uf183",
              },
              icon: "\uf183",
            },
          ],
        },

        {
          chart: {
            height: 115,
            backgroundColor: "rgba(255,255,255,0)",
          },
          title: {
            text: `
                    <div class="chartTitle">
                      <div class="title">觀察人數</div>
                      <div class="count">916,872</div>
                    </div>
                  `,
            align: "left",
            // x: -10,
            // y: 7,
            margin: 0,
            useHTML: true,
          },
          credits: {
            enabled: false,
          },
          legend: {
            enabled: false,
          },
          xAxis: {
            // crosshair: true,
            visible: false,
            categories: [
              "2021/08/26 12:00",
              "2021/08/26 12:01",
              "2021/08/26 12:02",
              "2021/08/26 12:03",
              "2021/08/26 12:04",
              "2021/08/26 12:05",
              "2021/08/26 12:06",
              "2021/08/26 12:07",
            ],
            events: {
              // setExtremes: syncExtremes
            },
            labels: {
              // format: '{value} km'
            },
          },
          yAxis: {
            visible: false,
            title: {
              text: null,
            },
          },
          series: [
            {
              data: [789301, 981321, 889012, 787890, 897921, 789213, 916872],
              name: "",
              type: "line",
              color: "#999",
              fillOpacity: 0.3,
              marker: {
                enabled: false,
              },
              tooltip: {
                // headerFormat: '<span>aaaa</span>',
                pointFormat: "<b>觀察人數 {point.y}</b>",
                valueSuffix: " ",
              },
            },
          ],
        },

        {
          chart: {
            height: 115,
            backgroundColor: "rgba(255,255,255,0)",
          },
          title: {
            text: `
                    <div class="chartTitle">
                      <div class="title">數量</div>
                      <div class="count">123,072</div>
                    </div>
                  `,
            align: "left",
            // x: -10,
            // y: 7,
            margin: 0,
            useHTML: true,
          },
          credits: {
            enabled: false,
          },
          legend: {
            enabled: false,
          },
          xAxis: {
            // crosshair: true,
            visible: false,
            categories: [
              "2021/08/26 12:00",
              "2021/08/26 12:01",
              "2021/08/26 12:02",
              "2021/08/26 12:03",
              "2021/08/26 12:04",
              "2021/08/26 12:05",
              "2021/08/26 12:06",
              "2021/08/26 12:07",
            ],
            events: {
              // setExtremes: syncExtremes
            },
            labels: {
              // format: '{value} km'
            },
          },
          yAxis: {
            visible: false,
            title: {
              text: null,
            },
          },
          series: [
            {
              data: [190890, 107456, 178932, 198032, 178902, 97654, 123072],
              name: "",
              type: "line",
              color: "#999",
              fillOpacity: 0.3,
              marker: {
                enabled: false,
              },
              tooltip: {
                // headerFormat: '<span>aaaa</span>',
                pointFormat: "<b>數量 {point.y}</b>",
                valueSuffix: " ",
              },
            },
          ],
        },

        {
          chart: {
            height: 115,
            backgroundColor: "rgba(255,255,255,0)",
          },
          title: {
            text: `
                    <div class="chartTitle">
                      <div class="title">All 數據</div>
                      <div class="count">1,343,589</div>
                    </div>
                  `,
            align: "left",
            // x: -10,
            // y: 7,
            margin: 0,
            useHTML: true,
          },
          credits: {
            enabled: false,
          },
          legend: {
            enabled: false,
          },
          xAxis: {
            // crosshair: true,
            visible: false,
            categories: [
              "2021/08/26 12:00",
              "2021/08/26 12:01",
              "2021/08/26 12:02",
              "2021/08/26 12:03",
              "2021/08/26 12:04",
              "2021/08/26 12:05",
              "2021/08/26 12:06",
              "2021/08/26 12:07",
            ],
            events: {
              // setExtremes: syncExtremes
            },
            labels: {
              // format: '{value} km'
            },
          },
          yAxis: {
            visible: false,
            title: {
              text: null,
            },
          },
          series: [
            {
              data: [454329, 543211, 433221, 235432, 234155, 123456, 134589],
              name: "",
              type: "line",
              color: "#999",
              fillOpacity: 0.3,
              marker: {
                enabled: false,
              },
              tooltip: {
                // headerFormat: '<span>aaaa</span>',
                pointFormat: "<b>數據 {point.y}</b>",
                valueSuffix: " ",
              },
            },
          ],
        },
      ],
    };
  },
  created() {
    window.addEventListener("scroll", this.onScroll);
    this.onScroll();
    this.$bus.$on("bus:pinning", (status) => {
      this.pinningData = status;
      this.tabActiveIndex = 1; //開啟釘選
    }); //測試用
  },
  mounted() {
    this.headerHeight = this.$refs.header.offsetHeight + 30;
    if (this.routerHomePage) {
      //首頁執行
      this.tabContentHeight = this.$refs.tabContentBox.offsetHeight;
      this.$refs["timeBar"].addEventListener(
        "animationend",
        this.updateDataTime
      ); //動畫結束執行updateDataTime
    }
    this.updateHeight();
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
    this.$bus.$off("bus:pinning"); //測試用
  },
  methods: {
    updateDataTime() {
      //動畫重新執行並更新資料時間
      this.timeAnimation = false;
      setTimeout(() => {
        this.dataTime = time();
        this.timeAnimation = true;
      }, 10);
    },
    updateData() {
      this.updateStatus = !this.updateStatus;
    },
    updatePopSetting(val) {
      this.popSettingOpen = val;
    },
    updateHeight() {
      let timer = this.routerHomePage ? 510 : 0;
      console.log(timer);
      setTimeout(() => {
        this.headerHeight = this.$refs.header.offsetHeight + 30;
        this.tabContentHeight = this.homePage
          ? this.$refs.tabContentBox.offsetHeight
          : 0;
        if (this.headerToggle) {
          this.$emit("header-height", this.headerHeight);
        } else {
          this.$emit(
            "header-height",
            this.headerHeight - this.tabContentHeight + 20
          );
        }
      }, timer);
    },
    pageGoTo(name) {
      let headerHeight = this.$refs.header.offsetHeight;
      let obj = {
        headerHeight,
        elName: name,
      };
      this.$bus.$emit("bus:pageGoTo", obj);
    },
    onScroll() {
      this.updateHeight();
      if (this.routerHomePage == false) {
        return false;
      }
      let status = 1;
      if (status && window.scrollY >= 5) {
        status = 0;
        this.headerToggle = false;
      } else {
        status = 1;
        this.headerToggle = true;
      }
    },
  },
  computed: {
    homePage() {
      this.onScroll();
      if (this.$route.path == "/") {
        this.dataTime = time(); //更新資料時間
        return (this.routerHomePage = true);
      } else {
        return (this.routerHomePage = false);
      }
    },
  },
  watch: {
    $route(to) {
      if (to.path == "/") {
        this.$nextTick(() => {
          this.$refs["timeBar"].addEventListener(
            "animationend",
            this.updateDataTime
          ); //動畫結束執行updateDataTime
        });
      }
    },
  },
};
