<template>
  <div @click="showAssetsModal = true" class="fixed bottom-8 right-8 size-10 flex justify-center items-center rounded-full bg-slate-300 text-2xl text-slate-500 cursor-pointer">?</div>
  <Assets v-if="showAssetsModal" :showAssetsModal @closeAssetsModal="showAssetsModal = false" />
  
  <div class="relative w-full h-2/3 min-h-[34rem] pt-20 background-1 bg-cover text-ugc-green">
    <h1 class="text-6-5xl leading-13 text-center font-bonaNova">CELINE</h1>
    <h1 class="text-6xl leading-11 text-center font-bonaNova">MALFAIT</h1>

    <p class="mt-10 text-sm text-center font-lora">UGC CREATOR</p>

    <div class="flex justify-center gap-1 mt-4">
      <img src="/icons/instagram.png" alt="Instagram" class="size-4">
      <img src="/icons/mail.png" alt="Instagram" class="size-4">
    </div>

    <img src="/images/polaroid-collage.png" alt="Polaroids" class="absolute -bottom-16 w-full mt-4 px-3">
  </div>

  <div class="w-full lg:h-5/4 background-2 bg-contain">
    <p class="pt-10 pl-6 text-xs font-lora">ABOUT ME</p>

    <p class="pt-4 pl-16 text-4xl font-lora">Hi,</p>

    <p class="text-7-5xl leading-20 text-center font-corinthia italic">I'm Celine</p>

    <p class="px-10 text-xs text-center font-lora">
      I’m a content creator based in Melbourne, Australia, bilingual in <b>English</b> and <b>French</b>.
      <br><br>
      With a background in <b>marketing</b> and <b>brand management</b>, I have a knack for storytelling through my <b>photography</b> and <b>videography</b>. I love creating <b>awesome stories</b> that connect with people.
      <br><br>
      I bring brands to life with <b>authentic</b>, <b>bubbly content</b> that doesn’t feel like ads!
      <br><br>
      My mission is to capture <b>compelling photo and video content</b> aimed at boosting engagement, building community, and driving conversions.
    </p>

    <img src="/images/celine-1.jpg" alt="Celine Selfie" class="w-60 mx-auto mt-4 rounded-[6rem]">
  </div>

  <div class="w-full lg:h-1/3 background-3 bg-cover">

  </div>

  <div class="w-full lg:h-full background-4 bg-cover">

  </div>

  <div class="w-full lg:h-full background-5 bg-cover">

  </div>

  <div class="w-full lg:h-1/3 background-6 bg-cover">

  </div>

  <div class="w-full lg:h-5/4 background-7 bg-cover">

  </div>

  <div class="w-full lg:h-full background-4 bg-cover">

  </div>
</template>

<script setup>
  const showAssetsModal = ref(false)
</script>

<style>
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
</style>