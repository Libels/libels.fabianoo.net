<template>
	<div class="flex space-x-4">
		<NuxtLink v-for="item in items" :to="item.slug" activeClass="text-gray-900 font-medium"
			class="transition text-gray-400 hover:text-gray-900">{{
					item.name
			}}
		</NuxtLink>
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
					slug: '/contact'
				},
			]
		}
	}
}
</script>