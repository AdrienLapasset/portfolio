<template>
  <div class="about">
		<div class="about__portrait"></div>
		<div class="about__presentation">
			<p class="about__hello">Bonjour,</p>
			<p class="about__intro">Je suis webdesigner freelance et développeur front-end vivant à Montpellier.</p>
			<p>Diplomé en design graphique et interactivité à l’école supérieur d’art et design Le Havre Rouen. Je suis passionné par la création et l’intégration d’interfaces et plus largement par la réalisation de projets numériques.</p> 
			<p>Mes formations et expériences professionnelles m\'ont permis de maitriser les outils de maquettage UI/UX ainsi que le développement front-end.</p>
			<p>Toujours curieux de découvrir  les dernières possibilités  du web en terme d’interactivité. J’aime me lancer des défis afin de créer des expériences utilsateurs uniques.</p>
			<div class="about__links">
				<a ui-sref="home">Mes projets</a>
				<a href="pictos/cv-adrien-lapasset.pdf" target="blank">Mon CV</a>
			</div>
		</div>
  </div>
</template>

<style lang="scss">
.about {
  display: flex;
  height: $view-height;
  background-color: $blue;

  &__portrait {
    display: flex;
    flex-basis: 40%;
    height: 100%;
    background-image: url("../assets/imgs/portrait.png");
    background-color: $blue;
    background-blend-mode: multiply;
    background-size: cover;
    background-position: center;
  }

  &__presentation {
		flex-basis: 60%;
		padding: 3em;
    & * {
      color: $grey-lightest;
    }
  }

  &__hello {
    font-size: 72px;
    margin-bottom: 30px;
  }

  &__intro {
    font-size: 24px;
    margin-bottom: 20px;
  }
}
</style>
