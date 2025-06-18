<template>
    <header class="fixed top-4 md:top-8 left-1/2 transform -translate-x-1/2 z-50 w-[calc(100%-2rem)] lg:w-auto max-w-[calc(100vw-2rem)]">
        <nav class="backdrop-blur-md bg-black/40 border-2 border-new/20 rounded-2xl md:rounded-3xl px-4 md:px-8 py-4 md:py-6 shadow-2xl">
            <ul class="flex items-center justify-center gap-2 md:gap-6">
                <li v-for="(item, index) in navItems" :key="index" class="flex-shrink-0">
                    <a :href="`#${item.id}`"
                       :class="[
                           'px-2 md:px-4 py-1 md:py-2 transition-all duration-300 text-sm md:text-base whitespace-nowrap block',
                           activeSection === item.id
                               ? 'text-new-light font-bold'
                               : 'text-white/80 hover:text-white font-normal'
                       ]">
                        {{ item.name }}
                    </a>
                </li>

                <li class="flex-shrink-0 ml-2 md:ml-0">
                    <a @click="handleToggleLanguage"
                       class="p-1 md:p-0 transition-all duration-300 text-white/80 hover:text-white hover:cursor-pointer block">
                        <component :is="GlobeIcon" class="w-5 h-5 md:w-[1.375rem] md:h-[1.375rem]"/>
                    </a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup lang="ts">
import { Globe as GlobeIcon } from "lucide-vue-next";
import { useI18n } from "vue-i18n";
const { t } = useI18n()

interface Props {
    navItems: any
    activeSection: string
}

const props = withDefaults(defineProps<Props>(), {
    navItems: [],
    activeSection: ''
})

const emit = defineEmits(['toggle-language'])

const handleToggleLanguage = () => {
    emit('toggle-language')
}
</script>

<style scoped lang="postcss">

</style>