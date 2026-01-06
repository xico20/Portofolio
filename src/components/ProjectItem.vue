<template>
  <div class="project">
    <div class="content">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectItem',
  props: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    projectCode: { type: String, required: true }
  }
}
</script>

<style>
.content {
  margin: 20px;
  width: 80%;
  height: 80%;
  background-color: beige;
}
</style>