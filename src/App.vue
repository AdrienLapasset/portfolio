<template>
  <div id="app">
		<header>
			<nav class="navbar">
				<router-link to="/">Home</router-link> 
				<router-link to="/about">
					<my-logo />
				</router-link> 
				<router-link to="/contact">
				</router-link>
			</nav>
		</header>
    <router-view/>
  </div>
</template>

<script>
import MyLogo from "./components/icons/MyLogo.vue"

export default {
	components: {
		MyLogo
  }
}
</script>


<style lang="scss">
@import "scss/_base.scss";
// @import "scss/_navbar.scss";
</style>
