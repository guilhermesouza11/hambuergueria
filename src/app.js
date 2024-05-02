const MyNameApp = {
    data(){
        return {
            name: "Guilherme",
            age: 26,
            input_name: ""
        }
    },
    method: {
        submitForm(e) {

            e.preventDefault();
            
            console.log("Aqui!")
        }
    }
}

Vue.createApp(MyNameApp).mount("#app");