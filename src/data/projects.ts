import type { Project } from '../types/project';

export const projectsData: Project[] = [
    {
        id: 'field-sales-app',
        title: 'Mobile Field Sales Application',
        role: 'Frontend Developer (Vue 3 / TypeScript)',
        company: 'Spusu',
        period: '2021 - 2022',
        description: 'Eine geschäftskritische Web-Applikation für den Außendienst zur Vermarktung von Festnetz-Angeboten direkt beim Kunden vor Ort.',
        techStack: ['Vue 3', 'TypeScript', 'Vite', 'Mobile-First Design', 'REST API'],
        challenge: {
            problem: 'Die App wird auf Tablets im Außendienst genutzt, oft in ländlichen Gebieten mit extrem schlechter oder abbrechender Internetverbindung.',
            solution: 'Entwicklung einer hochperformanten App mit Fokus auf Offline-Resilience, Touch-optimierter UI/UX und minimalem Datenverbrauch, um reibungslose Vertragsabschlüsse zu garantieren.'
        },
        highlights: [
            'Wechsel von Webpack auf Vite für blitzschnelle Build-Zeiten',
            'Komplett Touch-optimierte Benutzeroberfläche für Tablet-Nutzung',
            'Robustes State-Handling bei Verbindungsverlust'
        ]
    },
    {
        id: 'crm-whatsapp-integration',
        title: 'Omnichannel Customer Support Tool',
        role: 'Frontend Developer (Vue 3 / TypeScript)',
        company: 'Spusu',
        period: '2022 - Heute',
        description: 'Zentralisiertes Messaging-Tool für Kundenbetreuer zur parallelen Bearbeitung von Kundenanfragen via WhatsApp, verknüpft mit den bestehenden Core-Systemen.',
        techStack: ['Vue 3', 'TypeScript', 'Vite', 'Reactive State Management', 'Legacy API Integration'],
        challenge: {
            problem: 'Kundenbetreuer mussten zeitgleich in WhatsApp und einem veralteten Java/HTML/CSS-System arbeiten, was zu ineffizienten Abläufen führte.',
            solution: 'Schaffung einer modernen Vue 3 Oberfläche, die als Brücke fungiert. Betreuer können direkt antworten und im Hintergrund Einstellungen im Altsystem triggern.'
        },
        highlights: [
            'Massive Steigerung der Betreuer-Effizienz durch UI-Zentralisierung',
            'Saubere TypeScript-Typisierung für komplexe, asynchrone API-Daten',
            'Teilweise Ablösung und Modernisierung von Legacy-Code'
        ]
    }
];