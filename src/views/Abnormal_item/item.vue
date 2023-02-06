<template>
  <el-container>
    <el-main>
      <div class="right-back">
        <icon iconName="home" />
        <icon iconName="rightarrow" />
        <span><router-link to="../">監控總覽</router-link></span>
        <icon iconName="rightarrow" />
        <span>告警明細</span>
      </div>
      <div class="esb-content">
        <span class="esb-name">BA 大數據監控</span>
        <div class="time-refresh" style="margin-top: 10px">
          <span class="data-time">資料時間 {{ year }}/08/06 18:00</span>
          <button class="btn-refresh" @click="forceRender">
            <icon iconName="refresh" />
          </button>
        </div>
      </div>
      <el-row :gutter="20" style="padding: 10px">
        <el-col :span="4" class="slider-left">
          <div class="warning-list">
            <span>告警列表</span>
          </div>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            :unique-opened="true"
            active-text-color="white"
          >
            <el-submenu index="1">
              <template slot="title">
                <span class="side-title">人數 ({{ itemList.length }})</span>
              </template>
              <el-menu-item-group>
                <template slot="title">{{ year }}/08/06</template>

                <el-menu-item
                  v-for="(item, index) in itemList"
                  :key="index"
                  :index="item.index"
                >
                  {{ item.data }}
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <span>人數 (2)</span>
              </template>
              <el-menu-item-group>
                <template slot="title">2022/08/06</template>
                <el-menu-item index="1-1">18:30 上升 20%</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3" close>
              <template slot="title">
                <span>數量 (1)</span>
              </template>
              <el-menu-item-group>
                <template slot="title">2021/08/06</template>
                <el-menu-item index="1-1">18:30 上升 20%</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
        <el-col :span="20" class="item-right">
          <div class="wearning-content">
            <span class="area_title">告警內容</span>
            <el-select
              v-model="hourValue"
              value-key="value"
              placeholder="1 小時"
              size="small"
            >
              <template slot="prefix"
                ><i
                  class="el-icon-time"
                  style="font-size: 20px; padding-top: 5px"
                ></i>
              </template>
              <el-option
                class="el-option-color"
                v-for="item in outlet"
                :key="item.value"
                :label="item.label"
                :value="item"
              >
              </el-option>
            </el-select>
          </div>

          <el-row style="padding: 20px 0px 15px 0px; display: flex">
            <div
              class="card_top_1"
              v-for="(card, index) in cardNumber"
              :key="index"
            >
              <span class="card_number">{{ card.number }}</span
              ><br />
              <span>{{ card.itemName }}</span>
            </div>
          </el-row>
          <el-row>
            <abnormalChart :data="data" />
          </el-row>
          <el-row>
            <div class="game-table">
              <span>明細</span>
            </div>
            <abnormalTable />
          </el-row>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
<script>
import abnormalChart from "./abnormalChart/abnormalChart.vue";
import abnormalTable from "./abnormalTable/abnormalTable.vue";
export default {
  components: {
    abnormalChart,
    abnormalTable,
  },
  data() {
    return {
      data: [],
      activeColor: "red",
      outlet: [
        {
          value: "1",
          label: "1 小時",
        },
        {
          value: "2",
          label: "3 小時",
        },
        {
          value: "3",
          label: "6 小時",
        },
        {
          value: "4",
          label: "12 小時",
        },
        {
          value: "5",
          label: "24 小時",
        },
      ],
      hourValue: "",
      year: new Date().getFullYear(),
      itemList: [],
      cardNumber: [],
    };
  },
  mounted() {
    this.randomItem();
    this.randomCard();
  },
  computed: {},
  methods: {
    forceRender() {
      window.location.reload();
    },
    randomItem() {
      for (let i = 0; i < 10; i++) {
        let randomTime = Math.floor(Math.random() * 10) + 1;
        randomTime = randomTime < 10 ? "0" + randomTime : randomTime;
        let randomPrecent = Math.floor(Math.random() * 20) + 1;
        let date = new Date();
        let getHour = date.getHours();
        let time;
        if (i % 2 === 0) {
          time = getHour + ":" + randomTime + " 下降 " + randomPrecent + "%";
        } else {
          time = getHour + ":" + randomTime + " 上降 " + randomPrecent + "%";
        }
        let obj = {};
        obj["data"] = time;
        obj["index"] = "1-" + i;
        this.itemList.push(obj);
      }
    },
    randomCard() {
      let cardname = ["告警次數", "數", "最大值", "最小值", "平均值"];
      for (let i = 0; i < cardname.length; i++) {
        let obj = {};
        obj["number"] = Math.floor(Math.random() * 1000) + 1;
        obj["itemName"] = cardname[i];
        this.cardNumber.push(obj);
      }

      console.log("se", this.cardNumber);
    },
  },
};
</script>
<style lang="scss">
.el-container {
  .right-back {
    color: white;
    span {
      font-size: 14px;
      line-height: 2;
      letter-spacing: 1px;
      text-align: left;
      color: #fff;
    }
  }
  .esb-content {
    display: flex;
    justify-content: space-between;
    border-bottom: solid 2px #212c42;
    text-align: left;
    color: #fff;
    .esb-name {
      font-size: 24px;
      line-height: 1.33;
      letter-spacing: 1.2px;
      margin: 13px 0px 10.5px 0px;
      font-family: Microsoft JhengHei;
    }
    .data-time {
      margin: 18px 27px 17.5px 147px;
      font-family: PingFangTC;
      font-size: 14px;
      line-height: 1.93;
      letter-spacing: 0.14px;
      text-align: left;
      color: #fff;
    }
    .btn-refresh {
      width: 40px;
      height: 40px;
      // margin: 8px 104px 7.5px 27px;
      padding: 11.4px 11.2px 13.1px 11.7px;
      border-radius: 5px;
      border: solid 1px #323f58;
      background-color: #2b3441;
    }
  }
  .el-menu {
    padding-top: 20px;
    border-right: solid 0px;
    background-color: #151f33;
  }
  .el-option-color {
    background-color: #2b3441;
  }
  .el-menu-vertical-demo {
    height: 70%;
    overflow: auto;
    .el-submenu__title {
      color: white;
    }
    .el-submenu__title,
    i {
      color: #ffffff;
    }
  }
  .game-table {
    font-size: 18px;
    padding: 10px 5px 10px 0px;
    color: white;
  }
  .slider-left {
    border-right: solid 1px rgba(255, 255, 255, 0.12);
    height: 800px;
    overflow: auto;
    .el-submenu__title {
      padding: 0px 0px 0px 0px;
    }
    .el-submenu.is-opened {
      background-color: #0090ff !important;
    }
    .warning-list {
      margin-top: 5%;
      margin-bottom: 5%;
      font-size: 18px;
      color: #8b8b8b;
      font-family: PingFangTC;
      color: #fff;
      span {
        font-size: 18px;
        line-height: 1.5;
        text-align: left;
      }
    }
    .el-menu-item {
      color: #ffffff;
    }
    .el-submenu__title:hover {
      background-color: #0090ff;
    }
    .el-menu-item:focus,
    .el-menu-item:hover {
      background-color: #151f33;
      font-weight: bold;
    }
    .el-menu-item.is-active {
      &::before {
        content: "";
        position: absolute;
        left: 25px;
        top: 22px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #0090ff;
      }
    }
  }
  .item-right {
    height: 830px;
    overflow: auto;
    padding-left: 40px !important;
    color: #fff;
    .card_top_1 {
      background-color: #0c1321;
      border-radius: 2px;
      border: solid 1px rgba(255, 255, 255, 0.12);
      width: 30%;
      padding: 1%;
      font-family: PingFangTC;
      text-align: center;
      .card_number {
        font-size: 35px;
        padding-bottom: 20px;
      }
      span {
        font-size: 16px;
        line-height: 1.38;
      }
    }
    .card_top {
      width: 30%;
      background-color: #0c1321;
      text-align: center;
      border-radius: 2px;
      border: solid 1px rgba(255, 255, 255, 0.12);
      border-left: 0px;
      padding: 1%;
      color: #fff;
      font-family: PingFangTC;
      .card_number {
        font-size: 35px;
      }
      span {
        font-size: 16px;
      }
    }
    .wearning-content {
      display: flex;
      justify-content: space-between;
      margin-top: 1%;
      font-family: PingFangTC;
      color: #fff;
      input::-webkit-input-placeholder {
        color: white;
      }
      input,
      .el-container,
      .item-right,
      .el-input--small,
      .el-input__inner {
        border: 0px solid black !important;
      }
      // .el-select,
      // .el-input,
      // .el-input__inner {
      //   border-radius: 3%;
      //   border: solid 1px #2b3441;
      //   // background-color: #2b3441;
      // }
      .area_title {
        font-size: 18px;
        line-height: 1.5;
        letter-spacing: -0.18px;
        text-align: left;
      }
    }
    .el-input--small .el-input__inner {
      width: 120px;
      border: 1px solid black;
      border-radius: 5px;
    }
  }
}
</style>
