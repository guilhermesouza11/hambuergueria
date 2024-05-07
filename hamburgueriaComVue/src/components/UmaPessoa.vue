<template>
  <div>
    <h2>Está é a descrição da pessoa: {{ nome }}</h2>
    <InfoPessoal />
    <FormUser />
  </div>
</template>

<script>
import InfoPessoal from './InfoPessoal.vue'
import FormUser from './Form.vue'

export default {
  name: 'UmaPessoa',
  components: {
    InfoPessoal,
    FormUser
  },
  data() {
    return {
      nome: 'Guilherme'
    }
  }
}
</script>
