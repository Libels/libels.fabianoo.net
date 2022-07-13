<template>
	<Disclosure as="nav" v-slot="{ open }">
		<div>
			<div class="hidden sm:flex space-x-4">
				<NuxtLink v-for="item in items" :to="item.slug" activeClass="text-gray-900 font-medium"
					class="transition text-gray-400 hover:text-gray-900">{{
							item.name
					}}
				</NuxtLink>

			</div>
			<div class="-mr-2 flex items-center sm:hidden">
				<!-- Mobile menu button -->
				<DisclosureButton
					class="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
					<span class="sr-only">Open main menu</span>
					<MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
					<XIcon v-else class="block h-6 w-6" aria-hidden="true" />
				</DisclosureButton>
			</div>
		</div>
		<DisclosurePanel class="bg-white absolute w-full left-0 sm:hidden z-50 pt-6 pb-12">
			<div class="pt-2 pb-3 space-y-1">
				<DisclosureButton v-for="item in items" as="div">
					<NuxtLink :href="item.slug" activeClass="bg-indigo-50 border-indigo-500 text-indigo-700"
						class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
						{{ item.name }}</NuxtLink>
				</DisclosureButton>
			</div>
		</DisclosurePanel>
	</Disclosure>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'

export default {
	components: {
		Disclosure,
		DisclosureButton,
		DisclosurePanel,
		Menu,
		MenuButton,
		MenuItem,
		MenuItems,
		MenuIcon,
		XIcon,
	},
	data() {
		return {
			items: [
				{
					name: 'Home',
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