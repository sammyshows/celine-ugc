<template>
  <div class="relative w-full h-2/3 lg:h-4/5 min-h-[34rem] flex flex-col pt-20 sm:pt-0 background-1 bg-cover text-ugc-dark-green">
    <div class="lg:w-1/2 lg:my-auto">
      <h1 class="text-6-5xl lg:text-12xl leading-13 lg:leading-30 text-center font-bonaNova">CELINE</h1>
      <h1 class="text-6xl lg:text-11xl leading-11 lg:leading-30 text-center font-bonaNova">MALFAIT</h1>
  
      <p class="mt-10 lg:mt-6 text-sm lg:text-2xl text-center font-lora">UGC CREATOR</p>
  
      <div class="flex justify-center gap-1 lg:gap-4 mt-4">
        <a href="https://www.instagram.com/ugc.withcelinee/" target="_blank">
          <img src="/icons/instagram.png" alt="Instagram" class="size-4 lg:size-12">
        </a>
        <img src="/icons/mail.png" alt="Instagram" class="size-4 lg:w-14 lg:h-12">
      </div>
    </div>

    <img src="/images/polaroid-collage.webp" loading="lazy" alt="Polaroids" class="absolute -bottom-16 lg:left-1/2 w-full lg:w-auto lg:h-full mt-4 px-3">
  </div>

  <div class="w-full pb-8 lg:pb-20 background-2 bg-contain">
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
  </div>

  <div class="w-full lg:h-2/5 flex flex-col justify-center items-center py-14 lg:py-10 px-2 background-3 bg-cover text-xl lg:text-5-5xl lg:leading-18 text-center text-slate-800 font-lora">
    <div>Unleash your brand's<div
      class="h-8 lg:h-20 px-3 lg:px-6 inline-flex background-paint-3 bg-cover font-corinthia text-4-5xl lg:text-8-5xl text-slate-800">personality
    </div></div>
    <p><div class="h-8 lg:h-20 inline-flex">with UGC content that</div></p>
    <p>showcases its unique voice.</p>
  </div>

  <div class="w-full lg:h-full pb-12 background-4 bg-cover">
    <p class="pt-10 pl-6 lg:pl-20 text-tiny lg:text-xl font-lora">PORTFOLIO</p>

    <h1 class="pt-4 lg:pt-10 text-4-5xl lg:text-7xl text-center font-bonaNova tracking-wider">VIDEOGRAPHY</h1>

    <div class="w-full lg:h-full flex lg:justify-center gap-6 lg:gap-12 mt-8 lg:mt-16 px-6 lg:px-20 overflow-scroll">
      <div v-for="i in 4" class="h-80 lg:h-2/3 min-w-[40%] lg:min-w-[20%] lg:w-1/5 bg-slate-300">

      </div>
    </div>
  </div>

  <div class="w-full lg:h-full pb-12 background-5 bg-cover">
    <p class="pt-10 pl-6 lg:pl-20 text-tiny lg:text-xl font-lora">PORTFOLIO</p>

    <h1 class="pt-4 lg:pt-10 text-4-5xl lg:text-7xl text-center font-bonaNova tracking-wider">PHOTOGRAPHY</h1>

    <div class="w-full lg:h-full flex lg:justify-center gap-6 lg:gap-12 mt-8 lg:mt-16 px-6 lg:px-20 overflow-scroll">
      <div v-for="image in ugcImages" :key="image" class="h-80 lg:h-2/3 min-w-[40%] lg:min-w-[28rem] lg:w-1/5 bg-slate-300">
      <img :src="`/ugc/images/${image}`" loading="lazy" :alt="image.split('.')[0]" class="h-full w-full object-cover">
    </div>
    </div>
  </div>

  <div class="w-full lg:h-1/3 lg:flex lg:justify-center lg:items-center py-14 lg:py-10 px-2 background-6 bg-cover text-xl lg:text-7xl lg:leading-18 text-center text-slate-800 font-lora">
    Content made with <div class="h-8 lg:h-20 px-3 lg:px-6 inline-flex background-paint-2 bg-cover font-corinthia text-4-5xl lg:text-10xl text-slate-800">passion.</div>
  </div>

  <div class="w-full pb-16 background-7 bg-cover">
    <p class="pt-10 pl-6 lg:pl-20 text-tiny lg:text-xl font-lora">PROCESS</p>

    <h1 class="pt-4 lg:pt-10 text-4-5xl lg:text-7xl text-center font-bonaNova tracking-wider">SERVICES</h1>

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
      But that's not all! Not seeing what you're looking for? Let's chat!</p>
  </div>

  <div class="relative w-full background-4 bg-cover">
    <p class="pt-10 pl-6 lg:pl-20 text-tiny lg:text-xl font-lora">CONTACT ME</p>

    <div class="lg:flex lg:h-[30rem]">
      <div class="lg:w-3/5 lg:flex lg:flex-col lg:items-end lg:pr-10">
        <p class="mt-10 lg:mr-40 pl-2 text-4xl lg:text-7-5xl font-lora">Let's work</p>
        <p class="mt-6 lg:mt-16 ml-12 px-3 max-w-fit background-paint-3 bg-cover z-10 font-corinthia text-7-5xl lg:text-11xl leading-16 text-slate-700">
          together!</p>
          
        <div class="lg:w-2/3">
          <div class="flex items-center gap-2 mt-12 lg:mt-24 pl-4">
            <img src="/icons/instagram.png" alt="Instagram" class="w-5 lg:w-10">
            <a href="https://www.instagram.com/ugc.withcelinee/" target="_blank">
              <p class="lg:ml-3 text-xs lg:text-2xl">@ugc.withcelinee</p>
            </a>
          </div>
          
          <div class="flex items-center gap-2 mt-1 lg:mt-4 pl-4">
            <img src="/icons/mail.png" alt="Mail" class="h-4 w-5 lg:w-10 lg:h-8">
            <p class="lg:ml-3 text-xs lg:text-2xl">ugcwithcelinee@gmail.com</p>
          </div>
        </div>
      </div>

      <img src="/images/celine-1.webp" loading="lazy" alt="Celine Selfie" class="absolute lg:static -right-16 w-60 lg:w-auto lg:h-full top-20 rounded-full">
    </div>

    <div class="lg:w-1/2 lg:max-w-[48rem] mt-20 lg:mx-auto pl-4 pb-10 font-lora">
      <div class="lg:flex">
        <label for="name" class="inline-block w-20 lg:w-32 lg:text-2xl">NAME</label>
        <input type="text" value="Sam McCarthy" id=""
          class="w-56 lg:grow h-8 lg:h-12 ml-4 px-6 lg:px-12 background-paint-2 lighten-background text-sm lg:text-2xl">
      </div>
      <div class="mt-2 lg:flex">
        <label for="email" class="inline-block w-20 lg:w-32 lg:text-2xl">EMAIL</label>
        <input type="text" value="samrmccarthy6@gmail.com" id=""
          class="w-64 lg:grow h-8 lg:h-12 ml-4 px-6 lg:px-12 background-paint-2 lighten-background text-sm lg:text-2xl">
      </div>
      <div class="flex mt-2">
        <label for="message" class="flex w-20 lg:w-32 h-20 items-center my-auto lg:text-2xl">MESSAGE</label>
        <textarea type="text" id=""
          class="w-64 lg:grow h-20 lg:h-36 ml-4 px-6 lg:px-12 py-3 lg:py-6 background-paint-1 lighten-background bg-cover text-xs lg:text-lg overflow-scroll">
Hi Celine, I'm interested in working with you on a project.
        </textarea>
      </div>

      <div class="w-fit mt-6 mx-auto px-6 lg:px-12 py-1 lg:py-2 lg:text-xl text-center text-white font-lora bg-ugc-light-green rounded-lg cursor-pointer">SUBMIT
      </div>
    </div>
  </div>
</template>

<script setup>
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
  'Botanycl.webp',
  'Bulk.webp',
  'Cerave.webp',
  'Clinique.webp',
  'Cream.webp',
  'Crisps.webp',
  'Drink 2.webp',
  'Drink Pic.webp',
  'Elvive.webp',
  'Face cream.webp',
  'Furla.webp',
  'Lip balm.webp',
  'Lip gloss.webp',
  'Lipstick.webp',
  'Mascara.webp',
  'Nail polish.webp',
  'SPF.webp',
  'The ordinary .webp',
  'Workout.webp',
  'Zen.webp'
]
</script>

<style>
.lighten-background {
  background-color: rgba(255, 255, 255, 0.3);
  background-blend-mode: lighten;
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