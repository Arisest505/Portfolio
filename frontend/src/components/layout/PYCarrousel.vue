<template>
  <div class="relative w-full h-screen overflow-hidden text-white bg-black font-orbitron">

    <!-- Indicadores visuales de dirección -->
    <div class="absolute z-30 transform -translate-y-1/2 pointer-events-none left-4 top-1/2">
      <Icon
        v-if="currentIndex > 0"
        icon="mdi:chevron-left"
        class="text-4xl text-purple-500 animate-pulse drop-shadow-[0_0_6px_rgba(168,85,247,0.4)]"
      />
    </div>
    <div class="absolute z-30 transform -translate-y-1/2 pointer-events-none right-4 top-1/2">
      <Icon
        v-if="currentIndex < projects.length - 1"
        icon="mdi:chevron-right"
        class="text-4xl text-purple-500 animate-pulse drop-shadow-[0_0_6px_rgba(168,85,247,0.4)]"
      />
    </div>

    <!-- Swiper -->
    <swiper
      ref="swiperRef"
      :slides-per-view="1"
      :space-between="10"
      :speed="500"
      :allow-touch-move="true"
      @slideChange="onSlideChange"
      class="h-full"
    >
      <swiper-slide
        v-for="(project, index) in projects"
        :key="index"
        class="relative transition-all duration-300 ease-in-out"
      >
        <!-- Fondo de proyecto -->
        <img
          :src="project.image"
          alt="Proyecto"
          class="absolute inset-0 object-cover w-full h-full opacity-90 transition-transform duration-500 scale-[1.02] hover:scale-105"
        />

        <!-- Filtro oscuro -->
        <div class="absolute inset-0 z-10 bg-black bg-opacity-60 backdrop-blur-sm"></div>

        <!-- Contenido principal -->
        <div class="relative z-20 flex flex-col justify-end h-full">

          <!-- Panel inferior dinámico -->
          <transition name="panel-slide">
            <div
              v-show="true"
              class="relative px-6 py-4 transition-all duration-500 ease-in-out panel-glass"
              :class="{
                'h-[14%]': activeIndex !== index,
                'h-[40%]': activeIndex === index
              }"
            >
              <div class="flex items-center justify-between">
               <!-- Título + tecnologías -->
                <div class="space-y-3">
                  <!-- Título con ícono destacado -->
                  <div class="flex items-center gap-3">
                    <div class="flex items-center justify-center border rounded-lg shadow-md w-11 h-11 bg-white/10 border-purple-500/30">
                      <Icon :icon="project.icon" class="text-2xl text-purple-400" />
                    </div>
                    <h2 class="project-title text-[1.5rem] md:text-[1.9rem] font-bold tracking-wide text-purple-300 drop-shadow-sm">
                      {{ project.title }}
                    </h2>
                  </div>

                  <!-- Tecnologías usadas -->
                  <div class="flex flex-wrap items-center gap-4 mt-1">
                    <div
                      v-for="(tech, i) in project.technologies"
                      :key="i"
                      class="flex items-center justify-center w-12 h-12 transition border rounded-lg shadow-sm bg-white/5 border-purple-400/20 hover:shadow-lg hover:border-purple-400 tech-icon-card"
                    >
                      <Icon :icon="tech" class="text-2xl text-purple-300" />
                    </div>
                  </div>
                </div>



                <!-- Botón toggle -->
                <button
                  class="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition bg-purple-600 rounded-full shadow-md hover:bg-purple-700"
                  @click="togglePanel(index)"
                >
                  <Icon
                    :icon="activeIndex === index ? 'mdi:chevron-down' : 'mdi:chevron-up'"
                    class="text-xl"
                  />
                  {{ activeIndex === index ? 'Cerrar' : 'Ver más' }}
                </button>
              </div>

              <!-- Detalles extendidos -->
              <transition name="fade-in">
               <div
                  v-if="activeIndex === index"
                  class="flex flex-col gap-4 mt-6 text-base transition-all duration-500 text-white/90"
                >
                  <!-- Descripción -->
                  <p class="text-gray-300 leading-relaxed text-[15px] md:text-[16px]">
                    {{ project.description }}
                  </p>

                  <!-- Línea divisora -->
                  <div class="h-[1px] w-full bg-gradient-to-r from-purple-400/30 via-white/10 to-purple-400/30" />

                  <!-- Metadatos visuales -->
                  <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <!-- Duración -->
                    <div
                      class="flex items-center gap-3 px-4 py-3 transition border rounded-lg shadow-inner bg-white/5 backdrop-blur-md border-purple-500/30 hover:shadow-lg"
                    >
                      <Icon :icon="project.durationIcon" class="text-xl text-purple-400" />
                      <div>
                        <p class="text-sm font-semibold text-white/90">Duración</p>
                        <p class="text-xs text-gray-300">{{ project.duration }}</p>
                      </div>
                    </div>

                    <!-- Equipo -->
                    <div
                      class="flex items-center gap-3 px-4 py-3 transition border rounded-lg shadow-inner bg-white/5 backdrop-blur-md border-purple-500/30 hover:shadow-lg"
                    >
                      <Icon :icon="project.teamIcon" class="text-xl text-purple-400" />
                      <div>
                        <p class="text-sm font-semibold text-white/90">Equipo</p>
                        <p class="text-xs text-gray-300">{{ project.team }}</p>
                      </div>
                    </div>

                    <!-- Repositorio -->
                    <div
                      class="flex items-center gap-3 px-4 py-3 transition border rounded-lg shadow-inner bg-white/5 backdrop-blur-md border-purple-500/30 hover:shadow-lg"
                    >
                      <Icon icon="mdi:github" class="text-xl text-purple-400" />
                      <div>
                        <p class="text-sm font-semibold text-white/90">Repositorio</p>
                        <a
                          href="#"
                          class="text-xs text-purple-300 underline transition hover:text-purple-400"
                        >
                          Ver en GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              </transition>
            </div>
          </transition>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>


<script setup>
import { ref, nextTick } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { Icon } from '@iconify/vue'

const activeIndex = ref(null)
const currentIndex = ref(0)
const swiperRef = ref()

const togglePanel = async (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
  await nextTick()
}

const onSlideChange = () => {
  currentIndex.value = swiperRef.value.swiper.realIndex
  activeIndex.value = null
}

const projects = [
  {
    title: 'Página Web Corporativa',
    icon: 'mdi:office-building-outline',
    image: '/vista.jpg',
    technologies: ['logos:html-5', 'logos:css-3', 'logos:javascript'],
    description:
      'Desarrollé un sitio web profesional para una empresa local, enfocado en comunicar profesionalismo y confianza desde el primer contacto. El sitio es completamente responsivo, accesible desde cualquier dispositivo y optimizado para motores de búsqueda (SEO). Utilicé HTML5, CSS3 y JavaScript para garantizar compatibilidad, rapidez de carga y estructura semántica clara. Además, incluí animaciones personalizadas para una experiencia de navegación fluida y moderna. El proyecto fue desplegado eficientemente mediante GitHub Pages, eliminando costos de hosting sin sacrificar calidad.',
    duration: '2 semanas',
    durationIcon: 'fa6-regular:clock',
    team: '1 persona',
    teamIcon: 'fa6-solid:user'
  },
  {
    title: 'Aplicación de Escritorio con IA',
    icon: 'mdi:robot',
    image: '/vista.jpg',
    technologies: ['logos:react', 'logos:python', 'logos:electron'],
    description:
      'Este sistema fue diseñado para automatizar la corrección de cartillas de examen mediante visión por computadora e inteligencia artificial. Utilicé Electron y React para crear una aplicación de escritorio multiplataforma, integrando un backend robusto en Python que procesa imágenes, aplica lógica de validación y genera reportes automatizados. La aplicación incluye gestión de usuarios, almacenamiento local seguro y exportación de resultados. Fue implementada para una institución educativa que buscaba precisión, rapidez y trazabilidad en sus procesos académicos.',
    duration: '1.5 meses',
    durationIcon: 'fa6-regular:clock',
    team: '2 personas',
    teamIcon: 'fa6-solid:user-group'
  },
  {
    title: 'Editor de Diseño en Tiempo Real',
    icon: 'mdi:palette-outline',
    image: '/vista.jpg',
    technologies: ['logos:nextjs-icon', 'logos:typescript-icon', 'logos:javascript', 'logos:react'],
    description:
      'Desarrollé una herramienta web avanzada que permite a los usuarios personalizar la apariencia de interfaces visuales en tiempo real, sin necesidad de conocimientos técnicos. Utilicé Next.js con TypeScript y React para ofrecer una experiencia ágil, fluida y segura. Los usuarios pueden modificar dinámicamente colores, tipografías, fondos y estilos generales, con vista previa instantánea. La arquitectura está basada en Server-Side Rendering (SSR) para un rendimiento óptimo y mejor indexación en buscadores. Esta herramienta está pensada para diseñadores, desarrolladores front-end y creadores de contenido visual.',
    duration: '3 semanas',
    durationIcon: 'fa6-regular:clock',
    team: '1 persona',
    teamIcon: 'fa6-solid:user'
  }
]


</script>

<style scoped>
@import 'swiper/css';

.panel-glass {
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-top: 1px solid rgba(168, 85, 247, 0.3);
  box-shadow: 0 -6px 30px rgba(0, 0, 0, 0.4);
  border-radius: 1.5rem 1.5rem 0 0;
}


/* Tipografía moderna */
.font-orbitron {
  font-family: 'Orbitron', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  letter-spacing: 0.03em;
}

/* Animación al expandir panel */
.panel-slide-enter-active,
.panel-slide-leave-active {
  transition: height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

/* Fade suave */
.fade-in-enter-active,
.fade-in-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-in-enter-from,
.fade-in-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Botones */
button {
  transition: all 0.3s ease;
}

button:hover {
  transform: scale(1.05);
  filter: brightness(1.1);
}

/* Panel desplegable (glassmorphism) */
.panel-glass {
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-top: 1px solid rgba(168, 85, 247, 0.5); /* púrpura semitransparente */
  box-shadow: 0 -4px 20px rgba(168, 85, 247, 0.2);
  border-radius: 1rem 1rem 0 0;
}

/* Iconos de tecnologías */
.tech-icon {
  transition: transform 0.3s ease, color 0.3s ease;
  height: fit-content;
  width: fit-content;
}

.tech-icon:hover {
  transform: scale(1.2);
  color: #a855f7; /* púrpura fluorescente */
}

/* Indicadores laterales */
.direction-indicator {
  animation: pulse 2s infinite;
  filter: drop-shadow(0 0 8px rgba(168, 85, 247, 0.6));
  transition: transform 0.2s ease;
}

.direction-indicator:hover {
  transform: scale(1.1);
}

/* Entrada de imagen */
.swiper-slide img {
  transition: transform 0.6s ease-in-out, opacity 0.4s ease;
}

.swiper-slide:hover img {
  transform: scale(1.03);
  opacity: 1;
}

/* Títulos */
.project-title {
  font-weight: 700;
  text-shadow: 0 0 8px rgba(168, 85, 247, 0.3);
  color: #d8b4fe;
  font-size: 1.8rem;
}

/* Utilidades de color */
.text-purple-light {
  color: #d8b4fe;
}
.bg-glass-dark {
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.project-title {
  text-shadow: 0 1px 8px rgba(168, 85, 247, 0.3);
}

.tech-icon-card {
  transition: all 0.3s ease;
  cursor: default;
}
.tech-icon-card:hover {
  transform: translateY(-2px) scale(1.05);
  background-color: rgba(168, 85, 247, 0.07);
}

</style>
