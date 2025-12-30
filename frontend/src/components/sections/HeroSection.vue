<template>
  <!-- HERO con  texto animado , pero en un 50% de altura para mejor vista con mejor diseño y colores en la letra que sobresalga del negro -->
<section
  class="relative flex items-center justify-center h-[50vh] min-h-[320px] px-6  bg-[#0a0a0a]"
>
  <!-- Fondo atmosférico -->
  <div class="absolute inset-0">
    <div class="absolute inset-0 bg-gradient-to-br from-[#12001f] via-black to-black"></div>
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(124,58,237,0.18),transparent_60%)]"></div>
  </div>

  <!-- Contenido -->
  <div class="relative z-10 max-w-4xl text-center">
  <h1
    class="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl animate-typing"
  >
    <span class="hero-intro">Hola, soy</span>
    <span class="text-gradient ml-2">ARISE</span>
  </h1>

    <p class="max-w-2xl mx-auto mt-5 text-base sm:text-lg text-zinc-300">
      Desarrollador Web · Frontend & Backend · Soluciones modernas, escalables y a medida
    </p>

    <!-- CTAs -->
    <div class="flex justify-center gap-4 mt-8">
      <a
        href="#contacto"
        class="px-7 py-3 text-sm font-semibold text-black transition-all duration-300 bg-white rounded-full hover:bg-zinc-200 hover:scale-105"
      >
        Contáctame
      </a>

      <a
        href="/CV KENYY JESUS RUIZ DAZA.pdf"
        download
        class="px-7 py-3 text-sm font-semibold text-white transition-all duration-300 border rounded-full border-white/25 hover:bg-white hover:text-black"
      >
        Descargar CV
      </a>
    </div>
  </div>

  <!-- Avatar integrado -->
  <div class="absolute -bottom-14">
    <div
      class="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full border border-white/20 bg-black/60 backdrop-blur animate-border-glow"
    >
      <img
        src="/kljhagufiasbkgjhbdfyjhsb.jpg"
        alt="Foto de perfil"
        class="object-cover w-full h-full rounded-full"
      />
    </div>
  </div>
</section>



  <!-- SOBRE MÍ + REDES AL COSTADO -->
  <section class="bg-[#000000ef] pt-40 pb-20 text-white">
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
        <h3 class="mb-4 text-xl font-semibold text-white">Contacto</h3>
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
            <span>arisescrp@gmail.com</span>
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

.hero-intro {
  color: #f8f8f8; /* blanco vivo */
  text-shadow: 0 0 12px rgb(101, 18, 233);
}

@keyframes typing {
  from {
    max-width: 0;
  }
  to {
    max-width: 100%;
  }
}

@keyframes blink {
  50% {
    border-color: white;
  }
  100% {
    border-color: transparent;
  }
}

.animate-typing {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid white;
  animation: typing 2.8s steps(30, end) forwards,
             blink 0.8s step-end 4;
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
