<template>
  <div>
    <header ref="header">
      <div class="topBox">
        <div class="wrap full">
          <h1>NCS 監控</h1>
          <div class="right">
            <button @click="popSettingOpen = !popSettingOpen">
              <icon iconName="gear" />
            </button>
            <button><icon iconName="user" /></button>
          </div>
        </div>
      </div>
      <div
        class="updateBox"
        :class="[updateStatus ? 'play' : 'pause', timeAnimation ? 'run' : '']"
        v-if="homePage"
      >
        <div class="timeBar" ref="timeBar"></div>
        <div class="wrap">
          <div class="left">
            <button class="buttonUpdate" @click="updateData">
              <div class="icon">
                <icon :iconName="updateStatus ? 'pause' : 'play'" />
              </div>
              {{ updateStatus ? "每分鐘更新" : "暫停更新" }}
            </button>
          </div>
          <div class="right">
            <div class="time">現在時間 <CurrentTime /></div>
            <div class="time">資料時間 <DataTime :dataTime="dataTime" /></div>
          </div>
        </div>
      </div>
      <div class="bottomBox" v-if="homePage">
        <div class="wrap">
          <div class="tabBox">
            <div class="inner">
              <div
                class="tabItem"
                v-for="(item, key) in tabTitle"
                @click="
                  tabActiveIndex = key;
                  updateHeight();
                  headerToggle = true;
                "
                :class="tabActiveIndex == key ? 'current' : ''"
                :key="key"
              >
                {{ item.title }}
              </div>
              <button
                class="buttonOpenTab"
                :class="headerToggle ? '' : 'rotate'"
                @click="
                  headerToggle = !headerToggle;
                  updateHeight();
                "
              >
                <icon iconName="arrow" />
              </button>
            </div>
          </div>
          <div
            class="tabContentBox"
            ref="tabContentBox"
            :style="{ maxHeight: headerToggle ? '400px' : '0px' }"
          >
            <div class="tabContentItem" v-if="tabActiveIndex == 0">
              <el-row :gutter="20">
                <el-col :span="18">
                  <div class="tabContentTop">
                    <div class="title">All 數據</div>
                    <div class="status">
                      <icon iconName="status-ok" />
                      正常
                    </div>
                  </div>
                  <el-row :gutter="10">
                    <el-col :span="6">
                      <div class="highchartsBox">
                        <highcharts
                          :options="chartOptions[0]"
                          ref="highcharts"
                        ></highcharts>
                      </div>
                    </el-col>
                    <el-col :span="6">
                      <div class="highchartsBox">
                        <highcharts
                          :options="chartOptions[1]"
                          ref="highcharts"
                        ></highcharts>
                      </div>
                    </el-col>
                    <el-col :span="6">
                      <div class="highchartsBox">
                        <highcharts
                          :options="chartOptions[2]"
                          ref="highcharts"
                        ></highcharts>
                      </div>
                    </el-col>
                    <el-col :span="6">
                      <div class="highchartsBox">
                        <highcharts
                          :options="chartOptions[3]"
                          ref="highcharts"
                        ></highcharts>
                      </div>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="6">
                  <div class="tabContentTop">
                    <div class="title">健康度數量分布</div>
                  </div>
                  <el-row :gutter="10">
                    <el-col :span="8">
                      <div
                        class="headerQuantity"
                        @click="pageGoTo('sectionBox3')"
                      >
                        <div class="status">
                          <icon iconName="status-ok" />
                          正常
                        </div>
                        <div class="count">155</div>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div
                        class="headerQuantity"
                        @click="pageGoTo('sectionBox2')"
                      >
                        <div class="status">
                          <icon iconName="status-notice" />
                          注意
                        </div>
                        <div class="count">10</div>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div
                        class="headerQuantity"
                        @click="pageGoTo('sectionBox1')"
                      >
                        <div class="status">
                          <icon iconName="status-warning" />
                          警告
                        </div>
                        <div class="count">7</div>
                      </div>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </div>
            <div class="tabContentItem" v-if="tabActiveIndex == 1">
              <el-row :gutter="20" class="flex" v-if="pinningData">
                <el-col :span="6">
                  <Card :pinningStatus="true" />
                </el-col>
                <el-col :span="6">
                  <Card :pinningStatus="true" />
                </el-col>
                <el-col :span="6">
                  <Card :pinningStatus="true" />
                </el-col>
                <el-col :span="6">
                  <Card :pinningStatus="true" />
                </el-col>
                <el-col :span="6">
                  <Card :pinningStatus="true" />
                </el-col>
              </el-row>
              <div class="pinningDoDataBox" v-else>
                <icon iconName="pinning-no-data" />
                <div class="text">暫無釘選項目</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <Setting :popSettingOpen="popSettingOpen" @popSetting="updatePopSetting" />
  </div>
</template>

<style lang="scss" scoped>
@import "./header.scss";
</style>
<script src="./header.js"></script>
