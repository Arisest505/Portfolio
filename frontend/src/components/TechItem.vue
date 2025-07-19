<template>
  <div
    class="relative flex items-center justify-center w-24 h-24 transition-all duration-500 bg-gradient-to-br from-[#a7a6a6] via-[#ffffff] to-[#646363] shadow-xl rounded-xl group hover:backdrop-blur-sm hover:bg-opacity-60 hover:ring-2 hover:ring-[hsl(258,100%,64%)] hover:scale-105"
  >
    <Icon
      :icon="icon"
      class="text-5xl text-white transition duration-300 group-hover:opacity-10 drop-shadow-[0_0_6px_rgba(147,51,234,0.6)]"
    />
    <span
      class="absolute text-xl font-bold text-[hsl(0,0%,0%)] transition-opacity duration-500 opacity-0 group-hover:opacity-100"
    >
      {{ label }}
    </span>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'

defineProps({
  icon: String,
  label: String
})
</script>

<style scoped>
div {
  font-family: 'Orbitron', sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.1);
}
</style>
