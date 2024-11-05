<template>
	<div class="home max-w-screen-md mx-auto">
		<table class="">
			<thead>
				<tr>
					<th>Name</th>
					<th>Description</th>
					<th>Date</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody class="bg-slate-800">
				<tr v-for="income in incomes" :key="income.Id">
					<td >{{ income.Name }}</td>
					<td >{{ income.Description }}</td>
					<td >{{ formatDate(income.Date) }}</td>
					<td >{{ income.Price }}</td>
				</tr>
				
			</tbody>
		</table>
		
	</div>
</template>

<script setup>
	import { ref, onMounted, defineComponent  } from 'vue';
	import { collection, getDocs } from "firebase/firestore";
	import { db } from "@/firebase"; // Adjust the import as per your setup

	defineComponent({
		name: 'HomeView'
	});

	const incomes = ref([]);

	const fetchIncomes = async () => {
		const querySnapshot = await getDocs(collection(db, "incomes"));
		incomes.value = querySnapshot.docs.map(doc => ({
			id: doc.id,
			...doc.data()
		}));
	};

	const formatDate = (timestamp) => {
		if (!timestamp) return "";

		const date = new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1e6);
		const day = String(date.getDate()).padStart(2, '0');
		const month = String(date.getMonth() + 1).padStart(2, '0');
		const year = date.getFullYear();

		return `${day}/${month}/${year}`;
	};

	onMounted(fetchIncomes);

			

</script>
