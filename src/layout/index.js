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
