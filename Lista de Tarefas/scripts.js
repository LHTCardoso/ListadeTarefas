window.todos = [];

const TodoApp = {
  data() {
    return {
      todos: window.todos,
      newTodo: {
        text: "", // Aqui você define o valor do texto da nova tarefa
        done: false,
      },
    };
  },
  methods: {
    addTodo: function () {
      if (this.newTodo.text.trim() !== "") {
        // Verifica se o texto não está vazio
        this.todos.push({ text: this.newTodo.text, done: false }); // Adiciona a nova tarefa
        this.newTodo.text = ""; // Limpa o campo de input após adicionar a tarefa
      } else {
        alert("Insira uma tarefa");
      }
    },
  },
};

Vue.createApp(TodoApp).mount("#app");
