<template>
  <section id="projects" class="container section-padding">
    <h2 class="section-title">Relevante Projekte</h2>
    <p class="section-subtitle">Ein Auszug aus meiner Arbeit im Enterprise-Bereich.</p>

    <div class="projects-grid">
      <article v-for="project in projects" :key="project.id" class="project-card">
        <div class="project-header">
          <span class="project-period">{{ project.period }}</span>
          <h3>{{ project.title }}</h3>
          <div class="project-meta">
            <span class="company">🏢 {{ project.company }}</span> |
            <span class="role">{{ project.role }}</span>
          </div>
        </div>

        <p class="project-desc">{{ project.description }}</p>

        <div class="project-challenge">
          <h4>Herausforderung & Lösung:</h4>
          <p><strong>Problem:</strong> {{ project.challenge.problem }}</p>
          <p><strong>Lösung:</strong> {{ project.challenge.solution }}</p>
        </div>

        <div class="project-highlights">
          <h4>Key Achievements:</h4>
          <ul>
            <li v-for="(highlight, idx) in project.highlights" :key="idx">
              ✨ {{ highlight }}
            </li>
          </ul>
        </div>

        <div class="tech-tags">
          <span v-for="tech in project.techStack" :key="tech" class="tag">
            {{ tech }}
          </span>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { projectsData } from '../data/projects';
import type { Project } from '../types/project';

// Reaktiver State für die Projekte, sauber typisiert
const projects = ref<Project[]>(projectsData);
</script>

<style scoped>
.section-title {
  font-size: 2rem;
  color: var(--accent);
  margin-bottom: 5px;
}

.section-subtitle {
  color: var(--text-secondary);
  margin-bottom: 40px;
}

.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
}

@media (min-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}

.project-card {
  background-color: var(--bg-secondary);
  border-radius: var(--radius);
  padding: 30px;
  border: 1px solid #2e3e56;
  transition: var(--transition);
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: var(--accent);
}

.project-period {
  font-size: 0.85rem;
  color: var(--accent);
  font-weight: bold;
}

h3 {
  font-size: 1.5rem;
  margin: 5px 0 10px 0;
}

.project-meta {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 20px;
}

.project-desc {
  font-size: 1.05rem;
  margin-bottom: 20px;
}

.project-challenge {
  background: rgba(15, 23, 42, 0.6);
  padding: 15px;
  border-radius: var(--radius);
  margin-bottom: 20px;
  border-left: 4px solid var(--accent);
}

.project-challenge p {
  font-size: 0.95rem;
  margin-bottom: 8px;
}

.project-challenge p:last-child {
  margin-bottom: 0;
}

.project-highlights h4, .project-challenge h4 {
  font-size: 1rem;
  margin-bottom: 10px;
  color: var(--text-primary);
}

.project-highlights ul {
  list-style: none;
  margin-bottom: 25px;
}

.project-highlights li {
  font-size: 0.95rem;
  margin-bottom: 6px;
  color: var(--text-secondary);
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tag {
  background-color: rgba(56, 189, 248, 0.1);
  color: var(--accent);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid rgba(56, 189, 248, 0.2);
}
</style>