<template>
  <div>
    <h1>Meu nome é: {{ nome }}</h1>
  </div>
</template>

<script>
export default {
  name: 'LifeCycle',
  data() {
    return {
      nome: 'Guilherme'
    }
  },
  created() {
    setTimeout(() => {
      this.nome = 'Souza'
    }, 1000)
  },
  mounted() {
    setTimeout(() => {
      this.nome = 'Santos'
    }, 2000)
  }
}
</script>
