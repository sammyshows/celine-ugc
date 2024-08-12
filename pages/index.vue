<template>
  <div class="relative w-full h-2/3 lg:h-4/5 min-h-[34rem] flex flex-col pt-20 sm:pt-0 bg-cover text-ugc-dark-green">    
    <div class="hidden lg:flex absolute top-12 left-0 lg:w-1/2 justify-center gap-10 text-lg">
      <button @click="scrollTo('#about')" class="text-ugc-dark-green">ABOUT</button>
      <button @click="scrollTo('#portfolio')" class="text-ugc-dark-green">PORTFOLIO</button>
      <button @click="scrollTo('#services')" class="text-ugc-dark-green">SERVICES</button>
      <button @click="scrollTo('#contact')" class="text-ugc-dark-green">CONTACT</button>
    </div>

    <div class="lg:w-1/2 lg:my-auto">
      <div class="relative w-fit mx-auto">
        <h1 class="text-6-5xl lg:text-12xl leading-13 lg:leading-30 text-center font-bonaNova">CELINE</h1>
        <h1 class="text-6xl lg:text-11xl leading-11 lg:leading-30 text-center font-bonaNova">MALFAIT</h1>
        <img src="/icons/star.png" alt="Star" class="absolute -right-6 lg:-right-12 -bottom-10 lg:-bottom-16 h-16 lg:h-28">
      </div>
  
      <p class="mt-8 lg:mt-6 text-sm lg:text-2xl text-center font-lora">UGC CREATOR</p>
  
      <div class="flex justify-center gap-1 lg:gap-4 mt-4">
        <a href="https://www.instagram.com/ugc.withceline/" target="_blank">
          <img src="/icons/instagram.png" alt="Instagram" class="size-4 lg:size-12">
        </a>
        <a href="https://www.tiktok.com/@ugc.withcelinee" target="_blank">
          <img src="/icons/tiktok.svg" alt="TikTok" class="size-4 lg:size-12">
        </a>
        <img src="/icons/mail.png" alt="Instagram" class="size-4 lg:w-14 lg:h-12">
      </div>

      <img src="/icons/star.png" alt="Star" class="absolute left-4 lg:left-36 top-56 lg:top-[36rem] h-20 lg:h-32">
    </div>

    <img src="/images/polaroid-collage.webp" loading="lazy" alt="Polaroids" class="absolute -bottom-16 lg:left-1/2 w-full lg:w-auto lg:h-full mt-4 px-3 z-10">
  </div>

  <div id="about" class="relative w-full pb-8 lg:pb-20 bg-ugc-light-green-opaque bg-contain">
    <p class="pt-10 pl-6 lg:pl-20 text-tiny lg:text-xl font-lora">ABOUT ME</p>

    <div class="w-full lg:w-3/4 xl:w-2/3 lg:flex lg:flex-row-reverse lg:mx-auto lg:mt-10 lg:px-0 lg:gap-[5%]">
      <div class="lg:flex lg:flex-col">
        <p class="lg:mt-10 pt-4 pl-16 text-4xl lg:text-6xl font-lora">Hi,</p>
        
        <p class="lg:mt-8 text-7-5xl lg:text-10xl leading-30 text-center font-corinthia italic">I'm Celine</p>
        
        <p class="hidden lg:block lg:mt-4 text-xl text-center font-lora tracking-wider">HOW TO'S · TRENDS · UNBOXING & MORE</p>

        <p class="lg:mt-10 px-10 text-xs lg:text-xl text-center font-lora">
          I’m a content creator based in Melbourne, Australia, bilingual in <b>English</b> and <b>French</b>.
          <br><br>
          With a background in <b>marketing</b> and <b>brand management</b>, I have a knack for storytelling through my
          <b>photography</b> and <b>videography</b>. I love creating <b>awesome stories</b> that connect with people.
          <br><br>
          I bring brands to life with <b>authentic</b>, <b>bubbly content</b> that doesn’t feel like ads!
          <br><br>
          My mission is to capture <b>compelling photo and video content</b> aimed at boosting engagement, building
          community, and driving conversions.
        </p>
      </div>
      
      <img src="/images/celine-2.jpg" loading="lazy" alt="Celine Selfie" class="w-60 lg:w-2/5 mx-auto mt-4 rounded-[6rem] lg:rounded-[12rem] object-cover">
    </div>

    <img src="/icons/star.png" alt="Star" class="absolute right-4 lg:right-24 -top-4 lg:top-16 h-8 lg:h-24">
    <img src="/icons/star.png" alt="Star" class="lg:hidden absolute right-8 lg:right-40 top-12 lg:top-32 h-8 lg:h-24">
    <img src="/icons/star.png" alt="Star" class="absolute left-4 lg:left-40 bottom-8 lg:bottom-8 h-16 lg:h-24">
  </div>

  <div class="relative w-full lg:h-2/5 flex flex-col justify-center items-center py-14 lg:py-10 px-2 bg-cover text-xl lg:text-5-5xl lg:leading-18 text-center text-ugc-green-dark font-lora">
    <div>Unleash your brand's<div
      class="h-8 lg:h-20 px-3 lg:px-6 inline-flex background-paint-3 bg-cover font-corinthia text-4-5xl lg:text-8-5xl text-slate-800">personality
    </div></div>
    <p><div class="h-8 lg:h-20 inline-flex">with UGC content that</div></p>
    <p>showcases its unique voice.</p>

    <img src="/icons/star.png" alt="Star" class="absolute right-4 lg:right-24 bottom-4 lg:top-16 h-12 lg:h-24">
    <img src="/icons/star.png" alt="Star" class="absolute -left-6 lg:left-24 bottom-14 lg:bottom-12 h-16 lg:h-32">
  </div>

  <div id="portfolio" class="w-full pb-12 bg-ugc-light-green-opaque bg-cover">
    <p class="pt-10 pl-6 lg:pl-20 text-tiny lg:text-xl font-lora">PORTFOLIO</p>

    <h1 class="pt-4 lg:pt-10 text-4-5xl lg:text-7xl text-center font-bonaNova tracking-wider">VIDEOGRAPHY</h1>

    <div id="video-row-1" class="w-full flex lg:justify-center gap-8 lg:gap-12 mt-8 lg:mt-16 px-6 lg:px-20 overflow-scroll hide-scrollbar">
      <div v-for="video in ugcVideos.slice(0, 4)" class="lg:h-auto min-w-[60%] lg:min-w-[20%] lg:w-1/5 bg-slate-300 rounded-3xl">
        <video controls playsinline :poster="'/ugc/videos/' + video.poster" preload="metadata" class="rounded-3xl shadow-xl">
          <source :src="'/ugc/videos/' + video.source" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    <div id="video-row-2" class="w-full flex lg:justify-center gap-8 lg:gap-12 mt-12 lg:mt-16 px-6 lg:px-20 overflow-scroll hide-scrollbar">
      <div v-for="video in ugcVideos.slice(4, 8)" class="lg:h-auto min-w-[60%] lg:min-w-[20%] lg:w-1/5 bg-slate-300 rounded-3xl">
        <video controls playsinline :poster="'/ugc/videos/' + video.poster" preload="metadata" class="rounded-3xl shadow-xl">
          <source :src="'/ugc/videos/' + video.source" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    <div id="video-row-3" class="w-full flex lg:justify-center gap-8 lg:gap-12 mt-12 lg:mt-16 px-6 lg:px-20 overflow-scroll hide-scrollbar">
      <div v-for="video in ugcVideos.slice(8, 12)" class="lg:h-auto min-w-[60%] lg:min-w-[20%] lg:w-1/5 bg-slate-300 rounded-3xl">
        <video controls playsinline :poster="'/ugc/videos/' + video.poster" preload="metadata" class="rounded-3xl shadow-xl">
          <source :src="'/ugc/videos/' + video.source" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </div>

  <div class="w-full pb-12 bg-cover">
    <p class="pt-10 pl-6 lg:pl-20 text-tiny lg:text-xl font-lora">PORTFOLIO</p>

    <h1 class="pt-4 lg:pt-10 text-4-5xl lg:text-7xl text-center font-bonaNova tracking-wider">PHOTOGRAPHY</h1>

    <div id="image-row-1" class="w-full flex lg:justify-center gap-8 lg:gap-12 mt-8 lg:mt-16 px-6 lg:px-20 overflow-scroll hide-scrollbar">
      <div v-for="image in ugcImages.slice(0, 4)" :key="image" class="h-80 lg:h-96 min-w-[60%] lg:min-w-[20%] lg:w-1/5 bg-slate-300 rounded-3xl">
        <img :src="`/ugc/images/${image}`" :alt="image.split('.')[0]" class="h-full w-full object-cover rounded-3xl shadow">
      </div>
    </div>
    <div id="image-row-2" class="w-full flex lg:justify-center gap-8 lg:gap-12 mt-12 lg:mt-16 px-6 lg:px-20 overflow-scroll hide-scrollbar">
      <div v-for="image in ugcImages.slice(4,8)" :key="image" class="h-80 lg:h-96 min-w-[60%] lg:min-w-[20%] lg:w-1/5 bg-slate-300 rounded-3xl">
        <img :src="`/ugc/images/${image}`" :alt="image.split('.')[0]" class="h-full w-full object-cover rounded-3xl shadow">
      </div>
    </div>
    <div id="image-row-3" class="w-full flex lg:justify-center gap-8 lg:gap-12 mt-12 lg:mt-16 px-6 lg:px-20 overflow-scroll hide-scrollbar">
      <div v-for="image in ugcImages.slice(8,12)" :key="image" class="h-80 lg:h-96 min-w-[60%] lg:min-w-[20%] lg:w-1/5 bg-slate-300 rounded-3xl">
        <img :src="`/ugc/images/${image}`" :alt="image.split('.')[0]" class="h-full w-full object-cover rounded-3xl shadow">
      </div>
    </div>
    <div id="image-row-4" class="w-full flex lg:justify-center gap-8 lg:gap-12 mt-12 lg:mt-16 px-6 lg:px-20 overflow-scroll hide-scrollbar">
      <div v-for="image in ugcImages.slice(12,16)" :key="image" class="h-80 lg:h-96 min-w-[60%] lg:min-w-[20%] lg:w-1/5 bg-slate-300 rounded-3xl">
        <img :src="`/ugc/images/${image}`" :alt="image.split('.')[0]" class="h-full w-full object-cover rounded-3xl shadow">
      </div>
    </div>
  </div>

  <div class="relative w-full lg:h-1/3 lg:flex lg:justify-center lg:items-center py-14 lg:py-10 px-2 bg-ugc-light-green-opaque bg-cover text-xl lg:text-7xl lg:leading-18 text-center text-slate-800 font-lora">
    Content made with <div class="h-8 lg:h-20 px-3 lg:px-6 inline-flex background-paint-2 bg-cover font-corinthia text-4-5xl lg:text-10xl text-slate-800">passion.</div>
    
    <img src="/icons/star.png" alt="Star" class="absolute -left-4 lg:left-24 bottom-20 lg:bottom-12 h-12 lg:h-32">
    <img src="/icons/star.png" alt="Star" class="absolute right-4 lg:right-24 bottom-4 lg:top-16 h-8 lg:h-24">
  </div>

  <div id="services" class="relative w-full pb-16 bg-cover">
    <h1 class="pt-12 lg:pt-20 text-4-5xl lg:text-7xl text-center font-bonaNova tracking-wider">SERVICES</h1>

    <p class="pt-4 text-xs lg:text-lg text-center font-lora">Reach your target audience with me!</p>

    <div class="lg:flex">
      <div class="lg:w-1/2 lg:flex lg:justify-end lg:items-center lg:pr-20">
        <div class="w-full lg:w-fit flex flex-col gap-2 lg:gap-6 mt-8 px-2 font-lora">
          <p v-for="service in services" class="lg:text-2xl text-center lg:text-left uppercase">{{ service.name }}</p>
        </div>
      </div>
      
      <div class="w-2/3 lg:w-0.5 h-0.5 lg:h-auto mt-10 mx-auto lg:mx-0 bg-slate-800"></div>
      
      <div class="lg:w-1/2 lg:py-3">
        <h1 class="mt-10 ml-10 lg:py-2 px-3 lg:px-6 inline-flex background-paint-2 bg-cover font-lora font-semibold text-2xl lg:text-4xl text-slate-700">
          VIDEO</h1>
        
        <div class="ml-1/6 lg:ml-28 flex flex-col mt-3 mx-auto px-2 font-lora">
          <div v-for="videoService in videoServices" :key="videoService.name" class="flex leading-5 lg:leading-7">
            • <p class="ml-2 text-sm lg:text-lg">{{ videoService.name }}</p>
          </div>
        </div>
        
        <h1 class="mt-10 ml-10 lg:py-2 px-3 lg:px-6 inline-flex background-paint-2 bg-cover font-lora font-semibold text-2xl lg:text-4xl text-slate-700">
          PHOTOGRAPHY</h1>
        
        <div class="ml-1/6 lg:ml-28 flex flex-col mt-3 mx-auto px-2 font-lora">
          <div v-for="photoService in photoServices" :key="photoService.name" class="flex leading-5 lg:leading-7">
            • <p class="ml-2 text-sm lg:text-lg">{{ photoService.name }}</p>
          </div>
        </div>
        
        <p class="mt-8 px-8 text-xs lg:text-base text-right lg:text-left text-slate-700">*Rates are available upon request</p>
      </div>
    </div>
      
    <p class="mt-8 lg:mt-16 px-12 text-lg lg:text-2xl leading-6 text-center text-ugc-dark-green font-lora font-semibold">
      But that's not all! Not seeing what you're looking for? Let's chat!
    </p>

    <img src="/icons/star.png" alt="Star" class="absolute -left-6 lg:left-24 top-40 lg:top-60 h-16 lg:h-24">
    <img src="/icons/star.png" alt="Star" class="absolute right-6 lg:right-32 bottom-[32rem] lg:top-16 h-8 lg:h-28">
    <img src="/icons/star.png" alt="Star" class="absolute right-20 lg:right-16 bottom-4 lg:bottom-40 h-8 lg:h-16">
  </div>

  <div id="contact" class="relative w-full bg-ugc-light-green-opaque bg-cover">
    <p class="pt-10 pl-6 lg:pl-20 text-tiny lg:text-xl font-lora">CONTACT ME</p>

    <div class="lg:flex lg:h-[30rem]">
      <div class="lg:w-3/5 lg:flex lg:flex-col lg:items-end lg:pr-10">
        <p class="mt-10 lg:mr-40 pl-2 text-4xl lg:text-7-5xl font-lora">Let's work</p>
        <p class="mt-6 lg:mt-16 ml-12 px-3 max-w-fit background-paint-3 bg-cover z-10 font-corinthia text-7-5xl lg:text-11xl leading-16 text-slate-700">
          together!</p>
          
        <div class="lg:w-2/3">
          <a href="https://www.instagram.com/ugc.withceline/" target="_blank" class="flex items-center gap-2 mt-12 lg:mt-24 pl-4">
            <img src="/icons/instagram.png" alt="Instagram" class="w-5 lg:w-10">
            <p class="lg:ml-3 text-xs lg:text-2xl">@ugc.withceline</p>
          </a>

          <a href="https://www.tiktok.com/@ugc.withcelinee" target="_blank" class="flex items-center gap-2 mt-1 lg:mt-4 pl-4">
            <img src="/icons/tiktok.svg" alt="TikTok" class="w-5 lg:w-10">
            <p class="lg:ml-3 text-xs lg:text-2xl">@ugc.withcelinee</p>
          </a>
          
          <div class="flex items-center gap-2 mt-1 lg:mt-4 pl-4">
            <img src="/icons/mail.png" alt="Mail" class="h-4 w-5 lg:w-10 lg:h-8">
            <p class="lg:ml-3 text-xs lg:text-2xl">ugcwithcelinee@gmail.com</p>
          </div>
        </div>
      </div>

      <img src="/images/celine-1.webp" loading="lazy" alt="Celine Selfie" class="absolute lg:static -right-16 w-60 lg:w-auto lg:h-full top-20 rounded-full">
    </div>

    <div class="lg:w-1/2 lg:max-w-[48rem] mt-20 lg:mx-auto pl-4 pb-10 font-lora">
      <!-- Honeypot -->
      <input v-model="honeypot" type="email" class="hidden">

      <div class="lg:flex">
        <label for="name" class="inline-block w-20 lg:w-32 lg:text-2xl">NAME</label>
        <input v-model="name" type="text" class="w-56 lg:grow h-8 lg:h-12 ml-4 px-6 lg:px-12 background-paint-2 bg-transparent text-sm lg:text-2xl rounded-lg outline-slate-700">
      </div>
      <div class="mt-2 lg:flex">
        <label for="email" class="inline-block w-20 lg:w-32 lg:text-2xl">EMAIL</label>
        <input v-model="email" type="email" class="w-64 lg:grow h-8 lg:h-12 ml-4 px-6 lg:px-12 background-paint-2 bg-transparent text-sm lg:text-2xl rounded-lg outline-slate-700">
      </div>
      <div class="flex mt-2">
        <label for="message" class="flex w-20 lg:w-32 h-20 items-center my-auto lg:text-2xl">MESSAGE</label>
        <textarea v-model="message" type="text" class="w-64 lg:grow h-20 lg:h-36 ml-4 px-6 lg:px-12 py-3 lg:py-6 background-paint-1 bg-transparent bg-cover text-xs lg:text-lg rounded-lg outline-slate-700 overflow-scroll"></textarea>
      </div>

      <div class="w-full flex">
        <button @click="submit()" :disabled="sendingEmail" class="w-36 lg:w-40 mt-6 mx-auto py-1 lg:py-2 lg:text-xl text-center text-white font-lora bg-ugc-light-green rounded-lg outline-slate-700 duration-300 disabled:animate-pulse">
          {{ sendingEmail ? 'SUBMITTING...' : 'SUBMIT' }}
        </button>
      </div>

      <p :class="[ showEmailResultMessage ? 'opacity-100' : 'opacity-0' ]" class="pt-6 text-sm lg:text-xl text-center text-ugc-dark-green">{{ emailResultMessage }}</p>
    </div>

    <img src="/icons/star.png" alt="Star" class="absolute left-60 lg:left-16 top-4 lg:top-60 h-12 lg:h-24">
    <img src="/icons/star.png" alt="Star" class="absolute left-6 lg:left-32 bottom-20 lg:bottom-48 h-16 lg:h-16">
    <img src="/icons/star.png" alt="Star" class="hidden lg:block absolute right-32 lg:right-16 lg:bottom-96 h-12 lg:h-16">
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

const scrollTo = (elementId) => {
  document.querySelector(elementId).scrollIntoView({ behavior: 'smooth' })
}

const submit = async () => {
  // if (honeypot.value)
  //   return

  sendingEmail.value = true

  try {
    console.log(name.value, email.value, message.value)
    await sendEmail({
      name: honeypot.value ? 'BOT - ' + name.value : name.value,
      email: honeypot.value ? 'BOT - ' + email.value : email.value,
      message: honeypot.value ? 'BOT - ' + message.value : message.value
    }).then(() => {
      name.value = ''
      email.value = ''
      message.value = ''
  
      emailResultMessage.value = 'Thanks for contacting me! Your enquiry has been sent.'
      showEmailResultMessage.value = true
    }).catch(() => {
      emailResultMessage.value = 'There was an error sending your enquiry. Please try again in a moment.'
      showEmailResultMessage.value = true
    })
  
  
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