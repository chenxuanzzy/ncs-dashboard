<template>
  <div>
    <transition name="fade">
      <div class="popSettingBox" v-if="popSettingOpen">
        <div class="innerBox">
          <div class="topBox">
            <div class="title">閾值設定</div>
          </div>
          <div class="middleBox">
            <div class="settingBox">
              <div class="leftBox">設定1</div>
              <div class="rightBox">
                <div class="groupBox">
                  <div class="title">BA 規模</div>
                  <div class="text">All</div>
                </div>
                <div class="groupBox">
                  <div class="title">監控項目</div>
                  <div class="listBox">
                    <div class="list">
                      <div class="item">BA 人數</div>
                      <div class="item">上升<InputNumber />%</div>
                      <div class="item">下降<InputNumber />%</div>
                    </div>
                    <div class="list">
                      <div class="item">CA 人數</div>
                      <div class="item">上升<InputNumber />%</div>
                      <div class="item">下降<InputNumber />%</div>
                    </div>
                    <div class="list">
                      <div class="item">BA 量</div>
                      <div class="item">上升<InputNumber />%</div>
                      <div class="item">下降<InputNumber />%</div>
                    </div>
                    <div class="list">
                      <div class="item">BB 量</div>
                      <div class="item">上升<InputNumber />%</div>
                      <div class="item">下降<InputNumber />%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="settingBox">
              <div class="leftBox">設定2</div>
              <div class="rightBox">
                <div class="groupBox">
                  <div class="title">規模</div>
                  <div class="text">99 人以下</div>
                </div>
                <div class="groupBox">
                  <div class="title">監控項目</div>
                  <div class="listBox">
                    <div class="list">
                      <div class="item">AA 人數</div>
                      <div class="item">上升<InputNumber />%</div>
                      <div class="item">下降<InputNumber />%</div>
                    </div>
                    <div class="list">
                      <div class="item">AB 人數</div>
                      <div class="item">上升<InputNumber />%</div>
                      <div class="item">下降<InputNumber />%</div>
                    </div>
                    <div class="list">
                      <div class="item">單量</div>
                      <div class="item">上升<InputNumber />%</div>
                      <div class="item">下降<InputNumber />%</div>
                    </div>
                    <div class="list">
                      <div class="item">BB 量</div>
                      <div class="item">上升<InputNumber />%</div>
                      <div class="item">下降<InputNumber />%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="settingBox">
              <div class="leftBox">設定3</div>
              <div class="rightBox">
                <div class="groupBox">
                  <div class="title">規模</div>
                  <div class="text">100 數以上～999 數以下</div>
                </div>
                <div class="groupBox">
                  <div class="title">監控項目</div>
                  <div class="listBox">
                    <div class="list">
                      <div class="item">CC 人數</div>
                      <div class="item">上升<InputNumber />%</div>
                      <div class="item">下降<InputNumber />%</div>
                    </div>
                    <div class="list">
                      <div class="item">DD 人數</div>
                      <div class="item">上升<InputNumber />%</div>
                      <div class="item">下降<InputNumber />%</div>
                    </div>
                    <div class="list">
                      <div class="item">單量</div>
                      <div class="item">上升<InputNumber />%</div>
                      <div class="item">下降<InputNumber />%</div>
                    </div>
                    <div class="list">
                      <div class="item">CD 單量</div>
                      <div class="item">上升<InputNumber />%</div>
                      <div class="item">下降<InputNumber />%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="settingBox">
              <div class="leftBox">設定3</div>
              <div class="rightBox">
                <div class="groupBox">
                  <div class="title">規模</div>
                  <div class="text">1000人以上</div>
                </div>
                <div class="groupBox">
                  <div class="title">監控項目</div>
                  <div class="listBox">
                    <div class="list">
                      <div class="item">ZZ 人數</div>
                      <div class="item">上升<InputNumber />%</div>
                      <div class="item">下降<InputNumber />%</div>
                    </div>
                    <div class="list">
                      <div class="item">ZX 人數</div>
                      <div class="item">上升<InputNumber />%</div>
                      <div class="item">下降<InputNumber />%</div>
                    </div>
                    <div class="list">
                      <div class="item">單量</div>
                      <div class="item">上升<InputNumber />%</div>
                      <div class="item">下降<InputNumber />%</div>
                    </div>
                    <div class="list">
                      <div class="item">ZA 單量</div>
                      <div class="item">上升<InputNumber />%</div>
                      <div class="item">下降<InputNumber />%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bottomBox">
            <button @click="updatePopSetting">取消</button>
            <button @click="updatePopSetting">確認</button>
          </div>
        </div>
        <div class="mask" @click="updatePopSetting"></div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
@import "./setting.scss";
</style>
<script src="./setting.js"></script>
