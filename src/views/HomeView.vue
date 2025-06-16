<template>
    <div class="flex flex-col h-screen">
        <p-header></p-header>

        <main class="flex-1">
            <section id="hero" class="section-hero">
                <div class="hero-container">
                    <h1 class="hero-title">Alec Zinn</h1>
                </div>

                <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <ChevronDown class="w-8 h-8 text-edel-gray" />
                </div>
            </section>

            <section class="section-about">
                <p>about</p>
            </section>

            <section class="section-skills">
                <p>skills</p>
            </section>

            <section class="section-projects">
                <p>projects</p>
            </section>

            <section class="section-experience">
                <p>experience</p>
            </section>
        </main>

        <p-footer></p-footer>
    </div>
</template>

<script lang="ts" setup>

import { ChevronDown } from "lucide-vue-next";
import { PHeader } from "@//components/p-header";
import { PFooter } from "@//components/p-footer";
</script>

<style lang="postcss" scoped>
.section-hero {
    @apply relative min-h-screen flex items-center justify-center overflow-hidden;
}

.hero-container {
    @apply relative z-10 text-center px-6;
}

.hero-title {
    @apply mb-6;
    font-size: clamp(3rem, 8vw, 6rem);
    font-weight: 800;
    background: linear-gradient(135deg, #111111 0%, #2F2F2F 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1.1;
}

.hero-subtitle {
    font-size: clamp(1.5rem, 4vw, 2.5rem);
    font-weight: 600;
    color: #2F2F2F;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.section-about {
    @apply flex items-center justify-center text-4xl text-edel-bright;
    @apply bg-[#2F2F2F];
    height: 500px;
}

.section-skills {
    @apply flex items-center justify-center text-4xl text-edel-dark;
    @apply bg-white;
    height: 500px;
}

.section-projects {
    @apply flex items-center justify-center text-4xl text-edel-bright;
    @apply bg-[#2F2F2F];
    height: 500px;
}

.section-experience {
    @apply flex items-center justify-center text-4xl text-edel-dark;
    @apply bg-white;
    height: 500px;
}
</style>