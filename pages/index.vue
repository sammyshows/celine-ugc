<template>
  <div @click="showAssetsModal = true"
    class="fixed bottom-8 right-8 size-10 flex justify-center items-center rounded-full bg-slate-300 text-2xl text-slate-500 cursor-pointer">
    ?</div>
  <Assets v-if="showAssetsModal" :showAssetsModal @closeAssetsModal="showAssetsModal = false" />

  <div class="relative w-full h-2/3 min-h-[34rem] pt-20 background-1 bg-cover text-ugc-dark-green">
    <h1 class="text-6-5xl leading-13 text-center font-bonaNova">CELINE</h1>
    <h1 class="text-6xl leading-11 text-center font-bonaNova">MALFAIT</h1>

    <p class="mt-10 text-sm text-center font-lora">UGC CREATOR</p>

    <div class="flex justify-center gap-1 mt-4">
      <img src="/icons/instagram.png" alt="Instagram" class="size-4">
      <img src="/icons/mail.png" alt="Instagram" class="size-4">
    </div>

    <img src="/images/polaroid-collage.png" alt="Polaroids" class="absolute -bottom-16 w-full mt-4 px-3">
  </div>

  <div class="w-full lg:h-5/4 pb-8 background-2 bg-contain">
    <p class="pt-10 pl-6 text-tiny font-lora">ABOUT ME</p>

    <p class="pt-4 pl-16 text-4xl font-lora">Hi,</p>

    <p class="text-7-5xl leading-20 text-center font-corinthia italic">I'm Celine</p>

    <p class="px-10 text-xs text-center font-lora">
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

    <img src="/images/celine-1.jpg" alt="Celine Selfie" class="w-60 mx-auto mt-4 rounded-[6rem]">
  </div>

  <div class="w-full lg:h-1/3 py-14 px-2 background-3 bg-cover text-xl text-center text-slate-800 font-lora">
    Unleash your brand's<div
      class="h-8 px-3 inline-flex background-paint-3 bg-cover font-corinthia text-4-5xl text-slate-700">personality
    </div><br>
    <div class="h-8 inline-flex">with UGC content that</div><br>
    showcases its unique voice.
  </div>

  <div class="w-full lg:h-full pb-12 background-4 bg-cover">
    <p class="pt-10 pl-6 text-tiny font-lora">PORTFOLIO</p>

    <h1 class="pt-4 text-4-5xl text-center font-bonaNova">VIDEOGRAPHY</h1>

    <div class="w-full flex gap-6 mt-8 px-6 overflow-scroll">
      <div v-for="i in 5" class="h-80 min-w-2/5 bg-slate-300">

      </div>
    </div>
  </div>

  <div class="w-full lg:h-full pb-12 background-5 bg-cover">
    <p class="pt-10 pl-6 text-tiny font-lora">PORTFOLIO</p>

    <h1 class="pt-4 text-4-5xl text-center font-bonaNova">PHOTOGRAPHY</h1>

    <div class="w-full flex gap-6 mt-8 px-6 overflow-scroll">
      <div v-for="i in 5" class="h-80 min-w-2/5 bg-slate-300">

      </div>
    </div>
  </div>

  <div class="w-full lg:h-1/3 py-14 px-2 background-6 bg-cover text-xl text-center text-slate-800 font-lora">
    Content made with<div
      class="h-8 px-3 inline-flex background-paint-2 bg-cover font-corinthia text-4-5xl text-slate-700">passion</div>
  </div>

  <div class="w-full lg:h-5/4 pb-16 background-7 bg-cover">
    <p class="pt-10 pl-6 text-tiny font-lora">PROCESS</p>

    <h1 class="pt-4 text-4-5xl text-center font-bonaNova">SERVICES</h1>

    <p class="pt-4 text-xs text-center font-lora">Reach your target audience with me!</p>

    <div class="w-full flex flex-col gap-2 mt-8 px-2 font-lora">
      <p v-for="service in services" class="text-center uppercase">{{ service.name }}</p>
    </div>

    <div class="w-2/3 h-0.5 mt-10 mx-auto bg-slate-800"></div>

    <h1
      class="mt-10 ml-10 px-3 inline-flex background-paint-2 bg-cover font-lora font-semibold text-2xl text-slate-700">
      VIDEO</h1>

    <div class="ml-1/6 flex flex-col mt-3 mx-auto px-2 font-lora">
      <div v-for="videoService in videoServices" :key="videoService.name" class="flex leading-5">
        • <p class="ml-2 text-sm">{{ videoService.name }}</p>
      </div>
    </div>

    <h1
      class="mt-10 ml-10 px-3 inline-flex background-paint-2 bg-cover font-lora font-semibold text-2xl text-slate-700">
      PHOTOGRAPHY</h1>

    <div class="ml-1/6 flex flex-col mt-3 mx-auto px-2 font-lora">
      <div v-for="photoService in photoServices" :key="photoService.name" class="flex leading-5">
        • <p class="ml-2 text-sm">{{ photoService.name }}</p>
      </div>
    </div>

    <p class="mt-8 pr-8 text-xs text-right text-slate-700">*Rates are available upon request</p>

    <p class="mt-8 px-12 text-lg leading-6 text-center text-ugc-dark-green font-lora font-semibold">But that's not all! Not
      seeing what you're looking for? Let's chat!</p>
  </div>

  <div class="w-full lg:h-full background-4 bg-cover">
    <p class="pt-10 pl-6 text-tiny font-lora">CONTACT ME</p>

    <img src="/images/celine-1.jpg" alt="Celine Selfie" class="absolute -right-16 w-60 mt-4 rounded-full">

    <p class="mt-10 pl-2 text-4xl font-lora">Let's work</p>
    <p
      class="mt-6 ml-12 px-3 max-w-fit background-paint-3 bg-cover z-10 font-corinthia text-7-5xl leading-16 text-slate-700">
      together!</p>

    <div class="flex items-center gap-2 mt-12 pl-4">
      <img src="/icons/mail.png" alt="Mail" class="h-4 w-5">
      <p class="text-xs underline">ugcwithceline@gmail.com</p>
    </div>

    <div class="flex items-center gap-2 mt-1 pl-4">
      <img src="/icons/instagram.png" alt="Instagram" class="w-5">
      <p class="text-xs">@ugcwithceline</p>
    </div>

    <div class="mt-20 pl-4 pb-10 font-lora">
      <label for="name" class="inline-block w-20">NAME</label>
      <input type="text" value="Sam McCarthy" id="" class="w-56 h-8 ml-4 px-6 background-paint-2 lighten-background text-sm">
      <br>
      <label for="email" class="inline-block w-20 mt-2">EMAIL</label>
      <input type="text" value="samrmccarthy6@gmail.com" id="" class="w-64 h-8 ml-4 px-6 background-paint-2 lighten-background text-sm">
      <br>
      <div class="inline-flex mt-2">
        <label for="message" class="flex w-20 h-20 items-center my-auto">MESSAGE</label>
        <textarea type="text" id="" class="w-64 h-20 ml-4 px-6 py-3 background-paint-1 lighten-background bg-cover text-xs overflow-scroll">
Hi Celine, I'm interested in working with you on a project.
        </textarea>
      </div>

      <div class="w-fit mt-6 mx-auto px-6 py-1 text-center text-white font-lora bg-ugc-light-green rounded-lg">SUBMIT</div>
    </div>
  </div>
</template>

<script setup>
const showAssetsModal = ref(false)

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
</script>

<style>
.lighten-background {
  background-color: rgba(255,255,255,0.3);
  background-blend-mode: lighten;
}

.background-1 {
  background-image: url('/images/background-1.png')
}

.background-2 {
  background-image: url('/images/background-2.png')
}

.background-3 {
  background-image: url('/images/background-3.png')
}

.background-4 {
  background-image: url('/images/background-4.png')
}

.background-5 {
  background-image: url('/images/background-5.png')
}

.background-6 {
  background-image: url('/images/background-6.png')
}

.background-7 {
  background-image: url('/images/background-7.png')
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