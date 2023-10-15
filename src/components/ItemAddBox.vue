<template>
    <div class="flex fixed bottom-0 w-full max-w-container pb-12 pt-2 bg-white px-4 md:px-0">
        <TextField name="todo" placeholder="Enter a to do" :value="inputValue" class="mr-4" @update:value="handleUpdate"
            @click:enter="handleClick" />
        <Button @handle:click="handleClick" :is-disabled="isDisabled" primary>Add Item</Button>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import TextField from '@/components/common/TextField.vue';
import Button from '@/components/common/Button.vue'

export default defineComponent({
    name: 'ItemAddBox',
    components: {
        TextField,
        Button
    },
    emits: ['add:item'],
    setup(_, { emit }) {
        const inputValue = ref<string>('')
        const isDisabled = computed<boolean>(() => !inputValue.value)

        const handleUpdate = (value: string) => {
            inputValue.value = value
        }

        const handleClick = () => {
            if (inputValue.value) {
                emit('add:item', inputValue.value);
                inputValue.value = '';
            }
        }

        return {
            inputValue,
            isDisabled,
            handleUpdate,
            handleClick
        }
    },
})
</script>