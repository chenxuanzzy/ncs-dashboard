<template>
  <div class="cardBox">
    <div class="topItem">
      <div class="icon">
        <icon iconName="status-ok" />
      </div>
      <div class="title">數據分析與監控</div>
      <div class="dropdownButtonBox">
        <button class="button" @click="isShow = !isShow">
          <icon iconName="ellipsis-v" />
        </button>
        <transition name="fade">
          <div class="listBox" v-show="isShow">
            <template v-if="pinningStatus">
              <div class="list" @click="pinning(false)">取消釘選</div>
            </template>
            <template v-else>
              <div class="list" @click="pinning(true)">釘選觀察</div>
            </template>
          </div>
        </transition>
      </div>
    </div>
    <ul class="totalList">
      <li>
        <div class="title">觀察人數</div>
        <div class="total">123,072</div>
      </li>
      <li>
        <div class="title">總人數</div>
        <div class="total">123,072</div>
      </li>
      <li>
        <div class="title">總數據</div>
        <div class="total">123,072</div>
      </li>
      <li>
        <div class="title">大數據分析</div>
        <div class="total">123,072</div>
      </li>
    </ul>
    <div class="infoBox">
      <ul class="infoList" v-if="!noData">
        <li>
          <div class="item">
            <div class="left">
              <router-link to="./abnormal_item/">觀察人數-上升20%</router-link>
            </div>
            <div class="right">
              <router-link to="./abnormal_item/">18:00</router-link>
            </div>
          </div>
        </li>
        <li>
          <div class="item">
            <div class="left">
              <router-link to="./abnormal_item/">總人數-上升20%</router-link>
            </div>
            <div class="right">
              <router-link to="./abnormal_item/">08/06 18:00</router-link>
            </div>
          </div>
        </li>
        <li>
          <div class="item">
            <div class="left">
              <router-link to="./abnormal_item/">總數據-下降15%</router-link>
            </div>
            <div class="right">
              <router-link to="./abnormal_item/">2020/02/03 18:00</router-link>
            </div>
          </div>
        </li>
        <li>
          <div class="item">
            <router-link to="./abnormal_item/" class="link"
              ><icon iconName="ellipsis-v"
            /></router-link>
          </div>
        </li>
      </ul>
      <div class="infoText" v-else>查無警告項目</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cardBox {
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 1px solid #000;
  border-radius: 5px;
  .topItem {
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #000;
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      svg {
        width: 17px;
        height: 22px;
      }
    }
    .title {
      font-size: 16px;
    }
    .dropdownButtonBox {
      position: relative;
      margin-left: auto;
      .button {
        @include resetButton;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
      }
      .listBox {
        position: absolute;
        top: 100%;
        right: 0;
        width: 100px;
        border: 1px solid #000;
        background-color: #fff;
        text-align: center;
        .list {
          padding: 10px;
          cursor: pointer;
          &:not(:last-child) {
            border-bottom: 1px solid #000;
          }
        }
      }
    }
  }
  .totalList {
    @include resetList;
    display: flex;
    flex-wrap: wrap;
    padding-top: 10px;
    padding-left: 3px;
    padding-right: 3px;
    padding-bottom: 10px;
    border-bottom: 1px solid #000;
    > li {
      flex: 1;
      text-align: center;
      padding-left: 5px;
      padding-right: 5px;
      &:not(:last-child) {
        border-right: 1px solid #000;
      }
    }
    .title {
      font-size: 14px;
      color: #999;
      margin-bottom: 7px;
    }
  }
  .infoBox {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 150px;
  }
  .infoText {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 14px;
    color: #999;
  }
  .infoList {
    @include resetList;
    width: 100%;
    li {
      padding-left: 15px;
      padding-right: 15px;
      &:not(:last-child) {
        .item {
          border-bottom: 1px solid #000;
        }
      }
    }
    .item {
      display: flex;
      padding-top: 10px;
      padding-bottom: 10px;
    }
    .left,
    .right {
      width: 50%;
    }
    .right {
      text-align: right;
    }
    .link {
      margin-left: auto;
      svg {
        transform: rotate(90deg);
        opacity: 0.5;
      }
    }
  }
}
</style>

<script>
export default {
  name: "Card",
  props: {
    noData: {
      type: Boolean,
      default: false,
    },
    pinningStatus: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    pinning(status) {
      this.$bus.$emit("bus:pinning", status);
    },
  },
};
</script>
