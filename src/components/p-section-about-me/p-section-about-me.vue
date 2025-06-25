<template>
    <p-section>
        <h2 class="text-3xl md:text-4xl font-bold mb-16 text-center">{{ t('about-me.title') }}</h2>

        <div class="grid grid-cols-1 lg:grid-cols-2">
            <div class="p-6 w-full">
                <div class="aspect-w-16 aspect-h-9">
                    <div class="w-full h-full rounded-2xl overflow-hidden bg-white/5">
                        <img src="/image-1.png" alt="Alec" class="w-full h-full object-cover" />
                    </div>
                </div>
            </div>

            <div class="p-6 w-full flex flex-col justify-center">
                <p class="text-lg mb-8">{{ t('about-me.text1')}}</p>
                <p class="text-lg mb-12">{{ t('about-me.text2')}}</p>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div v-for="(stat, index) in stats" :key="index"
                         class=" p-4 text-center">
                        <div class="text-3xl text-new-light font-bold mb-1">{{ stat.value }}</div>
                        <div class="text-sm text-white">{{ stat.label }}</div>
                    </div>
                </div>
            </div>
        </div>
    </p-section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { computed } from "vue";
import { PSection } from "../p-section";

const { t } = useI18n()

const stats = computed(() => [
    { value: '10+', label: t('about-me.java') },
    { value: '3+', label: t('about-me.frontend') },
    { value: '7+', label: t('about-me.projects') },
    { value: '100%', label: t('about-me.passion') }
]);
</script>

<style scoped lang="postcss">

</style>