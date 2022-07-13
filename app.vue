<template>
	<div>
		<div class="container mx-auto sm:px-6 lg:px-8 mt-8">
			<div class="flex justify-between items-center">
				<Logo />
				<Navbar />
			</div>
			<NuxtPage />
		</div>
		<FooterSection />
	</div>
</template>

<script setup>
useHead({
	titleTemplate: (titleChunk) => {
		return titleChunk ? `${titleChunk} - LCC` : 'Libels Computer Club'
	},
	viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
	charset: 'utf-8',
	meta: [
		{ name: 'description', content: 'Libels Computer Club adalah Ekstrakulikuler di SMAN 15 Jakarta yang berisikan para individu pegiat IT yang bertalenta.' }
	],
})
</script>
