<template>
  <div id="fundoImg">
    
    <div class="login-container">
      <h1>Login</h1>
      <form @submit.prevent="login">
        <div>
          <label for="username">Usuário:</label>  <br>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div>
          <label for="password">Senha:</label>  <br>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit" class="botao">Entrar</button>
      </form>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'LoginE',
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      // Simulação de autenticação simples (substitua por lógica real)
      if (this.username && this.password) {
        // Navegar para a página /home após login bem-sucedido
        this.$router.push('/home');
      } else {
        alert('Por favor, preencha os campos corretamente.');
      }
    }
  }
};
</script>

<style scoped>

div#fundoImg{
  width: 100vw;
  height: 100vh;
  background: url(https://c4.wallpaperflare.com/wallpaper/642/980/969/yu-gi-oh-card-hd-wallpaper-preview.jpg) black;
  background-size: 100%;
  background-position: center center;
  background-repeat: no-repeat;
}

.login-container {
  width: 40%;
  height: 60%;
  margin: 100px auto;
  padding: 20px;
  background-color: whitesmoke;
  border-radius: 8px;
  border: 3px solid rgba(0, 0, 0, 0.808);
  text-align: center;
}

.login-container > h1{
  font-size: 2em;
  font-weight: 700;
  margin: 10px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

label{
  font-size: 1.5em;
  font-weight: 600;
  margin: 5px;
}

input {
  padding: 8px;
  margin: 5px 0;
  border-radius: 4px;
  border: 2px solid #ccc;
}

button {
  width: 50%;
  margin: auto;
  padding: 10px;
  font-weight: 600;
  font-size: 1.2em;
  background-color: steelblue;
  color: whitesmoke;
  border: 2px solid black;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #cdcf61;
  color: black;
  border: 3px solid steelblue;
  font-weight: 700;
  font-size: 1.5em;
  transition: 1s;
}
</style>
