<template>
  <div id="fundoImg">
    <div id="conteudo">
      <h1>Como nos contatar</h1>
      <p>Para aqueles que desejam entrar em contato com nossa hábil equipe, existem as seguintes maneiras:</p>
      <ul>
        <li>Ligue para o número: 11 9491-5666</li>
        <li>Envie um email para: infinityDuel@submundo.com</li>
        <li>Contate-nos nas nossas redes sociais, sendo elas:</li>
        <ul>
          <li>Twitter: @infinityDuelShopOFC</li>
          <li>Instagram: @infinityDuelShopOFC</li>
        </ul>
      </ul>
      <p>
        E para aqueles que preferem um atendimento mais pessoal, você pode invocar um dos nossos funcionários através de um ritual com as cartas <strong>Dark Portal</strong> e <strong>Summoned Skull</strong>. Pegue essas cartas, as junte num cálice e as mergulhe em sangue. Em seguida, recite o nome da loja ao contrário, e um dos nossos funcionários aparecerá 
        (<strong>não nos responsabilizamos</strong> em casos de morte, danos físicos, danos à propriedade, danos morais, roubo, etc. Confira mais na página de termos de usuário).
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContatosC', 
};
</script>

<style scoped>
div#fundoImg {
  width: 100vw;
  height: 100vh;
  background: url(https://i.redd.it/yu-gi-oh-protagonists-wallpaper-1080p-full-hd-v0-zakk3ny7vfja1.jpg?width=1920&format=pjpg&auto=webp&s=3663327526a6085109fbb513c17009ac8a515e74) black;
  background-size: 100%;
  background-position: right center;
  background-repeat: no-repeat;
}

div#conteudo {
  width: 40%;
  height: auto;
  margin: 20px auto;
  padding: 20px;
  font-size: 1.0em;
  background-color: whitesmoke;
  border-radius: 8px;
  border: 3px solid rgba(0, 0, 0, 0.808);
  text-align: justify;
  text-indent: 10px;
}

div#conteudo > h1 {
  font-size: 2.5em;
  text-align: center;
}

ul {
  line-height: 30px;
  text-align: center;
}

li {
  font-weight: 600;
}
</style>
