<template>
	<div class="bg-blue-50">
		<h2>Kita bisa apa?</h2>
		<div class="flex">
			<div v-for="item in items">
				<div class="bg-gray-50 w-full h-10"></div>
				<div class="bg-purple-600 text-white">
					{{ item.name }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			items: [
				{
					name: 'Game Dev'
				},
				{
					name: 'Web Dev'
				},
				{
					name: 'Multimedia'
				},
			]
		}
	}
}
</script>