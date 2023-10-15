<template>
    <div class="flex w-full max-w-container mt-3 px-4 md:px-0">
        <TextField name="search" placeholder="Search" :value="searchText"
            @update:value="(val) => $emit('update:text', val)" />
        <Button @handle:click="$emit('sort:Name')" primary class="mx-4">Sort by Name</Button>
        <Button @handle:click="$emit('sort:Date')" primary>Sort by Date</Button>
    </div>
</template>

<script setup lang="ts">
import TextField from '@/components/common/TextField.vue';
import Button from '@/components/common/Button.vue'

defineProps(['searchText'])
defineEmits(['sort:Date', 'sort:Name', 'update:text'])
</script>