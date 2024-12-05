<template>
  <div id="imgFundo">
    <div id="conteudo">
      <h1>Sobre Nós</h1>

      <div id="juan" class="bloco">
        <div class="Pic"></div>
        <p>Viu o anime clássico, gosta de decks agressivos, tipo o de dragões armadurados</p>
      </div>

      <div id="thiago" class="bloco">
        <div class="Pic"></div>
        <p>Gosta de usar decks meta absurdos, atualmente usa um deck de ancient gear</p>
      </div>

      <div id="orcus" class="bloco">
        <div class="Pic"></div>
        <p>Sabe muito bem como impedir o oponente de jogar, usa um deck de twins</p>
      </div>

      <div id="hist">
        <h5>Como nasceu a loja?</h5>
        <p>A loja nasceu da nossa paixão como fans de Yu-Gi-Oh sem contar a vontade de facilitar o acesso a cartas e bons decks para os nossos colegas jogadores</p>
      </div>

    </div>
    
  </div>
</template>

<script>
export default {
  name: 'SobreG', // Nome composto para evitar erros do ESLint

};
</script>

<style scoped>

div#imgFundo{
  width: 100vw;
  height: 100vh;
  background: url(../../assets/BGsobre.jpg) black;
  background-size: 100%;
  background-position: center right;
  background-repeat: no-repeat;
}

div#conteudo{
  width: 75%;
  height: 90%;
  display: grid;
  grid-template: repeat(6, 1fr) / repeat(10, 10%);
  margin: 30px auto;
  padding: 10px;
  font-size: 1.2em;
  background-color: whitesmoke;
  border-radius: 8px;
  border: 3px solid rgba(0, 0, 0, 0.808);
  text-align: center;
}

div#conteudo > h1{
  grid-row: 1 / 1;
  grid-column: 4 / span 3;
  font-size: 2.5em;
}

div.bloco{
  width: fit-content;
  height: fit-content;
  background-color: steelblue;
  border: 2px solid black;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
}

div.Pic{
  border-radius: 100%;
  border: 2px solid #cdcf61;
  background-color: black;
  margin: 10px auto;
  width: 130px;
  height: 130px;
}

div#hist{
  grid-row: 5 / span 2;
  grid-column: 1 / span 9;
  width: fit-content;
  height: fit-content;
  font-weight: 600;
  background-color: steelblue;
  color: #cdcf61;
  border: 2px solid black;
  border-radius: 10px;
  margin: 15px;
  padding: 10px;
}

div#juan{
  grid-row: 2 / span 3;
  grid-column: 1 / span 3;
}

div#juan > div.Pic{
  background-image: url(../../assets/profilePics_Sobre/PP1.jpg);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}

div#thiago{
  grid-row: 2 / span 3;
  grid-column: 4 / span 3;
}

div#thiago > div.Pic{
  background-image: url(../../assets/profilePics_Sobre/PP3.jpg);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}

div#orcus{
  grid-row: 2 / span 3;
  grid-column: 7 / span 3;
}

div#orcus > div.Pic{
  background-image: url(../../assets/profilePics_Sobre/PP2.jpg);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}

</style>
