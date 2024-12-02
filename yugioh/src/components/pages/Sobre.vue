<template>
  <div id="imgFundo">
    <div id="conteudo">
      <h1>Sobre Nós</h1>
      <p>
        Nós somos uma equipe de saqueadores aprendizes (alunos de DS) participantes do clã Encontradores de Tesouros Experientes e Canalhas (ETEC), nossa equipe de três pessoas foi fundada a partir da grande necessidade de provar nossos conhecimentos ao nosso mestre (Leonardo Sobral), nosso objetivo com essa pequena loja é entregar a você (seu nerd) decks de YU-Gi-OH para que você possa sobreviver a suas batalhas. Como nós conseguimos nossas cartas? simples nós pegamos co jogadores que não querem ou não precisam mais delas (a gente pega dos cara que morreu no duelo ou tava desmaido ou dormindo por aí). <br>
        Espero que aqui você possa encontrar o que precisa viajante, boa sorte nos duelos e cuidado para não se tornar um dos nossos doadores de cartas. 
      </p>
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
  background: url(https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/07/yu-gi-oh-card-wallpaper.jpg) black;
  background-size: 100%;
  background-position: center right;
  background-repeat: no-repeat;
}

div#conteudo{
  width: 40%;
  height: 85%;
  margin: 50px auto;
  padding: 20px;
  font-size: 1.2em;
  background-color: whitesmoke;
  border-radius: 8px;
  border: 3px solid rgba(0, 0, 0, 0.808);
  text-align: center;
}

div#conteudo > h1{
  font-size: 2.5em;
}
</style>
