<template>
  <el-container>
    <el-main style="padding: 0% 4% 2% 4%">
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
          <span class="data-time">資料時間 2021/08/06 18:00</span>
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
                <span class="side-title">人數 (7)</span>
              </template>
              <el-menu-item-group>
                <template slot="title">2021/08/06</template>
                <el-menu-item index="1-1"> 18:30 上升 20%</el-menu-item>
                <el-menu-item index="1-2">18:29 上升 20%</el-menu-item>
                <el-menu-item index="1-3">18:15 下降 15%</el-menu-item>
                <el-menu-item index="1-4">18:16 上升 20%</el-menu-item>
                <el-menu-item index="1-5">18:05 上升 20%</el-menu-item>
                <el-menu-item index="1-6">18:01 上升 20%</el-menu-item>
                <el-menu-item index="1-7">18:00 上升 20%</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <span>人數 (2)</span>
              </template>
              <el-menu-item-group>
                <template slot="title">2021/08/06</template>
                <el-menu-item index="1-1">18:30 上升 20%</el-menu-item>
                <el-menu-item index="1-2">18:29 上升 20%</el-menu-item>
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
                v-for="item in outlet"
                :key="item.value"
                :label="item.label"
                :value="item"
              >
              </el-option>
            </el-select>
          </div>

          <el-row style="padding: 20px 0px 15px 0px; display: flex">
            <div class="card_top_1">
              <span class="card_number">7</span><br />
              <span>告警次數</span>
            </div>
            <div class="card_top">
              <span class="card_number">132</span><br />
              <span>數</span>
            </div>
            <div class="card_top">
              <span class="card_number">648</span><br />
              <span>最大值</span>
            </div>
            <div class="card_top">
              <span class="card_number">198</span><br />
              <span>最小值</span>
            </div>
            <div class="card_top">
              <span class="card_number">326</span><br />
              <span>平均值</span>
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
<style lang="scss" src="./item.scss"></style>
<script src="./item.js"></script>
