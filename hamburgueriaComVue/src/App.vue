<template>
  <PrimeiroComponente />
  <LifeCycle />
  <UmaPessoa />
</template>

<script>
import LifeCycle from './components/LifeCycle.vue'
import PrimeiroComponente from './components/PrimeiroComponente.vue'
import UmaPessoa from './components/UmaPessoa.vue'

export default {
  name: 'App',
  components: {
    PrimeiroComponente,
    LifeCycle,
    UmaPessoa
  }
}
</script>
