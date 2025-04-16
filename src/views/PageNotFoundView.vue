<template>
    <div class="flex flex-col h-screen">
        <s-header></s-header>

        <main class="flex-1 flex flex-col items-center justify-center">
            <h2 class="text-gray text-4xl font-semibold mb-1">Die Seite wurde nicht gefunden!</h2>
            <p class="text-gray-darker">Bitte kehre zu einer gültigen Seite zurück</p>
        </main>

        <s-footer></s-footer>
    </div>
</template>

<script lang="ts" setup>
import SHeader from "../old-components/s-header/s-header.vue";
import SFooter from "../old-components/s-footer/s-footer.vue";
</script>

<style lang="scss" scoped>

</style>
