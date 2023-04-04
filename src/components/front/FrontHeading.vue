<template>
  <div class="d-flex flex-column align-items-start justify-content-center">
    <h3 class="fw-bold mt-1 border-3 border-start border-primary">
      <span class="text-cusDarkBrown ms-3">{{ title }}</span>
    </h3>
  </div>
</template>

<script>
export default {
  props: ['title'],
};
</script>
