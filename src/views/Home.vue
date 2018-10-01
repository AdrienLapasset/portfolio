<template>
  <div class="home">
		<router-link 
			class="home__project" 
			v-for="project in projects" v-bind:key="project.name"
			:to="{ name: 'project', params: { name: project.name } }">
				<img class="home__project__img" :src="require('./../assets/imgs/projects/' + project.name + '-thumb.jpg')" :alt="project.title">
				<!-- <img src="./../assets/imgs/projects/alpaga-thumb.jpg" alt=""> -->
				{{ project.title }}
				{{ project.category }}
		</router-link>
  </div>
</template>

<script>
const axios = require("axios");
import Image from "./../assets/imgs/projects/alpaga-thumb.jpg";

export default {
  data() {
    return {
      projects: []
    };
  },
  mounted() {
    axios
      .get("projects.json")
      .then(response => (this.projects = response.data));
  }
};
</script>

<style lang="scss">
.home {
  display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: flex-start;

  &__project {
    display: flex;
		flex-direction: column;
		margin: 1em;

    &__img {
      max-width: 400px;
    }
  }
}
</style>

