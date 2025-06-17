<template>
    <div class="flex flex-col h-screen">
        <main class="flex-1">
            <section id="hero" class="section-hero">
                <div class="hero-container">
                    <h1 class="hero-title">Alec Zinn</h1>
                </div>

                <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <ChevronDown class="w-8 h-8 text-blackwhite-primary" />
                </div>
            </section>

            <section class="section-about">
                <div class="max-w-portfolio mx-auto">
                    <h2 class="text-3xl text-blackwhite-white font-medium mb-6">Über mich</h2>
                    <p class="text-blackwhite-gray">text</p>
                </div>
            </section>

            <section class="section-skills">
                <div class="max-w-portfolio mx-auto">
                    <h2 class="text-3xl text-blackwhite-black font-medium mb-6">Skills</h2>
                    <p class="text-blackwhite-gray">text</p>
                </div>
            </section>

            <section class="section-projects">
                <div class="max-w-portfolio mx-auto">
                    <h2 class="text-3xl text-blackwhite-white font-medium mb-6">Meine Projekte</h2>
                    <p class="text-blackwhite-gray">text</p>
                </div>
            </section>

            <section class="section-experience">
                <div class="max-w-portfolio mx-auto">
                    <h2 class="text-3xl text-blackwhite-black font-medium mb-6">Erfahrung</h2>
                    <p class="text-blackwhite-gray">text</p>
                </div>
            </section>
        </main>
    </div>
</template>

<script lang="ts" setup>

import { ChevronDown } from "lucide-vue-next";
import { PHeader } from "../components/p-header";
import { PFooter } from "../components/p-footer";
</script>

<style lang="postcss" scoped>
.section-hero {
    @apply relative min-h-screen flex items-center justify-center bg-blackwhite-black;
}

.hero-container {
    @apply relative text-center px-6;
}

.hero-title {
    @apply mb-6;
    font-size: clamp(3rem, 8vw, 6rem);
    font-weight: 800;
    background: linear-gradient(135deg, #FFCB74 0%, #FEFEFE 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1.1;
}

.section-about {
    @apply bg-blackwhite-black py-12;
    height: 500px;
}

.section-skills {
    @apply bg-blackwhite-white py-12;
    height: 500px;
}

.section-projects {
    @apply bg-blackwhite-black py-12;
    height: 500px;
}

.section-experience {
    @apply bg-blackwhite-white py-12;
    height: 500px;
}
</style>