<template>
  <div>
    <h3 class="margin-c">校友新闻发布</h3>
    <b-row class="margin-c" align-h="start">
      <b-col cols="2">
        <label for="title-input">新闻标题:</label>
      </b-col>
      <b-col cols="6">
        <b-form-input id="title-input" v-model="title" placeholder="在此输入新闻标题"></b-form-input>
      </b-col>
    </b-row>
    <b-row class="margin-c" align-h="start">
      <b-col cols="2">
        <label for="textarea-rows">新闻内容：</label>
      </b-col>
      <b-col cols="6">
        <b-form-textarea id="textarea-rows" placeholder="在此输入新闻内容" rows="12" v-model="content"></b-form-textarea>
      </b-col>
    </b-row>
    <b-row class="margin-c" align-h="start">
      <b-col cols="2">
        <label for="textarea-rows">人物图片：</label>
      </b-col>
      <b-col cols="6">
        <b-form-file v-model="file" :state="Boolean(file)" placeholder="拖拽文件至此或点击选择..." drop-placeholder="松手确认..." browse-text="浏览文件"></b-form-file>
      </b-col>
    </b-row>
    <b-row class="margin-c" align-h="start" style="text-align:right">
      <b-col cols="2">
      </b-col>
      <b-col cols="6">
        <b-button size="md" variant="primary" @click="onPublishClicked">发布</b-button>
      </b-col>
    </b-row>
    <el-dialog title="提示" :visible.sync="toastVisible" width="30%">
      <span>{{ toastContent }}</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="toastVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import http from '../../common/http'

export default {
  data() {
    return {
      toastContent: '',
      toastVisible: false,
      title: '',
      content: '',
      file: null
    }
  },
  methods: {
    onPublishClicked() {
      if (this.title != '' && this.content != '' && this.file != null) {
        var data = new FormData()
        data.append('myFile', this.file)
        var that = this
        http
          .post('/common/upload', data, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          .then(res => {
            if (res.data.status === 0) {
              http
                .post('/admin/post_alumni_news', {
                  url: res.data.data.url,
                  title: that.title,
                  content: that.content
                })
                .then(res => {
                  if (res.data.status === 0) {
                    that.title = ''
                    that.content = ''
                    that.file = null
                    that.makeToast('发布成功')
                  }
                })
                .catch(err => {
                  that.makeToast('网络错误')
                })
            }
          })
          .catch(err => {
            that.makeToast('网络错误')
          })
      }
    },
    makeToast(content) {
      this.toastVisible = true
      this.toastContent = content
    }
  }
}
</script>

<style scoped>
.margin-c {
  margin: 18px 5px;
}
</style>