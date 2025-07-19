<template>
  <section class="bg-[#000000ee] py-24 text-white">
    <div class="px-6 mx-auto max-w-7xl">
      <!-- Título principal con ícono -->
      <h2 class="flex items-center justify-center gap-3 mb-16 text-4xl font-bold text-center neon-title">
        <Icon icon="ph:lightning-bold" class="text-[hsl(258,100%,64%)] text-4xl drop-shadow" />
        Tecnologías que utilizo
      </h2>

      <div class="grid grid-cols-1 gap-16 md:grid-cols-3">
        <!-- Frontend -->
        <div>
          <h3 class="flex items-center justify-center gap-2 mb-6 text-xl text-center section-heading">
            <Icon icon="mdi:monitor-cellphone" class="text-[hsl(258,100%,64%)] text-xl" />
            Frontend
          </h3>
          <div class="grid grid-cols-3 gap-6 justify-items-center">
            <TechItem icon="logos:html-5" label="HTML5" />
            <TechItem icon="logos:css-3" label="CSS3" />
            <TechItem icon="logos:javascript" label="JavaScript" />
            <TechItem icon="logos:typescript-icon" label="TypeScript" />
            <TechItem icon="logos:vue" label="Vue.js" />
            <TechItem icon="logos:react" label="React" />
            <TechItem icon="logos:nextjs-icon" label="Next.js" />
            <TechItem icon="logos:tailwindcss-icon" label="Tailwind CSS" />
            <TechItem icon="logos:electron" label="Electron" />
          </div>
        </div>

        <!-- Backend -->
        <div>
          <h3 class="flex items-center justify-center gap-2 mb-6 text-xl text-center section-heading">
            <Icon icon="carbon:server-process" class="text-[hsl(258,100%,64%)] text-xl" />
            Backend
          </h3>
          <div class="grid grid-cols-3 gap-6 justify-items-center">
            <TechItem icon="logos:php" label="PHP" />
            <TechItem icon="logos:laravel" label="Laravel" />
            <TechItem icon="logos:nodejs-icon" label="Node.js" />
            <TechItem icon="logos:express" label="Express.js" />
            <TechItem icon="logos:mysql" label="MySQL" />
            <TechItem icon="logos:postgresql" label="PostgreSQL" />
            <TechItem icon="logos:python" label="Python" />
          </div>
        </div>

        <!-- Herramientas y Control de versiones -->
        <div>
          <h3 class="flex items-center justify-center gap-2 mb-6 text-xl text-center section-heading">
            <Icon icon="mdi:tools" class="text-[hsl(258,100%,64%)] text-xl" />
            Herramientas y Versionado
          </h3>
          <div class="grid grid-cols-3 gap-6 justify-items-center">
            <TechItem icon="logos:git-icon" label="Git" />
            <TechItem icon="logos:github-icon" label="GitHub" />
            <TechItem icon="logos:vercel-icon" label="Vercel" />
            <TechItem icon="logos:visual-studio-code" label="VS Code" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { Icon } from '@iconify/vue'
import TechItem from '../TechItem.vue'
</script>

<style scoped>
.neon-title {
  background: linear-gradient(to right, hsl(258, 100%, 64%), #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Orbitron', sans-serif;
  text-shadow: 0 0 10px rgba(147, 51, 234, 0.3);
}

.section-heading {
  font-family: 'Orbitron', sans-serif;
  color: hsl(258, 100%, 64%);
  letter-spacing: 0.05em;
  border-bottom: 1px solid hsl(258, 100%, 64%);
  padding-bottom: 0.5rem;
  text-transform: uppercase;
}
</style>
