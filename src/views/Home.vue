<template>
  <div class="home">
		<div v-for="project in projects" v-bind:key="project.name">
			<router-link :to="{ name: 'project', params: { name: project.name } }">
				{{ project.title }}
				{{ project.category }}
			</router-link>
		</div>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  data() {
    return {
      projects: []
    };
  },
  mounted() {
    axios.get("projects.json").then(response => (this.projects = response.data));
  }
};
</script>

<style lang="scss">
// @import "sass/main.scss";
</style>

