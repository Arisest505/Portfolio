<template>
  <section class="bg-[#000000ee] py-24 text-white">
    <div class="px-6 mx-auto max-w-7xl">
      <!-- Título principal -->
      <h2 class="flex items-center justify-center gap-3 mb-16 text-4xl font-bold text-center neon-title">
        <Icon icon="mdi:star-outline" class="text-[hsl(258,100%,64%)] text-3xl" />
        Proyectos destacados
      </h2>


      <!-- Tarjetas de proyectos -->
      <div class="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        <!-- Proyecto 1 -->
        <div class="group relative bg-gradient-to-br from-[#1a1a1a] via-[#2b2b2b] to-[#3b3b3b] rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:ring-2 hover:ring-[hsl(258,100%,64%)] transition-all duration-500 flex flex-col">
          <img src="/1.png" alt="Proyecto empresa" class="object-cover w-full h-48 transition duration-300 opacity-90 group-hover:opacity-60" />
          <div class="flex-grow p-6 space-y-4">
            <h3 class="text-xl font-bold text-[hsl(258,100%,64%)] flex items-center gap-2">
              <Icon icon="mdi:office-building-outline" class="text-lg text-purple-300" />
              Página Web Corporativa
            </h3>
            <div class="flex flex-wrap gap-4 text-2xl text-white">
              <Icon icon="logos:html-5" />
              <Icon icon="logos:css-3" />
              <Icon icon="logos:javascript" />
            </div>
          </div>
        </div>

        <!-- Proyecto 2 -->
        <div class="group relative bg-gradient-to-br from-[#1a1a1a] via-[#2b2b2b] to-[#3b3b3b] rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:ring-2 hover:ring-[hsl(258,100%,64%)] transition-all duration-500 flex flex-col">
          <img src="/10.png" alt="App React + Python" class="object-cover w-full h-48 transition duration-300 opacity-90 group-hover:opacity-60" />
          <div class="flex-grow p-6 space-y-4">
            <h3 class="text-xl font-bold text-[hsl(258,100%,64%)] flex items-center gap-2">
              <Icon icon="mdi:robot" class="text-lg text-purple-300" />
              Aplicación Escritorio con IA
            </h3>
            <div class="flex flex-wrap gap-4 text-2xl text-white">
              <Icon icon="logos:react" />
              <Icon icon="logos:python" />
              <Icon icon="logos:electron" />
            </div>
          </div>
        </div>

        <!-- Proyecto 3 -->
        <div class="group relative bg-gradient-to-br from-[#1a1a1a] via-[#2b2b2b] to-[#3b3b3b] rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:ring-2 hover:ring-[hsl(258,100%,64%)] transition-all duration-500 flex flex-col">
          <img src="/ee0fe765-8289-4433-bc75-2f21854bfef1.jpg" alt="Editor diseño" class="object-cover w-full h-48 transition duration-300 opacity-90 group-hover:opacity-60" />
          <div class="flex-grow p-6 space-y-4">
            <h3 class="text-xl font-bold text-[hsl(258,100%,64%)] flex items-center gap-2">
              <Icon icon="mdi:palette-outline" class="text-lg text-purple-300" />
              Editor de Diseño en Tiempo Real
            </h3>
            <div class="flex flex-wrap gap-4 text-2xl text-white">
              <Icon icon="logos:nextjs-icon" />
              <Icon icon="logos:typescript-icon" />
              <Icon icon="logos:javascript" />
              <Icon icon="logos:react" />
            </div>
          </div>
        </div>
      </div>

      <!-- Botón Ver más centrado -->
        <div class="flex justify-center mt-12">
            <button
              @click="goToProjects"
              class="flex items-center gap-2 px-6 py-3 text-base font-semibold text-purple-400 transition border border-purple-500 rounded-full hover:bg-purple-700 hover:text-white hover:scale-105"
            >
              Ver más detalle
              <Icon icon="mdi:arrow-right-thin" />
            </button>
          </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { Icon } from '@iconify/vue'

const router = useRouter()

const goToProjects = () => {
  router.push('/project')
}
</script>

<style scoped>
.neon-title {
  font-family: 'Orbitron', sans-serif;
  background: linear-gradient(to right, hsl(258, 100%, 64%), #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 0.05em;
}
</style>
