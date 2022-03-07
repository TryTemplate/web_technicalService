<template>
	<div class="header-box">
		<div class="logo-section box">
			<div class="search">
				<form action="" method="post" name="searchform">
					<input name="keyboard" class="input_text" placeholder="请输入关键字词" type="text" />
					<input name="Submit" class="input_submit" value="搜索" type="submit" />
				</form>
			</div>
			<div class="logo">
                <a href="#" target="_self">
					<img src="../../assets/images/logo.gif" />
					<h2 class="logo-title">
						Excellent innovative Intelligent Technology
					</h2>
					<p class="logo-text">学而无厌，学无止境，学以致用</p>
                </a>
			</div>
		</div>

		<div class="clear"></div>

		<div class="top-nav">
			<h2>
				<router-link to="/"><a>StyleYong</a></router-link>
			</h2>
			<nav class="nav-menu-box">
				<ul class="star-list">
					<li>
						<router-link to="/" @click.native="navMenuClick">网站首页</router-link>
					</li>
					<li class="menu">
						<router-link to="/" @click.native="navMenuClick">个人博客</router-link>
						<ul class="sub start-list-sub">
							<li>
								<router-link to="/" @click.native="navMenuClick">博客日记</router-link>
							</li>
							<li>
								<router-link to="/" @click.native="navMenuClick">程序人生</router-link>
							</li>
						</ul>
						<span @click="subNavOpen($event)"></span>
					</li>
					<li class="menu">
						<router-link to="/" @click.native="navMenuClick">设计案例</router-link>
						<ul class="sub start-list-sub">
							<li>
								<router-link to="/" @click.native="navMenuClick">个人网站</router-link>
							</li>
							<li>
								<router-link to="/" @click.native="navMenuClick">企业网站</router-link>
							</li>
							<li>
								<router-link to="/" @click.native="navMenuClick">事业单位</router-link>
							</li>
							<li>
								<router-link to="/" @click.native="navMenuClick">网购商城</router-link>
							</li>
						</ul>
						<span @click="subNavOpen($event)"></span>
					</li>
					<li class="menu">
						<router-link to="/" @click.native="navMenuClick">视频教程</router-link>
						<ul class="sub start-list-sub">
							<li>
								<router-link to="/" @click.native="navMenuClick">前端设计</router-link>
							</li>
							<li>
								<router-link to="/" @click.native="navMenuClick">JS教程</router-link>
							</li>
							<li>
								<router-link to="/" @click.native="navMenuClick">CMS教程</router-link>
							</li>
						</ul>
						<span @click="subNavOpen($event)"></span>
					</li>
					<li class="menu">
						<router-link to="/" @click.native="navMenuClick">资源下载</router-link>
						<ul class="sub start-list-sub">
							<li>
								<router-link to="/" @click.native="navMenuClick">网页制作</router-link>
							</li>
							<li>
								<router-link to="/" @click.native="navMenuClick">FTP工具</router-link>
							</li>
							<li>
								<router-link to="/" @click.native="navMenuClick">编程软件</router-link>
							</li>
							<li>
								<router-link to="/" @click.native="navMenuClick">jQuery插件</router-link>
							</li>
						</ul>
						<span @click="subNavOpen($event)"></span>
					</li>
					<li>
						<router-link to="/" @click.native="navMenuClick">模板商城</router-link>
					</li>
					<li>
						<router-link to="/" @click.native="navMenuClick">关于我们</router-link>
					</li>
				</ul>
			</nav>
			<h2 class="m-nav-h" @click="showMobileNav">
				<span class="nav-icon"></span>
			</h2>
		</div>

		<div class="is-search">
			<section @click="showSearchPage"><i></i>请输入关键字词</section>
		</div>

		<!-- <search-page v-if="isMinScreen"></search-page> -->

		<el-drawer title="全局搜索" :visible.sync="drawer" :direction="direction" :before-close="handleClose">
			<div>
				<el-form :model="form">
					<el-form-item label="活动名称" :label-width="formLabelWidth">
						<!--
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                    -->
					</el-form-item>
					<el-form-item label="活动区域" :label-width="formLabelWidth">
						<!--
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="上海" value="shanghai"></el-option>
                        <el-option label="北京" value="beijing"></el-option>
                    </el-select>
                    -->
					</el-form-item>
				</el-form>
				<div slot="footer" class="dialog-footer">
					<el-button @click="drawer = false">取 消</el-button>
					<el-button type="primary" @click="drawer = false">确 定</el-button>
				</div>
			</div>
		</el-drawer>
	</div>
</template>

<script>
export default {
  name: 'Header',
  props: {},
  data () {
    return {
      isMinScreen: this.$root.$data.isMinScreen,
      drawer: false,
      direction: 'ttb',
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
    }
  },
  watch: {
    // 监听是否是小窗口界面
    '$root.$data.isMinScreen': function (val) {
      console.log('---------------val value : ' + val)

      if (typeof val === 'boolean') {
        this.isMinScreen = val
      }
      // 非小屏幕
      if (!val) {
        document.getElementsByClassName('nav-menu-box').item(0).style.display =
          'block'
        let listSubList = document.querySelectorAll('.start-list-sub')
        listSubList.forEach(function (v) {
          v.removeAttribute('style')
        })
      }
    }
  },
  methods: {
    // 小窗口菜单显示逻辑
    showMobileNav () {
      let navDom = document.getElementsByClassName('nav-menu-box').item(0)
      navDom.style.display =
        !navDom.style.display || navDom.style.display === 'none'
          ? 'block'
          : 'none'
    },
    subNavOpen (e) {
      let listSubList = document.querySelectorAll('.start-list-sub')
      listSubList.forEach(function (v) {
        if (v === e.currentTarget.previousElementSibling) {
          v.style.display = v.style.display === 'block' ? 'none' : 'block'
        } else {
          v.style.display = 'none'
        }
      })
      // document.getElementsByClassName('nav-menu-box').item(0).style.display = 'none'
    },
    // 菜单点击原生事件
    navMenuClick () {
      if (this.isMinScreen) {
        document.getElementsByClassName('nav-menu-box').item(0).style.display =
          'none'
      }
    },
    // 搜索页面
    showSearchPage () {
      // this.$router.push('/m-search')
      this.drawer = true
    },
    handleClose (done) {
      done()
    },
    done () {
      this.drawer = false
    }
  }
}
</script>
