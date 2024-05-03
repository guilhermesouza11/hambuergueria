const MyNameApp = {
    data(){
        return {
            name: "",
            age: 26,
            input_name: ""
        }
    },
    methods: {
        submitForm(e) {

            e.preventDefault(); // Isso aqui bloqueia a ação padrão do evento, não envia o formulário.
            
            console.log(this.input_name);

            this.name = this.input_name; // Aqui o valor de 'name' é difinido como 'input_name', 'name' é onde está sendo exibido o valor digitado pelo usuário em 'input_name'. 
        }
    }
}

Vue.createApp(MyNameApp).mount("#app");