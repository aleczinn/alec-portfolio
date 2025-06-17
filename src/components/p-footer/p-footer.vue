<template>
    <footer class="py-6 backdrop-blur-md bg-black/60 border-t border-white/10">
        <div class="mx-auto max-w-portfolio px-6">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <p class="text-sm text-gray-400 mb-4 md:mb-0">© 2025 Alec. Alle Rechte vorbehalten.</p>

                <div class="flex space-x-6">
                    <a v-for="social in socialLinks" :key="social.name" :href="social.url" target="_blank"
                       rel="noopener noreferrer"
                       class="text-gray-400 hover:text-new-lightest transition-colors duration-300">
                        <component :is="social.icon" class="w-5 h-5"/>
                        <span class="sr-only">{{ social.name }}</span>
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
interface Props {
    socialLinks: any
}

const props = withDefaults(defineProps<Props>(), {
    socialLinks: [],
})
</script>

<style scoped lang="postcss">

</style>