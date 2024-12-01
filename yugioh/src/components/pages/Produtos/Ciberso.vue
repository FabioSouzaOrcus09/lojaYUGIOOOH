<template>
    <div class="flex-1 bg-cover bg-center backgroundU">
        <InfoCiberso/>
    </div>

</template>

<script>
import InfoCiberso from '@/components/ComponentsDecks/InfoCiberso.vue';


export default {
    name: 'DinosI',

    components: {
        InfoCiberso

    }
};
</script>

<style>
.backgroundU {
    background-image: url('@/assets/Blueeyes.png');

}
</style>