<template>
    <section class="section">
        <div class="section-container">
            <slot></slot>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="postcss">
.section {
    @apply py-16;
}

.section-container {
    @apply mx-auto max-w-portfolio px-6;
}
</style>