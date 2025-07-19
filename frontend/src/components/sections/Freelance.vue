<template>
  <section class="bg-[#000000ee] py-24 text-white">
    <div class="max-w-4xl px-6 mx-auto">
<h2 class="flex items-center justify-center gap-3 mb-16 text-4xl font-bold text-center neon-title">
  <Icon icon="mdi:account-cog-outline" class="text-[hsl(258,100%,64%)] text-3xl" />
  Servicios Freelance
</h2>


      <div class="relative border-l-4 border-[hsl(258,100%,64%)] pl-12 space-y-12">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="relative group"
        >
          <!-- Punto -->
          <span
            class="absolute left-0 top-1 w-5 h-5 rounded-full bg-[hsl(258,100%,64%)] shadow-[0_0_10px_hsl(258,100%,64%)] z-10"
          ></span>

          <!-- Card -->
          <div
            class="ml-4 bg-gradient-to-br from-[#1a1a1a] via-[#292929] to-[#3b3b3b] rounded-xl p-6 shadow-lg border border-gray-700 hover:ring-2 hover:ring-[hsl(258,100%,64%)] transition-all duration-500 transform hover:scale-[1.02] hover:bg-opacity-80"
          >
            <div class="flex items-center gap-4">
              <Icon :icon="service.icon" class="text-3xl text-[hsl(258,100%,64%)] drop-shadow" />
              <h3 class="text-xl font-semibold tracking-wide">{{ service.title }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue'

const services = [
  {
    icon: 'material-symbols:design-services-rounded',
    title: 'Diseño de interfaces web personalizadas'
  },
  {
    icon: 'mdi:react',
    title: 'Desarrollo en React o Vue.js'
  },
  {
    icon: 'mdi:language-html5',
    title: 'Maquetación web moderna con HTML, CSS, Tailwind'
  },

  {
    icon: 'mdi:database-outline',
    title: 'Modelado y gestión de bases de datos SQL y NoSQL'
  },
  {
    icon: 'mdi:application-cog-outline',
    title: 'Aplicaciones completas con autenticación, paneles y roles'
  }
]
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
