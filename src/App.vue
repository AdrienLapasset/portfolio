<template>
  <div id="app">
		<header class="header">
			<!-- <router-link to="/">Home</router-link>  -->
			<router-link to="/about" class="header__about">
				<my-logo /><h1 class="header__about__name">Adrien Lapasset</h1><span class="header__about__skills">Webdesign / Développement front-end</span>
			</router-link> 
			<router-link to="/contact" class="header__contact">
				<!-- <span class="text">Contact</span> -->
				<img class="icon contact-icon" src="./assets/icons/contact.svg">
			</router-link>
		</header>
    <router-view/>
  </div>
</template>

<script>
import MyLogo from "./components/icons/MyLogo.vue";

export default {
  components: {
    MyLogo
  }
};
</script>


<style lang="scss">
@import "scss/_base.scss";

.header {
  display: flex;
  justify-content: space-between;
  height: 50px;
  padding: 0 1em;
  background-color: $blue;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  &__about {
    display: flex;
    align-items: center;

    &__name {
      font-size: 18px;
      color: $grey-lightest;
    }

    &__skills {
      font-size: 9px;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: $grey-lightest;
      margin-left: 12px;
    }
  }

  &__contact {
    display: flex;
    align-items: center;
  }
}
</style>
