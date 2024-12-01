<template>
    <div class="flex-1 bg-cover bg-center backgroundL">
        <InfoDinos/>
    </div>

</template>

<script>
import InfoDinos from '@/components/ComponentsDecks/InfoDinos.vue';




export default {
    name: 'DinosI',

    components: {
        InfoDinos

    }
};
</script>

<style>
.backgroundL {
    background-image: url('@/assets/Blueeyes.png');

}
</style>