<template>
  <div class="home">
		<router-link 
			class="home__project" 
			v-for="project in projects" v-bind:key="project.name"
			:to="{ name: 'project', params: { name: project.name } }">
				<img class="home__project__img" :src="require('./../assets/imgs/projects/' + project.name + '-thumb.jpg')" :alt="project.title">
				<h2 class="home__project__title">{{ project.title }}</h2>
				<p class="home__project__category">{{ project.category }}</p> 
		</router-link>
  </div>
</template>

<script>
import axios from "axios";

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
  column-count: 3;
  column-gap: 2em;
  margin: 2em;

  &__project {
    margin-bottom: 3em;
    display: block;
    text-align: center;
    break-inside: avoid;
    page-break-inside: avoid;

    &__img {
      max-width: 100%;
      box-shadow: -1px 1px 8px 0px rgba(0, 0, 0, 0.25);
    }

    &__title {
			margin-top: .5em;
      font-size: 16px;
    }

    &__category {
      text-transform: uppercase;
      font-size: 11px;
      color: $grey;
      letter-spacing: 1px;
    }
  }
}
</style>

