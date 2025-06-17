<template>
    <div class="min-h-screen bg-gradient-to-br from-[#111111] via-[#2F2F2F] to-[#111111] text-[#F6F6F6] overflow-x-hidden">
        <!-- Navigation -->
        <nav class="fixed top-0 w-full z-50 bg-[#111111]/80 backdrop-blur-md border-b border-[#2F2F2F]/50 transition-all duration-300" :class="{ 'bg-[#111111]/95': scrolled }">
            <div class="max-w-6xl mx-auto px-6 py-4">
                <div class="flex justify-between items-center">
                    <div class="text-xl font-bold text-[#FFCB74]">Portfolio</div>
                    <div class="hidden md:flex space-x-8">
                        <a href="#home" class="hover:text-[#FFCB74] transition-colors duration-300 cursor-pointer" @click="scrollToSection('home')">Home</a>
                        <a href="#about" class="hover:text-[#FFCB74] transition-colors duration-300 cursor-pointer" @click="scrollToSection('about')">Über mich</a>
                        <a href="#projects" class="hover:text-[#FFCB74] transition-colors duration-300 cursor-pointer" @click="scrollToSection('projects')">Projekte</a>
                        <a href="#tech" class="hover:text-[#FFCB74] transition-colors duration-300 cursor-pointer" @click="scrollToSection('tech')">Tech Stack</a>
                    </div>
                    <button class="md:hidden text-[#FFCB74]" @click="mobileMenuOpen = !mobileMenuOpen">
                        <Menu v-if="!mobileMenuOpen" class="w-6 h-6" />
                        <X v-else class="w-6 h-6" />
                    </button>
                </div>
                <!-- Mobile Menu -->
                <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-4 space-y-4">
                    <a href="#home" class="block hover:text-[#FFCB74] transition-colors duration-300" @click="scrollToSection('home'); mobileMenuOpen = false">Home</a>
                    <a href="#about" class="block hover:text-[#FFCB74] transition-colors duration-300" @click="scrollToSection('about'); mobileMenuOpen = false">Über mich</a>
                    <a href="#projects" class="block hover:text-[#FFCB74] transition-colors duration-300" @click="scrollToSection('projects'); mobileMenuOpen = false">Projekte</a>
                    <a href="#tech" class="block hover:text-[#FFCB74] transition-colors duration-300" @click="scrollToSection('tech'); mobileMenuOpen = false">Tech Stack</a>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <section id="home" class="min-h-screen flex items-center justify-center relative overflow-hidden">
            <!-- Animated Background Elements -->
            <div class="absolute inset-0">
                <div class="absolute top-20 left-10 w-72 h-72 bg-[#FFCB74]/10 rounded-full blur-3xl animate-pulse"></div>
                <div class="absolute bottom-20 right-10 w-96 h-96 bg-[#FFCB74]/5 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s;"></div>
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#FFCB74]/5 to-transparent rounded-full blur-2xl"></div>
            </div>

            <div class="text-center z-10 px-6" ref="heroContent">
                <div class="mb-8">
                    <h1 class="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-[#F6F6F6] via-[#FFCB74] to-[#F6F6F6] bg-clip-text text-transparent">
                        Hi, ich bin
                    </h1>
                    <div class="text-4xl md:text-6xl font-bold text-[#FFCB74] mb-6 h-20 flex items-center justify-center">
                        <span>{{ displayedName }}</span>
                        <span class="animate-pulse ml-1">|</span>
                    </div>
                    <div class="text-xl md:text-2xl text-[#F6F6F6]/80 mb-8">
                        Frontend Entwickler {{ currentRole }}
                    </div>
                </div>

                <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button class="px-8 py-3 bg-gradient-to-r from-[#FFCB74] to-[#FFCB74]/80 text-[#111111] font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#FFCB74]/25" @click="scrollToSection('projects')">
                        Meine Projekte
                    </button>
                    <button class="px-8 py-3 border-2 border-[#FFCB74] text-[#FFCB74] font-semibold rounded-full hover:bg-[#FFCB74] hover:text-[#111111] transition-all duration-300" @click="scrollToSection('about')">
                        Über mich
                    </button>
                </div>
            </div>

            <!-- Scroll Indicator -->
            <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ChevronDown class="w-6 h-6 text-[#FFCB74]" />
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="py-20 px-6" ref="aboutSection">
            <div class="max-w-4xl mx-auto">
                <h2 class="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#FFCB74] to-[#F6F6F6] bg-clip-text text-transparent">
                    Über mich
                </h2>

                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div class="space-y-6" :class="{ 'animate-slide-in-left': aboutVisible }">
                        <p class="text-lg text-[#F6F6F6]/90 leading-relaxed">
                            Als leidenschaftlicher Frontend-Entwickler bringe ich kreative Ideen zum Leben und erschaffe
                            benutzerfreundliche, moderne Webanwendungen. Mit einem Auge für Details und einer Vorliebe
                            für sauberen Code verwandle ich Designs in interaktive Erlebnisse.
                        </p>
                        <p class="text-lg text-[#F6F6F6]/90 leading-relaxed">
                            Meine Expertise liegt in modernen JavaScript-Frameworks und ich bin immer auf der Suche
                            nach neuen Technologien und Best Practices, um innovative Lösungen zu entwickeln.
                        </p>
                        <div class="flex flex-wrap gap-4 mt-8">
                            <div class="flex items-center gap-2 px-4 py-2 bg-[#2F2F2F] rounded-full">
                                <Code class="w-4 h-4 text-[#FFCB74]" />
                                <span class="text-sm">Clean Code</span>
                            </div>
                            <div class="flex items-center gap-2 px-4 py-2 bg-[#2F2F2F] rounded-full">
                                <Palette class="w-4 h-4 text-[#FFCB74]" />
                                <span class="text-sm">UI/UX Design</span>
                            </div>
                            <div class="flex items-center gap-2 px-4 py-2 bg-[#2F2F2F] rounded-full">
                                <Zap class="w-4 h-4 text-[#FFCB74]" />
                                <span class="text-sm">Performance</span>
                            </div>
                        </div>
                    </div>

                    <div class="relative" :class="{ 'animate-slide-in-right': aboutVisible }">
                        <div class="w-80 h-80 mx-auto bg-gradient-to-br from-[#FFCB74]/20 to-[#2F2F2F]/20 rounded-3xl backdrop-blur-sm border border-[#FFCB74]/20 flex items-center justify-center">
                            <User class="w-32 h-32 text-[#FFCB74]/60" />
                        </div>
                        <div class="absolute -top-4 -right-4 w-24 h-24 bg-[#FFCB74]/10 rounded-full blur-xl"></div>
                        <div class="absolute -bottom-4 -left-4 w-32 h-32 bg-[#FFCB74]/5 rounded-full blur-xl"></div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Projects Section -->
        <section id="projects" class="py-20 px-6 bg-gradient-to-b from-transparent to-[#2F2F2F]/20" ref="projectsSection">
            <div class="max-w-6xl mx-auto">
                <h2 class="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#FFCB74] to-[#F6F6F6] bg-clip-text text-transparent">
                    Meine Projekte
                </h2>

                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div v-for="(project, index) in projects" :key="index"
                         class="group bg-gradient-to-br from-[#2F2F2F]/50 to-[#111111]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#FFCB74]/10 hover:border-[#FFCB74]/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FFCB74]/10"
                         :class="{ 'animate-fade-in-up': projectsVisible }"
                         :style="{ animationDelay: `${index * 0.2}s` }">
                        <div class="h-48 bg-gradient-to-br from-[#FFCB74]/20 to-[#2F2F2F]/20 rounded-xl mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                            <component :is="project.icon" class="w-16 h-16 text-[#FFCB74]" />
                        </div>
                        <h3 class="text-xl font-bold mb-3 text-[#FFCB74]">{{ project.title }}</h3>
                        <p class="text-[#F6F6F6]/80 mb-4 leading-relaxed">{{ project.description }}</p>
                        <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="tech in project.technologies" :key="tech"
                    class="px-3 py-1 bg-[#FFCB74]/10 text-[#FFCB74] text-xs rounded-full border border-[#FFCB74]/20">
                {{ tech }}
              </span>
                        </div>
                        <div class="flex gap-3">
                            <button class="flex items-center gap-2 px-4 py-2 bg-[#FFCB74] text-[#111111] rounded-lg hover:bg-[#FFCB74]/90 transition-colors duration-300">
                                <ExternalLink class="w-4 h-4" />
                                <span class="text-sm font-medium">Demo</span>
                            </button>
                            <button class="flex items-center gap-2 px-4 py-2 border border-[#FFCB74]/30 text-[#FFCB74] rounded-lg hover:bg-[#FFCB74]/10 transition-colors duration-300">
                                <Github class="w-4 h-4" />
                                <span class="text-sm font-medium">Code</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Tech Stack Section -->
        <section id="tech" class="py-20 px-6" ref="techSection">
            <div class="max-w-6xl mx-auto">
                <h2 class="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#FFCB74] to-[#F6F6F6] bg-clip-text text-transparent">
                    Mein Tech Stack
                </h2>

                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <div v-for="(tech, index) in techStack" :key="index"
                         class="group bg-gradient-to-br from-[#2F2F2F]/30 to-[#111111]/30 backdrop-blur-sm rounded-2xl p-6 border border-[#FFCB74]/10 hover:border-[#FFCB74]/30 transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-[#FFCB74]/20 text-center"
                         :class="{ 'animate-fade-in-up': techVisible }"
                         :style="{ animationDelay: `${index * 0.1}s` }">
                        <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#FFCB74]/20 to-[#FFCB74]/10 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                            <component :is="tech.icon" class="w-8 h-8 text-[#FFCB74]" />
                        </div>
                        <h3 class="font-semibold text-[#F6F6F6] group-hover:text-[#FFCB74] transition-colors duration-300">{{ tech.name }}</h3>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="py-12 px-6 border-t border-[#2F2F2F]/50 bg-gradient-to-t from-[#111111] to-transparent">
            <div class="max-w-4xl mx-auto text-center">
                <div class="flex justify-center gap-6 mb-8">
                    <a href="#" class="w-12 h-12 bg-[#2F2F2F] rounded-full flex items-center justify-center hover:bg-[#FFCB74] hover:text-[#111111] transition-all duration-300 group">
                        <Github class="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    </a>
                    <a href="#" class="w-12 h-12 bg-[#2F2F2F] rounded-full flex items-center justify-center hover:bg-[#FFCB74] hover:text-[#111111] transition-all duration-300 group">
                        <Linkedin class="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    </a>
                    <a href="#" class="w-12 h-12 bg-[#2F2F2F] rounded-full flex items-center justify-center hover:bg-[#FFCB74] hover:text-[#111111] transition-all duration-300 group">
                        <Mail class="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    </a>
                </div>
                <p class="text-[#F6F6F6]/60">© 2024 Frontend Developer Portfolio. Erstellt mit Vue.js & TypeScript.</p>
            </div>
        </footer>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import {
    Menu, X, ChevronDown, Code, Palette, Zap, User, ExternalLink,
    Github, Linkedin, Mail, Monitor, Smartphone, Globe, Database,
    Layers, Settings, Cpu, Wrench
} from 'lucide-vue-next'

// Reactive data
const scrolled = ref(false)
const mobileMenuOpen = ref(false)
const displayedName = ref('')
const currentRole = ref('')
const aboutVisible = ref(false)
const projectsVisible = ref(false)
const techVisible = ref(false)

// Refs for sections
const heroContent = ref<HTMLElement>()
const aboutSection = ref<HTMLElement>()
const projectsSection = ref<HTMLElement>()
const techSection = ref<HTMLElement>()

// Typing animation data
const fullName = 'Alec Zinn'
const roles = ['Designer', 'Developer']
let currentRoleIndex = 0
let isDeleting = false
let roleText = ''

// Projects data
const projects = ref([
    {
        title: 'E-Commerce Platform',
        description: 'Eine moderne E-Commerce-Lösung mit Vue.js, TypeScript und einer benutzerfreundlichen Oberfläche.',
        technologies: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'Pinia'],
        icon: Monitor
    },
    {
        title: 'Mobile App Dashboard',
        description: 'Responsive Dashboard für mobile Anwendungen mit Echtzeit-Datenvisualisierung.',
        technologies: ['Vue 3', 'Chart.js', 'PWA', 'Firebase'],
        icon: Smartphone
    },
    {
        title: 'Portfolio Website',
        description: 'Kreative Portfolio-Website mit modernen Animationen und responsivem Design.',
        technologies: ['Vue.js', 'GSAP', 'Sass', 'Netlify'],
        icon: Globe
    },
    {
        title: 'Task Management Tool',
        description: 'Kollaboratives Tool für Projektmanagement mit Drag & Drop Funktionalität.',
        technologies: ['Vue 3', 'Vuex', 'Node.js', 'MongoDB'],
        icon: Database
    },
    {
        title: 'Design System',
        description: 'Umfassendes Design System mit wiederverwendbaren Komponenten.',
        technologies: ['Vue 3', 'Storybook', 'TypeScript', 'CSS Variables'],
        icon: Layers
    },
    {
        title: 'API Dashboard',
        description: 'Monitoring-Dashboard für REST APIs mit Echtzeit-Metriken und Alerts.',
        technologies: ['Vue.js', 'D3.js', 'WebSocket', 'Express'],
        icon: Settings
    }
])

// Tech stack data
const techStack = ref([
    { name: 'Vue.js', icon: Code },
    { name: 'TypeScript', icon: Code },
    { name: 'JavaScript', icon: Code },
    { name: 'HTML5', icon: Globe },
    { name: 'CSS3', icon: Palette },
    { name: 'Tailwind CSS', icon: Palette },
    { name: 'Sass/SCSS', icon: Palette },
    { name: 'Node.js', icon: Cpu },
    { name: 'Git', icon: Github },
    { name: 'Webpack', icon: Wrench },
    { name: 'Vite', icon: Zap },
    { name: 'Figma', icon: Layers }
])

// Typing animation functions
const typeRole = () => {
    const currentRoleText = roles[currentRoleIndex]

    if (isDeleting) {
        roleText = currentRoleText.substring(0, roleText.length - 1)
    } else {
        roleText = currentRoleText.substring(0, roleText.length + 1)
    }

    currentRole.value = roleText

    let typeSpeed = 100

    if (isDeleting) {
        typeSpeed /= 2
    }

    if (!isDeleting && roleText === currentRoleText) {
        typeSpeed = 2000
        isDeleting = true
    } else if (isDeleting && roleText === '') {
        isDeleting = false
        currentRoleIndex = (currentRoleIndex + 1) % roles.length
        typeSpeed = 500
    }

    setTimeout(typeRole, typeSpeed)
}

const typeName = () => {
    let i = 0
    const typeInterval = setInterval(() => {
        if (i < fullName.length) {
            displayedName.value += fullName.charAt(i)
            i++
        } else {
            clearInterval(typeInterval)
            setTimeout(typeRole, 1000)
        }
    }, 100)
}

// Scroll functions
const handleScroll = () => {
    scrolled.value = window.scrollY > 50

    // Check visibility of sections
    const windowHeight = window.innerHeight
    const scrollTop = window.scrollY

    if (aboutSection.value) {
        const aboutTop = aboutSection.value.offsetTop
        aboutVisible.value = scrollTop + windowHeight > aboutTop + 100
    }

    if (projectsSection.value) {
        const projectsTop = projectsSection.value.offsetTop
        projectsVisible.value = scrollTop + windowHeight > projectsTop + 100
    }

    if (techSection.value) {
        const techTop = techSection.value.offsetTop
        techVisible.value = scrollTop + windowHeight > techTop + 100
    }
}

const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
    }
}

// Lifecycle hooks
onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    setTimeout(typeName, 1000)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
@keyframes slide-in-left {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slide-in-right {
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fade-in-up {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-slide-in-left {
    animation: slide-in-left 0.8s ease-out forwards;
}

.animate-slide-in-right {
    animation: slide-in-right 0.8s ease-out forwards;
}

.animate-fade-in-up {
    animation: fade-in-up 0.6s ease-out forwards;
    opacity: 0;
}

.bg-gradient-radial {
    background: radial-gradient(circle, var(--tw-gradient-stops));
}

/* Smooth scrolling */
html {
    scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: #111111;
}

::-webkit-scrollbar-thumb {
    background: #FFCB74;
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: #FFCB74;
    opacity: 0.8;
}
</style>