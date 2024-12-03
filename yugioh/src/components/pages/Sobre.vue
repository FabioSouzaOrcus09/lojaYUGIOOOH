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
  background: url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d2b6afae-9d2e-43c2-a373-b9510100e868/dft8amd-38b57c35-c1b1-4c76-9c2d-514d0868df36.jpg/v1/fill/w_1280,h_790,q_75,strp/elemental_hero___instant_contact_by_aridesignz_dft8amd-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzkwIiwicGF0aCI6IlwvZlwvZDJiNmFmYWUtOWQyZS00M2MyLWEzNzMtYjk1MTAxMDBlODY4XC9kZnQ4YW1kLTM4YjU3YzM1LWMxYjEtNGM3Ni05YzJkLTUxNGQwODY4ZGYzNi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.UKd94fv2PBrH4Sqh4zdSkQU5si-uGwsyMCCnW9QxxIE) black;
  background-size: 100%;
  background-position: center right;
  background-repeat: no-repeat;
}

div#conteudo{
  width: 40%;
  height: 85%;
  margin: 45px auto;
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
