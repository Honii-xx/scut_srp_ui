<template>
  <div>
    <h2 id="subpage-title">校友信息查询</h2>
    <b-card id="query-card" no-body>
      <b-tabs card>
        <b-tab title="精确查找" active>
          <b-input-group id="input-area">
            <template v-slot:prepend>
              <b-dropdown :text="tab1.dropdownOptionText" variant="info">
                <b-dropdown-item v-for="item in tab1.optionMap" :key="item" @click="onDropdownItemClick(item)">{{ item }}</b-dropdown-item>
              </b-dropdown>
            </template>

            <b-form-input v-model="tab1.input"></b-form-input>

            <b-input-group-append>
              <b-button size="md" variant="success">查找</b-button>
            </b-input-group-append>
          </b-input-group>
          <b-table id="result-table" :items="tab1.items" :fields="fields" sort-icon-left outlined responsive="sm"></b-table>

        </b-tab>
        <b-tab title="多条件精确查找">
          <b-row class="input-row">
            <b-col>
              <label for="input-stuid">学号:</label>
              <b-form-input id="input-stuid" v-model="tab1.input"></b-form-input>
            </b-col>
            <b-col>
              <label for="input-name">姓名:</label>
              <b-form-input id="input-name" v-model="tab1.input"></b-form-input>
            </b-col>
            <b-col>
              <label for="input-start-year">入学年份:</label>
              <b-form-input id="input-start-year" v-model="tab1.input"></b-form-input>
            </b-col>
            <b-col>
              <label for="input-end-year">毕业年份:</label>
              <b-form-input id="input-end-year" v-model="tab1.input"></b-form-input>
            </b-col>
          </b-row>

          <b-row class="input-row">
            <b-col>
              <label for="input-department">院系:</label>
              <b-form-input id="input-department" v-model="tab1.input"></b-form-input>
            </b-col>
            <b-col>
              <label for="input-major">专业:</label>
              <b-form-input id="input-major" v-model="tab1.input"></b-form-input>
            </b-col>
            <b-col>
              <label for="input-class">班级:</label>
              <b-form-input id="input-class" v-model="tab1.input"></b-form-input>
            </b-col>
            <b-col>
              <label for="input-company">工作单位:</label>
              <b-form-input id="input-company" v-model="tab1.input"></b-form-input>
            </b-col>
          </b-row>
          <b-row align-h="end">
            <b-col cols="1">
              <b-button size="md" variant="success">精确查找</b-button>
            </b-col>
          </b-row>
          <b-table class="result-table" :items="tab1.items" :fields="fields" sort-icon-left outlined responsive="sm"></b-table>
        </b-tab>
        <b-tab title="多条件模糊查找">
          <b-row class="input-row">
            <b-col>
              <label for="input-stuid">学号:</label>
              <b-form-input id="input-stuid" v-model="tab1.input"></b-form-input>
            </b-col>
            <b-col>
              <label for="input-name">姓名:</label>
              <b-form-input id="input-name" v-model="tab1.input"></b-form-input>
            </b-col>
            <b-col>
              <label for="input-start-year">入学年份:</label>
              <b-form-input id="input-start-year" v-model="tab1.input"></b-form-input>
            </b-col>
            <b-col>
              <label for="input-end-year">毕业年份:</label>
              <b-form-input id="input-end-year" v-model="tab1.input"></b-form-input>
            </b-col>
          </b-row>

          <b-row class="input-row">
            <b-col>
              <label for="input-department">院系:</label>
              <b-form-input id="input-department" v-model="tab1.input"></b-form-input>
            </b-col>
            <b-col>
              <label for="input-major">专业:</label>
              <b-form-input id="input-major" v-model="tab1.input"></b-form-input>
            </b-col>
            <b-col>
              <label for="input-class">班级:</label>
              <b-form-input id="input-class" v-model="tab1.input"></b-form-input>
            </b-col>
            <b-col>
              <label for="input-company">工作单位:</label>
              <b-form-input id="input-company" v-model="tab1.input"></b-form-input>
            </b-col>
          </b-row>
          <b-row align-h="end">
            <b-col cols="1">
              <b-button size="md" variant="success">模糊查找</b-button>
            </b-col>
          </b-row>
          <b-table class="result-table" :items="tab1.items" :fields="fields" sort-icon-left outlined responsive="sm"></b-table>

        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        { key: 'student_id', label: '学号', sortable: true },
        { key: 'name', label: '姓名', sortable: true },
        { key: 'department', label: '院系', sortable: true },
        { key: 'major', label: '专业', sortable: true },
        { key: 'class', label: '班级', sortable: true },
        { key: 'start_year', label: '入学时间', sortable: true },
        { key: 'end_year', label: '毕业时间', sortable: true },
        { key: 'company', label: '工作单位', sortable: true }
      ],
      tab1: {
        optionMap: {
          name: '姓名',
          student_id: '学号',
          start_year: '入学年份',
          end_year: '毕业年份',
          department: '院系',
          major: '专业',
          class: '班级',
          company: '工作单位'
        },
        dropdownOption: 'name',
        dropdownOptionText: '姓名',
        input: '',
        items: [
          {
            student_id: 201630665472,
            name: '彭家俊',
            department: '软件学院',
            major: '软件工程',
            class: '3班',
            start_year: 2016,
            end_year: 2020,
            company: 'Microsoft'
          },
          {
            student_id: 201630666350,
            name: '张守一',
            department: '软件学院',
            major: '软件工程',
            class: '3班',
            start_year: 2016,
            end_year: 2020,
            company: 'Google'
          },
          {
            student_id: 201630663977,
            name: '陈桂博',
            department: '软件学院',
            major: '软件工程',
            class: '3班',
            start_year: 2016,
            end_year: 2020,
            company: 'Tencent'
          },
          {
            student_id: 201630665502,
            name: '邱鸿鹏',
            department: '软件学院',
            major: '软件工程',
            class: '3班',
            start_year: 2016,
            end_year: 2020,
            company: 'Amazon'
          }
        ]
      }
    }
  },
  methods: {
    onDropdownItemClick(v) {
      this.tab1.dropdownOptionText = v
      for (var i in this.tab1.optionMap) {
        if (this.tab1.optionMap[i] == v) {
          this.tab1.dropdownOption = i
          break
        }
      }
    }
  }
}
</script>

<style scoped>
#query-card {
  margin-top: 10px;
}
#subpage-title {
  margin-top: 15px;
}
#result-table {
  margin-top: 15px;
}
#input-area {
  margin-bottom: 25px;
}
.input-row {
  margin-bottom: 15px;
}
.result-table {
  margin-top: 15px;
}
</style>