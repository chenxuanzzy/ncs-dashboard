<template>
  <div
    class="appWrapper"
    :class="homePage ? 'transition' : ''"
    ref="appWrapper"
    :style="{ paddingTop: wrapPt + 'px' }"
  >
    <Header @header-height="setPadding" />
    <main>
      <div class="wrap">
        <router-view />
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.appWrapper {
  padding-top: 50px;
  &.transition {
    transition: all 0.5s ease-in-out;
  }
}
</style>

<script>
import Header from "./components/Header/header.vue";

export default {
  name: "Layout",
  components: {
    Header,
  },
  data() {
    return {
      wrapPt: 0,
    };
  },
  methods: {
    setPadding(val) {
      this.wrapPt = val;
    },
  },
  computed: {
    homePage() {
      if (this.$route.path == "/") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
