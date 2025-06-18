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

            <!-- About Me Section -->
            <section id="about" class="py-32">
                <div class="mx-auto max-w-portfolio px-6">
                    <h2 class="text-3xl md:text-4xl font-bold mb-16 text-center">Kreativität trifft auf Code</h2>

                    <div class="grid grid-cols-1 md:grid-cols-2">
                        <div class="p-6 w-full">
                            <div class="aspect-w-16 aspect-h-9">
                                <div class="w-full h-full rounded-2xl overflow-hidden">
<!--                                    <img src="/image-1.png" alt="Alec" class="w-full h-full object-cover" />-->
                                </div>
                            </div>
                        </div>

                        <div class="p-6 w-full">
                            <p class="text-lg mb-8">
                                Als leidenschaftlicher Frontend-Entwickler verbinde ich technisches Know-how mit
                                kreativem Design.
                                Mein Ziel ist es, Webanwendungen zu erschaffen, die nicht nur funktional sind, sondern
                                auch durch
                                ihre Benutzerfreundlichkeit und ästhetische Gestaltung überzeugen.
                            </p>
                            <p class="text-lg mb-12">
                                Mit einem Auge fürs Detail und einem tiefen Verständnis moderner Webtechnologien bringe
                                ich Ideen zum Leben
                                und schaffe digitale Erlebnisse, die begeistern.
                            </p>
                            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                                <div v-for="(stat, index) in stats" :key="index"
                                     class=" p-4 text-center">
                                    <div class="text-3xl text-new-light font-bold mb-1">{{ stat.value }}</div>
                                    <div class="text-sm text-white">{{ stat.label }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Skills Section -->
            <section id="skills" class="py-32">
                <div class="mx-auto max-w-portfolio px-6">
                    <h2 class="text-3xl md:text-4xl font-bold mb-16 text-center">Meine Skills</h2>

                    <div class="grid gap-12">
                        <div>
                            <h3 class="text-2xl font-semibold mb-8 flex items-center">
                                <span class="w-8 h-8 mr-3 bg-blue-400/30 backdrop-blur-sm rounded-lg flex items-center justify-center">
                                  <code-icon class="w-5 h-5"/>
                                </span>
                                Frontend Entwicklung
                            </h3>

                            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                                <div v-for="skill in frontendSkills" :key="skill.name"
                                     class="backdrop-blur-md bg-black/30 border border-white/10 rounded-xl p-6 transition-all duration-300 hover:bg-black/20 group">
                                    <div class="flex items-center mb-4">
                                        <component :is="skill.icon" class="w-6 h-6 mr-3"/>
                                        <h4 class="text-lg font-medium">{{ skill.name }}</h4>
                                    </div>
                                    <div class="h-2 bg-white/20 rounded-full overflow-hidden">
                                        <div
                                            class="h-full bg-gradient-to-r from-blue-400 to-blue-600 group-hover:from-blue-300 group-hover:to-blue-500 transition-all duration-500"
                                            :style="{ width: `${skill.level}%` }"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-2xl font-semibold mb-8 flex items-center">
                                <span
                                    class="w-8 h-8 mr-3 bg-blue-400/30 backdrop-blur-sm rounded-lg flex items-center justify-center">
                                    <server-icon class="w-5 h-5"/>
                                </span>
                                Weitere Technologien
                            </h3>

                            <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
                                <div v-for="skill in otherSkills" :key="skill.name"
                                     class="backdrop-blur-md bg-black/30 border border-white/10 rounded-xl p-6 transition-all duration-300 hover:bg-black/20 group">
                                    <div class="flex items-center mb-4">
                                        <component :is="skill.icon" class="w-6 h-6 mr-3"/>
                                        <h4 class="text-lg font-medium">{{ skill.name }}</h4>
                                    </div>
                                    <p class="text-sm opacity-80">{{ skill.years }} Jahre Erfahrung</p>
                                    <div class="h-2 mt-3 bg-white/20 rounded-full overflow-hidden">
                                        <div
                                            class="h-full bg-gradient-to-r from-blue-400 to-blue-600 group-hover:from-blue-300 group-hover:to-blue-500 transition-all duration-500"
                                            :style="{ width: `${skill.level}%` }"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Projects Section -->
            <section id="projects" class="py-32">
                <div class="mx-auto max-w-portfolio px-6">
                    <h2 class="text-3xl md:text-4xl font-bold mb-16 text-center">Meine Projekte</h2>

                    <div class="relative">
                        <button @click="prevProject"
                                class="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/40 backdrop-blur-md border border-white/10 p-3 rounded-full hover:bg-black/30 transition-all duration-300 hidden md:block">
                            <chevron-left-icon class="w-6 h-6"/>
                        </button>

                        <div class="overflow-hidden">
                            <div class="flex transition-transform duration-500 ease-in-out"
                                 :style="{ transform: `translateX(-${currentProjectIndex * (100 / visibleProjects)}%)` }">
                                <div v-for="(project, index) in projects" :key="index"
                                     :style="{ flex: `0 0 ${100 / visibleProjects}%` }"
                                     class="px-3">
                                    <div
                                        class="backdrop-blur-md bg-black/30 border border-white/10 rounded-2xl overflow-hidden h-full transition-all duration-300 hover:bg-black/15 hover:translate-y-[-5px]">
                                        <div class="aspect-video overflow-hidden">
                                            <img :src="project.image" :alt="project.name"
                                                 class="w-full h-full object-cover"/>
                                        </div>
                                        <div class="p-6">
                                            <h3 class="text-xl font-bold mb-2">{{ project.name }}</h3>
                                            <p class="text-sm opacity-80 mb-4">{{ project.description }}</p>

                                            <div class="flex flex-wrap gap-2 mb-6">
                        <span v-for="tech in project.technologies" :key="tech"
                              class="text-xs px-3 py-1 rounded-full bg-blue-600/30 backdrop-blur-sm">
                          {{ tech }}
                        </span>
                                            </div>

                                            <a :href="project.github" target="_blank" rel="noopener noreferrer"
                                               class="inline-flex items-center px-4 py-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full hover:bg-black/30 transition-all duration-300">
                                                <github-icon class="w-4 h-4 mr-2"/>
                                                GitHub
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button @click="nextProject"
                                class="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/40 backdrop-blur-md border border-white/10 p-3 rounded-full hover:bg-black/30 transition-all duration-300 hidden md:block">
                            <chevron-right-icon class="w-6 h-6"/>
                        </button>

                        <!-- Mobile Navigation Dots -->
                        <div class="flex justify-center space-x-2 mt-6 md:hidden">
                            <button v-for="(_, index) in Math.ceil(projects.length / visibleProjects)" :key="index"
                                    @click="currentProjectIndex = index * visibleProjects"
                                    :class="['w-3 h-3 rounded-full transition-all duration-300',
                               currentProjectIndex === index * visibleProjects ? 'bg-white' : 'bg-white/30']">
                            </button>
                        </div>
                    </div>
                </div>
            </section>

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
    AtSign as AtSignIcon,
    Code as CodeIcon,
    Server as ServerIcon,
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon,
    ChevronUp as ChevronUpIcon,
    Globe as GlobeIcon, ChevronDown,
} from 'lucide-vue-next';
import IconXing from "../icons/icon-xing.vue";
import { getCurrentLocale, loadLocaleAsync } from "../i18n/index.js";
import { PFooter } from "../components/p-footer/index.js";
import { PHeader } from "../components/p-header/index.js";
import { useI18n } from "vue-i18n";
import { PScrollToTop } from "../components/p-scroll-to-top/index.js";
import { PSectionHero } from "../components/section-hero/index.js";

const { t } = useI18n()

// Navigation
const navItems = computed(() => [
    { id: 'hero', name: t('nav.home') },
    { id: 'about', name: t('nav.about') },
    { id: 'skills', name: t('nav.skills') },
    { id: 'projects', name: t('nav.projects') },
    { id: 'career', name: t('nav.experience') }
])

const activeSection = ref('hero');

// Social Links
const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/aleczinn', icon: GithubIcon },
    { name: 'LinkedIn', url: 'www.linkedin.com/in/alec-zinn', icon: LinkedinIcon },
    { name: 'Xing', url: 'https://www.xing.com/profile/Alec_Zinn/', icon: IconXing }
];

// About Me Stats
const stats = [
    { value: '10+', label: 'Jahre Java' },
    { value: '3+', label: 'Jahre Frontend' },
    { value: '10+', label: 'Projekte' },
    { value: '100%', label: 'Leidenschaft' }
];

// Skills
const frontendSkills = [
    { name: 'Vue.js 3', level: 90, icon: CodeIcon },
    { name: 'TypeScript', level: 85, icon: CodeIcon },
    { name: 'Vite', level: 80, icon: CodeIcon },
    { name: 'Node.js', level: 75, icon: CodeIcon },
    { name: 'JavaScript', level: 95, icon: CodeIcon },
    { name: 'HTML', level: 95, icon: CodeIcon },
    { name: 'CSS', level: 90, icon: CodeIcon },
    { name: 'Tailwind CSS', level: 85, icon: CodeIcon }
];

const otherSkills = [
    { name: 'Java', level: 85, years: '10', icon: ServerIcon },
    { name: 'PHP', level: 60, years: '2', icon: ServerIcon },
    { name: 'Docker', level: 70, years: '1', icon: ServerIcon }
];

// Projects
const projects = [
    {
        name: 'E-Commerce Dashboard',
        description: 'Ein modernes Dashboard für Online-Shops mit Echtzeit-Statistiken und Benutzeranalyse.',
        technologies: ['Vue.js', 'TypeScript', 'Tailwind CSS'],
        image: '/project1.jpg',
        github: 'https://github.com/username/project1'
    },
    {
        name: 'Task Management App',
        description: 'Eine intuitive Anwendung zur Verwaltung von Aufgaben mit Drag-and-Drop-Funktionalität.',
        technologies: ['Vue.js', 'Vuex', 'Node.js'],
        image: '/project2.jpg',
        github: 'https://github.com/username/project2'
    },
    {
        name: 'Portfolio Website',
        description: 'Eine responsive Portfolio-Website mit animierten Übergängen und modernem Design.',
        technologies: ['Vue.js', 'GSAP', 'CSS Grid'],
        image: '/project3.jpg',
        github: 'https://github.com/username/project3'
    },
    {
        name: 'Weather App',
        description: 'Eine Wetter-App mit Standorterfassung und 5-Tage-Vorhersage.',
        technologies: ['Vue.js', 'OpenWeather API', 'Geolocation'],
        image: '/project4.jpg',
        github: 'https://github.com/username/project4'
    },
    {
        name: 'Blog Platform',
        description: 'Eine Blogging-Plattform mit Markdown-Unterstützung und Benutzerauthentifizierung.',
        technologies: ['Vue.js', 'Firebase', 'Markdown-it'],
        image: '/project5.jpg',
        github: 'https://github.com/username/project5'
    }
];

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

// Project Carousel
const currentProjectIndex = ref(0);
const visibleProjects = computed(() => {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
});

const nextProject = () => {
    if (currentProjectIndex.value < projects.length - visibleProjects.value) {
        currentProjectIndex.value++;
    } else {
        currentProjectIndex.value = 0;
    }
};

const prevProject = () => {
    if (currentProjectIndex.value > 0) {
        currentProjectIndex.value--;
    } else {
        currentProjectIndex.value = projects.length - visibleProjects.value;
    }
};

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
