<template>
    <nav class="h-20 flex items-end border-b text-gray px-4 md:px-0">
        <router-link v-for="tab in tabs" :key="'tab ' + tab.label" :to="tab.url" :class="{
            'text-xl font-bold mr-8': true,
            'text-black': activeRoute === tab.name,
        }">
            {{ tab.label }}
            <hr :class="{
                'border-blue border-2 rounded-full mt-3': activeRoute === tab.name,
                'border-none mt-4': activeRoute !== tab.name
            }" />
        </router-link>
    </nav>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import { useRoute } from "vue-router"

export default defineComponent({
    name: "Header",
    setup() {
        const route = useRoute()
        const activeRoute = computed(() => route.name as string)

        const tabs: Tab[] = [{
            name: 'TodoList',
            label: 'To Do List',
            url: '/to-do-list'
        }, {
            name: 'Backlog',
            label: 'Backlog',
            url: '/backlog'
        }]

        return {
            tabs,
            activeRoute
        }
    },
})
</script>