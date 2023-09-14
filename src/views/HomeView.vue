<template>
  <main>
    <h1>Hello World in Vue.js</h1>
    <!-- A simple component -->
    <Button :on-click="handleClick" />
  </main>
</template>

<script>
import Button from '../components/React/Button';

export default {
  components: {
    Button
  },
  methods: {
    handleClick() {
      console.log('Button clicked!');
    }
  }
}
</script>
