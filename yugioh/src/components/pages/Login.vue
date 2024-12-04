<template>
  <div class="login-container">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div>
        <label for="username">Usuário:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div>
        <label for="password">Senha:</label>
        <input type="password" id="password" v-model="password" required />
      </div>

      <!-- Seletor de tipo de usuário -->
      <div>
        <label for="role">Tipo de Usuário:</label>
        <select v-model="role" id="role">
          <option value="client">Cliente</option>
          <option value="admin">Administrador</option>
        </select>
      </div>

      <button type="submit">Entrar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginE',
  data() {
    return {
      username: '',
      password: '',
      role: 'client', // Valor padrão para 'Cliente'
    };
  },
  methods: {
    login() {
      if (this.username && this.password) {
        // Salva o papel do usuário no localStorage
        localStorage.setItem('userRole', this.role); // Salva o papel do usuário (client/admin)

        // Redireciona para a página de decks
        this.$router.push(this.role === 'admin' ? '/decks' : '/decks/cliente');
      } else {
        alert('Por favor, preencha os campos corretamente.');
      }
    }
  }
};
</script>

<style scoped>
/* Estilos do formulário */
.login-container {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input, select {
  padding: 8px;
  margin: 5px 0;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button {
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
