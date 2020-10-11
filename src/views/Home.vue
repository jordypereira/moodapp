<template>
  <div class="flex">
    <h1>Please tell me your mood today</h1>
    <Mood
      v-for="mood in moods"
      :key="mood"
      :title="mood"
      @click="chosenMood = mood"
    />

    <p>Your mood for {{ today }} is: {{ chosenMood }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Mood from "@/components/Mood.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    Mood,
  },
  data() {
    return {
      moods: ["Happy", "So-so", "Sad"],
      chosenMood: "",
    };
  },
  computed: {
    today() {
      const today = new Date();

      return `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`;
    },
  },
});
</script>
