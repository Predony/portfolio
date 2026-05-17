<template>
  <div class="app-layout">
    <header class="container">
      <nav class="nav-bar">
        <div class="logo">Predony.dev</div>
        <ul class="nav-links">
          <li><a href="#about">Über mich</a></li>
          <li><a href="#projects">Projekte</a></li>
          <li><a href="#contact">Kontakt</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section class="container section-padding">
        <h1>Hi, ich bin ein Vue & TypeScript Entwickler.</h1>
        <p style="color: var(--text-secondary); margin-top: 10px;">
          Willkommen auf meinem Portfolio. Hier entsteht gerade etwas Großes.
        </p>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
// Hier kommt später unsere Logik rein
</script>

<style scoped>
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

h1 {
  font-size: 2.5rem;
  max-width: 600px;
  line-height: 1.2;
}
</style>