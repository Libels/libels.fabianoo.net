<template>
	<div class="flex space-x-4">
		<NuxtLink v-for="item in items">{{ item.name }}</NuxtLink>
	</div>
</template>

<script>
export default {
	data() {
		return {
			items: [
				{
					name: 'Home'
				},
				{
					name: 'Project'
				},
				{
					name: 'Contact'
				},
			]
		}
	}
}
</script>