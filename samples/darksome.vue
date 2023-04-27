<template>
  <div>
    <h1>Vue Counter App</h1>
    <p>Count: {{ count }}</p>
    <button @click="handleClick">Click me!</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    };
  },
  methods: {
    handleClick() {
      this.count++;
    }
  }
};
</script>
