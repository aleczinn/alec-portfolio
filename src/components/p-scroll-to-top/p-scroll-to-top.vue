<template>
    <a @click="scrollToTop"
       class="fixed bottom-10 right-8 w-14 h-14 rounded-full bg-new-light/60 backdrop-blur-md flex justify-center items-center transition-all duration-300 hover:bg-new-lightest hover:cursor-pointer z-50"
       :class="{ 'opacity-0 pointer-events-none': !showScrollTop, 'opacity-100': showScrollTop }"
    >
        <chevron-up-icon class="w-6 h-6 text-white mb-[0.125rem]"/>
    </a>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { ChevronUp as ChevronUpIcon } from 'lucide-vue-next';

const showScrollTop = ref<boolean>(false);

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

const checkScroll = () => {
    showScrollTop.value = window.scrollY > 250;
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