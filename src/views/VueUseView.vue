<script setup lang="ts">
import VueUndoRedo from '@/components/VueUse/VueUndoRedo.vue'
</script>

<template>
  <header>
    <h1>VueUse</h1>
    <p>Let's have a look at this collection of composables made by core team members of Vue</p>
    <p>
      They provide lots of things but let's look at the most useful one. Some can be implemented
      directly without using this lib IMO
    </p>
  </header>

  <div>Not usable: useDraggable: can only use position fixed</div>

  <VueUndoRedo />
</template>
