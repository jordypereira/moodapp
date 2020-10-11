<template>
  <button>{{ title }}</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Mood",
  props: {
    title: String,
  },
});
</script>
