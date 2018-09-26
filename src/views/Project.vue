<template>
  <div class="project">

    <h1>Projet {{ project.title }}</h1>
		<p>{{ project.description }}</p>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  data() {
    return {
      project: []
    };
  },
  mounted() {
    axios
			.get("projects.json")
			.then(response => 
			(this.project = response.data.find(project => project.name === this.$route.params.name )));
  }
};
</script>
