<template>
  <div>
    <h3 class="margin-c">邮件群发</h3>
    <p class="text-muted margin-c">自动忽略没有填写邮箱信息的校友</p>
    <b-row class="margin-c" align-h="start">
      <b-col cols="2">
        <label for="receiver-input">接收人列表:</label>
      </b-col>
      <b-col cols="6">
        <b-form-input id="receiver-input" v-model="receivers" placeholder="请输入校友学号，以逗号分割"></b-form-input>
      </b-col>
    </b-row>
    <b-row class="margin-c" align-h="start">
      <b-col cols="2">
        <label for="title-input">邮件标题:</label>
      </b-col>
      <b-col cols="6">
        <b-form-input id="title-input" v-model="title" placeholder="在此输入邮件标题"></b-form-input>
      </b-col>
    </b-row>
    <b-row class="margin-c" align-h="start">
      <b-col cols="2">
        <label for="textarea-rows">邮件内容：</label>
      </b-col>
      <b-col cols="6">
        <b-form-textarea id="textarea-rows" placeholder="在此输入邮件内容" rows="12" v-model="content"></b-form-textarea>
      </b-col>
    </b-row>
    <b-row class="margin-c" align-h="start" style="text-align:right">
      <b-col cols="2">
      </b-col>
      <b-col cols="6">
        <b-button size="md" variant="primary" @click="onPublishClicked">发送</b-button>
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
      receivers: ''
    }
  },
  methods: {
    onPublishClicked() {
      if (this.title != '' && this.content != '' && this.receivers != '') {
        var that = this
        http
          .post('/admin/send_email', {
            title: this.title,
            content: this.content,
            receivers: this.receivers.split(',')
          })
          .then(res => {
            if (res.data.status === 0) {
              that.title = ''
              that.content = ''
              that.receivers = ''
              that.makeToast('发送成功')
            } else {
              that.makeToast('发送失败')
            }
          })
          .catch(err => {
            that.makeToast('发送失败')
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