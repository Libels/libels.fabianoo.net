<template>
	<div class="bg-white mt-12">
		<header class="relative pb-24 pt-12 bg-cyan-800 sm:pb-32 sm:pt-16 rounded-lg">
			<div class="absolute inset-0">
				<img class="w-full h-full object-cover rounded-lg"
					src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
					alt="" />
				<div class="absolute inset-0 bg-gradient-to-l from-cyan-800 to-cyan-700 mix-blend-multiply rounded-lg"
					aria-hidden="true" />
			</div>
			<div class="relative mt-24 max-w-md mx-auto px-4 sm:max-w-3xl sm:mt-32 sm:px-6 lg:max-w-7xl lg:px-8">
				<h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Get in touch</h1>
				<p class="mt-6 text-xl text-cyan-100 max-w-3xl">Apakah kamu tertarik untuk mengikuti klub ini? disini
					kita memliki banyak hal yang mungkin membuat kamu betah di klub ini. Jika kamu sudah yakin untuk
					bergabung dengan kami, silahkan untuk langsung bergabung di discord kami.</p>
			</div>
		</header>

		<main>
			<!-- Side-by-side grid -->
			<div class="bg-white">
				<div class="max-w-md mx-auto py-24 px-4 sm:max-w-3xl sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
					<div class="divide-y divide-warm-gray-200">
						<section class="lg:grid lg:grid-cols-3 lg:gap-8" aria-labelledby="contact-heading">
							<h2 id="contact-heading" class="text-2xl font-extrabold text-warm-gray-900 sm:text-3xl">
								Contact Person</h2>
							<div
								class="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
								<div v-for="item in contactDetails" :key="item.name">
									<h3 class="text-lg font-medium text-warm-gray-900">
										{{ item.name }}
									</h3>
									<dl class="mt-2 text-base text-warm-gray-500">
										<div>
											<dt class="sr-only">Email</dt>
											<dd>
												{{ item.email }}
											</dd>
										</div>
										<div class="mt-1">
											<dt class="sr-only">Phone number</dt>
											<dd>
												{{ item.telephone }}
											</dd>
										</div>
									</dl>
								</div>
							</div>
						</section>
						<section class="mt-16 pt-16 lg:grid lg:grid-cols-3 lg:gap-8" aria-labelledby="location-heading">
							<h2 id="location-heading" class="text-2xl font-extrabold text-warm-gray-900 sm:text-3xl">
								Lokasi</h2>
							<div
								class="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
								<div v-for="location in locations" :key="location.city">
									<h3 class="text-lg font-medium text-warm-gray-900">
										{{ location.city }}
									</h3>
									<div class="mt-2 text-base text-warm-gray-500 space-y-1">
										<p v-for="line in location.address" :key="line">
											{{ line }}
										</p>
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>

			<!-- FAQ -->
			<div class="bg-warm-gray-50">
				<div class="max-w-md mx-auto pt-24 px-4 sm:max-w-3xl sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8">
					<div class="lg:grid lg:grid-cols-3 lg:gap-8">
						<div>
							<h2 class="text-3xl font-extrabold text-warm-gray-900">Paling sering ditanya</h2>
							<p class="mt-4 text-lg text-warm-gray-500">Gak nemu jawaban yang pas? Coba hubungi tim <a
									href="#contact-heading"
									class="font-medium text-cyan-700 hover:text-cyan-600">contact person</a> kami.</p>
						</div>
						<div class="mt-12 lg:mt-0 lg:col-span-2">
							<dl class="space-y-12">
								<div v-for="faq in faqs" :key="faq.id">
									<dt class="text-lg font-medium text-warm-gray-900">
										{{ faq.question }}
									</dt>
									<dd class="mt-2 text-base text-warm-gray-500">
										{{ faq.answer }}
									</dd>
								</div>
							</dl>
						</div>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
const contactDetails = [
	{ name: 'Game Developer', email: 'support@example.com', telephone: '+1 (555) 123-4567' },
	{ name: 'Web Developer', email: 'support@example.com', telephone: '+1 (555) 123-4567' },
	{ name: 'Multimedia', email: 'support@example.com', telephone: '+1 (555) 123-4567' },
]
const locations = [
	{ city: 'Jakarta', address: ['SMAN 15 Jakarta', 'Jakarta Utara, JKT 14350'] },
	{ city: 'Discord', address: ['https://discord.gg/qnPjtNWswj'] },
]
const faqs = [
	{
		id: 1,
		question: 'Kita latihan hari apa?',
		answer:
			'Senin & Selasa, merupakan jadwal yang mutlak dan sudah tidak dapat diganggu gugat tanpa alasan yang jelas.',
	},
	{
		id: 2,
		question: "Apa fasilitas dari ekskul ini?",
		answer:
			"Normal kita berkegiatan di lab komputer yang dilengkapi pendingin ruangan dan beberapa komputer dengan spesifikasi yang cukup untuk belajar.",
	},
	{
		id: 3,
		question: 'Apa kita akan belajar ngoding?',
		answer: 'Jawabannya tidak selalu, tergantung divisi yang kalian ikuti dan bahkan tidak perlu ngoding sekalipun.',
	},
	{
		id: 4,
		question: 'Ekskulnya online atau offline?',
		answer:
			"Dalam masa pandemi kita menerapkannya secara online melalui Discord, sedangkan ketika sudah normal kita menggunakan lab komputer.",
	},
]

export default {
	setup() {
		return {
			contactDetails,
			locations,
			faqs,
		}
	},
}
</script>