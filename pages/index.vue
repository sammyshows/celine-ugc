<template>
  <div class="relative w-full h-2/3 xl:h-4/5 min-h-[34rem] flex flex-col sm:pt-0 bg-cover text-ugc-dark-green">    
    <div class="hidden xl:flex xl:justify-center absolute top-6 left-0 xl:w-full gap-10 text-lg text-[#3B3B58] font-light font-montserrat">
      <button @click="scrollTo('#about')">ABOUT</button>
      <button @click="scrollTo('#portfolio')">PORTFOLIO</button>
      <button @click="scrollTo('#services')">SERVICES</button>
      <button @click="scrollTo('#contact')">CONTACT</button>
    </div>

    <div class="h-full flex items-center justify-center my-auto relative">
      <div class="relative w-full h-full">
        <h1 class="absolute top-[3rem] sm:top-[1.5rem] lg:top-[2.5rem] xl:top-[19%] left-1/2 -translate-x-1/2 text-10xl sm:text-[10rem] lg:text-[11rem] xl:text-[14rem] leading-[9rem] sm:leading-[12rem] xl:leading-[11rem] text-center text-[#000] font-playball">Celine</h1>
        <p class="pl-4 absolute w-full top-[11rem] sm:top-[12rem] lg:top-[14rem] xl:top-[35%] xl:mt-10 text-6xl sm:text-[4.7rem] lg:text-[8rem] xl:text-[11rem] leading-[4.5rem] sm:leading-[6rem] xl:leading-[10rem] tracking-[1rem] sm:tracking-[1.5rem] xl:tracking-[2.4rem] text-[#FFF] text-center font-anton z-10">UGC CREATOR</p>
        <!-- <img src="/icons/star.png" alt="Star" class="absolute -right-6 xl:-right-12 -bottom-10 xl:-bottom-16 h-16 xl:h-28"> -->
      </div>

      <img src="/images/celine-3.png" alt="Celine" class="absolute bottom-0 left-1/2 -translate-x-1/2 h-1/2 sm:h-[55%] lg:h-5/12 xl:h-[60%] z-20">
  
  
      <!-- <div class="flex justify-center gap-1 xl:gap-4 mt-4">
        <a href="https://www.instagram.com/ugc.withceline/" target="_blank">
          <img src="/icons/instagram.png" alt="Instagram" class="size-4 xl:size-12">
        </a>
        <a href="https://www.tiktok.com/@ugc.withceline" target="_blank">
          <img src="/icons/tiktok.png" alt="TikTok" class="size-4 xl:size-12">
        </a>
        <img src="/icons/mail.png" alt="Email" class="size-4 xl:w-14 xl:h-12">
      </div> -->

      <!-- <img src="/icons/star.png" alt="Star" class="absolute left-4 xl:left-36 top-56 xl:top-[36rem] h-20 xl:h-32"> -->
    </div>

    <!-- <img src="/images/polaroid-collage.webp" loading="lazy" alt="Polaroids" class="absolute -bottom-16 xl:left-1/2 w-full xl:w-auto xl:h-full mt-4 px-3 z-10"> -->
  </div>

  <div id="brands" class="py-10 w-full bg-[#FFF]">
    <h1 class="text-3xl xl:text-6xl font-italiana text-center">TRUSTED BY..</h1>

    <div class="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 py-6 px-4 sm:px-8 lg:px-12">
      <div v-for="logo in brandLogos" :key="logo" class="flex-shrink-0 w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32">
        <img :src="`/brands/${logo}`" :alt="logo.split('.')[0]" class="w-full h-full object-contain rounded-full transition-all duration-300">
      </div>
    </div>

    <p class="text-center text-sm xl:text-lg font-italiana">+ MANY MORE</p>
  </div>

  <div class="relative w-full xl:h-2/5 flex flex-col justify-center items-center py-14 xl:py-10 px-2 bg-cover text-xl xl:text-5-5xl xl:leading-18 text-center text-[#3B3B58] font-lora">
    <div>Unleash your brand's<div
      class="h-8 xl:h-20 px-3 xl:px-6 inline-flex background-paint-3 bg-cover font-corinthia text-4-5xl xl:text-8-5xl text-slate-800">personality
    </div></div>
    <p><div class="h-8 xl:h-20 inline-flex">with UGC content that</div></p>
    <p class="underline underline-offset-8 decoration-[#FF6B6B]">showcases its unique voice.</p>

    <img src="/icons/star.png" alt="Star" class="absolute right-4 xl:right-24 bottom-4 xl:top-16 h-12 xl:h-24">
    <img src="/icons/star.png" alt="Star" class="absolute -left-6 xl:left-24 bottom-14 xl:bottom-12 h-16 xl:h-32">
  </div>

  <div id="portfolio" class="w-full py-12 bg-cover">
    <!-- <div class="absolute top-0 left-0 w-[97%] h-64 rounded-xl bg-[#F5F5F5]"></div> -->
    <!-- <p class="pt-10 pl-6 xl:pl-20 text-tiny xl:text-xl font-lora">PORTFOLIO</p> -->

    <!-- <h1 class="pt-12 xl:pt-20 text-4-5xl xl:text-7xl text-center text-white font-montserrat tracking-wider">VIDEOGRAPHY</h1> -->

    <div class="flex pr-20 pb-16">
      <div id="video-row-1" class="w-full flex xl:justify-center gap-8 xl:gap-12 px-6 xl:px-10 overflow-scroll hide-scrollbar z-10">
        <div v-for="video in ugcVideos.slice(0, 4)" class="xl:h-auto min-w-[60%] xl:min-w-[20%] w-[19rem] bg-slate-300 rounded-3xl">
          <video controls playsinline :poster="'/ugc/videos/' + video.poster" preload="metadata" class="rounded-3xl shadow-xl">
            <source :src="'/ugc/videos/' + video.source" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div class="text-vertical text-8-5xl xl:text-9xl text-center font-montserrat font-thin tracking-widest text-[#3B3B58] mr-20">
        BEAUTY
      </div>
      <!-- <div class="flex flex-col justify-center text-6xl xl:text-7-5xl text-center font-montserrat font-light tracking-wider text-[#3B3B58] mr-10 z-10">
        <span class="mr-24 leading-[0.9]">B</span>
        <span class="mr-12 leading-[0.9]">E</span>
        <span class="ml-0 leading-[0.9]">A</span>
        <span class="ml-12 leading-[0.9]">U</span>
        <span class="ml-24 leading-[0.9]">T</span>
        <span class="ml-36 leading-[0.9]">Y</span>
      </div> -->
    </div>

    <div class="flex items-center pl-20 pb-16 relative">
      <div class="absolute top-0 left-0 w-[97%] h-[37%] rounded-r-xl bg-[#FF6B6B]/70"></div>

      <div class="text-8-5xl xl:text-9xl text-center font-montserrat font-thin tracking-widest text-[#3B3B58] z-10">
        HEALTH
      </div>

      <div id="video-row-2" class="w-full flex xl:justify-center gap-8 xl:gap-12 xl:py-16 xl:mr-20 overflow-scroll hide-scrollbar z-10">
        <div v-for="video in ugcVideos.slice(4, 7)" class="xl:h-auto min-w-[60%] xl:min-w-[20%] w-[19rem] bg-slate-300 rounded-3xl">
          <video controls playsinline :poster="'/ugc/videos/' + video.poster" preload="metadata" class="rounded-3xl shadow-xl">
            <source :src="'/ugc/videos/' + video.source" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>

    <div class="flex items-center pr-20 pb-16 relative">
      <div class="absolute top-0 right-0 w-[97%] h-64 rounded-l-xl bg-[#FF6B6B]/70"></div>

      <div id="video-row-3" class="w-full flex xl:justify-center gap-8 xl:gap-12 xl:py-16 xl:pl-20 overflow-scroll hide-scrollbar z-10">
        <div v-for="video in ugcVideos.slice(8, 11)" class="xl:h-auto min-w-[60%] xl:min-w-[20%] w-[19rem] bg-slate-300 rounded-3xl">
          <video controls playsinline :poster="'/ugc/videos/' + video.poster" preload="metadata" class="rounded-3xl shadow-xl">
            <source :src="'/ugc/videos/' + video.source" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div class="ml-10 text-8-5xl xl:text-8xl text-center font-montserrat font-thin tracking-widest text-[#3B3B58] z-10">
        EXPERIENCES
      </div>
    </div>
  </div>

  <div class="w-full pb-12 bg-cover">
    <p class="pt-10 pl-6 xl:pl-20 text-tiny xl:text-xl font-lora">PORTFOLIO</p>

    <h1 class="pt-4 xl:pt-10 text-4-5xl xl:text-7xl text-center font-bonaNova tracking-wider">PHOTOGRAPHY</h1>

    <div id="image-row-1" class="w-full flex xl:justify-center gap-8 xl:gap-12 mt-8 xl:mt-16 px-6 xl:px-20 overflow-scroll hide-scrollbar">
      <div v-for="image in ugcImages.slice(0, 4)" :key="image" class="h-80 xl:h-96 min-w-[60%] xl:min-w-[20%] xl:w-1/5 bg-slate-300 rounded-3xl">
        <img :src="`/ugc/images/${image}`" :alt="image.split('.')[0]" class="h-full w-full object-cover rounded-3xl shadow">
      </div>
    </div>
    <div id="image-row-2" class="w-full flex xl:justify-center gap-8 xl:gap-12 mt-12 xl:mt-16 px-6 xl:px-20 overflow-scroll hide-scrollbar">
      <div v-for="image in ugcImages.slice(4,8)" :key="image" class="h-80 xl:h-96 min-w-[60%] xl:min-w-[20%] xl:w-1/5 bg-slate-300 rounded-3xl">
        <img :src="`/ugc/images/${image}`" :alt="image.split('.')[0]" class="h-full w-full object-cover rounded-3xl shadow">
      </div>
    </div>
    <div id="image-row-3" class="w-full flex xl:justify-center gap-8 xl:gap-12 mt-12 xl:mt-16 px-6 xl:px-20 overflow-scroll hide-scrollbar">
      <div v-for="image in ugcImages.slice(8,12)" :key="image" class="h-80 xl:h-96 min-w-[60%] xl:min-w-[20%] xl:w-1/5 bg-slate-300 rounded-3xl">
        <img :src="`/ugc/images/${image}`" :alt="image.split('.')[0]" class="h-full w-full object-cover rounded-3xl shadow">
      </div>
    </div>
    <div id="image-row-4" class="w-full flex xl:justify-center gap-8 xl:gap-12 mt-12 xl:mt-16 px-6 xl:px-20 overflow-scroll hide-scrollbar">
      <div v-for="image in ugcImages.slice(12,16)" :key="image" class="h-80 xl:h-96 min-w-[60%] xl:min-w-[20%] xl:w-1/5 bg-slate-300 rounded-3xl">
        <img :src="`/ugc/images/${image}`" :alt="image.split('.')[0]" class="h-full w-full object-cover rounded-3xl shadow">
      </div>
    </div>
  </div>

  <div class="relative w-full xl:h-1/3 xl:flex xl:justify-center xl:items-center py-14 xl:py-10 px-2 bg-ugc-light-green-opaque bg-cover text-xl xl:text-7xl xl:leading-18 text-center text-slate-800 font-lora">
    Content made with <div class="h-8 xl:h-20 px-3 xl:px-6 inline-flex background-paint-2 bg-cover font-corinthia text-4-5xl xl:text-10xl text-slate-800">passion.</div>
    
    <img src="/icons/star.png" alt="Star" class="absolute -left-4 xl:left-24 bottom-20 xl:bottom-12 h-12 xl:h-32">
    <img src="/icons/star.png" alt="Star" class="absolute right-4 xl:right-24 bottom-4 xl:top-16 h-8 xl:h-24">
  </div>

  <div id="services" class="relative w-full pb-16 bg-cover">
    <h1 class="pt-12 xl:pt-20 text-4-5xl xl:text-7xl text-center font-bonaNova tracking-wider">SERVICES</h1>

    <p class="pt-4 text-xs xl:text-lg text-center font-lora">Reach your target audience with me!</p>

    <div class="xl:flex">
      <div class="xl:w-1/2 xl:flex xl:justify-end xl:items-center xl:pr-20">
        <div class="w-full xl:w-fit flex flex-col gap-2 xl:gap-6 mt-8 px-2 font-lora">
          <p v-for="service in services" class="xl:text-2xl text-center xl:text-left uppercase">{{ service.name }}</p>
        </div>
      </div>
      
      <div class="w-2/3 xl:w-0.5 h-0.5 xl:h-auto mt-10 mx-auto xl:mx-0 bg-slate-800"></div>
      
      <div class="xl:w-1/2 xl:py-3">
        <h1 class="mt-10 ml-10 xl:py-2 px-3 xl:px-6 inline-flex background-paint-2 bg-cover font-lora font-semibold text-2xl xl:text-4xl text-slate-700">
          VIDEO</h1>
        
        <div class="ml-1/6 xl:ml-28 flex flex-col mt-3 mx-auto px-2 font-lora">
          <div v-for="videoService in videoServices" :key="videoService.name" class="flex leading-5 xl:leading-7">
            • <p class="ml-2 text-sm xl:text-lg">{{ videoService.name }}</p>
          </div>
        </div>
        
        <h1 class="mt-10 ml-10 xl:py-2 px-3 xl:px-6 inline-flex background-paint-2 bg-cover font-lora font-semibold text-2xl xl:text-4xl text-slate-700">
          PHOTOGRAPHY</h1>
        
        <div class="ml-1/6 xl:ml-28 flex flex-col mt-3 mx-auto px-2 font-lora">
          <div v-for="photoService in photoServices" :key="photoService.name" class="flex leading-5 xl:leading-7">
            • <p class="ml-2 text-sm xl:text-lg">{{ photoService.name }}</p>
          </div>
        </div>
        
        <p class="mt-8 px-8 text-xs xl:text-base text-right xl:text-left text-slate-700">*Rates are available upon request</p>
      </div>
    </div>
      
    <p class="mt-8 xl:mt-16 px-12 text-lg xl:text-2xl leading-6 text-center text-ugc-dark-green font-lora font-semibold">
      But that's not all! Not seeing what you're looking for? Let's chat!
    </p>

    <img src="/icons/star.png" alt="Star" class="absolute -left-6 xl:left-24 top-40 xl:top-60 h-16 xl:h-24">
    <img src="/icons/star.png" alt="Star" class="absolute right-6 xl:right-32 bottom-[32rem] xl:top-16 h-8 xl:h-28">
    <img src="/icons/star.png" alt="Star" class="absolute right-20 xl:right-16 bottom-4 xl:bottom-40 h-8 xl:h-16">
  </div>

  <div id="contact" class="relative w-full bg-ugc-light-green-opaque bg-cover">
    <p class="pt-10 pl-6 xl:pl-20 text-tiny xl:text-xl font-lora">CONTACT ME</p>

    <div class="xl:flex xl:h-[30rem]">
      <div class="xl:w-3/5 xl:flex xl:flex-col xl:items-end xl:pr-10">
        <p class="mt-10 xl:mr-40 pl-2 text-4xl xl:text-7-5xl font-lora">Let's work</p>
        <p class="mt-6 xl:mt-16 ml-12 px-3 max-w-fit background-paint-3 bg-cover z-10 font-corinthia text-7-5xl xl:text-11xl leading-16 text-slate-800">
          together!</p>
          
        <div class="xl:w-2/3 font-lora">
          <a href="https://www.instagram.com/ugc.withceline/" target="_blank" class="flex items-center gap-2 mt-12 xl:mt-24 pl-4">
            <img src="/icons/instagram.png" alt="Instagram" class="w-5 xl:w-10">
            <p class="xl:ml-3 text-xs xl:text-2xl">@ugc.withceline</p>
          </a>

          <a href="https://www.tiktok.com/@ugc.withceline" target="_blank" class="flex items-center gap-2 mt-1 xl:mt-4 pl-4">
            <img src="/icons/tiktok.png" alt="TikTok" class="w-5 xl:w-10">
            <p class="xl:ml-3 text-xs xl:text-2xl">@ugc.withceline</p>
          </a>
          
          <div class="flex items-center gap-2 mt-1 xl:mt-4 pl-4">
            <img src="/icons/mail.png" alt="Mail" class="h-4 w-5 xl:w-10 xl:h-8">
            <p class="xl:ml-3 text-xs xl:text-2xl">ugcwithcelinee@gmail.com</p>
          </div>
        </div>
      </div>

      <img src="/images/celine-1.webp" loading="lazy" alt="Celine Selfie" class="absolute xl:static -right-16 w-60 xl:w-auto xl:h-full top-20 rounded-full">
    </div>

    <div class="xl:w-1/2 xl:max-w-[48rem] mt-20 xl:mx-auto pl-4 pb-10 font-lora">
      <!-- Honeypot -->
      <input v-model="honeypot" type="email" class="hidden">

      <div class="xl:flex">
        <label for="name" class="inline-block w-20 xl:w-32 xl:text-2xl">NAME</label>
        <input v-model="name" type="text" class="w-56 xl:grow h-8 xl:h-12 ml-4 px-6 xl:px-12 background-paint-2 bg-transparent text-sm xl:text-2xl rounded-lg outline-slate-700">
      </div>
      <div class="mt-2 xl:flex">
        <label for="email" class="inline-block w-20 xl:w-32 xl:text-2xl">EMAIL</label>
        <input v-model="email" type="email" class="w-64 xl:grow h-8 xl:h-12 ml-4 px-6 xl:px-12 background-paint-2 bg-transparent text-sm xl:text-2xl rounded-lg outline-slate-700">
      </div>
      <div class="flex mt-2">
        <label for="message" class="flex w-20 xl:w-32 h-20 items-center my-auto xl:text-2xl">MESSAGE</label>
        <textarea v-model="message" type="text" class="w-64 xl:grow h-20 xl:h-36 ml-4 px-6 xl:px-12 py-3 xl:py-6 background-paint-1 bg-transparent bg-cover text-xs xl:text-lg rounded-lg outline-slate-700 overflow-scroll"></textarea>
      </div>

      <div class="w-full flex">
        <button @click="submit()" :disabled="sendingEmail || !allInputsHaveValues" :class="{ 'animate-pulse': sendingEmail }" class="w-36 xl:w-40 mt-6 mx-auto py-1 xl:py-2 xl:text-xl text-center text-white font-lora bg-ugc-light-green rounded-lg outline-slate-700 duration-300 disabled:bg-slate-400/70">
          {{ sendingEmail ? 'SUBMITTING...' : 'SUBMIT' }}
        </button>
      </div>

      <p :class="[ showEmailResultMessage ? 'opacity-100' : 'opacity-0' ]" class="pt-6 text-sm xl:text-xl text-center text-ugc-dark-green">{{ emailResultMessage }}</p>
    </div>

    <img src="/icons/star.png" alt="Star" class="absolute left-60 xl:left-16 top-4 xl:top-60 h-12 xl:h-24">
    <img src="/icons/star.png" alt="Star" class="absolute left-6 xl:left-32 bottom-20 xl:bottom-48 h-16 xl:h-16">
    <img src="/icons/star.png" alt="Star" class="hidden xl:block absolute right-32 xl:right-16 xl:bottom-96 h-12 xl:h-16">
  </div>
</template>

<script setup>
const name = ref('')
const email = ref('')
const message = ref('')
const honeypot = ref('')
const emailResultMessage = ref('-')
const showEmailResultMessage = ref(false)
const sendingEmail = ref(false)

const allInputsHaveValues = computed(() => name.value && email.value && email.value.includes('@') && message.value)

const scrollTo = (elementId) => {
  document.querySelector(elementId).scrollIntoView({ behavior: 'smooth' })
}

const submit = async () => {
  // if (honeypot.value)
  //   return

  sendingEmail.value = true

  try {
    await sendEmail({
      name: honeypot.value ? 'BOT - ' + name.value : name.value,
      email: honeypot.value ? 'BOT - ' + email.value : email.value,
      message: honeypot.value ? 'BOT - ' + message.value : message.value
    }).then(() => {
      name.value = ''
      email.value = ''
      message.value = ''

      emailResultMessage.value = 'Thanks for contacting me! Your enquiry has been sent.'
    }).catch(() => {
      emailResultMessage.value = 'There was an error sending your enquiry. Please try again in a moment.'
    })

    showEmailResultMessage.value = true
    setTimeout(() => showEmailResultMessage.value = false, 3000)
  } catch (error) {
    console.error(error)
  }

  sendingEmail.value = false
}

const services = [
  { name: 'Unboxing' },
  { name: 'Product Showcasing' },
  { name: 'Lifestyle Photography' },
  { name: 'Product Demo' },
  { name: 'Reviews & Testimonials' },
  { name: 'Product Photography' },
  { name: 'Voiceover' },
  { name: 'How To Use Tutorials' }
]

const videoServices = [
  { name: '15-60 Seconds' },
  { name: 'Vertical 9:16 Format' },
  { name: 'Brand & Concept Research' },
  { name: 'Script Writing & Approval' },
  { name: 'Video Editing, 1 revision' },
  { name: 'Raw Footage (add-on)' },
  { name: 'Usage Rights for Ads (add-on)' }
]

const photoServices = [
  { name: '1:1 | 4:5 | 9:16 Format' },
  { name: 'Product Modelling/Selfie with Product' },
  { name: 'Brand & Concept Research' },
  { name: 'Photo Editing' },
  { name: 'Raw Photos (add-on)' }
]

const ugcImages = [
  'Clinique.webp',
  'Botanycl.webp',
  'Drink Pic.webp',
  'Bulk.webp',
  'Mascara.webp',
  'Face cream.webp',
  'SPF.webp',
  'The ordinary.webp',
  'Crisps.webp',
  'Workout.webp',
  'Nail polish.webp',
  'Elvive.webp',
  'Lip gloss.webp',
  'Cerave.webp',
  'Lipstick.webp',
  'Drink 2.webp',
  // 'Cream.webp',
  // 'Furla.webp',
  // 'Lip balm.webp',
  // 'Zen.webp'
]

const brandLogos = [
  'Booze & bareels.webp',
  'Hey caddy.png',
  'Kaiah_Beauty_Logo.webp',
  'Rush+Escape+Game+Escape+Room+Melbourne.jpg',
  'Tropeaka.png',
  'alya skin.png',
  'bodyblendz_cover.jpeg',
  'botanycl .png',
  'clearwipe-logo.webp',
  'dear klairs.jpg',
  'etude.png',
  'good_clean_beauty_co_logo.jpeg',
  'happy scrub in .png',
  'heimish.png',
  'james costemtics.png',
  'kaine.jpeg',
  'logo_w.png',
  'lumimagnets.png',
  'natural beauty.webp',
  'quia.png',
  'qure-logo-colored-tm.webp',
  'skinfood.webp',
  'skinsuppco.png',
  'team nutrution .png',
  'vt .png'
]

const ugcVideos = [
  { source: 'video-1.mp4', poster: 'video-1-poster.webp' },
  { source: 'video-2.mp4', poster: 'video-2-poster.webp' },
  { source: 'video-3.mp4', poster: 'video-3-poster.webp' },
  { source: 'video-4.mp4', poster: 'video-4-poster.webp' },
  { source: 'video-5.mp4', poster: 'video-5-poster.webp' },
  { source: 'video-6.mp4', poster: 'video-6-poster.webp' },
  { source: 'video-7.mp4', poster: 'video-7-poster.webp' },
  { source: 'video-8.mp4', poster: 'video-8-poster.webp' },
  { source: 'video-9.mp4', poster: 'video-9-poster.webp' },
  { source: 'video-10.mp4', poster: 'video-10-poster.webp' },
  { source: 'video-11.mp4', poster: 'video-11-poster.webp' },
  { source: 'video-12.mp4', poster: 'video-12-poster.webp' }
]

onMounted(() => {
  const elementIds = ['video-row-1', 'video-row-2', 'video-row-3', 'image-row-1', 'image-row-2', 'image-row-3', 'image-row-4']
  document.addEventListener('DOMContentLoaded', setInitialScrollPosition(elementIds))
})
</script>

<style scoped>
/* Hide scrollbars on Webkit browsers (Chrome, Safari) */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbars on IE, Edge */
.hide-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.text-vertical {
  writing-mode: vertical-rl;
  transform: rotate(0deg);
}

.background-1 {
  background-image: url('/images/background-1.webp')
}

.background-2 {
  background-image: url('/images/background-2.webp')
}

.background-3 {
  background-image: url('/images/background-3.webp')
}

.background-4 {
  background-image: url('/images/background-4.webp')
}

.background-5 {
  background-image: url('/images/background-5.webp')
}

.background-6 {
  background-image: url('/images/background-6.webp')
}

.background-7 {
  background-image: url('/images/background-7.webp')
}

.background-paint-1 {
  background-image: url('/images/green-paint-1.png');
  background-size: 100% 100%;
}

.background-paint-2 {
  background-image: url('/images/green-paint-2.png');
  background-size: 100% 100%;
}

.background-paint-3::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-image: url('/images/green-paint-3.png');
  background-size: 100% 105%;
  background-repeat: no-repeat;
  z-index: -1;
  transform: rotate(-3deg);
  transform-origin: center;
}

.background-paint-3 {
  position: relative;
}

li::marker {
  margin-right: 1px;
}
</style>