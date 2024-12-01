<template>
    <div class="flex-1 bg-cover bg-center backgroundH">
        <InfoFaíscas />
    </div>

</template>

<script>
import InfoFaíscas from '@/components/ComponentsDecks/InfoFaíscas.vue';


export default {
    name: 'EngrenagensE',

    components: {
        InfoFaíscas

    }
};
</script>

<style>
.backgroundH{
    background-image: url('@/assets/Blueeyes.png');
}
</style>