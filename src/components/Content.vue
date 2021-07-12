<template>
    <div class="content-box">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: "Content",
}
</script>

<style scoped>
  .content-box{
    padding: 10px;
    display: grid;
    grid-gap: 10px;
  }
</style>