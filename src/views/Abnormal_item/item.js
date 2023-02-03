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
    };
  },
  methods: {
    forceRender() {
      window.location.reload();
    },
  },
};
