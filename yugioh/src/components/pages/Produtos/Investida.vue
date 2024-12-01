<template>
    <div class="flex-1 bg-cover bg-center backgroundM">
        <InfoInvestida />
    </div>

</template>

<script>
import InfoInvestida from '@/components/ComponentsDecks/InfoInvestida.vue';




export default {
    name: 'InvestidaO',

    components: {
        InfoInvestida

    }
};
</script>

<style>
.backgroundM {
    background-image: url('@/assets/Blueeyes.png');

}
</style>