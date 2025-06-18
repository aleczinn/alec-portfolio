<template>
    <div class="relative min-h-screen overflow-hidden">
        <!-- Animated Background -->
        <div class="fixed inset-0 z-0">
            <div class="absolute inset-0 bg-black">
                <!-- Dark gradient overlay -->
                <div class="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-950 to-gray-900"></div>

                <!-- Selective colored blobs -->
                <div v-for="(blob, index) in blobs" :key="index"
                     class="absolute rounded-full blur-3xl opacity-40 animate-blob"
                     :style="{
                        width: `${blob.size}px`,
                        height: `${blob.size}px`,
                        left: `${blob.x}%`,
                        top: `${blob.y}%`,
                        backgroundColor: blob.color,
                        animationDelay: `${index * 0.5}s`,
                        animationDuration: `${blob.duration}s`
                     }">
                </div>

                <!-- Additional dark overlay for depth -->
<!--                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>-->
            </div>
        </div>


        <!-- Content Container -->
        <div class="relative z-10 text-white">
            <p-header :nav-items="navItems" :active-section="activeSection" @toggle-language="toggleLanguage"></p-header>
            <p-section-hero id="hero" :social-links="socialLinks"></p-section-hero>
            <p-section-about-me id="about" :stats="stats"></p-section-about-me>
            <p-section-skills id="skills"></p-section-skills>
            <p-section-projects id="projects"></p-section-projects>


            <!-- Career Path Section -->
            <section id="career" class="py-32">
                <div class="mx-auto max-w-portfolio px-6">
                    <h2 class="text-3xl md:text-4xl font-bold mb-16 text-center">Mein Werdegang</h2>

                    <div class="relative">
                        <!-- Timeline Line -->
                        <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/30"></div>

                        <div class="relative">
                            <div v-for="(job, index) in career" :key="index"
                                 :class="['mb-16 grid md:grid-cols-2 gap-8 relative',
                            index % 2 === 0 ? 'md:text-right' : '']">
                                <!-- Timeline Dot -->
                                <div
                                    class="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-blue-500 border-4 border-white"></div>

                                <!-- Content -->
                                <div :class="[index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2']">
                                    <div
                                        class="backdrop-blur-md bg-black/30 border border-white/10 rounded-xl p-6 h-full">
                    <span class="inline-block px-3 py-1 rounded-full bg-blue-600/30 text-sm mb-3">
                      {{ job.period }}
                    </span>
                                        <h3 class="text-xl font-bold mb-2">{{ job.title }}</h3>
                                        <p class="text-lg mb-2">{{ job.company }}</p>
                                        <p class="opacity-80">{{ job.description }}</p>
                                    </div>
                                </div>

                                <!-- Empty Column for Layout -->
                                <div :class="[index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1']"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <p-footer :social-links="socialLinks"></p-footer>
            <p-scroll-to-top></p-scroll-to-top>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import {
    Github as GithubIcon,
    Linkedin as LinkedinIcon,
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon,
} from 'lucide-vue-next';
import IconXing from "../icons/icon-xing.vue";
import { getCurrentLocale, loadLocaleAsync } from "../i18n/index.js";
import { PFooter } from "../components/p-footer/index.js";
import { PHeader } from "../components/p-header/index.js";
import { useI18n } from "vue-i18n";
import { PScrollToTop } from "../components/p-scroll-to-top/index.js";
import { PSectionHero } from "../components/p-section-hero/index.js";
import { PSectionAboutMe } from "../components/p-section-about-me/index.js";
import { PSectionSkills } from "../components/p-section-skills/index.js";
import { PSectionProjects } from "../components/p-section-projects/index.js";

const { t } = useI18n()

// Navigation
const navItems = computed(() => [
    { id: 'hero', name: t('nav.home') },
    { id: 'about', name: t('nav.about') },
    { id: 'skills', name: t('nav.skills') },
    { id: 'projects', name: t('nav.projects') },
    { id: 'career', name: t('nav.experience') }
]);

const activeSection = ref('hero');

// Social Links
const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/aleczinn', icon: GithubIcon },
    { name: 'LinkedIn', url: 'www.linkedin.com/in/alec-zinn', icon: LinkedinIcon },
    { name: 'Xing', url: 'https://www.xing.com/profile/Alec_Zinn/', icon: IconXing }
];

// About Me Stats
const stats = computed(() => [
    { value: '10+', label: t('about-me.java') },
    { value: '3+', label: t('about-me.frontend') },
    { value: '10+', label: t('about-me.projects') },
    { value: '100%', label: t('about-me.passion') }
]);

// Skills


// Projects


// Career Path
const career = [
    {
        title: 'Web Developer',
        company: 'Flyeralarm Vertriebs GmbH',
        period: 'Juli 2024 - Mai 2025',
        description: 'Entwicklung und Wartung von Webanwendungen mit modernen Frontend-Technologien.'
    },
    {
        title: 'Junior Web Developer',
        company: 'Flyeralarm Digital GmbH',
        period: 'Juni 2023 - Juli 2024',
        description: 'Implementierung von Frontend-Komponenten und Zusammenarbeit mit dem Design-Team.'
    },
    {
        title: 'Ausbildung - Fachinformatiker für Anwendungsentwicklung',
        company: 'Flyeralarm Vertriebs GmbH',
        period: 'September 2020 - Juni 2023',
        description: 'Umfassende Ausbildung in der Softwareentwicklung mit Fokus auf Webtechnologien.'
    }
];

const toggleLanguage = async () => {
    try {
        const locale = getCurrentLocale();
        await loadLocaleAsync(locale === 'de-DE' ? 'en-US' : 'de-DE');
    } catch (error) {
        console.log('Failed to switch locale:', error);
    }
}


// Animated Background Blobs - More selective colors with purple variety
const blobs = [
    { x: 15, y: 20, size: 600, color: 'rgba(59, 130, 246, 0.18)', duration: 25 }, // Blue
    { x: 85, y: 70, size: 400, color: 'rgba(239, 68, 68, 0.15)', duration: 30 }, // Red/Orange
    { x: 45, y: 85, size: 500, color: 'rgba(168, 85, 247, 0.12)', duration: 35 }, // Purple
    { x: 75, y: 25, size: 350, color: 'rgba(139, 92, 246, 0.10)', duration: 28 }, // Violet
    { x: 25, y: 60, size: 450, color: 'rgba(251, 146, 60, 0.12)', duration: 32 }, // Orange
    { x: 60, y: 40, size: 380, color: 'rgba(147, 51, 234, 0.08)', duration: 27 }, // Deep Purple
    { x: 10, y: 75, size: 320, color: 'rgba(124, 58, 237, 0.09)', duration: 33 } // Another Purple variant
];

// Scroll to Top
const showScrollTop = ref(false);
const showScrollTopSmall = ref(false);

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

const checkScroll = () => {
    showScrollTop.value = window.scrollY > 250;
    showScrollTopSmall.value = window.scrollY > 50;

    // Update active sections
    const sections = navItems.value.map(item => item.id);
    for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 150) {
                activeSection.value = sections[i];
                break;
            }
        }
    }
};

onMounted(() => {
    window.addEventListener('scroll', checkScroll);
    checkScroll();
});

onUnmounted(() => {
    window.removeEventListener('scroll', checkScroll);
});
</script>

<style>
@keyframes gradient {
    70% {
        transform: scale(1.2) translate(50px);
    }
}

@keyframes blob {
    0% {
        transform: translate(0, 0) scale(1);
    }
    33% {
        transform: translate(30px, -50px) scale(1.1);
    }
    66% {
        transform: translate(-20px, 20px) scale(0.9);
    }
    100% {
        transform: translate(0, 0) scale(1);
    }
}

.animate-blob {
    animation: blob 20s infinite alternate;
}
</style>
