<template>
    <div class="system">
        <goback/>   
        
        <el-table
          ref="multipleTable"
          :data="tableData"
          :row-style="tableRowStyle"
          :header-cell-class-name="headerStyle"
          style="width: 100%"
          @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            label="日期"
            width="120">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            show-overflow-tooltip>
          </el-table-column>
        </el-table>
        <div style="margin-top: 20px">
          <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
          <el-button @click="toggleSelection()">取消选择</el-button>
        </div>


    </div>
</template>
<script>
import goback from '../other/goback.vue'
export default {
     components: {
        goback
    },
     data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
      }
    },

    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
       tableRowStyle({ row, rowIndex }) {
      return 'background-color: pink;color: red;'
      },
      tableHeaderColor({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        console.log('111')
        return 'background-color: lightblue;color: #fff;font-weight: 500;'
      }
    },
    headerStyle({row, rowIndex}){
      return 'table-th'
    }
  } 
}
</script>
<style scoped>
    .el-table__header th, .el-table__header tr {

    background-color: #17B3A3;

    color: black;

    }
    .el-table__header td,.el-table__header th{

     padding:6px 0px;
     background-color: black;

    }
    .table-th{
        background-color: blue;
    }
</style>
