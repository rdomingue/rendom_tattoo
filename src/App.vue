<template>
	<div class="container mx-auto">
		<div class="flex text-center mt-4 mb-5 items-center">
			<h1 class="text-title-xxl grow ">Rendom_Tattoo</h1>
			<button @click="$store.dispatch('logout')">Logout</button>
		</div>
			<!-- <nav  v-if="$store.state.user">
				<router-link to="/">Home</router-link> |
				<router-link to="/about">About</router-link>
				
			</nav> -->
		<router-view/>
		
	</div>
</template>

<script>
import { onBeforeMount } from 'vue';
import { useStore } from 'vuex';
export default {
	setup() {
		const store  = useStore();
		onBeforeMount(() => {
			store.dispatch('fetchUser');
		});
	}
}
</script>

