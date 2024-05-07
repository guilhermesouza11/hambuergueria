<template>
  <div>
    <form action="">
      <InputText />
      <SubmitForm />
    </form>
  </div>
</template>
<script>
import InputText from './Form/InputText.vue'
import SubmitForm from './Form/SubmitForm.vue'

export default {
  name: 'FormUser',
  components: {
    InputText,
    SubmitForm
  }
}
</script>
