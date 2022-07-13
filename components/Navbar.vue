<template>
	<div class="flex space-x-4">
		<NuxtLink v-for="item in items" :to="item.slug">{{ item.name }}</NuxtLink>
	</div>
</template>

<script>
export default {
	data() {
		return {
			items: [
				{
					name: 'Home',
					slug: '/'
				},
				{
					name: 'Project',
					slug: '/'
				},
				{
					name: 'Contact',
					slug: '/'
				},
			]
		}
	}
}
</script>