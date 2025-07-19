<template>
  <div class="fixed z-50 -translate-x-1/2 bottom-12 left-1/2">
    <div class="relative flex items-center justify-center w-24 h-24">
      <!-- Botones secundarios con forma de W -->
      <transition-group name="drip" tag="div">
        <button
          v-if="menuOpen"
          v-for="(item, index) in navItems"
          :key="item.name"
          @click="navigate(item.to)"
          :style="getWStyle(index)"
          class="absolute flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg drip-btn"
        >
          <component :is="item.icon" class="w-5 h-5 text-black" />
        </button>
      </transition-group>

      <!-- Botón central con burbuja mejorada -->
      <div class="loader">
        <button
          @click="toggleMenu"
          class="drip-main"
          :class="{ 'rotate-45': menuOpen }"
        >
          <span class="text-2xl font-bold">+</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { HomeIcon, FolderOpenIcon, BriefcaseIcon } from 'lucide-vue-next'

const router = useRouter()
const menuOpen = ref(false)

const navItems = [
  { name: 'Home', to: '/', icon: HomeIcon },
  { name: 'Projects', to: '/project', icon: FolderOpenIcon }, // ← aquí importante
  { name: 'Experience', to: '/experience', icon: BriefcaseIcon },
]


const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

// Distribución en forma de W
const getWStyle = (index) => {
  const positions = [
    { x: 10, y: -115 },     // arriba
    { x: -70, y: -40 },   // izquierda
    { x: 100, y: -40 }     // derecha
  ]
  const { x, y } = positions[index]
  return {
    transform: `translate(${x}px, ${y}px)`,
    transitionDelay: `${index * 0.05}s`,
  }
}

const navigate = (to) => {
  router.push(to)
  menuOpen.value = false
}
</script>

<style scoped>
/* Entrada/Salida secundaria */
.drip-enter-active,
.drip-leave-active {
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease;
}
.drip-enter-from {
  opacity: 0;
  transform: scale(0.2) translateY(20px);
}
.drip-enter-to {
  opacity: 1;
  transform: scale(1) translateY(0);
}
.drip-leave-to {
  opacity: 0;
  transform: scale(0.2) translateY(20px);
}

/* Hover secundarios */
.drip-btn {
  transition: background 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
.drip-btn:hover {
  background: #9333ea;
  color: white;
  transform: scale(1.1);
  box-shadow: 0 6px 18px rgb(146, 51, 234);
}

/* Animación de burbuja contínua para botón central */
.loader {
  display: block;
  width: 77px;
  height:74px;
  position: relative;
}

.loader::before,
.loader::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background: #ffffff;
  transform: translate(-50%, -100%) scale(0);
  animation: push_401 2s infinite linear;
  z-index: 1;
}

.loader::after {
  animation-delay: 1s;
  background: rgb(255, 255, 255);

}

@keyframes push_401 {
  0%, 50% {
    transform: translate(-50%, 0%) scale(1);
  }
  100% {
    transform: translate(-50%, -100%) scale(0);
  }
}

/* Estilo base botón central */
.drip-main {
  width: 75px;
  height: 75px;
  background: white;
  color: black;
  display: block;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  transition: transform 0.3s ease, background 0.3s ease;
  box-shadow: 0px 0px 20px rgb(0, 0, 0);
  z-index: 10;
  position: relative;
}

.drip-main:hover {
  background: #9333ea;
  color: white;
  transform: scale(1.1);
  box-shadow: 0 0px 35px rgba(82, 0, 189, 0.5);
}
</style>
