<template>
  <div>
    <h1>{{ title }}</h1>
    <p>Olá mundo, {{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'PrimeiroComponente',
  data() {
    return {
      title: 'Olá Vue!',
      text: 'estou começando a desenvolver em Vue.js agora!'
    }
  }
}
</script>
