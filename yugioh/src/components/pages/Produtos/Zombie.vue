<template>
    <div class="flex-1 bg-cover bg-center backgroundL">
        <InfoZombie />
    </div>

</template>

<script>
import InfoZombie from '@/components/ComponentsDecks/InfoZombie.vue';



export default {
    name: 'DinosI',

    components: {
        InfoZombie
       
    }
};
</script>

<style>
.backgroundL {
    background-image: url('@/assets/Blueeyes.png');

}
</style>