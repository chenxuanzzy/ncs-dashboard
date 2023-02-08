<template>
  <div>
    <div class="titleBox">
      <div class="title">監控</div>
      <div class="rightBox">
        <el-select v-model="value" class="selectSort" placeholder="請選擇">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <div class="buttonGroup">
          <button class="buttonSort">
            <icon iconName="sort-amount-desc" />
          </button>
          <button class="buttonSort asc">
            <icon iconName="sort-amount-asc" />
          </button>
        </div>
        <div class="searchBox">
          <button class="buttonSearch"><icon iconName="search" /></button>
          <el-input v-model="searchText" placeholder="搜尋...">
            <transition name="fade">
              <button
                class="buttonClear"
                v-if="searchText.length > 0"
                @click="searchText = ''"
              >
                <icon iconName="clear-circle" />
              </button>
            </transition>
          </el-input>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div class="searchSectionBox" v-if="searchText.length > 0">
        <div class="searchTitle">
          <button class="buttonClear" @click="searchText = ''">
            <icon iconName="clear" />
          </button>
          <span class="searchItem">搜尋「{{ searchText }}」</span>
        </div>
        <el-row
          :gutter="20"
          class="flex flex-wrap"
          v-if="searchText.indexOf('數據分析與監控') > -1"
        >
          <el-col :span="6">
            <Card />
          </el-col>
        </el-row>
        <div class="searchNoData" v-else>
          <icon iconName="search" />
          <div class="text">無相關搜尋結果</div>
        </div>
      </div>
    </transition>
    <template v-if="searchText.length == 0">
      <div class="sectionBox1" ref="sectionBox1">
        <div class="cardTitle">警告(9)</div>
        <el-row :gutter="20" class="flex flex-wrap">
          <el-col :span="6">
            <Card :noData="true" />
          </el-col>
          <el-col :span="6">
            <Card />
          </el-col>
          <el-col :span="6">
            <Card />
          </el-col>
          <el-col :span="6">
            <Card />
          </el-col>
          <el-col :span="6">
            <Card :noData="true" />
          </el-col>
          <el-col :span="6">
            <Card />
          </el-col>
        </el-row>
      </div>
      <div class="sectionBox2" ref="sectionBox2">
        <div class="cardTitle">注意(9)</div>
        <el-row :gutter="20" class="flex flex-wrap">
          <el-col :span="6">
            <Card />
          </el-col>
          <el-col :span="6">
            <Card :noData="true" />
          </el-col>
          <el-col :span="6">
            <Card />
          </el-col>
          <el-col :span="6">
            <Card />
          </el-col>
          <el-col :span="6">
            <Card />
          </el-col>
          <el-col :span="6">
            <Card />
          </el-col>
          <el-col :span="6">
            <Card />
          </el-col>
          <el-col :span="6">
            <Card />
          </el-col>
        </el-row>
      </div>
      <div class="sectionBox3" ref="sectionBox3">
        <div class="cardTitle">正常(9)</div>
        <el-row :gutter="20" class="flex flex-wrap">
          <el-col :span="6">
            <Card />
          </el-col>
          <el-col :span="6">
            <Card />
          </el-col>
          <el-col :span="6">
            <Card />
          </el-col>
          <el-col :span="6">
            <Card />
          </el-col>
          <el-col :span="6">
            <Card />
          </el-col>
        </el-row>
      </div>
    </template>
  </div>
</template>
<style lang="scss" scoped>
@import "./index.scss";
</style>

<script src="./index.js"></script>
