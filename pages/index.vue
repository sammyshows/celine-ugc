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
        <div v-for="video in beautyVideos" class="relative xl:h-auto min-w-[60%] sm:min-w-[35%] lg:min-w-[20%] xl:min-w-[16rem] 2xl:min-w-[20rem] w-[19rem] lg:w-[12rem] p-0.5 rounded-[2rem]">
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

      <div class="hidden xl:block text-vertical-reverse ml-20 text-8-5xl xl:text-6-5xl text-center font-italiana font-thin tracking-widest z-10">
        HEALTH
      </div>

      <div id="video-row-2" class="w-full flex justify-center gap-8 xl:gap-12 px-6 xl:pr-20 overflow-scroll hide-scrollbar z-10">
        <div v-for="video in healthVideos" class="relative xl:h-auto min-w-[60%] sm:min-w-[35%] lg:min-w-[20%] xl:min-w-[16rem] 2xl:min-w-[20rem] w-[19rem] lg:w-[12rem] p-0.5 rounded-[2rem]">
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
        <div v-for="video in experienceVideos" class="relative xl:h-auto min-w-[60%] sm:min-w-[35%] lg:min-w-[20%] xl:min-w-[14rem] 2xl:min-w-[20rem] w-[19rem] lg:w-[12rem] p-0.5 rounded-[2rem]">
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

    <div class="xl:hidden pt-8 sm:pt-9 pb-5 sm:pb-7 text-4xl sm:text-4-5xl md:text-5xl lg:text-6xl text-center font-italiana tracking-wider">OTHER</div>

    <div class="flex items-center pb-1 xl:pt-16 relative">
      <div class="absolute bottom-0 xl:top-auto xl:bottom-0 left-0 w-full xl:w-[97%] h-2/5 xl:rounded-r-lg bg-white"></div>

      <div class="hidden xl:block text-vertical-reverse ml-20 text-8-5xl xl:text-6-5xl text-center font-italiana font-thin tracking-widest z-10">
        OTHER
      </div>

      <div id="video-row-2" class="w-full flex justify-center gap-8 xl:gap-12 px-6 xl:pr-20 overflow-scroll hide-scrollbar z-10">
        <div v-for="video in otherVideos" class="relative xl:h-auto min-w-[60%] sm:min-w-[35%] lg:min-w-[20%] xl:min-w-[16rem] 2xl:min-w-[20rem] w-[19rem] lg:w-[12rem] p-0.5 rounded-[2rem]">
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
  </div>

  <div class="w-full bg-cover pb-10">
    <h1 class="pt-8 pb-5 sm:pt-9 sm:pb-7 xl:pt-12 xl:pb-10 text-4xl sm:text-4-5xl md:text-5xl lg:text-6xl xl:text-5-5xl 2xl:text-7xl text-center font-italiana tracking-widest">IMAGES</h1>

    <div id="image-row-1" class="w-full flex flex-wrap xl:flex-nowrap justify-center gap-4 sm:gap-6 xl:gap-12 xl:px-20 overflow-scroll hide-scrollbar">
      <div v-for="number in 4" :key="number" class="h-[43vw] sm:h-[20vw] w-[43%] sm:w-[20vw] xl:h-[16rem] xl:w-[16rem] 2xl:h-[18rem] 2xl:w-[18rem] bg-slate-300 rounded-3xl">
        <img :src="`/ugc/images/${number}.webp`" :alt="`Image ${number}`" class="h-full w-full object-cover rounded-3xl shadow">
      </div>
    </div>
    <div id="image-row-2" class="w-full flex flex-wrap xl:flex-nowrap justify-center gap-4 sm:gap-6 xl:gap-12 mt-4 xl:mt-12 xl:px-20 overflow-scroll hide-scrollbar">
      <div v-for="number in 4" :key="number + 4" class="h-[43vw] sm:h-[20vw] w-[43%] sm:w-[20vw] xl:h-[16rem] xl:w-[16rem] 2xl:h-[18rem] 2xl:w-[18rem] bg-slate-300 rounded-3xl">
        <img :src="`/ugc/images/${number + 4}.webp`" :alt="`Image ${number + 4}`" class="h-full w-full object-cover rounded-3xl shadow">
      </div>
    </div>
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
    <img src="/images/polaroid-collage.webp" alt="Polaroid Collage" class="hidden lg:block absolute w-1/2 -top-20 -right-20 max-w-[760px]">

    <div class="w-full lg:w-1/2">
      <h1 class="px-10 pt-8 pb-5 sm:pt-9 sm:pb-7 lg:pb-6 xl:pt-16 text-4xl sm:text-4-5xl md:text-5xl lg:text-5xl xl:text-5-5xl 2xl:text-7xl text-center font-italiana tracking-widest">WHAT MY CLIENTS SAY</h1>

      <div class="w-full flex flex-col mt-5 lg:mt-8">
        <div class="relative max-w-[80%] sm:max-w-[67%] lg:max-w-[90%] lg:w-full ml-4 sm:ml-16 pt-4 sm:pt-5 p-3 rounded bg-white text-xs sm:text-sm">
          <img src="/icons/tape.png" alt="Tape" class="absolute h-20 sm:h-28 lg:h-32 -top-12 sm:-top-16 lg:-top-20 left-1/2 -translate-x-1/2">
          Celine, you are absolutely amazing! Thank you for creating such standout content—30,000 views in just 48 hours is incredible ❤️ Your content is genuinely impactful, and we really appreciate the value you bring. We'd love to collaborate again! 
        </div>

        <div class="w-full flex flex-col lg:flex-row lg:relative lg:h-48">
          <div class="relative lg:absolute lg:left-24 lg:top-6 max-w-[80%] sm:max-w-[67%] lg:max-w-[50%] lg:w-1/2 mt-8 mr-4 sm:mr-16 lg:mr-0 ml-auto pt-4 sm:pt-5 p-3 rounded bg-white text-xs sm:text-sm">
            <img src="/icons/tape.png" alt="Tape" class="absolute h-20 sm:h-28 lg:h-32 -top-12 sm:-top-16 lg:-top-20 left-1/2 -translate-x-1/2">
            You captured amazing details and delivered great content as always! Thank you, Celine ❤
          </div>

          <div class="relative lg:absolute lg:left-[80%] xl:left-[72%] lg:top-10 max-w-[80%] sm:max-w-[67%] lg:max-w-[50%] lg:w-1/2 mt-8 ml-4 sm:ml-16 lg:ml-0 pt-4 sm:pt-5 p-3 rounded bg-white text-xs sm:text-sm">
            <img src="/icons/tape.png" alt="Tape" class="absolute h-20 sm:h-28 lg:h-32 -top-12 sm:-top-16 lg:-top-20 left-1/2 -translate-x-1/2">
            Team is very happy with your content and you really smashed the creator briefff!!  Thank you so much for working with us on that project!
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
        Hey Celine,<br><br>I hope you are well! Apologies for the delays as have been very busy! Thank you so much for sending though this amazing content! We truly value the creativity and thought you bring to every piece of content. It's clear you genuinely care about results, and that makes all the difference to us xx
      </div>

      <div class="relative max-w-[80%] sm:max-w-[67%] lg:max-w-[30%] lg:max-h-min lg:w-1/2 mt-8 lg:mt-20 mr-4 sm:mr-16 lg:mr-auto ml-auto lg:ml-8 pt-4 sm:pt-5 p-3 rounded bg-white text-xs sm:text-sm">
        <img src="/icons/tape.png" alt="Tape" class="absolute h-20 sm:h-28 lg:h-32 -top-12 sm:-top-16 lg:-top-20 left-1/2 -translate-x-1/2">
        Just wanted to say—your video looks absolutely amazing! 😍 The quality, the storytelling, the aesthetic... it's everything we hoped for and more!
      </div>
    </div>
  </div>

  <div id="contact" class="relative w-full pb-8 bg-white lg:bg-transparent bg-cover">
    <div class="lg:hidden">
      <div class="pt-10 sm:pt-12 text-center font-anton text-5-5xl leading-14 xl:leading-18 tracking-widest xl:text-6-5xl">
        <h1 class="mr-16">GET IN</h1>
        <h1 class="ml-16 text-[#C484B5]">TOUCH!</h1>
      </div>
  
      <div class="relative flex justify-center my-10">
        <div class="relative w-4/5 sm:w-1/2 lg:w-2/5">
          <img src="/images/celine-4.webp" alt="Celine in phone" class="w-full h-full object-cover z-0 p-[2%] rounded-[10%]" />
          <img src="/images/phone-frame.png" alt="Phone Frame" class="absolute top-0 left-0 w-full h-full z-10 pointer-events-none" />
        </div>
  
        <div class="absolute left-1/2 z-20 flex flex-col gap-2 -translate-x-1/2" style="top: 10%">
          <a href="https://www.instagram.com/ugc.withceline/" target="_blank" class="flex items-center gap-2">
            <svg class="w-7 h-7 sm:w-8 sm:h-8" width="67" height="65" viewBox="0 0 67 65" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" stroke="#FFF" clip-rule="evenodd" d="M33.5 0C24.6152 0 16.0944 3.4241 9.81192 9.51903C3.52945 15.614 0 23.8805 0 32.5C0 41.1195 3.52945 49.386 9.81192 55.481C16.0944 61.5759 24.6152 65 33.5 65C42.3848 65 50.9056 61.5759 57.1881 55.481C63.4705 49.386 67 41.1195 67 32.5C67 23.8805 63.4705 15.614 57.1881 9.51903C50.9056 3.4241 42.3848 0 33.5 0ZM29.6346 12.495H45.0962C45.4379 12.495 45.7656 12.6267 46.0072 12.8611C46.2489 13.0955 46.3846 13.4135 46.3846 13.745V17.495H47.8638C49.5208 17.4983 51.1089 18.1384 52.2806 19.275C53.4522 20.4117 54.112 21.9525 54.1154 23.56V46.43C54.1154 49.77 51.3065 52.505 47.8638 52.505H19.1362C17.4783 52.4991 15.8902 51.8568 14.7188 50.7185C13.5474 49.5802 12.888 48.0384 12.8846 46.43V23.56C12.888 21.9525 13.5478 20.4117 14.7194 19.275C15.8911 18.1384 17.4792 17.4983 19.1362 17.495H28.3462V13.745C28.3462 13.4135 28.4819 13.0955 28.7235 12.8611C28.9652 12.6267 29.2929 12.495 29.6346 12.495ZM30.9231 14.995V17.495H43.8077V14.995H30.9231ZM19.1362 19.995C17.0773 19.995 15.4615 21.5625 15.4615 23.56V46.43C15.4615 48.4275 17.0773 49.995 19.1362 49.995H47.8638C49.9227 49.995 51.5385 48.4275 51.5385 46.43V23.56C51.5385 21.5625 49.9227 19.995 47.8638 19.995H19.1362ZM38.6538 22.495C44.3308 22.495 48.9615 26.9875 48.9615 32.495C48.9615 38.0025 44.3308 42.495 38.6538 42.495C32.9769 42.495 28.3462 38.0025 28.3462 32.495C28.3462 26.9875 32.9769 22.495 38.6538 22.495ZM19.3269 24.995H24.4808C24.8225 24.995 25.1502 25.1267 25.3919 25.3611C25.6335 25.5955 25.7692 25.9135 25.7692 26.245V36.245C25.7692 36.5765 25.6335 36.8945 25.3919 37.1289C25.1502 37.3633 24.8225 37.495 24.4808 37.495H19.3269C18.9861 37.4937 18.6597 37.3614 18.4192 37.1271C18.1787 36.8928 18.0436 36.5757 18.0436 36.245V26.245C18.0436 25.9143 18.1787 25.5972 18.4192 25.3629C18.6597 25.1286 18.9861 24.9963 19.3269 24.995ZM38.6538 24.995C34.3684 24.995 30.9231 28.3375 30.9231 32.495C30.9231 36.6525 34.3684 39.995 38.6538 39.995C42.9393 39.995 46.3846 36.6525 46.3846 32.495C46.3846 28.3375 42.9393 24.995 38.6538 24.995ZM20.6154 27.495V34.995H23.1923V27.495H20.6154ZM38.6538 27.495C41.4859 27.495 43.8077 29.7475 43.8077 32.495C43.8077 35.2425 41.4859 37.495 38.6538 37.495C35.8218 37.495 33.5 35.2425 33.5 32.495C33.5 29.7475 35.8218 27.495 38.6538 27.495ZM38.6538 30.005C38.3154 30.0017 37.9796 30.0637 37.666 30.1876C37.3525 30.3114 37.0676 30.4945 36.8277 30.7263C36.5879 30.958 36.398 31.2338 36.2691 31.5374C36.1402 31.8411 36.0749 32.1666 36.0769 32.495C36.0769 33.89 37.2159 34.995 38.6538 34.995C38.9928 34.9977 39.3289 34.9348 39.6425 34.81C39.9561 34.6853 40.2409 34.5012 40.4803 34.2684C40.7198 34.0357 40.909 33.759 41.0369 33.4545C41.1649 33.15 41.229 32.8238 41.2256 32.495C41.2284 32.1668 41.1637 31.8414 41.0354 31.5378C40.907 31.2342 40.7176 30.9584 40.4782 30.7266C40.2388 30.4948 39.9541 30.3115 39.6409 30.1877C39.3276 30.0638 38.9921 30.0017 38.6538 30.005ZM21.9038 39.995C24.0221 39.995 25.7692 41.69 25.7692 43.745C25.7692 45.8025 24.0221 47.495 21.9038 47.495C20.8799 47.4898 19.8993 47.0931 19.1747 46.3912C18.4502 45.6892 18.0401 44.7384 18.0333 43.745C18.0333 41.69 19.7856 39.995 21.9038 39.995ZM21.9038 42.495C21.1772 42.495 20.6154 43.04 20.6154 43.745C20.6154 44.45 21.1772 44.995 21.9038 44.995C22.6305 44.995 23.1923 44.45 23.1923 43.745C23.1923 43.04 22.6305 42.495 21.9038 42.495ZM32.2115 44.995C32.5533 44.995 32.881 45.1267 33.1226 45.3611C33.3643 45.5955 33.5 45.9135 33.5 46.245C33.5 46.5765 33.3643 46.8945 33.1226 47.1289C32.881 47.3633 32.5533 47.495 32.2115 47.495C31.8698 47.495 31.5421 47.3633 31.3005 47.1289C31.0588 46.8945 30.9231 46.5765 30.9231 46.245C30.9231 45.9135 31.0588 45.5955 31.3005 45.3611C31.5421 45.1267 31.8698 44.995 32.2115 44.995ZM38.6538 44.995H46.3846V47.495H38.6538V44.995Z" fill="" />
            </svg>
            <span class="text-sm sm:text-sm text-white font-montserrat">@ugc.withceline</span>
          </a>
          <a href="https://www.tiktok.com/@ugc.withceline" target="_blank" class="flex items-center gap-2">
            <svg class="w-7 h-7 sm:w-8 sm:h-8" width="66" height="64" viewBox="0 0 66 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M33 0C24.2479 0 15.8542 3.37142 9.66548 9.37258C3.47678 15.3737 0 23.5131 0 32C0 40.4869 3.47678 48.6263 9.66548 54.6274C15.8542 60.6286 24.2479 64 33 64C41.7521 64 50.1458 60.6286 56.3345 54.6274C62.5232 48.6263 66 40.4869 66 32C66 23.5131 62.5232 15.3737 56.3345 9.37258C50.1458 3.37142 41.7521 0 33 0ZM32.9876 15.992V15.996C37.9768 15.996 42.0358 19.85 42.2338 24.64C42.2807 24.7587 42.3038 24.8849 42.3019 25.012C42.3019 28.312 40.7632 31.168 38.9606 33.812C37.1601 36.456 35.0707 38.94 33.7322 41.468C33.6444 41.6329 33.511 41.7708 33.3469 41.8664C33.1828 41.9619 32.9946 42.0113 32.8032 42.009C32.6119 42.0067 32.425 41.9529 32.2634 41.8534C32.1018 41.754 31.9719 41.6129 31.8883 41.446C30.6137 38.914 28.6275 36.434 26.9136 33.79C25.2533 31.228 23.8425 28.47 23.7559 25.312C23.7216 25.2086 23.7049 25.1006 23.7064 24.992C23.7064 20.032 27.8726 15.992 32.9876 15.992ZM32.9876 17.992C31.1023 17.9896 29.2913 18.7049 27.9443 19.9841C26.5974 21.2633 25.8221 23.0041 25.7854 24.832C25.7965 24.8914 25.802 24.9516 25.8019 25.012C25.8019 27.72 27.0249 30.2 28.6605 32.726C30.0073 34.802 31.5212 36.946 32.835 39.172C34.2189 36.938 35.8236 34.792 37.2426 32.712C38.9194 30.248 40.1651 27.826 40.227 25.212C40.2118 25.1396 40.2048 25.0658 40.2064 24.992C40.2064 21.114 36.9889 17.992 32.9876 17.992ZM32.9876 21.996C34.6851 21.996 36.0814 23.352 36.0814 24.996C36.0814 26.642 34.6851 27.996 32.9876 27.996C31.2923 27.996 29.8939 26.642 29.8939 24.996C29.8939 23.352 31.2923 21.996 32.9876 21.996ZM32.9876 23.996C32.406 23.996 31.9564 24.432 31.9564 24.996C31.9564 25.56 32.406 25.996 32.9876 25.996C33.5693 25.996 34.0189 25.56 34.0189 24.996C34.0189 24.432 33.5693 23.996 32.9876 23.996ZM41.4232 34.454C41.5611 34.4524 41.6978 34.4775 41.8254 34.528C44.1664 35.448 45.8886 36.688 46.794 38.234C47.6974 39.778 47.6231 41.67 46.5032 43.222C44.2633 46.33 38.9957 47.98 33.1217 48.004C27.2477 48.028 21.9285 46.418 19.5938 43.348C18.4264 41.814 18.2779 39.928 19.1338 38.368C19.9898 36.806 21.6727 35.542 23.9848 34.602C24.11 34.5493 24.2447 34.5212 24.3812 34.5194C24.5177 34.5176 24.6531 34.542 24.7798 34.5914C24.9064 34.6407 25.0217 34.7139 25.119 34.8068C25.2162 34.8996 25.2935 35.0103 25.3463 35.1323C25.3991 35.2543 25.4265 35.3853 25.4267 35.5176C25.4269 35.65 25.4 35.781 25.3477 35.9032C25.2953 36.0254 25.2184 36.1363 25.1214 36.2295C25.0245 36.3227 24.9095 36.3963 24.783 36.446C22.7597 37.268 21.4871 38.336 20.955 39.306C20.4249 40.274 20.4641 41.122 21.2541 42.16C22.8339 44.238 27.6684 46.026 33.1093 46.004C38.5502 45.982 43.3187 44.15 44.8119 42.078C45.5586 41.042 45.5709 40.198 44.9996 39.222C44.4304 38.248 43.1083 37.194 41.052 36.386C40.828 36.3015 40.6415 36.1439 40.5247 35.9403C40.4078 35.7367 40.368 35.4999 40.412 35.2708C40.456 35.0417 40.5811 34.8348 40.7658 34.6856C40.9504 34.5365 41.183 34.4546 41.4232 34.454Z" fill="" stroke="#fff" />
            </svg>
            <span class="text-sm sm:text-sm text-white font-montserrat">Melbourne, Australia</span>
          </a>
          <a href="mailto:ugcwithcelinee@gmail.com" class="flex items-center gap-2">
            <svg class="w-7 h-7 sm:w-8 sm:h-8" width="67" height="65" viewBox="0 0 67 65" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M33.5 0C24.6152 0 16.0944 3.4241 9.81192 9.51903C3.52945 15.614 0 23.8805 0 32.5C0 41.1195 3.52945 49.386 9.81192 55.481C16.0944 61.5759 24.6152 65 33.5 65C42.3848 65 50.9056 61.5759 57.1881 55.481C63.4705 49.386 67 41.1195 67 32.5C67 23.8805 63.4705 15.614 57.1881 9.51903C50.9056 3.4241 42.3848 0 33.5 0ZM14.4849 20V20.01L14.5364 20.05H52.8166C52.9863 20.0493 53.1544 20.0812 53.3113 20.1437C53.4682 20.2062 53.6108 20.2982 53.731 20.4143C53.8512 20.5305 53.9466 20.6685 54.0117 20.8205C54.0767 20.9725 54.1102 21.1354 54.1102 21.3V43.75C54.1102 43.9146 54.0767 44.0775 54.0117 44.2295C53.9466 44.3815 53.8512 44.5195 53.731 44.6357C53.6108 44.7518 53.4682 44.8438 53.3113 44.9063C53.1544 44.9688 52.9863 45.0007 52.8166 45H14.2427C13.9009 45 13.5732 44.8683 13.3316 44.6339C13.0899 44.3995 12.9542 44.0815 12.9542 43.75V22.0125L12.8846 21.9575L12.9542 21.87V21.29C12.9542 20.9585 13.0899 20.6405 13.3316 20.4061C13.5732 20.1717 13.9009 20.04 14.2427 20.04H14.454L14.4849 20ZM17.7859 22.54L33.5515 34.6575L49.294 22.54H17.7859ZM15.526 23.995V42.5H51.5282V24.005L34.3504 37.2375C34.1229 37.4119 33.8415 37.5067 33.5515 37.5067C33.2616 37.5067 32.9802 37.4119 32.7527 37.2375L15.526 23.995Z" fill="" stroke="#fff" />
            </svg>
            <span class="text-xs sm:text-sm text-white font-montserrat">ugcwithcelinee@gmail.com</span>
          </a>
        </div>
      </div>
    </div>

    <div class="hidden lg:flex justify-center py-16">
      <div class="absolute top-0 left-0 w-11/12 h-[43%] xl:rounded-r-lg bg-white rounded-r-lg"></div>
      <div class="absolute bottom-28 right-0 w-4/5 h-1/3 xl:rounded-r-lg bg-white rounded-l-lg"></div>

      <div class="flex justify-center w-1/4 2xl:1/5 z-10">
        <div class="relative w-4/5 2xl:w-3/4">
          <img src="/images/celine-4.webp" alt="Celine in phone" class="w-full h-full object-cover z-0 p-[2%] rounded-[10%]" />
          <img src="/images/phone-frame.png" alt="Phone Frame" class="absolute top-0 left-0 w-full h-full z-10 pointer-events-none" />
        </div>
      </div>

      <div class="relative w-1/2 xl:w-1/3 2xl:w-1/5 z-10">
        <div class="text-center font-anton text-7xl xl:text-7-5 leading-20 tracking-widest">
          <h1 class="mr-20">GET IN</h1>
          <h1 class="ml-20 text-[#C484B5]">TOUCH!</h1>
        </div>
    
        <div class="w-full absolute bottom-0 flex justify-center my-10">
          <div class="flex flex-col gap-4">
            <a href="mailto:ugcwithcelinee@gmail.com" class="flex items-center gap-2">
              <svg class="w-10 h-10" width="67" height="65" viewBox="0 0 67 65" fill="#3A2C34" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.5 0C24.6152 0 16.0944 3.4241 9.81192 9.51903C3.52945 15.614 0 23.8805 0 32.5C0 41.1195 3.52945 49.386 9.81192 55.481C16.0944 61.5759 24.6152 65 33.5 65C42.3848 65 50.9056 61.5759 57.1881 55.481C63.4705 49.386 67 41.1195 67 32.5C67 23.8805 63.4705 15.614 57.1881 9.51903C50.9056 3.4241 42.3848 0 33.5 0ZM14.4849 20V20.01L14.5364 20.05H52.8166C52.9863 20.0493 53.1544 20.0812 53.3113 20.1437C53.4682 20.2062 53.6108 20.2982 53.731 20.4143C53.8512 20.5305 53.9466 20.6685 54.0117 20.8205C54.0767 20.9725 54.1102 21.1354 54.1102 21.3V43.75C54.1102 43.9146 54.0767 44.0775 54.0117 44.2295C53.9466 44.3815 53.8512 44.5195 53.731 44.6357C53.6108 44.7518 53.4682 44.8438 53.3113 44.9063C53.1544 44.9688 52.9863 45.0007 52.8166 45H14.2427C13.9009 45 13.5732 44.8683 13.3316 44.6339C13.0899 44.3995 12.9542 44.0815 12.9542 43.75V22.0125L12.8846 21.9575L12.9542 21.87V21.29C12.9542 20.9585 13.0899 20.6405 13.3316 20.4061C13.5732 20.1717 13.9009 20.04 14.2427 20.04H14.454L14.4849 20ZM17.7859 22.54L33.5515 34.6575L49.294 22.54H17.7859ZM15.526 23.995V42.5H51.5282V24.005L34.3504 37.2375C34.1229 37.4119 33.8415 37.5067 33.5515 37.5067C33.2616 37.5067 32.9802 37.4119 32.7527 37.2375L15.526 23.995Z" fill="" stroke="#fff" />
              </svg>
              <span class="ml-1 text-2xl text-[#3A2C34] font-montserrat tracking-wide">ugcwithcelinee@gmail.com</span>
            </a>
            <a href="https://www.instagram.com/ugc.withceline/" target="_blank" class="flex items-center gap-2">
              <svg class="w-10 h-10" width="67" height="65" viewBox="0 0 67 65" fill="#3A2C34" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" stroke="#FFF" clip-rule="evenodd" d="M33.5 0C24.6152 0 16.0944 3.4241 9.81192 9.51903C3.52945 15.614 0 23.8805 0 32.5C0 41.1195 3.52945 49.386 9.81192 55.481C16.0944 61.5759 24.6152 65 33.5 65C42.3848 65 50.9056 61.5759 57.1881 55.481C63.4705 49.386 67 41.1195 67 32.5C67 23.8805 63.4705 15.614 57.1881 9.51903C50.9056 3.4241 42.3848 0 33.5 0ZM29.6346 12.495H45.0962C45.4379 12.495 45.7656 12.6267 46.0072 12.8611C46.2489 13.0955 46.3846 13.4135 46.3846 13.745V17.495H47.8638C49.5208 17.4983 51.1089 18.1384 52.2806 19.275C53.4522 20.4117 54.112 21.9525 54.1154 23.56V46.43C54.1154 49.77 51.3065 52.505 47.8638 52.505H19.1362C17.4783 52.4991 15.8902 51.8568 14.7188 50.7185C13.5474 49.5802 12.888 48.0384 12.8846 46.43V23.56C12.888 21.9525 13.5478 20.4117 14.7194 19.275C15.8911 18.1384 17.4792 17.4983 19.1362 17.495H28.3462V13.745C28.3462 13.4135 28.4819 13.0955 28.7235 12.8611C28.9652 12.6267 29.2929 12.495 29.6346 12.495ZM30.9231 14.995V17.495H43.8077V14.995H30.9231ZM19.1362 19.995C17.0773 19.995 15.4615 21.5625 15.4615 23.56V46.43C15.4615 48.4275 17.0773 49.995 19.1362 49.995H47.8638C49.9227 49.995 51.5385 48.4275 51.5385 46.43V23.56C51.5385 21.5625 49.9227 19.995 47.8638 19.995H19.1362ZM38.6538 22.495C44.3308 22.495 48.9615 26.9875 48.9615 32.495C48.9615 38.0025 44.3308 42.495 38.6538 42.495C32.9769 42.495 28.3462 38.0025 28.3462 32.495C28.3462 26.9875 32.9769 22.495 38.6538 22.495ZM19.3269 24.995H24.4808C24.8225 24.995 25.1502 25.1267 25.3919 25.3611C25.6335 25.5955 25.7692 25.9135 25.7692 26.245V36.245C25.7692 36.5765 25.6335 36.8945 25.3919 37.1289C25.1502 37.3633 24.8225 37.495 24.4808 37.495H19.3269C18.9861 37.4937 18.6597 37.3614 18.4192 37.1271C18.1787 36.8928 18.0436 36.5757 18.0436 36.245V26.245C18.0436 25.9143 18.1787 25.5972 18.4192 25.3629C18.6597 25.1286 18.9861 24.9963 19.3269 24.995ZM38.6538 24.995C34.3684 24.995 30.9231 28.3375 30.9231 32.495C30.9231 36.6525 34.3684 39.995 38.6538 39.995C42.9393 39.995 46.3846 36.6525 46.3846 32.495C46.3846 28.3375 42.9393 24.995 38.6538 24.995ZM20.6154 27.495V34.995H23.1923V27.495H20.6154ZM38.6538 27.495C41.4859 27.495 43.8077 29.7475 43.8077 32.495C43.8077 35.2425 41.4859 37.495 38.6538 37.495C35.8218 37.495 33.5 35.2425 33.5 32.495C33.5 29.7475 35.8218 27.495 38.6538 27.495ZM38.6538 30.005C38.3154 30.0017 37.9796 30.0637 37.666 30.1876C37.3525 30.3114 37.0676 30.4945 36.8277 30.7263C36.5879 30.958 36.398 31.2338 36.2691 31.5374C36.1402 31.8411 36.0749 32.1666 36.0769 32.495C36.0769 33.89 37.2159 34.995 38.6538 34.995C38.9928 34.9977 39.3289 34.9348 39.6425 34.81C39.9561 34.6853 40.2409 34.5012 40.4803 34.2684C40.7198 34.0357 40.909 33.759 41.0369 33.4545C41.1649 33.15 41.229 32.8238 41.2256 32.495C41.2284 32.1668 41.1637 31.8414 41.0354 31.5378C40.907 31.2342 40.7176 30.9584 40.4782 30.7266C40.2388 30.4948 39.9541 30.3115 39.6409 30.1877C39.3276 30.0638 38.9921 30.0017 38.6538 30.005ZM21.9038 39.995C24.0221 39.995 25.7692 41.69 25.7692 43.745C25.7692 45.8025 24.0221 47.495 21.9038 47.495C20.8799 47.4898 19.8993 47.0931 19.1747 46.3912C18.4502 45.6892 18.0401 44.7384 18.0333 43.745C18.0333 41.69 19.7856 39.995 21.9038 39.995ZM21.9038 42.495C21.1772 42.495 20.6154 43.04 20.6154 43.745C20.6154 44.45 21.1772 44.995 21.9038 44.995C22.6305 44.995 23.1923 44.45 23.1923 43.745C23.1923 43.04 22.6305 42.495 21.9038 42.495ZM32.2115 44.995C32.5533 44.995 32.881 45.1267 33.1226 45.3611C33.3643 45.5955 33.5 45.9135 33.5 46.245C33.5 46.5765 33.3643 46.8945 33.1226 47.1289C32.881 47.3633 32.5533 47.495 32.2115 47.495C31.8698 47.495 31.5421 47.3633 31.3005 47.1289C31.0588 46.8945 30.9231 46.5765 30.9231 46.245C30.9231 45.9135 31.0588 45.5955 31.3005 45.3611C31.5421 45.1267 31.8698 44.995 32.2115 44.995ZM38.6538 44.995H46.3846V47.495H38.6538V44.995Z" fill="" />
              </svg>
              <span class="ml-1 text-2xl text-[#3A2C34] font-montserrat tracking-wide">@ugc.withceline</span>
            </a>
            <a href="https://www.tiktok.com/@ugc.withceline" target="_blank" class="flex items-center gap-2">
              <svg class="w-10 h-10" width="66" height="64" viewBox="0 0 66 64" fill="#3A2C34" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M33 0C24.2479 0 15.8542 3.37142 9.66548 9.37258C3.47678 15.3737 0 23.5131 0 32C0 40.4869 3.47678 48.6263 9.66548 54.6274C15.8542 60.6286 24.2479 64 33 64C41.7521 64 50.1458 60.6286 56.3345 54.6274C62.5232 48.6263 66 40.4869 66 32C66 23.5131 62.5232 15.3737 56.3345 9.37258C50.1458 3.37142 41.7521 0 33 0ZM32.9876 15.992V15.996C37.9768 15.996 42.0358 19.85 42.2338 24.64C42.2807 24.7587 42.3038 24.8849 42.3019 25.012C42.3019 28.312 40.7632 31.168 38.9606 33.812C37.1601 36.456 35.0707 38.94 33.7322 41.468C33.6444 41.6329 33.511 41.7708 33.3469 41.8664C33.1828 41.9619 32.9946 42.0113 32.8032 42.009C32.6119 42.0067 32.425 41.9529 32.2634 41.8534C32.1018 41.754 31.9719 41.6129 31.8883 41.446C30.6137 38.914 28.6275 36.434 26.9136 33.79C25.2533 31.228 23.8425 28.47 23.7559 25.312C23.7216 25.2086 23.7049 25.1006 23.7064 24.992C23.7064 20.032 27.8726 15.992 32.9876 15.992ZM32.9876 17.992C31.1023 17.9896 29.2913 18.7049 27.9443 19.9841C26.5974 21.2633 25.8221 23.0041 25.7854 24.832C25.7965 24.8914 25.802 24.9516 25.8019 25.012C25.8019 27.72 27.0249 30.2 28.6605 32.726C30.0073 34.802 31.5212 36.946 32.835 39.172C34.2189 36.938 35.8236 34.792 37.2426 32.712C38.9194 30.248 40.1651 27.826 40.227 25.212C40.2118 25.1396 40.2048 25.0658 40.2064 24.992C40.2064 21.114 36.9889 17.992 32.9876 17.992ZM32.9876 21.996C34.6851 21.996 36.0814 23.352 36.0814 24.996C36.0814 26.642 34.6851 27.996 32.9876 27.996C31.2923 27.996 29.8939 26.642 29.8939 24.996C29.8939 23.352 31.2923 21.996 32.9876 21.996ZM32.9876 23.996C32.406 23.996 31.9564 24.432 31.9564 24.996C31.9564 25.56 32.406 25.996 32.9876 25.996C33.5693 25.996 34.0189 25.56 34.0189 24.996C34.0189 24.432 33.5693 23.996 32.9876 23.996ZM41.4232 34.454C41.5611 34.4524 41.6978 34.4775 41.8254 34.528C44.1664 35.448 45.8886 36.688 46.794 38.234C47.6974 39.778 47.6231 41.67 46.5032 43.222C44.2633 46.33 38.9957 47.98 33.1217 48.004C27.2477 48.028 21.9285 46.418 19.5938 43.348C18.4264 41.814 18.2779 39.928 19.1338 38.368C19.9898 36.806 21.6727 35.542 23.9848 34.602C24.11 34.5493 24.2447 34.5212 24.3812 34.5194C24.5177 34.5176 24.6531 34.542 24.7798 34.5914C24.9064 34.6407 25.0217 34.7139 25.119 34.8068C25.2162 34.8996 25.2935 35.0103 25.3463 35.1323C25.3991 35.2543 25.4265 35.3853 25.4267 35.5176C25.4269 35.65 25.4 35.781 25.3477 35.9032C25.2953 36.0254 25.2184 36.1363 25.1214 36.2295C25.0245 36.3227 24.9095 36.3963 24.783 36.446C22.7597 37.268 21.4871 38.336 20.955 39.306C20.4249 40.274 20.4641 41.122 21.2541 42.16C22.8339 44.238 27.6684 46.026 33.1093 46.004C38.5502 45.982 43.3187 44.15 44.8119 42.078C45.5586 41.042 45.5709 40.198 44.9996 39.222C44.4304 38.248 43.1083 37.194 41.052 36.386C40.828 36.3015 40.6415 36.1439 40.5247 35.9403C40.4078 35.7367 40.368 35.4999 40.412 35.2708C40.456 35.0417 40.5811 34.8348 40.7658 34.6856C40.9504 34.5365 41.183 34.4546 41.4232 34.454Z" fill="" stroke="#fff" />
              </svg>
              <span class="ml-1 text-2xl text-[#3A2C34] font-montserrat tracking-wide">Melbourne, Australia</span>
            </a>
          </div>
        </div>
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

const beautyVideos = [
  { source: 'beauty-1.MOV', poster: 'beauty-1-poster.webp', name: 'brow tint' },
  { source: 'beauty-2.MOV', poster: 'beauty-2-poster.webp', name: 'makeup' },
  { source: 'beauty-3.MOV', poster: 'beauty-3-poster.webp', name: 'nails' },
]

const experienceVideos = [
  { source: 'experiences-1.MOV', poster: 'experiences-1-poster.webp', name: 'mini golf' },
  { source: 'experiences-2.mov', poster: 'experiences-2-poster.webp', name: 'escape room' },
  { source: 'experiences-3.MOV', poster: 'experiences-3-poster.webp', name: 'australian open' },
]

const healthVideos = [
  { source: 'health-1.mp4', poster: 'health-1-poster.webp', name: 'gym setup' },
  { source: 'health-2.MOV', poster: 'health-2-poster.webp', name: 'oxygen can' },
  { source: 'health-3.MP4', poster: 'health-3-poster.webp', name: 'fish oil' },
]

const otherVideos = [
  { source: 'other-1.mp4', poster: 'other-1-poster.webp', name: 'alcohol barrel' },
  { source: 'other-2.MOV', poster: 'other-2-poster.webp', name: 'magnets' },
  { source: 'other-3.MOV', poster: 'other-3-poster.webp', name: 'soap' },
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

.text-vertical-reverse {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
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