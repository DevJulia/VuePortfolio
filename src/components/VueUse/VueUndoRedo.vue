<script setup lang="ts">
import { ref, computed, nextTick } from 'vue'
import { useMagicKeys, useRefHistory, whenever } from '@vueuse/core'
import { GAME_STEPS, GAME_SOLUTION } from '@/components/VueUse/constants'
import type { Decision } from '@/components/VueUse/models'

const { meta_z, shift_z, ctrl_z } = useMagicKeys()

const decisions = ref<string[]>([])
const {
  undo,
  redo,
  canUndo,
  canRedo,
  clear: clearHistory
} = useRefHistory(decisions, { deep: true })

whenever(meta_z, () => {
  undo()
})
whenever(ctrl_z, () => {
  undo()
})
whenever(shift_z, () => {
  redo()
})

const currentStep = computed<number>(() => decisions.value.length)
const currentDecision = computed<Decision>(() => GAME_STEPS[currentStep.value])

const doDecision = (decision: string) => {
  decisions.value.push(decision)
}

const hasWon = computed<boolean>(() => {
  return JSON.stringify(decisions.value) === JSON.stringify(GAME_SOLUTION)
})

const reset = async () => {
  decisions.value = []
  await nextTick()
  clearHistory()
}
</script>

<template>
  <main>
    <header>
      {{ decisions }}
      <button :disabled="!canUndo" @click="undo">Undo (CTRL-Z)</button>
      <button :disabled="!canRedo" @click="redo">Redo (shift-Z)</button>
      <button @click="reset">Reset</button>
    </header>

    <div v-if="currentStep < GAME_STEPS.length">
      {{ currentDecision.instruction }}
      <button
        v-for="(choice, i) in currentDecision.choices"
        :key="`step-${i}`"
        @click="doDecision(choice)"
      >
        {{ choice }}
      </button>
    </div>

    <template v-else-if="currentStep === GAME_STEPS.length">
      <div v-if="hasWon">You won!</div>
      <div v-else>Oh no you lost, go back and change your decision</div>
    </template>
  </main>
</template>
