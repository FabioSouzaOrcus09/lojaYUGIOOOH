<template>
    <div class="flex-1 bg-cover bg-center backgroundE">
        <InfoCyber />
    </div>

</template>

<script>
import InfoCyber from '@/components/ComponentsDecks/InfoCyber.vue';

export default {
    name: 'CyberC',

    components: {
        InfoCyber

    }
};
</script>

<style>
.backgroundE {
    background-image: url('@/assets/Blueeyes.png');
}
</style>