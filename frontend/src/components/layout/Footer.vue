<template>
  <footer class="flex flex-col items-center w-full gap-6 px-4 py-10 text-white bg-black">
    <!-- Línea decorativa superior -->
    <div class="w-24 h-1 rounded-full bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-purple-500"></div>

    <!-- Iconos y texto de contacto estilo cyberpunk -->
    <div class="bg-zinc-900 px-8 py-6 rounded-xl flex flex-col gap-4 shadow-[0_0_12px_rgba(0,255,255,0.2)] border border-zinc-700 w-full max-w-xl">
      <div class="flex flex-wrap items-center justify-center gap-6">
        <a
          href="https://www.linkedin.com/in/arises/"
          target="_blank"
          title="LinkedIn"
          class="flex items-center gap-2 transition hover:scale-110 text-cyan-400"
        >
          <i class="text-2xl fab fa-linkedin"></i>
          <span class="hidden text-sm sm:inline">linkedin.com/in/arises/</span>
        </a>
        <a
          href="https://github.com/Arisest505"
          target="_blank"
          title="GitHub"
          class="flex items-center gap-2 text-green-400 transition hover:scale-110"
        >
          <i class="text-2xl fab fa-github"></i>
          <span class="hidden text-sm sm:inline">github.com/Arisest505</span>
        </a>
        <a
          href="mailto:loganminsahira@gmail.com"
          title="Correo"
          class="flex items-center gap-2 text-pink-400 transition hover:scale-110"
        >
          <i class="text-2xl fas fa-envelope"></i>
          <span class="hidden text-sm sm:inline">loganminsahira@gmail.com</span>
        </a>
        <a
          title="Teléfono"
          class="flex items-center gap-2 text-purple-400 transition hover:scale-110"
        >
          <i class="text-2xl fas fa-phone"></i>
          <span class="hidden text-sm sm:inline">+51 902 476 522</span>
        </a>
      </div>
    </div>

    <!-- Información profesional resumida -->
    <div class="max-w-2xl space-y-2 text-sm text-center text-gray-400">
      <p class="text-base font-semibold text-white">ARISE · Desarrollador Full Stack</p>
      <p>Especializado en Vue, Tailwind, Laravel, PostgreSQL, y experiencia UX/UI.</p>
      <p>Abierto a colaboraciones freelance y proyectos web modernos, escalables y seguros.</p>
    </div>

    <!-- Separador visual -->
    <div class="w-full mt-6 border-t border-zinc-700"></div>

    <!-- Copyright -->
    <div class="pt-4 text-xs text-center text-gray-500">
      © 2025 ARISEI. Todos los derechos reservados.
    </div>
  </footer>
</template>

<script setup>
// Asegúrate de tener Font Awesome disponible en tu proyecto para los íconos.
</script>

<style scoped>
footer {
  backdrop-filter: blur(6px);
}
</style>

