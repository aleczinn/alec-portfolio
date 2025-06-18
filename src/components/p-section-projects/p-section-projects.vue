<template>
    <section class="py-32">
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
</template>

<script setup lang="ts">
import {
    Github as GithubIcon,
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon,
} from 'lucide-vue-next';
import { computed, ref } from "vue";

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
</script>

<style scoped lang="postcss">

</style>