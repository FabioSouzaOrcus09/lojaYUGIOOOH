<template>
    <div Class=" flex-auto px-16 right-96 p-px-80 grid grid-cols-4 ml-40">

        <div id="grid1">
            <router-link to="Albaz">
            <button class="flex items-center justify-center p-0 border-0 bg-transparent cursor-pointer">
            <img id="Albaz" src="@/assets/Decks de estrutura/Albaz.png" 
            alt="Albaz" width="135" height="180"
            class="flex object-contain"/>
            </button>
            </router-link>
        </div>

        <div id="grid2">
            <router-link to="Sombrio">
            <button class="flex items-center justify-center p-0 border-0 bg-transparent cursor-pointer">
            <img id="Sombrio" src="@/assets/Decks de estrutura/ConfrontoSombrio.png" 
            alt="Sombrio" width="135" height="180" 
            class="flex object-contain"/>
            </button>
            </router-link>
            
        </div>

        <div id="grid3">
            <router-link to="Glaciais">
            <button class="flex items-center justify-center p-0 border-0 bg-transparent cursor-pointer">
            <img id="Glaciais" src="@/assets/Decks de estrutura/CorrentesGlaciais.png" 
            alt="Glaciais" width="135" height="180" 
            class="flex object-contain" />
            </button>
            </router-link>
        </div>

        <div id="grid4">
            <router-link to="Cyber">
            <button class="flex items-center justify-center p-0 border-0 bg-transparent cursor-pointer">
            <img id="CyberStrike" src="@/assets/Decks de estrutura/CyberStrike.png" 
            alt="CyberStrike" width="135" height="180" 
            class="flex object-contain hover " />
            </button>
            </router-link>
        </div>

        <div id="grid5">
            <router-link to="Engrenagens">
            <button class="flex items-center justify-center p-0 border-0 bg-transparent cursor-pointer">
            <img id="Engrenagens" src="@/assets/Decks de estrutura/EngrenagensDoPoder.png" 
            alt="Engrenagens" width="90" height="140" 
            class="flex object-contain, , ml-7 hover" />
            </button>
            </router-link>
        </div>

        <div id="grid6">
            <router-link to="Faíscas">
            <button class="flex items-center justify-center p-0 border-0 bg-transparent cursor-pointer">
            <img id="FaíscasdeJustiça" src="@/assets/Decks de estrutura/FaíscasdeJustiça.png"
            alt="FaíscasdeJustiça" width="90" height="140" 
            class="flex object-contain, , ml-7" />
            </button>
            </router-link>
        </div>

        <div id="grid7">
            <router-link to="FireKing">
            <button class="flex items-center justify-center p-0 border-0 bg-transparent cursor-pointer">
            <img id="FireKing" src="@/assets/Decks de estrutura/FireKings.png" 
            alt="FireKing" width="120" height="165"
            class="flex object-contain  ml-4" />
            </button>
            </router-link>
        </div>

        <div id="grid8">
            <router-link to="Dinos">
            <button class="flex items-center justify-center p-0 border-0 bg-transparent cursor-pointer">
            <img id="FúriadoDinosmagador" src="@/assets/Decks de estrutura/FúriadoDinosmagador.png"
            alt="FúriadoDinosmagador" width="135" height="180" 
            class="flex object-contain" />
            </button>
            </router-link>
        </div>

        <div id="grid9">
            <router-link to="Imperador">
            <button class="flex items-center justify-center p-0 border-0 bg-transparent cursor-pointer">
            <img id="ImperadordasTrevas" src="@/assets/Decks de estrutura/ImperadordasTrevas.png"
            alt="ImperadordasTrevas" width="135" height="180" 
            class="flex object-contain translate-x-[15px]" />
            </button>
            </router-link>
        </div>

        <div id="grid10">
            <router-link to="Investida">
            <button class="flex items-center justify-center p-0 border-0 bg-transparent cursor-pointer">
            <img id="Investidadosreisdefogo" src="@/assets/Decks de estrutura/Investidadosreisdefogo.png" 
            alt="Investidadosreisdefogo" width="135" height="180" 
            class="flex object-contain" />
            </button>
            </router-link>
        </div>

        <div id="grid11">
            <router-link to="Ciberso">
            <button class="flex items-center justify-center p-0 border-0 bg-transparent cursor-pointer">
            <img id="LinkCiberso" src="@/assets/Decks de estrutura/LinkCiberso.png" 
            alt="LinkCiberso" width="135" height="180" 
            class="flex object-contain  ml-3" />
            </button>
            </router-link>
        </div>

        <div id="grid12">
            <router-link to="Zombie">
            <button class="flex items-center justify-center p-0 border-0 bg-transparent cursor-pointer">
            <img  id="ZombieHorde" src="@/assets/Decks de estrutura/ZombieHorde.png" 
            alt="ZombieHorde" width="135" height="180" 
            class="flex object-contain" />
            </button>
            </router-link>
        </div>
    </div>


</template>

<script>
export default {
    name: 'DecksGridS', // Nome composto para evitar erros do ESLint
};
</script>

<style scoped>
/* Adicione estilos aqui, se necessário */
</style>