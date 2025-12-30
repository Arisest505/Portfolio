<template>
  <div
    class="tech-card group"
  >
    <!-- Ícono -->
    <Icon
      :icon="icon"
      class="tech-icon"
    />

    <!-- Label -->
    <span class="tech-label">
      {{ label }}
    </span>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'

defineProps({
  icon: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.tech-card {
  position: relative;
  width: 96px;
  height: 96px;                 /* 👈 todas iguales */
  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(
    135deg,
    #a7a6a6,
    #ffffff,
    #646363
  );

  border-radius: 0.75rem;
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.35);
  transition: all 0.35s ease;

  font-family: 'Orbitron', sans-serif;
}

.tech-icon {
  font-size: 3rem;
  color: #ffffff;
  transition: all 0.35s ease;
  filter: drop-shadow(0 0 6px rgba(147, 51, 234, 0.6));
}

.tech-label {
  position: absolute;
  inset: 0;                     /* 👈 ocupa toda la tarjeta */
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-align: center;
  line-height: 1.2;

  color: #000000;

  opacity: 0;
  transform: scale(0.92);
  transition: opacity 0.35s ease, transform 0.35s ease;

  white-space: normal;          /* permite 2 palabras */
  word-break: break-word;
}

/* HOVER */
.tech-card:hover {
  backdrop-filter: blur(6px);
  box-shadow: 0 0 0 2px hsl(258, 100%, 64%),
              0 0 25px rgba(124, 58, 237, 0.5);
  transform: scale(1.05);
}

.tech-card:hover .tech-icon {
  opacity: 0.12;
  transform: scale(1.1);
}

.tech-card:hover .tech-label {
  opacity: 1;
  transform: scale(1);
}
</style>
