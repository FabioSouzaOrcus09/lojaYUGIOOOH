<template>
    <div class="flex-1 bg-cover bg-center background01">
        <InfoFireKing/>
    </div>

</template>

<script>
import InfoFireKing from '@/components/ComponentsDecks/InfoFireKing.vue';



export default {
    name: 'FireKingS',

    components: {
        InfoFireKing

    }
};
</script>

<style>
.background01 {
    background-image: url('@/assets/Blueeyes.png');

}
</style>