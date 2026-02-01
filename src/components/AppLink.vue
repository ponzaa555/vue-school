<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink , type RouterLinkProps } from 'vue-router';

const props = defineProps<RouterLinkProps>()
const isExternal = computed(() => {
    return typeof props.to === 'string' && props.to.startsWith("http")
})
const externalHref = computed(() => {
    return typeof props.to === 'string' ? props.to : ''
})
</script>

<template>
    <a v-if="isExternal" :href="externalHref" target="_blank" rel="noopener" class="external-link"><slot/></a>
    <RouterLink v-else v-bind="props" class="internal-link">
        <slot/>
    </RouterLink >
</template>