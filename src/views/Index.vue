<template>
  <div class="article-box">
    <!-- banner begin-->
    <div class="banner-box">

      <banner></banner>

    </div>
    <!-- banner end-->
    <!-- headline-boc begin-->
    <div class="headline-box white-bg">
      <div class="headline-news">
        <h2 class="headline-news-title">
          <span>头条</span>
          <router-link :to="''" title="develop">develop，helloworld！</router-link>
        </h2>
        <p class="headline-news-small-text">一个人没有信仰是危险的，一个民族没有信仰是可怕的。追梦的路上总有太多的诱惑和险阻，唯有信仰给你勇往直前的动力!让信仰为你指路，让信念给你力量</p>

        <ul class="headline-news-list">
          <li v-for="i in 2" :key="i">
            <router-link :to="''" title="tips">【告别202{{ i }}】耕耘才有所得，付出才有收获
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="clear blank"></div>

    <div class="pics box white-bg tab-num02">
      <div class="gd-box">
        <ul class="id-tab">
          <li class="tab-current">个人网站</li>
          <li>企业网站</li>
          <li>事业单位</li>
        </ul>
      </div>
      <div class="id-tab-content">
        <section class="tab-box">
          <div class="pic-list-img">
            <ul>
              <li v-for="i in 2" :key="i">
                <router-link :to="''"><i><img src="../assets/images_pro/pic04.jpg" alt=""></i><span>Title on {{ i }}</span>
                </router-link>
              </li>
            </ul>
          </div>
          <span class="tab-a-more">
            <router-link :to="''" title="更多个人网站"><i></i><i></i><i></i></router-link>
          </span>
        </section>
      </div>
    </div>
    <!-- pics end-->

    <div class="clear blank"></div>

    <!-- videos start-->
    <div class="clear blank"></div>
    <div class="videos box white-bg tab-num04">
      <div class="gd-box">
        <ul class="id-tab">
          <li class="tab-current">前端设计</li>
          <li>JS教程</li>

        </ul>
      </div>
      <div class="id-tab-content">
        <section class="tab-box">
          <div class="videos-list">
            <ul>
              <li v-for="i in 1" :key="i">
                <router-link :to="''"><i><img src="../assets/images_pro/pic09.jpg"></i>
                  <h2>this is a voide title</h2>
                  <p><b class="datetime">2019-05-07</b><span class="view-num">58人在看</span></p>
                </router-link>
              </li>
            </ul>
          </div>
          <span class="tab-a-more">
            <router-link :to="''" title="更多前端设计"><i></i><i></i><i></i></router-link>
          </span>
        </section>
      </div>
    </div>
    <!-- videos end-->

    <div class="clear blank"></div>

    <!-- tags start-->
    <div class="white-bg box tags">
      <div class="news-title">
        <h2>热门标签</h2>
        <span class="tab-a-more">
          <router-link :to="''" title="更多"><i></i><i></i><i></i></router-link>
        </span>
      </div>
      <ul>
        <router-link v-for="i in 15" :key="i" :to="''">企业网站({{ i }})</router-link>
      </ul>
    </div>
    <!-- tags end-->

    <div class="blank clear"></div>
    <div class="links white-bg box ">
      <div class="news-title">
        <h2>友情链接</h2>
      </div>
      <ul>
        <li>
          <a href="https://github.com/" target="_blank">gitHub</a>
        </li>
        <li>
          <a href="https://cn.vuejs.org/index.html" target="_blank">Vue</a>
          <router-link to=""></router-link>
        </li>
      </ul>
    </div>
    <!-- links end-->
    <div class="blank clear"></div>
  </div>

</template>

<script>
import Banner from '../components/Banner'

export default {
  name: 'Main',
  components: { Banner },
  props: {
    // msg: String
  }
}
</script>
