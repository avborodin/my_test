<template>
  <div>
    Название:
    <input v-model="name_">
    <div v-if="error" class="error">
      {{ error }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      name_: ''
    }
  },

  computed: {
    error () {
      return this.name_.trim().length < 7
        ? 'Название должно быть длиннее 6 символов'
        : ''
    }
  }
}
</script>
