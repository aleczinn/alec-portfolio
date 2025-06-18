<template>
    <section class="relative min-h-screen flex flex-col justify-center">
        <div class="mx-auto max-w-portfolio px-6 w-full">
            <h2 class="text-2xl md:text-4xl font-light mb-2">{{ t('hero.greeting') }}</h2>
            <h1 class="text-4xl md:text-7xl font-bold mb-8 md:mb-4">Frontend Entwickler</h1>
            <p class="text-lg md:text-xl max-w-[60ch] mb-12">{{ t('hero.description') }}</p>
            <div class="flex gap-6">
                <a href="#about"
                   class="px-6 py-4 bg-white text-black rounded-3xl font-medium shadow flex items-center justify-center transition-colors duration-300 hover:bg-new-light hover:text-white">
                    {{ t('hero.about') }}
                </a>

                <a href="#projects"
                   class="px-6 py-4 border-2 border-white rounded-3xl font-medium shadow flex items-center justify-center transition-colors duration-300 hover:border-new-light">
                    {{ t('hero.viewProjects') }}
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

        <div class="absolute bottom-8 left-1/2 transition-all duration-300 transform -translate-x-1/2 animate-bounce" :class="{'opacity-0': showLookDownArrow}">
            <ChevronDown class="w-8 h-8 text-white" />
        </div>
    </section>
</template>

<script setup lang="ts">
import { ChevronDown } from "lucide-vue-next";
import { useI18n } from "vue-i18n";
import { onMounted, onUnmounted, ref } from "vue";

const { t } = useI18n()

const showLookDownArrow = ref(false);

interface Props {
    socialLinks: any
}

const props = withDefaults(defineProps<Props>(), {
    socialLinks: [],
})

const checkScroll = () => {
    showLookDownArrow.value = window.scrollY > 50;
};

onMounted(() => {
    window.addEventListener('scroll', checkScroll);
    checkScroll();
});

onUnmounted(() => {
    window.removeEventListener('scroll', checkScroll);
});
</script>

<style scoped lang="postcss">

</style>