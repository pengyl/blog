<template>
	<div class="page-header-fixed page-content-white"
			 :class="{'page-sidebar-closed': toggler}">

		<div class="page-wrapper">
			<div class="page-header navbar navbar-fixed-top" ref="header">
				<!-- BEGIN HEADER INNER -->
				<div class="page-header-inner">
					<!-- BEGIN LOGO -->
					<div class="page-logo has-title">
						<router-link to="/home/index">
							<img src="../../assets/logo.png" alt="logo" class="logo-default header-img-width">
							<p class="logo-title">管理系统</p>
						</router-link>
						<!--<div class="menu-toggler sidebar-toggler" @click="toggler = toggler === true ? false : true;">-->
						<!--&lt;!&ndash; DOC: Remove the above "hide" to enable the sidebar toggler button on header &ndash;&gt;-->
						<!--<span></span>-->
						<!--</div>-->
					</div>
					<!-- END LOGO -->
					<!-- BEGIN RESPONSIVE MENU TOGGLER -->
					<a href="javascript:;" class="menu-toggler responsive-toggler"
						 @click="toggler1 = toggler1 === true ? false : true;">
						<span></span>
					</a>
					<!-- END RESPONSIVE MENU TOGGLER -->
					<!-- BEGIN TOP NAVIGATION MENU -->
					<div class="top-menu">
						<ul class="nav navbar-nav pull-right">
							<!-- DOC: Apply "dropdown-dark" class after below "dropdown-extended" to change the dropdown styte -->
							<li class="dropdown">
								<router-link :to="'/home/index'" class="dropdown-toggle">
									<i class="icon-home"></i>
								</router-link>
							</li>
							<li class="dropdown dropdown-user" :class="[{open: openDropDown}]" @mouseover="openDropDown = true"
									@mouseleave="openDropDown = false">
								<a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown"
									 data-close-others="true">
									<!--<span class="username username-hide-on-mobile"> {{$store.state.user.name}} </span>-->
									<!-- DOC: Do not remove below empty space(&nbsp;) as its purposely used -->
									<!--<img alt="" src="../../assets/contact.png"/>-->
									<i class="fa fa-angle-down"></i>
								</a>
								<ul class="dropdown-menu dropdown-menu-default">
									<li>
										<a @click="menuGo('/home/baseInfo')">
											<i class="icon-user" ></i> 基本信息 </a>
									</li>
                  <li>
                    <a @click="$cleanUser">
                      <i class="icon-user" ></i> 清除缓存 </a>
                  </li>
									<li>
										<a @click="menuGo('/home/changePwd')" v-show="false">
											<i class="fa fa-navicon"></i> 修改密码 </a>
									</li>
									<li class="divider"></li>
									<li>
										<a @click="$handlerLogout">
											<i class="icon-key"></i> 退出 </a>
									</li>
								</ul>
							</li>
							<!-- END USER LOGIN DROPDOWN -->
							<!-- BEGIN QUICK SIDEBAR TOGGLER -->
							<!--<li class="dropdown dropdown-quick-sidebar-toggler">-->
							<!--<a href="javascript:;" class="dropdown-toggle">-->
							<!--<i class="icon-logout"></i>-->
							<!--</a>-->
							<!--</li>-->
							<!-- END QUICK SIDEBAR TOGGLER -->
						</ul>
					</div>
					<!-- END TOP NAVIGATION MENU -->
				</div>
				<!-- END HEADER INNER -->
			</div>
			<!-- BEGIN HEADER & CONTENT DIVIDER -->
			<div class="clearfix"></div>
			<!-- END HEADER & CONTENT DIVIDER -->
			<!-- BEGIN CONTAINER -->
			<div class="page-container">
				<!-- BEGIN SIDEBAR -->
				<div class="page-sidebar-wrapper">
					<!-- DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing -->
					<!-- DOC: Change data-auto-speed="200" to adjust the sub menu slide up/down speed -->
					<div class="page-sidebar navbar-collapse collapse" :class="{'in': toggler1}">
						<!-- BEGIN SIDEBAR MENU -->
						<ul class="page-sidebar-menu page-header-fixed"
								:class="{'page-sidebar-menu-closed': toggler}">
							<li class="sidebar-toggler-wrapper">
								<div class="sidebar-toggler hidden-phone" @click="toggler = toggler === true ? false : true;">
									<span></span>
								</div>
							</li>
							<!-- DOC: To remove the sidebar toggler from the sidebar you just need to completely remove the below "sidebar-toggler-wrapper" LI element -->
							<!--<li class="nav-item start active open">
									&lt;!&ndash; BEGIN SIDEBAR TOGGLER BUTTON &ndash;&gt;
									<div class="sidebar-toggler">
									</div>
									&lt;!&ndash; END SIDEBAR TOGGLER BUTTON &ndash;&gt;
							</li>-->
							<li class="nav-item" v-for="m,i in menus"
									:class="[{'active': i == menuIndex},{'open': i == currMenuIndex}]">
								<a href="javascript:;" @click="menuClick(i, m)" class="nav-link nav-toggle">
									<i :class="m.icon"/>
									<!--<i class="icon-home"></i>-->
									<span class="title">{{m.title}}</span>
									<span class="arrow" v-if="m.childrenMenu!==undefined && m.childrenMenu.length > 0"
												:class="{'open': i == currMenuIndex}"></span>
								</a>
								<ul class="sub-menu" v-if="m.childrenMenu!==undefined && m.childrenMenu.length > 0">
									<li v-for="ms,si in m.childrenMenu" :class="[{'active': ms.path===currentPath}]">
										<a href="javascript:;" @click="menuClick(i, m, ms)" class="nav-link">
											<!--<i :class="ms.icon"></i>-->
											<!--<i class="icon-home"></i>-->
											<span class="title">{{ms.title}}</span>
											<span :class="{'selected': ms.path===currentPath}"></span>
										</a>
									</li>
								</ul>
							</li>
						</ul>
						<!-- END SIDEBAR MENU -->
					</div>
				</div>
				<!-- END SIDEBAR -->
				<!-- BEGIN CONTENT -->
				<div class="page-content-wrapper">
					<div class="page-content" ref="content">
						<router-view></router-view>
					</div>
				</div>
				<!-- END CONTENT -->
			</div>
			<!-- END CONTAINER -->
			<!-- BEGIN FOOTER -->
			<!--    <div class="page-footer" ref="footer">
							<div class="page-footer-inner"> 2016 &copy; Metronic Theme By
									<a target="_blank" href="http://keenthemes.com">Keenthemes</a> &nbsp;|&nbsp;
									<a href="http://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes" title="Purchase Metronic just for 27$ and get lifetime updates for free" target="_blank">Purchase Metronic!</a>
							</div>
							<div class="scroll-to-top">
									<i class="icon-arrow-up"></i>
							</div>
					</div>-->
			<!-- END FOOTER -->
		</div>
	</div>
</template>
<script>
	export default{
		props: ['menus'],
		data () {
			return {
				formData: '',
				m: {},
				toggler: 0,
				toggler1: 0,
				openDropDown: false,
				menuIndex: -1,
				currMenuIndex: -1,
				currentPath: this.$route.path,
				dialogFormVisible: false,
				dialogPasswordData: {
					title: '',
					visible: false
				}
			};
		},
		methods: {
			initMenu(){
				let menus = this.menus;
				this.currentPath = this.$route.path;
				if (menus !== undefined && menus.length > 0 && this.currentPath !== undefined) {
					outer:for (var i = 0; i < menus.length; i++) {
						let childrenMenu = menus[i].childrenMenu;
						if (childrenMenu !== undefined && childrenMenu.length > 0) {
							inner:for (let temp of childrenMenu) {
								if (this.currentPath === temp.path) {
									this.menuIndex = this.currMenuIndex = i;
									break outer;
								}
							}
						}
					}
				}
				console.log("menuIndex:" + this.menuIndex);
			},
			menuClick (i, m, sm) {
        console.log("菜单点击:" + i);
				if (sm) {
					this.menuGo(sm.path);
				} else {
					this.currMenuIndex = this.currMenuIndex === i ? -1 : i;
					if (m.path) {
						this.menuGo(m.path);
						this.menuIndex = i;
					}
				}
			},
			menuGo (path) {
				if (path.includes('http') || path.includes('https')) {
					window.location.href = path;
				} else {
					if (this.currentPath == path) {
						this.$router.push({path: '/home/_empty/' + require('js-base64').Base64.encode(path)});

					} else {
						this.$router.push({path: path});
					}
					this.initMenu();
				}
			},
			initContentMinHeight () {
				let headerHeight = this.$refs.header.offsetHeight;
				this.$refs.content.style.minHeight = document.documentElement.clientHeight - headerHeight + 'px';
			}
		},
		mounted (){
			this.initMenu();
			this.initContentMinHeight();
			window.addEventListener('resize', this.initContentMinHeight, false)
		},
		beforeDestroy () {
			window.removeEventListener('resize', this.initContentMinHeight, false)
		},
	};
</script>
<style lang="css">
	.header-img-width {
		width: 30px
	}
</style>
