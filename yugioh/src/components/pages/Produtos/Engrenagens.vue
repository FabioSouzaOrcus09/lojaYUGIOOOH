<template>
    <div class="flex-1 bg-cover bg-center backgroundG">
        <InfoEngrenagens />
    </div>

</template>

<script>
import InfoEngrenagens from '@/components/ComponentsDecks/InfoEngrenagens.vue';


export default {
    name: 'EngrenagensE',

    components: {
        InfoEngrenagens

    }
};
</script>

<style>
.backgroundG{
    background-image: url('@/assets/Blueeyes.png');
}
</style>