<template>
    <header class="header">
        <div class="header-container">
            <div class="block lg:hidden hover:cursor-pointer" @click="toggleMobileMenu">
                <div class="hamburger-menu" :class="{ 'is-open': isMenuOpen }">
                    <span class="line line-1"></span>
                    <span class="line line-2"></span>
                    <span class="line line-3"></span>
                </div>
            </div>

            <nav class="hidden lg:block">
                <ul class="flex flex-row justify-center items-center gap-12">
                    <li v-for="(item, index) in navItems" :key="index" class="">
                        <a :href="`#${item.id}`" class="link" :class="{'active': activeSection === item.id}">
                            {{ item.name }}
                        </a>
                    </li>
                </ul>
            </nav>

            <div class="ml-12" @click="toggleLanguage">
                <GlobeIcon></GlobeIcon>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Globe as GlobeIcon } from "lucide-vue-next"

interface Props {
    navItems: any
    activeSection: string
}

withDefaults(defineProps<Props>(), {
    navItems: [],
    activeSection: ''
})

const isMenuOpen = ref(false)

const emit = defineEmits(['toggle-language'])

const toggleLanguage = () => {
    emit('toggle-language')
}

const toggleMobileMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
    console.log("toggleMobileMenu", isMenuOpen.value);
}

const closeMobileMenu = () => {
    isMenuOpen.value = false
}
</script>

<style scoped lang="postcss">
.header {
    @apply sticky top-0 bg-black/80 backdrop-blur-sm px-6 py-6 z-50;
    @apply lg:fixed lg:top-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:rounded-3xl lg:w-auto lg:min-w-max lg:bg-black/60 lg:border-2 lg:border-new/20;
    @apply shadow-lg;
}

.header .header-container {
    @apply flex flex-row justify-between;
}

.link {
    @apply text-base transition-all duration-300;
}

.active {
    @apply text-new-light font-bold;
}

.hamburger-menu {
    @apply w-6 h-6 flex flex-col justify-center items-center cursor-pointer;
    gap: 4px;
}

.line {
    @apply w-[1.375rem] h-0.5 bg-white rounded-full;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform-origin: center;
}

/* Animation zum X */
.hamburger-menu.is-open .line-1 {
    transform: translateY(6px) rotate(45deg);
}

.hamburger-menu.is-open .line-2 {
    opacity: 0;
    transform: scaleX(0);
}

.hamburger-menu.is-open .line-3 {
    transform: translateY(-6px) rotate(-45deg);
}
</style>