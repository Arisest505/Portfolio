<template>
  <!-- HERO con fondo imagen y texto animado -->
  <section class="relative flex flex-col items-center justify-center w-full py-32 text-black bg-center bg-cover bg-gradient-to-br from-black via-gray-200 to-black " >
    <div class="z-10 px-4 text-center">
      <h1 class="text-4xl sm:text-5xl font-bold tracking-widest animate-typing border-r-4 border-black whitespace-nowrap overflow-hidden w-[15ch] mx-auto">
        Hola, soy KENYY
      </h1>
      <p class="mt-4 text-lg opacity-90">Desarrollador Web y Freelance Creativo</p>
    </div>

    <!-- Imagen de perfil con borde animado -->
    <div class="absolute left-1/2 -translate-x-1/2 bottom-[-60px] z-20">
      <div class="relative border-4 border-white rounded-full w-36 h-36 animate-border-glow">
        <img
          src="/foto.png"
          alt="Mi Foto"
          class="object-cover w-full h-full rounded-full"
        />
      </div>
    </div>
  </section>

  <!-- SOBRE MÍ + REDES AL COSTADO -->
  <section class="bg-[#000000ef] pt-32 pb-20 text-white">
    <div class="grid items-start max-w-6xl grid-cols-1 gap-10 px-6 mx-auto md:grid-cols-2">
      <!-- Sobre mí -->
<div>
  <!-- Título con ícono -->
  <h2 class="flex items-center gap-3 mb-4 text-3xl font-semibold text-gradient">
    <i class="fas fa-user-circle text-[hsl(258,100%,64%)]"></i>
    Sobre mí
  </h2>

  <!-- Descripción -->
  <p class="mb-4 text-base leading-relaxed opacity-90">
    Soy un desarrollador apasionado por la creación de experiencias web modernas, dinámicas y visualmente impactantes.
    Me enfoco en rendimiento, diseño interactivo y soluciones personalizadas que se adaptan a la necesidad del cliente.
  </p>

<!-- Botón de descarga como enlace -->
<a
  href="/CV KENYY JESUS RUIZ DAZA.pdf"
  download
  class="inline-flex items-center gap-2 px-6 py-2 mt-4 text-white transition rounded-full bg-gradient-to-r from-gray-700 to-black hover:scale-105"
>
  <i class="fas fa-download"></i>
  Descargar CV
</a>
</div>

      <!-- Redes con texto -->
      <div class="bg-zinc-800 p-6 rounded-xl border border-zinc-700 shadow-[0_0_20px_rgba(0,255,255,0.1)]">
        <h3 class="mb-4 text-xl font-semibold text-white">Contáctame</h3>
        <ul class="space-y-4 text-sm">
          <li class="flex items-center gap-3 text-white">
            <i class="text-2xl fab fa-linkedin"></i>
            <span>linkedin.com/in/arises/</span>
          </li>
          <li class="flex items-center gap-3 text-white">
            <i class="text-2xl fab fa-github"></i>
            <span>github.com/Arisest505</span>
          </li>
          <li class="flex items-center gap-3 text-white">
            <i class="text-2xl fas fa-envelope"></i>
            <span>loganminsahira@gmail.com</span>
          </li>
          <li class="flex items-center gap-3 text-white">
            <i class="text-2xl fas fa-phone"></i>
            <span>+51 902 476 522</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes typing {
  from { width: 0 }
  to { width: 15ch }
}

.animate-typing {
  animation: typing 2.5s steps(15) 1s 1 normal both, blink 0.75s step-end infinite;
  white-space: nowrap;
  overflow: hidden;
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}

@keyframes border-glow {
  0% {
    box-shadow: 0 0 10px #5800aa;
  }
  50% {
    box-shadow: 0 0 25px #1100ff;
  }
  100% {
    box-shadow: 0 0 10px #000000;
  }
}

.animate-border-glow {
  animation: border-glow 2s ease-in-out infinite;
}

.text-gradient {
  background: linear-gradient(to right, #ffffff, #4100a8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
