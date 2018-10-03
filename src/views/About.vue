<template>
  <div class="about">
		<div class="about__portrait"></div>
		<div class="about__presentation">
			<p class="about__hello">Bonjour,</p>
			<p class="about__intro">Je suis webdesigner freelance et développeur front-end vivant à Montpellier.</p>
			<p class="about__text">Diplomé en design graphique et interactivité à l’école supérieur d’art et design Le Havre Rouen. Je suis passionné par la création et l’intégration d’interfaces et plus largement par la réalisation de projets numériques.</p> 
			<p class="about__text"> Mes formations et expériences professionnelles m\'ont permis de maitriser les outils de maquettage UI/UX ainsi que le développement front-end.</p>
			<p class="about__text">Toujours curieux de découvrir  les dernières possibilités  du web en terme d’interactivité. J’aime me lancer des défis afin de créer des expériences utilsateurs uniques.</p>
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
  height: 100vh;
  background-color: $blue;

  &__portrait {
    display: flex;
    flex: 0 0 50%;
    height: 100%;
    background-image: url("../assets/imgs/portrait.png");
    background-color: $blue;
    background-blend-mode: luminosity;
    background-size: cover;
    background-position: center;
  }

  &__presentation {
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
	
	&__text {
		font-size: 14px;
	}


  // Animations

  .about__portrait {
    animation: 1s ease-out 0s 1 fadein-left;
  }

  .about__hello {
    animation: 1s ease-out 0s 1 fadein-top;
  }

  .about__text, .about__intro {
    animation: 1.5s ease-out 0s 1 fadein-right-delay05;
  }

  .about__links {
    animation: 2s ease-out 0s 1 fadein-bottom-delay1;
  }

  .fadeout {
    opacity: 0;
  }

  @keyframes fadein-left {
    0% {
      opacity: 0;
      transform: translateX(-10px);
    }
    40% {
      transform: translateX(0px);
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fadein-top {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    40% {
      transform: translateY(0px);
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fadein-right-delay05 {
    0% {
      opacity: 0;
    }
    25% {
      transform: translateX(10px);
      opacity: 0;
    }
    50% {
      transform: translateX(0px);
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fadein-bottom-delay1 {
    0% {
      opacity: 0;
    }
    50% {
      transform: translateY(10px);
      opacity: 0;
    }
    70% {
      transform: translateY(0px);
    }
    100% {
      opacity: 1;
    }
  }
}
</style>
