<template>
  <div>
    <div class="table-border" style="border: 1px solid black">
      <el-table
        :data="pagedTableData"
        height="348"
        :cell-style="{ background: '#050f1e' }"
        :summary-method="getSummaries"
        show-summary
      >
        <el-table-column prop="name" sortable label="名稱" align="left">
        </el-table-column>
        <el-table-column prop="gamekind" sortable label="類別" align="left">
        </el-table-column>
        <el-table-column prop="gameplatform" sortable label="平台" align="left">
        </el-table-column>
        <el-table-column prop="betpeople" align="right" sortable label="人數">
          <template slot-scope="scope">
            {{ scope.row.betpeople }}
            <icon iconName="RedArrow"></icon>
          </template>
        </el-table-column>
        <el-table-column prop="wagerstotal" align="right" sortable label="數量">
          <template slot-scope="scope">
            {{ scope.row.wagerstotal }}
            <icon iconName="GreenArrow"></icon>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagenation">
      <el-pagination
        background
        :total="this.tableData.length"
        :page-sizes="[10, 25, 50, 100, 250, 500]"
        :page-size="pageSize"
        @current-change="setPage"
        @size-change="handleSizeChange"
        layout="prev, pager, next, total, sizes"
      >
      </el-pagination>
    </div>
  </div>
</template>
<style lang="scss" scope>
.el-table td,
.el-table th {
  background-color: #0c1321;
  color: white !important;
  padding: 0px 0px 0px 0px;
}

.el-table--border:after,
.el-table--group:after,
.el-table:before {
  background-color: black;
}

.el-table--border,
.el-table--group {
  border-color: black;
}

.el-table__body-wrapper td {
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.el-table--border th,
.el-table--border th.gutter:last-of-type {
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.el-table--border td,
.el-table--border th {
  border-right: 1px solid rgba(255, 255, 255, 0.12);
}

.el-table {
  color: black;
  display: flex;
  flex-direction: column;
}
.el-table__body-wrapper {
  order: 1;
}
.el-table__footer-wrapper td {
  font-size: 18px;
}
.el-table__footer-wrapper {
  margin-top: 0px;
  border-left: none;
  border-right: none;
  td {
    padding: 20px 0;
  }
}
.el-table__footer-wrapper tbody td,
.el-table__header-wrapper tbody td {
  background-color: #0c1321;
}

.el-pagination {
  display: flex;
  justify-content: center;
  padding-top: 10px;
}
.el-pagination__total,
.el-pagination__sizes {
  position: absolute;
}
.el-pagination__total {
  right: 130px;
}
.el-pagination__sizes {
  right: 0;
}
.el-pagination.is-background .btn-next,
.el-pagination.is-background .btn-prev,
.el-pagination.is-background .el-pager li {
  background-color: #323f58 !important;
}
.el-pagination.is-background .btn-next,
.el-pagination.is-background .btn-prev,
.el-pagination.is-background .el-pager li {
  background-color: #323f58 !important;
}
.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #409eff !important;
}

.el-pagination.is-background .btn-next,
.el-pagination.is-background .btn-prev,
.el-pagination.is-background .el-pager li {
  color: #d9e1e7;
}
.el-pagination__total {
  color: #d9e1e7;
}
.el-input__inner {
  background-color: #323f58;
  color: white;
  border: #323f58 1px solid;
}
.el-select-dropdown {
  border: 1px solid #323f58;
  color: white;
}
.el-select-dropdown__list {
  background-color: #323f58;
}
.el-select-dropdown__item.hover,
.el-select-dropdown__item:hover {
  background-color: #99b2c6;
  border-radius: 5px;
  margin-left: 5px;
  margin-right: 5px;
  border: 0.5px #0090ff solid;
}
.el-select-dropdown__item.selected {
  color: white;
}
.el-select-dropdown__item {
  color: white;
  line-height: 30px;
}
.el-table tbody tr:hover > td {
  background-color: #050f1e;
}
.el-popper[x-placement^="bottom"] .popper__arrow {
  border-bottom-color: #323f58;
}
.el-popper[x-placement^="bottom"] .popper__arrow::after {
  border-bottom-color: #323f58;
}
</style>
<script>
export default {
  data() {
    return {
      tableData: [],
      pageData: [],
      pageSize: 10,
      page: 1,
    };
  },
  computed: {
    pagedTableData() {
      return this.tableData.slice(
        this.pageSize * this.page - this.pageSize,
        this.pageSize * this.page
      );
    },
  },
  methods: {
    setPage(value) {
      this.page = value;
    },
    handleSizeChange(size) {
      this.pageSize = size;
    },
    getSummaries(param) {
      //   // const { columns, data } = param;
      const { columns, data } = param;
      const sums = [];
      console.log(data);
      // let str = `<i class="el-icon-top" style="cursor: pointer; padding: 5px"></i>`;
      columns.forEach((column, index) => {
        if (index === 0 && index === 1) {
          sums[index] = "";
        } else if (index === 2) {
          sums[index] = "合計";
        } else if (index === 3) {
          sums[index] = "2,567(4.4%)";
        } else if (index === 4) {
          sums[index] = "365,768(100%)";
        }
        //     const values = data.map((item) => Number(item[column.property]));
        //     if (!values.every((value) => isNaN(value))) {
        //       sums[index] = values.reduce((prev, curr) => {
        //         const value = Number(curr);
        //         if (!isNaN(value)) {
        //           return prev + curr;
        //         } else {
        //           return prev;
        //         }
        //       }, 0);
        //       sums[index] += "";
        //     } else {
        //       sums[index] = "N/A";
        //     }
      });
      return sums;
    },
  },
  created() {
    for (let i = 0; i < 1500; i++) {
      this.tableData.push({
        name: "AA 人數",
        gamekind: "市場數據",
        gameplatform: "AA 狀態",
        betpeople: `1${i} (4.7%)`,
        wagerstotal: `${i},400 (${i}.7%)`,
      });
    }
  },
};
</script>
