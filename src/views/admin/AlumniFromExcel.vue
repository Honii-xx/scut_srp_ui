<template>
  <div>
    <b-row id="subpage-title" align-h="center">
      <h4>Excel或Json文件批量导入</h4>
    </b-row>
    <b-row align-h="center">
      <p class="text-muted">支持 .xlsx .xls .json 格式文件，请务必保证文件后缀名正确，否则将无法识别。导入已存在用户将自动忽略。</p>
    </b-row>
    <b-row id="input-row" align-h="center">
      <b-col cols="6">
        <b-form-file @change="onFileChange" v-model="file" :state="Boolean(file)" placeholder="拖拽文件至此或点击选择..." drop-placeholder="松手确认..." browse-text="浏览文件"></b-form-file>
      </b-col>

    </b-row>
    <div class="result-area" v-if="items.length > 0">
      <b-row class="des-row" align-h="between">
        <b-col cols="4" class="text-muted">
          共{{ items.length }}条记录，请检查，并点击右侧按钮确认
        </b-col>
        <b-col cols="1">
          <b-button variant="primary" @click="upload">确认导入</b-button>
        </b-col>
      </b-row>

      <b-table class="result-table" show-empty table-variant="secondary" :items="items" bordered :fields="fields" sort-icon-left outlined responsive="sm">
      </b-table>
    </div>

    <el-dialog title="提示" :visible.sync="toastVisible" width="30%">
      <span>{{ toastContent }}</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="toastVisible = false">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import XLSX from 'xlsx'
import http from "../../common/http";

export default {
  data() {
    return {
      toastVisible: false,
      toastContent: '',
      file: null,
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
      items: []
    }
  },
  methods: {
    onFileChange(e) {
      var file = e.target.files[0]
      var ext = this.getFileExt(file)
      if (ext === '.json') {
        this.processJsonFile(file)
      } else if (ext === '.xlsx' || ext === '.xls') {
        this.processExcelFile(file)
      } else {
        this.makeToast('未知文件格式')
      }
    },
    processJsonFile(file) {
      var fr = new FileReader()
      fr.onload = e => {
        var data = e.target.result
        var arr = JSON.parse(data)
        this.items = []
        this.items = this.items.concat(arr)
      }
      fr.readAsText(file)
    },
    processExcelFile(file) {
      var fr = new FileReader()
      fr.onload = e => {
        var data = e.target.result
        var workbook = XLSX.read(data, { type: 'array' })
        var firstSheetName = workbook.SheetNames[0]
        var worksheet = workbook.Sheets[firstSheetName]
        var results = XLSX.utils.sheet_to_json(worksheet)
        this.items = []
        this.items = this.items.concat(results)
      }
      fr.readAsArrayBuffer(file)
    },
    getFileExt(file) {
      var dotIndex = file.name.lastIndexOf('.')
      if (dotIndex < 0) {
        return 'unknown'
      }
      return file.name.substr(dotIndex)
    },
    makeToast(content) {
      this.toastVisible = true
      this.toastContent = content
    },
    upload() {
      var that = this
      http.post('/admin/add_user', this.items).then(res => {
        if (res.data.status === 0) {
          that.makeToast('导入成功')
        } else {
          that.makeToast('导入失败')
        }
      }).catch(err => {
        that.makeToast('导入失败')
      })
      that.items = []
    }
  }
}
</script>

<style scoped>
#input-row {
  margin-top: 1px;
}
#subpage-title {
  margin-top: 35px;
  margin-bottom: 30px;
}
.result-table {
  margin-top: 5px;
}
.des-row {
  margin-top: 8px;
}
</style>