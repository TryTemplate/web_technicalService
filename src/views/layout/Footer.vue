<template>
  <footer>
    <div class="footer box">
      <div class="wx-box">
        <ul>
          <li><img src="../../assets/images/qrcode_qq.png"><span>我的QQ</span></li>
          <li><img src="../../assets/images/qrcode_wx.png"><span>我的微信</span></li>
        </ul>
      </div>
      <div class="end-nav">
        <p><b>站点声明：</b></p>
        <p>1、本站仅为个人测试开发，均为Roy本人设计，个人可以使用，但是未经许可不得用于任何商业目的。</p>
        <p>
          2、所有文章未经授权禁止转载、摘编、复制或建立镜像，如有违反，追究法律责任。举报邮箱：
          <a target="_blank" href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=ljguang0401@163.com">ljguang0401@163.com</a>
        </p>
        <p>Copyright © 2021-{{ now_year }}<a href="https://tczkt.com" target="_blank">www.tczkt.com</a> All Rights Reserved. 备案号：<a href="http://beian.miit.gov.cn/" target="_blank" rel="nofollow">鄂ICP备2021022606号-1</a></p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    // msg: String
  },
  data () {
    return {
      now_year: new Date().getFullYear()
    }
  }
}
</script>
