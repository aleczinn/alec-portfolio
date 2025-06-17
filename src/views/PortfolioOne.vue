<template>
    <div class="portfolio">
        <!-- Modern Floating Header -->
        <div class="header-container">
            <header class="modern-header">
                <nav class="flex justify-between items-center px-8 py-4">
                    <div class="logo">
                        <span class="logo-text">MX</span>
                    </div>
                    <ul class="nav-menu">
                        <li><a href="#hero" class="nav-link">Home</a></li>
                        <li><a href="#about" class="nav-link">About</a></li>
                        <li><a href="#skills" class="nav-link">Skills</a></li>
                        <li><a href="#projects" class="nav-link">Projects</a></li>
                        <li><a href="#timeline" class="nav-link">Journey</a></li>
                    </ul>
                </nav>
            </header>
        </div>

        <!-- Hero Section mit Background Paths -->
        <section id="hero" class="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
            <!-- Animated Background -->
            <div class="hero-bg absolute inset-0"></div>

            <!-- Background Paths/Shapes -->
            <div class="hero-shapes absolute inset-0">
                <div class="shape shape-1"></div>
                <div class="shape shape-2"></div>
                <div class="shape shape-3"></div>
                <div class="floating-orb orb-1"></div>
                <div class="floating-orb orb-2"></div>
                <div class="floating-orb orb-3"></div>
            </div>

            <div class="relative z-10 text-center px-6" ref="heroContent">
                <h1 class="hero-title mb-6">
                    Max Mustermann
                </h1>
                <div class="hero-subtitle mb-8">
                    <span ref="typingText" class="typing-text">{{ currentText }}</span>
                    <span class="typing-cursor">|</span>
                </div>
                <p class="hero-description mb-12">
                    Leidenschaftlicher Frontend-Entwickler mit Fokus auf moderne Web-Technologien
                    und benutzerfreundliche Interfaces.
                </p>
                <div class="hero-buttons">
                    <button class="btn-primary">
                        <span>Projekte ansehen</span>
                        <svg class="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </button>
                    <button class="btn-secondary">
                        <span>Kontakt</span>
                    </button>
                </div>
            </div>

            <!-- Scroll Indicator -->
            <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ChevronDown class="w-8 h-8 text-edel-gray" />
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="section-padding" style="background: linear-gradient(135deg, #2F2F2F 0%, #111111 100%);">
            <div class="container mx-auto px-6">
                <div class="grid md:grid-cols-2 gap-16 items-center">
                    <div ref="aboutText" class="animate-slide-left">
                        <div class="section-badge mb-6">
                            <span>👨‍💻 Über mich</span>
                        </div>
                        <h2 class="section-title mb-8" style="color: #F6F6F6;">
                            Kreativität trifft auf Code
                        </h2>
                        <p class="text-lg mb-6" style="color: #F6F6F6; opacity: 0.9;">
                            Als Frontend-Entwickler bringe ich kreative Ideen zum Leben und erschaffe digitale Erlebnisse,
                            die Benutzer begeistern. Mit einem starken Fokus auf moderne Technologien und Clean Code
                            entwickle ich responsive und performante Webanwendungen.
                        </p>
                        <p class="text-lg mb-8" style="color: #F6F6F6; opacity: 0.9;">
                            Meine Leidenschaft liegt in der Verbindung von Design und Funktionalität,
                            um intuitive Benutzeroberflächen zu schaffen.
                        </p>
                        <div class="stats-grid">
                            <div class="stat-item">
                                <div class="stat-number">3+</div>
                                <div class="stat-label">Jahre Erfahrung</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-number">50+</div>
                                <div class="stat-label">Projekte</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-number">100%</div>
                                <div class="stat-label">Leidenschaft</div>
                            </div>
                        </div>
                    </div>
                    <div ref="aboutImage" class="animate-slide-right">
                        <div class="about-card">
                            <div class="card-glow"></div>
                            <div class="card-content">
                                <div class="profile-image">
                                    <div class="profile-bg"></div>
                                    <div class="profile-icon">👨‍💻</div>
                                </div>
                                <h3 class="card-title">Frontend Developer</h3>
                                <p class="card-description">Passionate about creating amazing user experiences</p>
                                <div class="tech-stack">
                                    <span class="tech-item">Vue.js</span>
                                    <span class="tech-item">React</span>
                                    <span class="tech-item">TypeScript</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Skills Section -->
        <section id="skills" class="section-padding" style="background: linear-gradient(135deg, #F6F6F6 0%, #FFCB74 100%);">
            <div class="container mx-auto px-6">
                <div class="text-center mb-16">
                    <div class="section-badge mb-6">
                        <span>🚀 Meine Fähigkeiten</span>
                    </div>
                    <h2 class="section-title" ref="skillsTitle" style="color: #111111;">
                        Skills & Expertise
                    </h2>
                </div>
                <div class="grid md:grid-cols-3 gap-8">
                    <div v-for="(category, index) in skills" :key="category.title"
                         :ref="setSkillCardRef(index)"
                         class="skill-card">
                        <div class="skill-card-inner">
                            <div class="skill-icon">{{ category.icon }}</div>
                            <h3 class="skill-title">{{ category.title }}</h3>
                            <div class="skills-list">
                                <div v-for="skill in category.items" :key="skill.name" class="skill-item">
                                    <div class="skill-header">
                                        <span class="skill-name">{{ skill.name }}</span>
                                        <span class="skill-percentage">{{ skill.level }}%</span>
                                    </div>
                                    <div class="skill-bar">
                                        <div class="skill-progress" :data-width="skill.level + '%'"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Projects Section -->
        <section id="projects" class="section-padding" style="background: linear-gradient(135deg, #111111 0%, #2F2F2F 100%);">
            <div class="container mx-auto px-6">
                <div class="text-center mb-16">
                    <div class="section-badge mb-6">
                        <span>💼 Portfolio</span>
                    </div>
                    <h2 class="section-title" ref="projectsTitle" style="color: #F6F6F6;">
                        Meine Projekte
                    </h2>
                </div>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div v-for="(project, index) in projects" :key="project.title"
                         :ref="setProjectCardRef(index)"
                         class="project-card">
                        <div class="project-card-inner">
                            <div class="project-header">
                                <div class="project-icon">{{ project.icon }}</div>
                            </div>
                            <div class="project-content">
                                <h3 class="project-title">{{ project.title }}</h3>
                                <p class="project-description">{{ project.description }}</p>
                                <div class="project-tech">
                  <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
                    {{ tech }}
                  </span>
                                </div>
                                <button class="project-btn">
                                    <span>Projekt ansehen</span>
                                    <svg class="btn-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Timeline Section -->
        <section id="timeline" class="section-padding" style="background: linear-gradient(135deg, #F6F6F6 0%, #FFCB74 100%);">
            <div class="container mx-auto px-6">
                <div class="text-center mb-16">
                    <div class="section-badge mb-6">
                        <span>🎯 Mein Werdegang</span>
                    </div>
                    <h2 class="section-title" ref="timelineTitle" style="color: #111111;">
                        Mein Weg
                    </h2>
                </div>
                <div class="max-w-4xl mx-auto">
                    <div class="timeline-container relative">
                        <div class="timeline-line"></div>
                        <div v-for="(item, index) in timeline" :key="index"
                             :ref="setTimelineItemRef(index)"
                             class="timeline-item">
                            <div class="timeline-dot"></div>
                            <div class="timeline-content" :class="index % 2 === 0 ? 'timeline-left' : 'timeline-right'">
                                <div class="timeline-card">
                                    <div class="timeline-date">{{ item.period }}</div>
                                    <h3 class="timeline-title">{{ item.position }}</h3>
                                    <p class="timeline-company">{{ item.company }}</p>
                                    <p class="timeline-description">{{ item.description }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ChevronDown } from "lucide-vue-next";

// Typing effect
const currentText = ref('')
const texts = ['Frontend Entwickler', 'Frontend Designer', 'UI/UX Enthusiast']
let textIndex = 0
let charIndex = 0
let isDeleting = false

// Refs for animations
const heroContent = ref<HTMLElement>()
const aboutText = ref<HTMLElement>()
const aboutImage = ref<HTMLElement>()
const skillsTitle = ref<HTMLElement>()
const skillCards = ref<(HTMLElement | null)[]>([])
const projectsTitle = ref<HTMLElement>()
const projectCards = ref<(HTMLElement | null)[]>([])
const timelineTitle = ref<HTMLElement>()
const timelineItems = ref<(HTMLElement | null)[]>([])

// Helper functions für ref-Zuweisungen
const setSkillCardRef = (index: number) => (el: HTMLElement | null) => {
    if (skillCards.value) {
        skillCards.value[index] = el
    }
}

const setProjectCardRef = (index: number) => (el: HTMLElement | null) => {
    if (projectCards.value) {
        projectCards.value[index] = el
    }
}

const setTimelineItemRef = (index: number) => (el: HTMLElement | null) => {
    if (timelineItems.value) {
        timelineItems.value[index] = el
    }
}

// Data
const skills = ref([
    {
        title: 'Frontend',
        icon: '🎨',
        items: [
            { name: 'Vue.js', level: 90 },
            { name: 'React', level: 85 },
            { name: 'TypeScript', level: 88 },
            { name: 'JavaScript', level: 92 }
        ]
    },
    {
        title: 'Styling',
        icon: '💅',
        items: [
            { name: 'CSS3', level: 90 },
            { name: 'Tailwind CSS', level: 85 },
            { name: 'SCSS', level: 80 },
            { name: 'Responsive Design', level: 95 }
        ]
    },
    {
        title: 'Tools',
        icon: '🛠️',
        items: [
            { name: 'Git', level: 85 },
            { name: 'Webpack', level: 75 },
            { name: 'Vite', level: 80 },
            { name: 'Figma', level: 70 }
        ]
    }
])

const projects = ref([
    {
        title: 'E-Commerce Platform',
        description: 'Moderne E-Commerce Lösung mit Vue.js und TypeScript',
        icon: '🛒',
        technologies: ['Vue.js', 'TypeScript', 'Tailwind CSS']
    },
    {
        title: 'Dashboard App',
        description: 'Interaktives Dashboard für Datenvisualisierung',
        icon: '📊',
        technologies: ['React', 'Chart.js', 'Material-UI']
    },
    {
        title: 'Portfolio Website',
        description: 'Responsive Portfolio mit modernen Animationen',
        icon: '🎨',
        technologies: ['Vue.js', 'CSS3', 'Framer Motion']
    }
])

const timeline = ref([
    {
        position: 'Web Developer',
        company: 'Flyeralarm Vertriebs GmbH',
        period: 'Juli 2024 - Mai 2025',
        description: 'Entwicklung und Wartung von Webanwendungen mit modernen Frontend-Technologien. Fokus auf Performance-Optimierung und User Experience.'
    },
    {
        position: 'Junior Web Developer',
        company: 'Flyeralarm Digital GmbH',
        period: 'Juni 2023 - Juli 2024',
        description: 'Mitarbeit an verschiedenen Web-Projekten, Implementierung von responsiven Designs und Integration von APIs.'
    },
    {
        position: 'Ausbildung - Fachinformatiker für Anwendungsentwicklung',
        company: 'Flyeralarm Vertriebs GmbH',
        period: 'September 2020 - Juni 2023',
        description: 'Umfassende Ausbildung in der Softwareentwicklung mit Schwerpunkt auf Web-Technologien und Datenbanken.'
    }
])

// Typing effect function
const typeText = () => {
    const current = texts[textIndex]

    if (isDeleting) {
        currentText.value = current.substring(0, charIndex - 1)
        charIndex--
    } else {
        currentText.value = current.substring(0, charIndex + 1)
        charIndex++
    }

    let typeSpeed = isDeleting ? 50 : 100

    if (!isDeleting && charIndex === current.length) {
        typeSpeed = 2000
        isDeleting = true
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false
        textIndex = (textIndex + 1) % texts.length
    }

    setTimeout(typeText, typeSpeed)
}

// Intersection Observer for animations
const observeElements = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in')
            }
        })
    }, { threshold: 0.1 })

    const elementsToObserve = [
        aboutText.value,
        aboutImage.value,
        skillsTitle.value,
        ...skillCards.value.filter(Boolean),
        projectsTitle.value,
        ...projectCards.value.filter(Boolean),
        timelineTitle.value,
        ...timelineItems.value.filter(Boolean)
    ].filter((el): el is HTMLElement => el !== null && el !== undefined)

    elementsToObserve.forEach(el => observer.observe(el))
}

const animateSkillBars = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const skillBars = entry.target.querySelectorAll('.skill-progress')
                skillBars.forEach((bar) => {
                    const targetWidth = bar.getAttribute('data-width') || '0%'
                    ;(bar as HTMLElement).style.width = targetWidth
                })
            }
        })
    }, { threshold: 0.1 })

    skillCards.value.filter(Boolean).forEach(card => {
        if (card) observer.observe(card)
    })
}

const setupSmoothScrolling = () => {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault()
            const targetId = link.getAttribute('href')?.substring(1)
            const targetElement = document.getElementById(targetId || '')
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' })
            }
        })
    })
}

onMounted(() => {
    typeText()
    observeElements()
    animateSkillBars()
    setupSmoothScrolling()
})
</script>

<style scoped>
.portfolio {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    overflow-x: hidden;
}

/* Modern Header */
.header-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 50;
    display: flex;
    justify-content: center;
    padding: 1.5rem 2rem 0;
}

.modern-header {
    background: rgba(246, 246, 246, 0.1);
    backdrop-filter: blur(20px);
    border-radius: 2rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 800px;
}

.logo {
    display: flex;
    align-items: center;
}

.logo-text {
    font-size: 1.5rem;
    font-weight: 800;
    background: linear-gradient(135deg, #FFCB74 0%, #111111 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.nav-menu {
    display: flex;
    gap: 2rem;
    list-style: none;
    margin: 0;
    padding: 0;
}

.nav-link {
    @apply text-edel-dark;
    font-weight: 500;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    transition: all 0.3s ease;
    position: relative;
}

.nav-link:hover {
    background: rgba(255, 203, 116, 0.1);
    @apply text-edel-bright;
    transform: translateY(-2px);
}

/* Hero Section */
.hero-section {
    padding-top: 120px;
    position: relative;
    background: linear-gradient(135deg, #F6F6F6 0%, #FFCB74 50%, #F6F6F6 100%);
}

.hero-bg {
    background: radial-gradient(circle at 20% 80%, rgba(255, 203, 116, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(17, 17, 17, 0.1) 0%, transparent 50%);
}

.hero-shapes {
    pointer-events: none;
}

.shape {
    position: absolute;
    border-radius: 50%;
    opacity: 0.1;
}

.shape-1 {
    width: 300px;
    height: 300px;
    background: linear-gradient(135deg, #FFCB74, #111111);
    top: 10%;
    left: -10%;
    animation: float 6s ease-in-out infinite;
}

.shape-2 {
    width: 200px;
    height: 200px;
    background: linear-gradient(135deg, #111111, #FFCB74);
    top: 60%;
    right: -5%;
    animation: float 8s ease-in-out infinite reverse;
}

.shape-3 {
    width: 150px;
    height: 150px;
    background: linear-gradient(135deg, #2F2F2F, #FFCB74);
    top: 30%;
    right: 20%;
    animation: float 7s ease-in-out infinite;
}

.floating-orb {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 203, 116, 0.2);
    backdrop-filter: blur(10px);
}

.orb-1 {
    width: 60px;
    height: 60px;
    top: 20%;
    left: 10%;
    animation: float 5s ease-in-out infinite;
}

.orb-2 {
    width: 40px;
    height: 40px;
    top: 70%;
    left: 80%;
    animation: float 7s ease-in-out infinite reverse;
}

.orb-3 {
    width: 80px;
    height: 80px;
    top: 40%;
    left: 70%;
    animation: float 6s ease-in-out infinite;
}

@keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
}

.hero-badge {
    display: inline-block;
    background: rgba(255, 203, 116, 0.2);
    border: 1px solid rgba(255, 203, 116, 0.3);
    border-radius: 2rem;
    padding: 0.5rem 1.5rem;
    font-size: 0.9rem;
    color: #111111;
    backdrop-filter: blur(10px);
}

.hero-title {
    font-size: clamp(3rem, 8vw, 6rem);
    font-weight: 800;
    background: linear-gradient(135deg, #111111 0%, #2F2F2F 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1.1;
}

.hero-subtitle {
    font-size: clamp(1.5rem, 4vw, 2.5rem);
    font-weight: 600;
    color: #2F2F2F;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.typing-cursor {
    animation: blink 1s infinite;
    color: #FFCB74;
}

@keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
}

.hero-description {
    font-size: 1.2rem;
    color: #2F2F2F;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
}

.hero-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
}

.btn-primary {
    background: linear-gradient(135deg, #FFCB74 0%, #111111 100%);
    color: white;
    border: none;
    padding: 1rem 2rem;
    border-radius: 2rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
    cursor: pointer;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(255, 203, 116, 0.4);
}

.btn-secondary {
    background: transparent;
    color: #111111;
    border: 2px solid #111111;
    padding: 1rem 2rem;
    border-radius: 2rem;
    font-weight: 600;
    transition: all 0.3s ease;
    cursor: pointer;
}

.btn-secondary:hover {
    background: #111111;
    color: #F6F6F6;
    transform: translateY(-2px);
}

.btn-icon, .btn-arrow {
    width: 1.2rem;
    height: 1.2rem;
}

/* Section Styles */
.section-padding {
    padding: 8rem 0;
}

.section-badge {
    display: inline-block;
    background: rgba(255, 203, 116, 0.2);
    border: 1px solid rgba(255, 203, 116, 0.3);
    border-radius: 2rem;
    padding: 0.5rem 1.5rem;
    font-size: 0.9rem;
    color: #111111;
    backdrop-filter: blur(10px);
}

.section-title {
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 800;
    line-height: 1.2;
}

/* Stats Grid */
.stats-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 2rem;
}

.stat-item {
    text-align: center;
}

.stat-number {
    font-size: 2.5rem;
    font-weight: 800;
    color: #FFCB74;
    line-height: 1;
}

.stat-label {
    font-size: 0.9rem;
    color: #F6F6F6;
    opacity: 0.8;
    margin-top: 0.5rem;
}

/* About Card */
.about-card {
    position: relative;
    background: rgba(246, 246, 246, 0.1);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 203, 116, 0.2);
    border-radius: 2rem;
    padding: 2rem;
    overflow: hidden;
}

.card-glow {
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 203, 116, 0.1) 0%, transparent 70%);
    animation: rotate 10s linear infinite;
}

@keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.card-content {
    position: relative;
    z-index: 2;
    text-align: center;
}

.profile-image {
    position: relative;
    width: 120px;
    height: 120px;
    margin: 0 auto 2rem;
}

.profile-bg {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #FFCB74 0%, #111111 100%);
    border-radius: 50%;
    animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

.profile-icon {
    position: relative;
    z-index: 2;
    font-size: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.card-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #F6F6F6;
    margin-bottom: 1rem;
}

.card-description {
    color: #F6F6F6;
    opacity: 0.8;
    margin-bottom: 1.5rem;
}

.tech-stack {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    flex-wrap: wrap;
}

.tech-item {
    background: rgba(255, 203, 116, 0.2);
    color: #FFCB74;
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
    font-size: 0.8rem;
    font-weight: 500;
}

/* Skill Cards */
.skill-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 203, 116, 0.2);
    border-radius: 2rem;
    padding: 2rem;
    transition: all 0.3s ease;
    opacity: 0;
    transform: translateY(30px);
}

.skill-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(255, 203, 116, 0.2);
}

.skill-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.skill-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #111111;
    margin-bottom: 1.5rem;
}

.skills-list {
    space-y: 1rem;
}

.skill-item {
    margin-bottom: 1rem;
}

.skill-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
}

.skill-name {
    color: #111111;
    font-weight: 500;
}

.skill-percentage {
    color: #FFCB74;
    font-weight: 600;
}

.skill-bar {
    height: 6px;
    background: rgba(17, 17, 17, 0.1);
    border-radius: 3px;
    overflow: hidden;
}

.skill-progress {
    height: 100%;
    background: linear-gradient(90deg, #FFCB74 0%, #111111 100%);
    width: 0;
    transition: width 1.5s ease-out;
    border-radius: 3px;
}

/* Project Cards */
.project-card {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease-out;
}

.project-card-inner {
    background: rgba(246, 246, 246, 0.1);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 203, 116, 0.2);
    border-radius: 2rem;
    padding: 2rem;
    height: 100%;
    transition: all 0.3s ease;
}

.project-card:hover .project-card-inner {
    transform: translateY(-10px);
    box-shadow: 0 25px 50px rgba(255, 203, 116, 0.3);
}

.project-header {
    text-align: center;
    margin-bottom: 1.5rem;
}

.project-icon {
    font-size: 4rem;
    background: linear-gradient(135deg, #FFCB74 0%, #111111 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.project-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #F6F6F6;
    margin-bottom: 1rem;
}

.project-description {
    color: #F6F6F6;
    opacity: 0.8;
    margin-bottom: 1.5rem;
    line-height: 1.6;
}

.project-tech {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-bottom: 2rem;
}

.tech-tag {
    background: rgba(255, 203, 116, 0.2);
    color: #FFCB74;
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
    font-size: 0.8rem;
    font-weight: 500;
}

.project-btn {
    background: linear-gradient(135deg, #FFCB74 0%, #111111 100%);
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 1.5rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
    cursor: pointer;
    width: 100%;
    justify-content: center;
}

.project-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(255, 203, 116, 0.4);
}

/* Timeline */
.timeline-container {
    position: relative;
    padding: 2rem 0;
}

.timeline-line {
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, #FFCB74 0%, #111111 100%);
    transform: translateX(-50%);
}

.timeline-item {
    position: relative;
    margin-bottom: 4rem;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease-out;
}

.timeline-dot {
    position: absolute;
    left: 50%;
    top: 2rem;
    width: 16px;
    height: 16px;
    background: #FFCB74;
    border: 4px solid #F6F6F6;
    border-radius: 50%;
    transform: translateX(-50%);
    z-index: 2;
    box-shadow: 0 0 20px rgba(255, 203, 116, 0.5);
}

.timeline-content {
    width: 45%;
}

.timeline-left {
    margin-right: 55%;
    text-align: right;
}

.timeline-right {
    margin-left: 55%;
    text-align: left;
}

.timeline-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 203, 116, 0.2);
    border-radius: 1.5rem;
    padding: 2rem;
    position: relative;
}

.timeline-date {
    color: #FFCB74;
    font-weight: 600;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
}

.timeline-title {
    font-size: 1.3rem;
    font-weight: 700;
    color: #111111;
    margin-bottom: 0.5rem;
}

.timeline-company {
    color: #2F2F2F;
    font-weight: 600;
    margin-bottom: 1rem;
}

.timeline-description {
    color: #2F2F2F;
    line-height: 1.6;
    font-size: 0.9rem;
}

/* Animations */
.animate-slide-left {
    opacity: 0;
    transform: translateX(-50px);
    transition: all 0.8s ease-out;
}

.animate-slide-right {
    opacity: 0;
    transform: translateX(50px);
    transition: all 0.8s ease-out;
}

.animate-in {
    opacity: 1 !important;
    transform: translateX(0) translateY(0) !important;
}

/* Responsive */
@media (max-width: 768px) {
    .nav-menu {
        gap: 1rem;
    }

    .nav-link {
        padding: 0.25rem 0.5rem;
        font-size: 0.9rem;
    }

    .hero-buttons {
        flex-direction: column;
        align-items: center;
    }

    .stats-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
    }

    .timeline-line {
        display: none;
    }

    .timeline-left,
    .timeline-right {
        width: 100%;
        margin: 0;
        text-align: center;
    }

    .timeline-dot {
        display: none;
    }
}
</style>