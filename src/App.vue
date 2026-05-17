<!-- src/App.vue -->
<template>
  <div class="app-layout">
    <header class="container">
      <nav class="nav-bar">
        <div class="logo">Predony.dev</div>
        <ul class="nav-links">
          <li><a href="#projects">Projekte</a></li>
          <li><a href="#about">Über mich</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <!-- Hero Section -->
      <section class="container hero-section">
        <h1>Hi, ich bin ein Vue & TypeScript Frontend Entwickler.</h1>
        <p class="hero-p">
          Ich spezialisiere mich auf den Bau von performanten, typsicheren Web-Applikationen im Enterprise-Umfeld. Erfahren im Refactoring von Legacy-Code und der Optimierung moderner Architekturen mit Vue 3 und Vite.
        </p>
        <a href="#projects" class="cta-button">Projekte ansehen</a>
      </section>

      <!-- NEU: Projekte Sektion -->
      <Projects />
    </main>
  </div>
</template>

<script setup lang="ts">
import Projects from './components/Projects.vue';
</script>

<style scoped>
/* Navigation */
.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
}

.logo {
  font-weight: bold;
  font-size: 1.2rem;
  color: var(--accent);
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 20px;
}

/* Hero Section */
.hero-section {
  padding: 100px 0 60px 0;
}

h1 {
  font-size: 3rem;
  max-width: 700px;
  line-height: 1.2;
  margin-bottom: 20px;
}

.hero-p {
  color: var(--text-secondary);
  font-size: 1.2rem;
  max-width: 600px;
  margin-bottom: 30px;
}

.cta-button {
  display: inline-block;
  background-color: var(--accent);
  color: var(--bg-primary);
  padding: 12px 24px;
  border-radius: var(--radius);
  font-weight: bold;
  transition: var(--transition);
}

.cta-button:hover {
  background-color: var(--accent-hover);
  color: var(--bg-primary);
  transform: translateY(-2px);
}
</style>