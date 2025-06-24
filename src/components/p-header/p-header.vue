<template>
    <header class="header">
        <div class="header-container">
            <div class="block lg:hidden hover:cursor-pointer" @click="toggleMobileMenu">
                <MenuIcon></MenuIcon>
            </div>

            <nav class="hidden lg:block">
                <ul class="flex flex-row justify-center items-center gap-12">
                    <li v-for="(item, index) in navItems" :key="index" class="">
                        <a :href="`#${item.id}`">
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
import { Globe as GlobeIcon, Menu as MenuIcon, X as XIcon } from "lucide-vue-next"
import { useI18n } from "vue-i18n"

const { t } = useI18n()

interface Props {
    navItems: any
    activeSection: string
}

const props = withDefaults(defineProps<Props>(), {
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
    @apply sticky top-0 bg-black/40 px-6 py-6 z-50;
    @apply lg:absolute lg:top-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:rounded-3xl lg:w-auto lg:min-w-max;
    @apply shadow-lg;
}

.header .header-container {
    @apply flex flex-row justify-between;
}
</style>