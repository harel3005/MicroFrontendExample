<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    message: {
      type: String,
      default: "Hello from Vue!",
    },
  },
};
</script>
