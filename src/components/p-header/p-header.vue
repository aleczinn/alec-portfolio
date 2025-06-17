<template>
    <header class="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 flex flex-row gap-6">
        <nav class="backdrop-blur-md bg-black/40 border-2 border-new/20 rounded-3xl px-8 py-6 shadow-2xl">
            <ul class="flex space-x-10">
                <li v-for="(item, index) in navItems" :key="index">
                    <a :href="`#${item.id}`"
                       :class="['px-4 py-2 transition-all duration-300', activeSection === item.id ? 'text-new-light font-semibold' : 'text-white/80 hover:text-white font-normal']">
                        {{ item.name }}
                    </a>
                </li>
            </ul>
        </nav>

        <div
            class="backdrop-blur-md bg-black/40 border-2 border-new/20 rounded-3xl px-8 py-6 shadow-2xl hover:cursor-pointer hover:text-new-light"
            @click="handleToggleLanguage">
            <component :is="GlobeIcon" class="w-6 h-6"/>
        </div>
    </header>
</template>

<script setup lang="ts">
import { Globe as GlobeIcon } from "lucide-vue-next";

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