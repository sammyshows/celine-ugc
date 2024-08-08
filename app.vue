<template>
  <div class="w-full h-full relative overflow-x-hidden">
    <NuxtPage />
  </div>
</template>

<script setup>
useHead({
  title: 'UGC with Celine',
  meta: [
    { name: 'description', content: 'Melbourne-based UGC creator that brings brands to life with authentic, captivating content.' },
    { property: 'og:title', content: 'UGC with Celine' },
    { property: 'og:description', content: 'Melbourne-based UGC creator that brings brands to life with authentic, captivating content.' },
    { property: 'og:image', content: 'https://ugcwithceline.com/images/polaroid-collage.webp' },
    { property: 'og:url', content: 'https://www.ugcwithceline.com' },
    { property: 'og:type', content: 'website' }
  ]
});
</script>
