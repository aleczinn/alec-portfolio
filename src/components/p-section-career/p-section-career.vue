<template>
    <section id="career" class="py-32">
        <div class="mx-auto max-w-portfolio px-6">
            <h2 class="text-3xl md:text-4xl font-bold mb-16 text-center">Mein Werdegang</h2>

            <div class="relative">
                <!-- Timeline Line -->
                <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/30"></div>

                <div class="relative">
                    <div v-for="(job, index) in career" :key="index"
                         :class="['mb-16 grid md:grid-cols-2 gap-8 relative',
                            index % 2 === 0 ? 'md:text-right' : '']">
                        <!-- Timeline Dot -->
                        <div
                            class="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-blue-500 border-4 border-white"></div>

                        <!-- Content -->
                        <div :class="[index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2']">
                            <div
                                class="backdrop-blur-md bg-black/30 border border-white/10 rounded-xl p-6 h-full">
                    <span class="inline-block px-3 py-1 rounded-full bg-blue-600/30 text-sm mb-3">
                      {{ job.period }}
                    </span>
                                <h3 class="text-xl font-bold mb-2">{{ job.title }}</h3>
                                <p class="text-lg mb-2">{{ job.company }}</p>
                                <p class="opacity-80">{{ job.description }}</p>
                            </div>
                        </div>

                        <!-- Empty Column for Layout -->
                        <div :class="[index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1']"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n()

const career = [
    {
        title: 'Web Developer',
        company: 'Flyeralarm Vertriebs GmbH',
        period: 'Juli 2024 - Mai 2025',
        description: 'Entwicklung und Wartung von Webanwendungen mit modernen Frontend-Technologien.'
    },
    {
        title: 'Junior Web Developer',
        company: 'Flyeralarm Digital GmbH',
        period: 'Juni 2023 - Juli 2024',
        description: 'Implementierung von Frontend-Komponenten und Zusammenarbeit mit dem Design-Team.'
    },
    {
        title: 'Ausbildung - Fachinformatiker für Anwendungsentwicklung',
        company: 'Flyeralarm Vertriebs GmbH',
        period: 'September 2020 - Juni 2023',
        description: 'Umfassende Ausbildung in der Softwareentwicklung mit Fokus auf Webtechnologien.'
    }
];
</script>

<style scoped lang="postcss">

</style>