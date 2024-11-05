<template>
	<div class="">
	
		<div class="flex flex-row justify-center">
			<!-- <div class="w-1/2 ">
				<div class="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
					<div class="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
						<h3 class="font-medium text-black dark:text-white">
							Register
						</h3>
					</div>
					<form @submit.prevent="register" class="p-6.5">
						<div class="mb-5">
							<input type="email" placeholder="Email address" v-model="register_form.email" >
						</div>
						<div class="mb-5">
							<input type="password" placeholder="Password" v-model="register_form.password">
						</div>
						<button type="submit">Register</button>
					</form>
				</div>
			</div> -->

			<div class="w-full max-w-screen-md">
				<div class="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
					<div class="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
						<h3 class="font-medium text-black dark:text-white">
							Login
						</h3>
					</div>
					<form class="p-6.5" @submit.prevent="login">
						<div class="mb-5">
							<input type="email" placeholder="Email address" v-model="login_form.email">
						</div>
						<div class="mb-5">
							<input type="password" placeholder="Password" v-model="login_form.password">
						</div>
						<button type="submit">Login</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import  {ref} from 'vue';
	import  {useStore } from 'vuex';

	export default {
		setup(){
			const login_form = ref({});
			const register_form = ref({});
			const store = useStore();

			const login =  () => {
				store.dispatch('login', login_form.value)
			}

			const register =  () => {
				store.dispatch('register', register_form.value)
			}

			return{
				login_form,
				register_form,
				login,
				register 
			}
		}
	}
</script>
