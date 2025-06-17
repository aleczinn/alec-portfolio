<template>
    <div class="relative min-h-screen overflow-hidden">
        <!-- Animated Background -->
        <div class="fixed inset-0 z-0">
            <div class="absolute inset-0 bg-black">
                <!-- Dark gradient overlay -->
                <div class="absolute inset-0 bg-gradient-to-br from-gray-800 via-black to-gray-900"></div>

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
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
            </div>
        </div>

        <!-- Content Container -->
        <div class="relative z-10 text-white">
            <p-header :nav-items="navItems" :active-section="activeSection" @toggle-language="toggleLanguage"></p-header>

            <!-- Hero Section -->
            <section id="hero" class="relative min-h-screen flex flex-col justify-center">
                <div class="mx-auto max-w-portfolio px-6 w-full">
                        <h2 class="text-4xl font-light mb-2">{{ $t('hero.greeting') }}</h2>
                        <h1 class="text-7xl font-bold mb-4">Frontend Entwickler</h1>
                        <p class="text-xl max-w-[60ch] mb-12">{{ $t('hero.description') }}</p>
                        <div class="flex gap-6">
                            <a href="#about"
                               class="px-6 py-4 bg-white text-black rounded-3xl font-medium shadow flex items-center justify-center transition-colors duration-300 hover:bg-new-light hover:text-white">
                                {{ $t('hero.about') }}
                            </a>

                            <a href="#projects"
                               class="px-6 py-4 border-2 border-white rounded-3xl font-medium shadow flex items-center justify-center transition-colors duration-300 hover:border-new-light">
                                {{ $t('hero.viewProjects') }}
                            </a>
                        </div>
                </div>

                <!-- Social Links -->
                <div class="absolute bottom-48 left-0 right-0">
                    <div class="w-full mx-auto max-w-portfolio px-6">
                        <div class="flex flex-row gap-6 ml-auto">
                            <a v-for="social in socialLinks" :key="social.name" :href="social.url" target="_blank"
                               rel="noopener noreferrer"
                               class="text-white/80 hover:text-new-light p-2 transition-colors duration-300">
                                <component :is="social.icon" class="w-6 h-6"/>
                                <span class="sr-only">{{ social.name }}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <!-- About Me Section -->
            <section id="about" class="py-20">
                <div class="mx-auto max-w-portfolio px-6">
                    <h2 class="text-3xl md:text-4xl font-bold mb-16 text-center">Kreativität trifft auf Code</h2>

                    <div class="grid md:grid-cols-2 gap-12 items-center">
                        <div class="relative">
                            <div
                                class="aspect-w-16 aspect-h-9 rounded-3xl overflow-hidden border-2 border-white/10 p-2">
                                <div class="w-full h-full rounded-2xl overflow-hidden">
                                    <img src="/image-1.png" alt="Alec" class="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div
                                class="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/30 rounded-full blur-2xl"></div>
                            <div class="absolute -top-6 -left-6 w-24 h-24 bg-blue-300/30 rounded-full blur-xl"></div>
                        </div>

                        <div>
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
            <section id="skills" class="py-20">
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
                <span class="w-8 h-8 mr-3 bg-blue-400/30 backdrop-blur-sm rounded-lg flex items-center justify-center">
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
            <section id="projects" class="py-20">
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
            <section id="career" class="py-20">
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

            <!-- Scroll to Top Button -->
            <a @click="scrollToTop"
                class="fixed bottom-24 right-8 w-14 h-14 rounded-full bg-new-light/60 backdrop-blur-md flex justify-center items-center transition-all duration-300 hover:bg-new-lightest hover:cursor-pointer z-50"
               :class="{ 'opacity-0 pointer-events-none': !showScrollTop, 'opacity-100': showScrollTop }"
            >
                <chevron-up-icon class="w-6 h-6 text-white mb-[0.125rem]"/>
            </a>
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
    Globe as GlobeIcon,
} from 'lucide-vue-next';
import IconXing from "../icons/icon-xing.vue";
import { getCurrentLocale, loadLocaleAsync } from "../i18n/index.js";
import { PFooter } from "../components/p-footer/index.js";
import { PHeader } from "../components/p-header/index.js";

// Navigation
const navItems = [
    { id: 'hero', name: 'Home' },
    { id: 'about', name: 'Über mich' },
    { id: 'skills', name: 'Skills' },
    { id: 'projects', name: 'Projekte' },
    { id: 'career', name: 'Werdegang' }
];

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

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

const checkScroll = () => {
    showScrollTop.value = window.scrollY > 500;

    // Update active section
    const sections = navItems.map(item => item.id);
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
.squircle-sm {
    border-radius: 20px;
}

.squircle-md {
    border-radius: 28px;
}

.squircle-lg {
    border-radius: 40px;
}

/* Bessere Squircle-Approximation mit komplexer border-radius */
.squircle-precise-sm {
    border-radius: 18px/16px;
}

.squircle-precise-md {
    border-radius: 24px/20px;
}

.squircle-precise-lg {
    border-radius: 36px/28px;
}

/* SVG-basierte Squircle mit clip-path */
.squircle-svg {
    clip-path: url(#squircle);
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

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Inter', sans-serif;
}

/* For demonstration purposes - replace with actual images */
img[src^="/"] {
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
}
</style>
