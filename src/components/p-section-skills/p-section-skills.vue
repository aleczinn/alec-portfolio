<template>
    <p-section>
        <h2 class="text-3xl md:text-4xl font-bold mb-16 text-center">{{ t('skills.title') }}</h2>

<!--        <div class="grid gap-12">-->
<!--            <div>-->
<!--                <h3 class="text-2xl font-semibold mb-8 flex items-center">-->
<!--                                <span class="w-8 h-8 mr-3 bg-blue-400/30 backdrop-blur-sm rounded-lg flex items-center justify-center">-->
<!--                                  <code-icon class="w-5 h-5"/>-->
<!--                                </span>-->
<!--                    Frontend Entwicklung-->
<!--                </h3>-->

<!--                <div class="grid grid-cols-2 md:grid-cols-4 gap-6">-->
<!--                    <div v-for="skill in frontendSkills" :key="skill.name"-->
<!--                         class="backdrop-blur-md bg-black/30 border border-white/10 rounded-xl p-6 transition-all duration-300 hover:bg-black/20 group">-->
<!--                        <div class="flex items-center mb-4">-->
<!--                            <component :is="skill.icon" class="w-6 h-6 mr-3"/>-->
<!--                            <h4 class="text-lg font-medium">{{ skill.name }}</h4>-->
<!--                        </div>-->
<!--                        <div class="h-2 bg-white/20 rounded-full overflow-hidden">-->
<!--                            <div-->
<!--                                class="h-full bg-gradient-to-r from-blue-400 to-blue-600 group-hover:from-blue-300 group-hover:to-blue-500 transition-all duration-500"-->
<!--                                :style="{ width: `${skill.level}%` }"></div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->

<!--            <div>-->
<!--                <h3 class="text-2xl font-semibold mb-8 flex items-center">-->
<!--                                <span-->
<!--                                    class="w-8 h-8 mr-3 bg-blue-400/30 backdrop-blur-sm rounded-lg flex items-center justify-center">-->
<!--                                    <server-icon class="w-5 h-5"/>-->
<!--                                </span>-->
<!--                    Weitere Technologien-->
<!--                </h3>-->

<!--                <div class="grid grid-cols-2 md:grid-cols-3 gap-6">-->
<!--                    <div v-for="skill in otherSkills" :key="skill.name"-->
<!--                         class="backdrop-blur-md bg-black/30 border border-white/10 rounded-xl p-6 transition-all duration-300 hover:bg-black/20 group">-->
<!--                        <div class="flex items-center mb-4">-->
<!--                            <component :is="skill.icon" class="w-6 h-6 mr-3"/>-->
<!--                            <h4 class="text-lg font-medium">{{ skill.name }}</h4>-->
<!--                        </div>-->
<!--                        <p class="text-sm opacity-80">{{ skill.years }} Jahre Erfahrung</p>-->
<!--                        <div class="h-2 mt-3 bg-white/20 rounded-full overflow-hidden">-->
<!--                            <div-->
<!--                                class="h-full bg-gradient-to-r from-blue-400 to-blue-600 group-hover:from-blue-300 group-hover:to-blue-500 transition-all duration-500"-->
<!--                                :style="{ width: `${skill.level}%` }"></div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
    </p-section>
</template>

<script setup lang="ts">
import {
    Code as CodeIcon,
    Server as ServerIcon,
} from 'lucide-vue-next';
import { useI18n } from "vue-i18n";
import { PSection } from "../p-section";

const { t } = useI18n()

const frontendSkills = [
    { name: 'Vue.js 3', level: 90, icon: CodeIcon },
    { name: 'TypeScript', level: 85, icon: CodeIcon },
    { name: 'Vite', level: 80, icon: CodeIcon },
    { name: 'Node.js', level: 75, icon: CodeIcon },
    { name: 'JavaScript', level: 95, icon: CodeIcon },
    { name: 'HTML', level: 95, icon: CodeIcon },
    { name: 'CSS', level: 90, icon: CodeIcon },
    { name: 'Tailwind CSS', level: 85, icon: CodeIcon }
];

const otherSkills = [
    { name: 'Java', level: 85, years: '10', icon: ServerIcon },
    { name: 'PHP', level: 60, years: '2', icon: ServerIcon },
    { name: 'Docker', level: 70, years: '1', icon: ServerIcon }
];
</script>

<style scoped lang="postcss">

</style>