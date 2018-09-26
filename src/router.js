import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Contact from "./views/Contact.vue";
import Project from "./views/Project.vue";


Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/",
			name: "home",
			component: Home
		},
		{
			path: '/project/:name',
			name: "project",
			component: Project
		},
		{
			path: "/about",
			name: "about",
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () =>
				import(/* webpackChunkName: "about" */ "./views/About.vue")
		},
		{
			path: "/contact",
			name: "contact",
			component: Contact
		}
	]
});
