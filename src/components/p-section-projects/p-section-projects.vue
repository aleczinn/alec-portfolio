<template>
    <p-section>
        <h2 class="text-3xl md:text-4xl font-bold mb-16 text-center">{{ t('projects.title') }}</h2>

        <p-carousel :key="carouselKey"
                    @locale-changed="handleLocaleChange"
                    class="border-4 border-solid border-transparent"
                    :autoplay-delay="-1"
                    :infinite="true"
                    :arrows="true"
                    :dots="true"
                    :draggable="true"
                    transition-type="slide"
                    height="auto"
                    gap="3rem"
                    :slides-per-view="1"
                    :slides-to-scroll="1"
                    :responsive="{
                        md: {
                            slidesPerView: 1
                        },
                        lg: {
                            slidesPerView: 2
                        },
                        xl: {
                            slidesPerView: 2
                        },
                        '2xl': {
                            slidesPerView: 3
                        }
                    }"
        >
                <div class="bg-black/40 backdrop-blur-sm rounded-3xl border-1 border-new overflow-hidden" v-for="(project, index) in projects" :key="project.name">
                    <div class="aspect-w-16 aspect-h-9 overflow-hidden">
                        <img :src="project.image" :alt="project.name" class="object-top object-cover">
                    </div>
                    <!-- text container -->
                    <div class="p-6">
                        <h4 class="mb-2">{{ project.name }}</h4>
                        <p class="text-sm mb-4 text-[#DCDFDC] min-h-14">{{ project.description }}</p>
                        <div class="flex flex-row flex-wrap gap-2 mb-4">
                        <span v-for="(tag, _) in project.tags" :key="project.name + tag"
                              class="text-xs px-3 py-1 rounded-full bg-new-lightest text-white">
                            {{ tag }}
                        </span>
                        </div>
                        <a :href="project.link" target="_blank" rel="noopener noreferrer"
                           class="inline-flex flex-row items-center px-4 py-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full hover:bg-black/30 transition-all duration-300">
                            <github-icon class="w-4 h-4 mr-2"/>
                            GitHub
                        </a>
                    </div>
                </div>
        </p-carousel>
    </p-section>
</template>

<script setup lang="ts">
import {
    Github as GithubIcon,
} from 'lucide-vue-next';
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import { PSection } from "../p-section";
import { PCarousel } from "../p-carousel";

const { t } = useI18n()

const carouselKey = ref(0)

const handleLocaleChange = () => {
    console.log("LOCLALLSDAS");
    carouselKey.value++
}

const projects = computed(() => [
    {
        name: t('projects.projects.cookbook.name'),
        description: t('projects.projects.cookbook.description'),
        tags: ['Vue.js', 'Vite', 'TypeScript', 'Tailwind CSS', 'Node.js'],
        image: './projects/cookbook.jpg',
        link: 'https://github.com/aleczinn/cookbook'
    },
    {
        name: t('projects.projects.loki.name'),
        description: t('projects.projects.loki.description'),
        tags: ['Vue.js', 'Vite', 'TypeScript', 'Tailwind CSS', 'Node.js'],
        image: './projects/loki.jpg',
        link: 'https://github.com/aleczinn/loki'
    },
    {
        name: t('projects.projects.skyengine.name'),
        description: t('projects.projects.skyengine.description'),
        tags: ['Java', 'LWJGL', 'Gradle'],
        image: './projects/skyengine.jpg',
        link: 'https://bitbucket.org/__Sky__/skyengine/src/develop/'
    },
    {
        name: t('projects.projects.skyenginex.name'),
        description: t('projects.projects.skyenginex.description'),
        tags: ['Java', 'LWJGL', 'Gradle'],
        image: './projects/skyengine-x.jpg',
        link: 'https://github.com/aleczinn/skyengine-x'
    },
    {
        name: t('projects.projects.financemanager.name'),
        description: t('projects.projects.financemanager.description'),
        tags: ['Vue.js', 'Vite', 'TypeScript', 'Tailwind CSS', 'Node.js'],
        image: './projects/finance-manager.jpg',
        link: 'https://github.com/aleczinn/finance-manager'
    },
    {
        name: t('projects.projects.mediamanager.name'),
        description: t('projects.projects.mediamanager.description'),
        tags: ['Node.js', 'TypeScript', 'FFmpeg', 'Electron'],
        image: './projects/media-manager-cli.jpg',
        link: 'https://github.com/aleczinn/media-manager'
    },
]);
</script>

<style scoped lang="postcss">

</style>