<template>
    <div class="flex-1 bg-cover bg-center backgroundB">
        <InfoGlaciais />
    </div>

</template>

<script>
import InfoGlaciais from '@/components/ComponentsDecks/InfoGlaciais.vue';


export default {
    name: 'GlaciaisS',

    components: {
        InfoGlaciais

    }
};
</script>

<style>
.backgroundB {
    background-image: url('@/assets/Blueeyes.png');
}
</style>