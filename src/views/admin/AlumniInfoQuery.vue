<template>
  <div>
    <h2 id="subpage-title">校友信息查询与修改</h2>
    <b-card id="query-card" no-body>
      <b-tabs card @input="clearItems">
        <b-tab title="精确查找" active>
          <b-input-group id="input-area">
            <template v-slot:prepend>
              <b-dropdown :text="tab1.dropdownOptionText" variant="info">
                <b-dropdown-item v-for="item in tab1.optionMap" :key="item" @click="onDropdownItemClick(item)">{{ item }}</b-dropdown-item>
              </b-dropdown>
            </template>

            <b-form-input v-model="tab1.input"></b-form-input>

            <b-input-group-append>
              <b-button size="md" variant="primary" @click="query">查找</b-button>
            </b-input-group-append>
          </b-input-group>
          <b-table class="result-table" show-empty empty-text="没有任何记录~" :items="tab1.items" :fields="fields" sort-icon-left outlined responsive="sm">
            <template v-slot:cell(actions)="row">
              <b-button variant="success" size="sm" class="mr-1">
                修改
              </b-button>
              <b-button variant="danger" size="sm" @click="onDeleteClicked(tab1.items, row.item.student_id)">
                删除
              </b-button>
            </template>
          </b-table>

        </b-tab>
        <b-tab title="多条件精确查找">
          <b-row class="input-row">
            <b-col>
              <label for="tab2-input-stuid">学号:</label>
              <b-form-input id="tab2-input-stuid" v-model="tab2.opt.student_id"></b-form-input>
            </b-col>
            <b-col>
              <label for="tab2-input-name">姓名:</label>
              <b-form-input id="tab2-input-name" v-model="tab2.opt.name"></b-form-input>
            </b-col>
            <b-col>
              <label for="tab2-input-start-year">入学年份:</label>
              <b-form-input id="tab2-input-start-year" v-model="tab2.opt.start_year"></b-form-input>
            </b-col>
            <b-col>
              <label for="tab2-input-end-year">毕业年份:</label>
              <b-form-input id="tab2-input-end-year" v-model="tab2.opt.end_year"></b-form-input>
            </b-col>
          </b-row>

          <b-row class="input-row">
            <b-col>
              <label for="tab2-input-department">院系:</label>
              <b-form-input id="tab2-input-department" v-model="tab2.opt.department"></b-form-input>
            </b-col>
            <b-col>
              <label for="tab2-input-major">专业:</label>
              <b-form-input id="tab2-input-major" v-model="tab2.opt.major"></b-form-input>
            </b-col>
            <b-col>
              <label for="tab2-input-class">班级:</label>
              <b-form-input id="tab2-input-class" v-model="tab2.opt.class"></b-form-input>
            </b-col>
            <b-col>
              <label for="tab2-input-company">工作单位:</label>
              <b-form-input id="tab2-input-company" v-model="tab2.opt.company"></b-form-input>
            </b-col>
          </b-row>
          <b-row align-h="between">
            <b-col cols="2"><small class="text-muted">可填写以上一个或多个条件</small></b-col>
            <b-col cols="1">
              <b-button size="md" variant="primary" @click="multi_query">精确查找</b-button>
            </b-col>
          </b-row>
          <b-table class="result-table" show-empty empty-text="没有任何记录~" :items="tab2.items" :fields="fields" sort-icon-left outlined responsive="sm">
            <template v-slot:cell(actions)="row">
              <b-button variant="success" size="sm" class="mr-1">
                修改
              </b-button>
              <b-button variant="danger" size="sm" @click="onDeleteClicked(tab2.items, row.item.student_id)">
                删除
              </b-button>
            </template>
          </b-table>
        </b-tab>
        <b-tab title="多条件模糊查找">
          <b-row class="input-row">
            <b-col>
              <label for="tab3-input-stuid">学号:</label>
              <b-form-input id="tab3-input-stuid" v-model="tab3.opt.student_id"></b-form-input>
            </b-col>
            <b-col>
              <label for="tab3-input-name">姓名:</label>
              <b-form-input id="tab3-input-name" v-model="tab3.opt.name"></b-form-input>
            </b-col>
            <b-col>
              <label for="tab3-input-start-year">入学年份:</label>
              <b-form-input id="tab3-input-start-year" v-model="tab3.opt.start_year"></b-form-input>
            </b-col>
            <b-col>
              <label for="tab3-input-end-year">毕业年份:</label>
              <b-form-input id="tab3-input-end-year" v-model="tab3.opt.end_year"></b-form-input>
            </b-col>
          </b-row>

          <b-row class="input-row">
            <b-col>
              <label for="tab3-input-department">院系:</label>
              <b-form-input id="tab3-input-department" v-model="tab3.opt.department"></b-form-input>
            </b-col>
            <b-col>
              <label for="tab3-input-major">专业:</label>
              <b-form-input id="tab3-input-major" v-model="tab3.opt.major"></b-form-input>
            </b-col>
            <b-col>
              <label for="tab3-input-class">班级:</label>
              <b-form-input id="tab3-input-class" v-model="tab3.opt.class"></b-form-input>
            </b-col>
            <b-col>
              <label for="tab3-input-company">工作单位:</label>
              <b-form-input id="tab3-input-company" v-model="tab3.opt.company"></b-form-input>
            </b-col>
          </b-row>
          <b-row align-h="between">
            <b-col cols="2"><small class="text-muted">可填写以上一个或多个条件</small></b-col>
            <b-col cols="1">
              <b-button size="md" variant="primary" @click="vague_multi_query">模糊查找</b-button>
            </b-col>
          </b-row>
          <b-table class="result-table" show-empty empty-text="没有任何记录~" :items="tab3.items" :fields="fields" sort-icon-left outlined responsive="sm">
            <template v-slot:cell(actions)="row">
              <b-button variant="success" size="sm" class="mr-1">
                修改
              </b-button>
              <b-button variant="danger" size="sm" @click="onDeleteClicked(tab3.items, row.item.student_id)">
                删除
              </b-button>
            </template>
          </b-table>

        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import http from '../../common/http'

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
        { key: 'company', label: '工作单位', sortable: true },
        { key: 'actions', label: '操作', sortable: false }
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
        items: []
      },
      tab2: {
        opt: {
          name: '',
          student_id: '',
          start_year: '',
          end_year: '',
          department: '',
          major: '',
          class: '',
          company: ''
        },
        items: []
      },
      tab3: {
        opt: {
          name: '',
          student_id: '',
          start_year: '',
          end_year: '',
          department: '',
          major: '',
          class: '',
          company: ''
        },
        items: []
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
    },
    query() {
      var param = {}
      param[this.tab1.dropdownOption] = this.tab1.input
      http.post('/common/query_user', param).then(res => {
        if (res.data.status === 0) {
          this.tab1.items = res.data.data
        } else {
          this.tab1.items = []
        }
      })
    },
    multi_query() {
      var param = {}
      for (var i in this.tab2.opt) {
        if (this.tab2.opt[i] != '') {
          var value = this.tab2.opt[i]
          if (i === 'start_year' || i === 'end_year') {
            value = parseInt(value)
          }
          param[i] = value
        }
      }
      http.post('/common/query_user', param).then(res => {
        if (res.data.status === 0) {
          this.tab2.items = res.data.data
        } else {
          this.tab2.items = []
        }
      })
    },
    vague_multi_query() {
      var param = {}
      for (var i in this.tab3.opt) {
        if (this.tab3.opt[i] != '') {
          var value = this.tab3.opt[i]
          if (i === 'start_year' || i === 'end_year') {
            value = parseInt(value)
          }
          param[i] = value
        }
      }
      http.post('/common/vague_query_user', param).then(res => {
        if (res.data.status === 0) {
          this.tab3.items = res.data.data
        } else {
          this.tab3.items = []
        }
      })
    },
    onDeleteClicked(items, id) {
      http.get('/admin/rm_user/' + String(id)).then(res => {
        if (res.data.status === 0) {
          for (var i in items) {
            if (items[i].student_id === id) {
              items.splice(i, 1)
              break
            }
          }
        }
      })
    },
    clearItems() {
      this.tab1.items = []
      this.tab2.items = []
      this.tab3.items = []
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