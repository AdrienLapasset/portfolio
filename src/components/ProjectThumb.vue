<template>
<div>
	<h1>{{ toto }}</h1>
	{{ this.$projects }}
</div>
</template>

<script>
export default {
  name: "project-thumb",
  props: {
		title: String,
		category: String
	}
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
