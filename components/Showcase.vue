<template>
	<div class="bg-blue-50 mt-10 pt-20 pb-24 sm:rounded-lg relative overflow-hidden">
		<svg class="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
			width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
			<defs>
				<pattern id="8b1b5f72-e944-4457-af67-0c6d15a99f38" x="0" y="0" width="20" height="20"
					patternUnits="userSpaceOnUse">
					<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
				</pattern>
			</defs>
			<rect width="404" height="784" fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)" />
		</svg>
		<h2 class="text-center text-4xl mb-4 font-bold">Kita bisa apa?</h2>
		<div class="grid grid-cols-3 gap-4 sm:px-8">
			<div v-for="item in items" class="col-span-3 lg:col-span-1 flex lg:block relative lg:shadow-md">
				<img :src="item.thumbnails[0]" :alt="`${item.title} preview`" class="sm:rounded-lg z-0">
				<div
					class="bg-purple-600 text-white rounded-l-lg sm:rounded-lg px-4 py-2 absolute right-0 lg:bottom-0 h-full lg:h-auto w-1/3 lg:w-full z-10">
					<h3 class="font-medium text-lg leading-6 ">{{ item.title }}</h3>
					<p class="text-base ">{{ item.description }}</p>
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
					title: 'Game Dev',
					description: '3d? 2d? 1d pun kita jabanin',
					thumbnails: [
						'/dummy.png',
					],
				},
				{
					title: 'Web Dev',
					description: 'Frontend? Backend? kita Fullstack bos',
					thumbnails: [
						'/dummy.png',
					],
				},
				{
					title: 'Multimedia',
					description: 'Premiere? Photoshop? kami sarjana Adobe ',
					thumbnails: [
						'/dummy.png',
					],
				},
			]
		}
	}
}
</script>