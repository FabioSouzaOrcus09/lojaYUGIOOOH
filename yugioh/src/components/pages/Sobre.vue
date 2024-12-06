<template>
  <div id="imgFundo">
    <div id="conteudo">
      <h1>Produtos</h1>

      <div id="juan" class="bloco">
        <div class="Pic"></div>
        <p>Dragões Armadurados - Coleção especial com cartas raras para decks agressivos.</p>
      </div>

      <div id="thiago" class="bloco">
        <div class="Pic"></div>
        <p>Ancient Gear - Uma linha completa para fãs de estratégias meta poderosas.</p>
      </div>

      <div id="orcus" class="bloco">
        <div class="Pic"></div>
        <p>Twins - Especializado em impedir jogadas adversárias e dominar o campo.</p>
      </div>

      <div id="hist">
        <h5>O que nos diferencia?</h5>
        <p>Oferecemos produtos de qualidade para todos os estilos de duelistas, com cartas únicas e coleções exclusivas para aprimorar seu deck e sua experiência de jogo.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProdutosG', // Nome ajustado para refletir o componente
};
</script>

<style scoped>
div#imgFundo {
  width: 100vw;
  height: 100vh;
  background: url(https://c4.wallpaperflare.com/wallpaper/261/183/741/yu-gi-oh-atem-yu-gi-oh-wallpaper-preview.jpg) black;
  background-size: 100%;
  background-position: center right;
  background-repeat: no-repeat;
}

div#conteudo {
  width: 75%;
  height: 90%;
  display: grid;
  grid-template: repeat(6, 1fr) / repeat(10, 10%);
  margin: 30px auto;
  padding: 10px;
  font-size: 1.0em;
  background-color: whitesmoke;
  border-radius: 8px;
  border: 3px solid rgba(0, 0, 0, 0.808);
  text-align: center;
}

div#conteudo > h1 {
  grid-row: 1 / 1;
  grid-column: 4 / span 3;
  font-size: 2.5em;
}

div.bloco {
  width: fit-content;
  height: fit-content;
  background-color: steelblue;
  border: 2px solid black;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
}

div.Pic {
  border-radius: 100%;
  border: 2px solid #cdcf61;
  background-color: black;
  margin: 10px auto;
  width: 130px;
  height: 130px;
}

div#hist {
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

div#juan {
  grid-row: 2 / span 3;
  grid-column: 1 / span 3;
}

div#juan > div.Pic {
  background-image: url(../../assets/profilePics_Sobre/PP1.jpg);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}

div#thiago {
  grid-row: 2 / span 3;
  grid-column: 4 / span 3;
}

div#thiago > div.Pic {
  background-image: url(../../assets/profilePics_Sobre/PP3.jpg);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}

div#orcus {
  grid-row: 2 / span 3;
  grid-column: 7 / span 3;
}

div#orcus > div.Pic {
  background-image: url(../../assets/profilePics_Sobre/PP2.jpg);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
