<template>
    <div class="container max-w-container">
        <Header></Header>
        <router-view class="h-[calc(100%-80px)]"/>
    </div>
</template>

<script lang="ts" setup>
import Header from "@/components/layout/Header.vue"
import "@/assets/styles/index.css"
</script>