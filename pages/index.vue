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
      <div v-for="logo in brandLogos" :key="logo" class="flex-shrink-0 w-12 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-12 sm:h-20 md:h-24 lg:h-28 xl:h-32">
        <img :src="`/brands/${logo}`" :alt="logo.split('.')[0]" class="w-full h-full object-contain rounded-full transition-all duration-300">
      </div>
    </div>

    <p class="text-center text-sm xl:text-lg font-italiana">+ MANY MORE</p>
  </div>

  <!-- <div class="relative w-full xl:h-2/5 flex flex-col justify-center items-center py-14 xl:py-10 px-2 bg-cover text-xl xl:text-5-5xl xl:leading-18 text-center text-[#3B3B58] font-lora">
    <div>Unleash your brand's<div
      class="h-8 xl:h-20 px-3 xl:px-6 inline-flex background-paint-3 bg-cover font-corinthia text-4-5xl xl:text-8-5xl text-slate-800">personality
    </div></div>
    <p><div class="h-8 xl:h-20 inline-flex">with UGC content that</div></p>
    <p class="underline underline-offset-8 decoration-[#FF6B6B]">showcases its unique voice.</p>

    <img src="/icons/star.png" alt="Star" class="absolute right-4 xl:right-24 bottom-4 xl:top-16 h-12 xl:h-24">
    <img src="/icons/star.png" alt="Star" class="absolute -left-6 xl:left-24 bottom-14 xl:bottom-12 h-16 xl:h-32">
  </div> -->

  <div id="portfolio" class="w-full bg-cover xl:pt-16">
    <!-- <h1 class="pt-4 xl:pt-20 pb-8 text-4xl xl:text-7xl text-center font-italiana tracking-wider">RECENT WORK</h1> -->

    <div class="xl:hidden pt-8 sm:pt-9 pb-5 sm:pb-7 text-4xl sm:text-4-5xl md:text-5xl lg:text-6xl text-center font-italiana tracking-wider">BEAUTY</div>

    <div class="flex xl:pr-20 pb-1 relative">
      <div class="absolute bottom-0 left-0 w-full xl:w-[97%] h-2/5 xl:rounded-r-lg bg-white"></div>

      <div id="video-row-1" class="w-full flex justify-center gap-8 xl:gap-12 px-6 xl:px-10 overflow-scroll hide-scrollbar z-10">
        <div v-for="video in ugcVideos.slice(0, 4)" class="relative xl:h-auto min-w-[60%] sm:min-w-[35%] lg:min-w-[20%] xl:min-w-[16rem] 2xl:min-w-[20rem] w-[19rem] lg:w-[12rem] p-0.5 rounded-[2rem]">
          <div class="relative">
            <img src="/images/phone-frame.png" alt="Phone Frame" class="absolute top-0 left-0 w-full h-full">
            <video controls playsinline :poster="'/ugc/videos/' + video.poster" preload="metadata" class="p-[2%] rounded-[10%]">
              <source :src="'/ugc/videos/' + video.source" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
          <h3 class="lg:text-xl xl:text-xl mt-2 font-bonaNova uppercase text-center">{{ video.name }}</h3>
        </div>
      </div>

      <div class="hidden xl:block text-vertical text-8-5xl xl:text-7xl text-center font-italiana font-thin tracking-widest mr-20">
        BEAUTY
      </div>
    </div>

    <div class="xl:hidden pt-8 sm:pt-9 pb-5 sm:pb-7 text-4xl sm:text-4-5xl md:text-5xl lg:text-6xl text-center font-italiana tracking-wider">HEALTH</div>

    <div class="flex items-center pb-1 xl:pt-16 relative">
      <div class="absolute bottom-0 xl:top-auto xl:bottom-0 left-0 w-full xl:w-[97%] h-2/5 xl:rounded-r-lg bg-white"></div>

      <div class="hidden xl:block ml-20 text-8-5xl xl:text-6-5xl text-center font-italiana font-thin tracking-widest z-10">
        HEALTH
      </div>

      <div id="video-row-2" class="w-full flex justify-center gap-8 xl:gap-12 px-6 xl:pr-20 overflow-scroll hide-scrollbar z-10">
        <div v-for="video in ugcVideos.slice(4, 7)" class="relative xl:h-auto min-w-[60%] sm:min-w-[35%] lg:min-w-[20%] xl:min-w-[16rem] 2xl:min-w-[20rem] w-[19rem] lg:w-[12rem] p-0.5 rounded-[2rem]">
          <div class="relative">
            <img src="/images/phone-frame.png" alt="Phone Frame" class="absolute top-0 left-0 w-full h-full">
            <video controls playsinline :poster="'/ugc/videos/' + video.poster" preload="metadata" class="p-[2%] rounded-[10%]">
              <source :src="'/ugc/videos/' + video.source" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
          <h3 class="lg:text-xl xl:text-xl mt-2 font-bonaNova uppercase text-center">{{ video.name }}</h3>
        </div>
      </div>
    </div>

    <div class="xl:hidden pt-8 sm:pt-9 pb-5 sm:pb-7 text-4xl sm:text-4-5xl md:text-5xl lg:text-6xl text-center font-italiana tracking-wider">EXPERIENCES</div>

    <div class="flex items-center pb-1 xl:pt-16 relative">
      <div class="absolute bottom-0 xl:top-auto xl:bottom-0 right-0 w-full xl:w-[97%] h-2/5 xl:rounded-l-lg bg-white"></div>

      <div id="video-row-3" class="w-full flex justify-center gap-8 xl:gap-12 px-6 xl:pl-20 overflow-scroll hide-scrollbar z-10">
        <div v-for="video in ugcVideos.slice(8, 11)" class="relative xl:h-auto min-w-[60%] sm:min-w-[35%] lg:min-w-[20%] xl:min-w-[14rem] 2xl:min-w-[20rem] w-[19rem] lg:w-[12rem] p-0.5 rounded-[2rem]">
          <div class="relative">
            <img src="/images/phone-frame.png" alt="Phone Frame" class="absolute top-0 left-0 w-full h-full">
            <video controls playsinline :poster="'/ugc/videos/' + video.poster" preload="metadata" class="p-[2%] rounded-[10%]">
              <source :src="'/ugc/videos/' + video.source" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
          <h3 class="lg:text-xl xl:text-xl mt-2 font-bonaNova uppercase text-center">{{ video.name }}</h3>
        </div>
      </div>

      <div class="hidden xl:block mr-20 ml-10 xl:text-5-5xl 2xl:text-7xl text-center font-italiana font-thin tracking-widest z-10">
        EXPERIENCES
      </div>
    </div>
  </div>

  <div class="w-full bg-cover pb-10">
    <h1 class="pt-8 pb-5 sm:pt-9 sm:pb-7 xl:pt-12 xl:pb-10 text-4xl sm:text-4-5xl md:text-5xl lg:text-6xl xl:text-5-5xl 2xl:text-7xl text-center font-italiana tracking-widest">IMAGES</h1>

    <div id="image-row-1" class="w-full flex flex-wrap xl:flex-nowrap justify-center gap-4 sm:gap-6 xl:gap-12 xl:px-20 overflow-scroll hide-scrollbar">
      <div v-for="image in ugcImages.slice(0, 4)" :key="image" class="h-[43vw] sm:h-[20vw] w-[43%] sm:w-[20vw] xl:h-[16rem] xl:w-[16rem] 2xl:h-[18rem] 2xl:w-[18rem] bg-slate-300 rounded-3xl">
        <img :src="`/ugc/images/${image}`" :alt="image.split('.')[0]" class="h-full w-full object-cover rounded-3xl shadow">
      </div>
    </div>
    <div id="image-row-2" class="w-full flex flex-wrap xl:flex-nowrap justify-center gap-4 sm:gap-6 xl:gap-12 mt-4 xl:mt-12 xl:px-20 overflow-scroll hide-scrollbar">
      <div v-for="image in ugcImages.slice(4,8)" :key="image" class="h-[43vw] sm:h-[20vw] w-[43%] sm:w-[20vw] xl:h-[16rem] xl:w-[16rem] 2xl:h-[18rem] 2xl:w-[18rem] bg-slate-300 rounded-3xl">
        <img :src="`/ugc/images/${image}`" :alt="image.split('.')[0]" class="h-full w-full object-cover rounded-3xl shadow">
      </div>
    </div>
    <!-- <div id="image-row-3" class="w-full flex xl:justify-center gap-8 xl:gap-12 mt-12 xl:mt-16 px-6 xl:px-20 overflow-scroll hide-scrollbar">
      <div v-for="image in ugcImages.slice(8,12)" :key="image" class="h-80 xl:h-96 min-w-[60%] xl:min-w-[20%] xl:w-1/5 bg-slate-300 rounded-3xl">
        <img :src="`/ugc/images/${image}`" :alt="image.split('.')[0]" class="h-full w-full object-cover rounded-3xl shadow">
      </div>
    </div>
    <div id="image-row-4" class="w-full flex xl:justify-center gap-8 xl:gap-12 mt-12 xl:mt-16 px-6 xl:px-20 overflow-scroll hide-scrollbar">
      <div v-for="image in ugcImages.slice(12,16)" :key="image" class="h-80 xl:h-96 min-w-[60%] xl:min-w-[20%] xl:w-1/5 bg-slate-300 rounded-3xl">
        <img :src="`/ugc/images/${image}`" :alt="image.split('.')[0]" class="h-full w-full object-cover rounded-3xl shadow">
      </div>
    </div> -->
  </div>

  <div id="services" class="relative w-full pb-16 lg:pb-32 bg-cover bg-white">
    <h1 class="pt-8 pb-5 sm:pt-9 sm:pb-7 lg:pb-6 xl:pt-16 text-4xl sm:text-4-5xl md:text-5xl lg:text-6xl xl:text-5-5xl 2xl:text-7xl text-center font-italiana tracking-widest">WHAT I DO</h1>

    <p class="px-10 text-sm sm:text-lg lg:text-2xl xl:text-2xl text-center font-montserrat"> Create authentic & premium content that converts and engages </p>

    <div class="w-full xl:w-4/5 mx-auto flex flex-col sm:flex-row justify-center items-center mt-10 sm:mt-12 lg:mt-16 xl:mt-20 sm:px-4">
      <div class="relative w-11/12 sm:w-1/2 flex justify-center">
        <img src="/icons/tape.png" alt="Tape" class="absolute top-0 h-32 lg:h-40 xl:h-56 -translate-y-[55%]">
        <div
        class="w-4/5 py-6 px-6 lg:pt-8 xl:pt-12 bg-[#F2F0F0]"
        style="
          box-shadow:
          0 12px 64px 0 rgba(0,0,0,0.30),   /* very big shadow bottom */
          0 0px 48px 0 rgba(0,0,0,0.06),    /* big shadow sides */
          0 12px 12px 0 rgba(0,0,0,0.08);   /* slight shadow top */
          "
          >
          <div v-for="service in services.slice(0, 5)" :key="service.name" class="flex items-center gap-2 leading-5 xl:leading-7">
            <img src="/icons/tick.png" alt="Check" class="size-8 lg:size-10 xl:size-12">
            <p class="ml-1 sm:text-sm lg:text-lg xl:text-2xl">{{ service.name }}</p>
          </div>
        </div>
      </div>
      
      <div class="relative mt-16 sm:mt-0 w-11/12 sm:w-1/2 flex justify-center">
        <img src="/icons/tape.png" alt="Tape" class="absolute top-0 h-32 lg:h-40 xl:h-56 -translate-y-[55%]">
        <div
        class="w-4/5 py-6 px-6 lg:pt-8 xl:pt-12 bg-[#F2F0F0]"
        style="
              box-shadow:
              0 12px 64px 0 rgba(0,0,0,0.30),   /* very big shadow bottom */
              0 0px 48px 0 rgba(0,0,0,0.06),    /* big shadow sides */
              0 12px 12px 0 rgba(0,0,0,0.08);   /* slight shadow top */
              "
          >
          <div v-for="service in services.slice(5, 10)" :key="service.name" class="flex items-center gap-2 leading-5 xl:leading-7">
            <img src="/icons/tick.png" alt="Check" class="size-8 lg:size-10 xl:size-12">
            <p class="ml-1 sm:text-sm lg:text-lg xl:text-2xl">{{ service.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- testimonials -->
  <div id="testimonials" class="relative w-full pb-12 lg:pb-16">
    <img src="/images/polaroid-collage.webp" alt="Polaroid Collage" class="hidden lg:block absolute w-1/2 -top-20 -right-20">

    <div class="w-full lg:w-1/2">
      <h1 class="px-10 pt-8 pb-5 sm:pt-9 sm:pb-7 lg:pb-6 xl:pt-16 text-4xl sm:text-4-5xl md:text-5xl lg:text-5xl xl:text-5-5xl 2xl:text-7xl text-center font-italiana tracking-widest">WHAT MY CLIENTS SAY</h1>

      <div class="w-full flex flex-col mt-5 lg:mt-8">
        <div class="relative max-w-[80%] sm:max-w-[67%] lg:max-w-[90%] lg:w-full ml-4 sm:ml-16 pt-4 sm:pt-5 p-3 rounded bg-white text-xs sm:text-sm">
          <img src="/icons/tape.png" alt="Tape" class="absolute h-20 sm:h-28 lg:h-32 -top-12 sm:-top-16 lg:-top-20 left-1/2 -translate-x-1/2">
          Celine, you are absolutely amazing! Thank you for creating such standout content—30,000 views in just 48 hours is incredible ❤️ Your content is genuinely impactful, and we really appreciate the value you bring. We’d love to collaborate again! 
        </div>

        <div class="w-full flex flex-col lg:flex-row lg:relative lg:h-48">
          <div class="relative lg:absolute lg:left-24 lg:top-6 max-w-[80%] sm:max-w-[67%] lg:max-w-[50%] lg:w-1/2 mt-8 mr-4 sm:mr-16 lg:mr-0 ml-auto pt-4 sm:pt-5 p-3 rounded bg-white text-xs sm:text-sm">
            <img src="/icons/tape.png" alt="Tape" class="absolute h-20 sm:h-28 lg:h-32 -top-12 sm:-top-16 lg:-top-20 left-1/2 -translate-x-1/2">
            You captured amazing details and delivered great content as always! Thank you, Celine ❤
          </div>

          <div class="relative lg:absolute lg:left-[80%] xl:left-[72%] lg:top-10 max-w-[80%] sm:max-w-[67%] lg:max-w-[50%] lg:w-1/2 mt-8 ml-4 sm:ml-16 lg:ml-0 pt-4 sm:pt-5 p-3 rounded bg-white text-xs sm:text-sm">
            <img src="/icons/tape.png" alt="Tape" class="absolute h-20 sm:h-28 lg:h-32 -top-12 sm:-top-16 lg:-top-20 left-1/2 -translate-x-1/2">
            Team is very happy with your content and you really smashed the creator briefff!!  Thank you so much for working with us on that project!
          </div>
        </div>
      </div>
    </div>
    
    <div class="relative w-full flex flex-col lg:flex-row">
      <div class="relative max-w-[80%] sm:max-w-[67%] lg:max-w-[18%] lg:max-h-min mt-8 mr-4 sm:mr-16 lg:mr-0 ml-auto lg:ml-8 pt-4 sm:pt-5 p-3 rounded bg-white text-xs sm:text-sm">
        <img src="/icons/tape.png" alt="Tape" class="absolute h-20 sm:h-28 lg:h-24 -top-12 sm:-top-16 lg:-top-16 left-1/2 -translate-x-1/2">
        Thank you so much ♥ These are amazing 😊
      </div>

      <div class="relative max-w-[80%] sm:max-w-[67%] lg:max-w-[40%] lg:w-1/2 mt-8 lg:mt-12 ml-4 sm:ml-16 lg:ml-8 pt-4 sm:pt-5 p-3 rounded bg-white text-xs sm:text-sm">
        <img src="/icons/tape.png" alt="Tape" class="absolute h-20 sm:h-28 lg:h-32 -top-12 sm:-top-16 lg:-top-20 left-1/2 -translate-x-1/2">
        Hey Celine,<br><br>I hope you are well! Apologies for the delays as have been very busy! Thank you so much for sending though this amazing content! We truly value the creativity and thought you bring to every piece of content. It’s clear you genuinely care about results, and that makes all the difference to us xx
      </div>

      <div class="relative max-w-[80%] sm:max-w-[67%] lg:max-w-[30%] lg:max-h-min lg:w-1/2 mt-8 lg:mt-20 mr-4 sm:mr-16 lg:mr-auto ml-auto lg:ml-8 pt-4 sm:pt-5 p-3 rounded bg-white text-xs sm:text-sm">
        <img src="/icons/tape.png" alt="Tape" class="absolute h-20 sm:h-28 lg:h-32 -top-12 sm:-top-16 lg:-top-20 left-1/2 -translate-x-1/2">
        Just wanted to say—your video looks absolutely amazing! 😍 The quality, the storytelling, the aesthetic... it’s everything we hoped for and more!
      </div>
    </div>
  </div>

  <div id="contact" class="relative w-full pb-16 bg-white bg-cover">
    <div class="pt-10 sm:pt-12 text-center font-anton text-5-5xl leading-14 xl:leading-18 tracking-widest xl:text-6-5xl">
      <h1 class="mr-10">GET IN</h1>
      <h1 class="ml-10 text-violet-500">TOUCH!</h1>
    </div>

    <div class="w-4/5 sm:w-2/5 flex flex-col gap-2 mx-auto text-xl sm:text-2xl font-lora">
      <a href="https://www.instagram.com/ugc.withceline/" target="_blank" class="flex items-center gap-2 mt-12 xl:mt-8 pl-4">
        <img src="/icons/instagram.png" alt="Instagram" class="w-5 xl:w-10">
        <p>@ugc.withceline</p>
      </a>

      <a href="https://www.tiktok.com/@ugc.withceline" target="_blank" class="flex items-center gap-2 mt-1 xl:mt-4 pl-4">
        <img src="/icons/tiktok.png" alt="TikTok" class="w-5 xl:w-10">
        <p>Melbourne, Australia</p>
      </a>
      
      <div class="flex items-center gap-2 mt-1 xl:mt-4 pl-4">
        <img src="/icons/mail.png" alt="Mail" class="h-4 w-5 xl:w-10 xl:h-8">
        <p>ugcwithcelinee@gmail.com</p>
      </div>
    </div>
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
  { name: 'Product Demos' },
  { name: 'Lifestyle Concepts' },
  { name: 'Voiceover Content' },
  { name: 'Try-On Hauls & Unboxings' },
  { name: 'Tutorials & How-To Videos' },
  { name: 'Reviews & Testimonials' },
  { name: 'Trending/Reel Style Content' },
  { name: 'In-person UGC' },
  { name: 'A/B Testing Variations' },
  { name: 'Instagram Promotional Posts' }
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
  { source: 'video-1.mp4', poster: 'video-1-poster.webp', name: 'Nail Polish' },
  { source: 'video-2.mp4', poster: 'video-2-poster.webp', name: 'Lipstick' },
  { source: 'video-3.mp4', poster: 'video-3-poster.webp', name: 'Lip Gloss' },
  { source: 'video-4.mp4', poster: 'video-4-poster.webp', name: 'Lip Balm' },
  { source: 'video-5.mp4', poster: 'video-5-poster.webp', name: 'Lipstick' },
  { source: 'video-6.mp4', poster: 'video-6-poster.webp', name: 'Lip Gloss' },
  { source: 'video-7.mp4', poster: 'video-7-poster.webp', name: 'Lip Balm' },
  { source: 'video-8.mp4', poster: 'video-8-poster.webp', name: 'Lipstick' },
  { source: 'video-9.mp4', poster: 'video-9-poster.webp', name: 'Lip Gloss' },
  { source: 'video-10.mp4', poster: 'video-10-poster.webp', name: 'Lip Balm' },
  { source: 'video-11.mp4', poster: 'video-11-poster.webp', name: 'Lipstick' },
  { source: 'video-12.mp4', poster: 'video-12-poster.webp', name: 'Lip Gloss' }
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