<template>
  <div
    class="relative overflow-hidden transition-all duration-500 border shadow-lg cursor-pointer rounded-xl border-purple-500/20 group"
    @click="toggleExpand"
    :class="{ 'h-[460px]': expanded, 'h-[280px]': !expanded }"
  >
    <!-- Imagen de fondo -->
    <img
      :src="experience.image"
      alt="Fondo experiencia"
      class="absolute inset-0 object-cover w-full h-full transition-all duration-500 ease-in-out scale-105"
      :class="expanded ? 'blur-0 opacity-100' : 'blur-md opacity-80'"
    />

    <!-- Capa overlay para visibilidad del título -->
    <div
      class="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-black/20 to-black/60"
    ></div>

    <!-- Título centrado -->
    <div class="absolute z-20 top-6 left-1/2 -translate-x-1/2 w-[85%] bg-white text-black text-lg md:text-xl font-semibold text-center px-4 py-3 rounded-md shadow-md">
      {{ experience.title }}
    </div>

    <!-- Detalle inferior -->
    <div class="absolute bottom-0 left-0 z-30 w-full px-6 py-4 text-white bg-black/70 backdrop-blur-md">
      <div class="text-sm font-medium">
        {{ experience.company }} — {{ experience.year }}
      </div>

      <!-- Detalle expandido -->
      <transition name="fade">
        <div v-if="expanded" class="mt-3 text-sm leading-relaxed text-white/80">
          <p class="mb-2">{{ experience.description }}</p>
          <div class="flex flex-wrap gap-2 mt-2">
            <div
              v-for="(tech, i) in experience.technologies"
              :key="i"
              class="flex items-center gap-2 px-3 py-1 text-xs text-purple-200 border rounded-full bg-white/10 border-purple-400/30"
            >
              <Icon :icon="tech.icon" class="text-sm" />
              {{ tech.name }}
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const props = defineProps({
  experience: Object
})

const expanded = ref(false)
const toggleExpand = () => {
  expanded.value = !expanded.value
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
