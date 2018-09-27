<template>
	<svg class="logo" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
		viewBox="0 0 419.2 294" xml:space="preserve">
		<path class="logo__main" d="M37.7,294c-10.5,0-20.9-4.3-28.3-12.8c-13.7-15.6-12.1-39.4,3.5-53.1L262.2,9.3c11.1-9.7,26.9-12.1,40.4-6
		c13.5,6.1,22.1,19.5,22.1,34.3v138l32.7-27.4c15.9-13.4,39.7-11.3,53,4.7c13.4,15.9,11.3,39.7-4.7,53l-94.6,79.3
		c-11.2,9.4-26.8,11.5-40.1,5.3c-13.3-6.2-21.7-19.5-21.7-34.1V120.7L62.5,284.6C55.3,290.9,46.5,294,37.7,294z" />

		<path class="logo__reflect--1" ng-class="{'toggle': toggle}" d="M302.4,193.2c-1.5,0-3-0.6-4.1-1.9c-1.9-2.2-1.7-5.7,0.6-7.6l84.3-72c2.2-1.9,5.6-1.7,7.6,0.6
		c1.9,2.3,1.7,5.6-0.6,7.6l-84.3,72C304.9,192.8,303.6,193.2,302.4,193.2z" />

		<path class="logo__reflect--2" ng-class="{'toggle': toggle}" d="M190.6,186.4c-1.5,0-3-0.6-4.1-1.9c-1.9-2.2-1.7-5.7,0.6-7.6l87.2-75.7c2.2-1.9,5.6-1.7,7.6,0.6
		c1.9,2.3,1.7,5.6-0.6,7.6l-87.2,75.7C193.1,186,191.8,186.4,190.6,186.4z" />

		<path class="logo__reflect--3" ng-class="{'toggle': toggle}" d="M244,186.8c-3,0-5.4-2.4-5.4-5.4V93.4c0-3,2.4-5.4,5.4-5.4c3,0,5.4,2.4,5.4,5.4v88.1
		C249.4,184.4,247,186.8,244,186.8z" />

		<path class="logo__reflect--4" ng-class="{'toggle': toggle}" d="M330.1,209.3c-3,0-5.4-2.4-5.4-5.4v-88.1c0-3,2.4-5.4,5.4-5.4s5.4,2.4,5.4,5.4V204
		C335.5,206.9,333.1,209.3,330.1,209.3z" />
	</svg>
</template>

<script>
export default {
  name: "my-logo"
};
</script>

<style lang="scss">
.st0 {
  fill: #ffffff;
}

.logo {
  width: 40px;
  margin-right: 10px;
  vertical-align: middle;

  &__reflect {
    &--1 {
      fill: $grey-lightest;
      transition: transform 0.2s 0.2s;

      &.toggle {
        transform: translate(27px, -20px);
        transition: transform 0.2s;
      }
    }

    &--2 {
      fill: $grey-lightest;
      transform: translate(-35px, 30px);
      transition: transform 0.2s;

      &.toggle {
        transform: translate(0, -2px);
        transition: transform 0.2s 0.2s;
      }
    }

    &--3 {
      fill: $grey-lightest;
      transition: transform 0.2s 0.2s;
      transform: translateX(-1px);

      &.toggle {
        transform: translateY(40px);
        transition: transform 0.2s;
      }
    }

    &--4 {
      fill: $grey-lightest;
      transform: translateY(-40px);
      transition: transform 0.2s;

      &.toggle {
        transform: translateY(0);
        transition: transform 0.2s 0.2s;
      }
    }
  }
}
</style>