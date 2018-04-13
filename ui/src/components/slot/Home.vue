<template>
	<div>
		<m-page :menus="menus"></m-page>
	</div>
</template>
<script>
	export default{
		data () {
            return {menus: this.$store.state.menu.adminMenu};
//			return {menus: this.$store.state.menu.menus};
		}
	};
</script>
<style>

</style>
