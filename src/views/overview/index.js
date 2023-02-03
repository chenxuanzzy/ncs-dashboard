import Card from "@/components/Card/card.vue";

export default {
  name: "Overview",
  components: {
    Card,
  },
  data() {
    return {
      showSearchCard: false, //demo用
      searchText: "",
      options: [
        {
          value: "0",
          label: "依類別",
        },
        {
          value: "1",
          label: "依名稱",
        },
        {
          value: "2",
          label: "依人數",
        },
        {
          value: "3",
          label: "依數量",
        },
      ],
      value: "",
    };
  },
  created() {
    this.$bus.$on("bus:pageGoTo", (name) => {
      this.pageGoTo(name);
    });
  },
  methods: {
    pageGoTo(obj) {
      let top = this.$refs[obj.elName].offsetTop - obj.headerHeight;
      window.scrollTo({
        top,
        behavior: "smooth",
      });
    },
  },
  beforeDestroy() {
    this.$bus.$off("bus:pageGoTo");
  },
};
