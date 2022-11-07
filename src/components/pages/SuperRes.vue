<script setup>
import low_10 from '@/assets/low_10.jpg'
import low_11 from '@/assets/low_11.jpg'
import low_12 from '@/assets/low_12.jpg'
import low_13 from '@/assets/low_13.jpg'
import low_14 from '@/assets/low_14.jpg'
import low_15 from '@/assets/low_15.jpg'
import low_16 from '@/assets/low_16.jpg'
import low_17 from '@/assets/low_17.jpg'
import low_18 from '@/assets/low_18.jpg'
import low_19 from '@/assets/low_19.jpg'
import high_10 from '@/assets/high_10.jpg'
import high_11 from '@/assets/high_11.jpg'
import high_12 from '@/assets/high_12.jpg'
import high_13 from '@/assets/high_13.jpg'
import high_14 from '@/assets/high_14.jpg'
import high_15 from '@/assets/high_15.jpg'
import high_16 from '@/assets/high_16.jpg'
import high_17 from '@/assets/high_17.jpg'
import high_18 from '@/assets/high_18.jpg'
import high_19 from '@/assets/high_19.jpg'

const selectVal = ref(low_10)
const highImage = ref(null)
const showHighImage = ref(false)
const options = [
  {
    label: 'low_10',
    value: low_10,
  },
  {
    label: 'low_11',
    value: low_11,
  },
  {
    label: 'low_12',
    value: low_12,
  },
  {
    label: 'low_13',
    value: low_13,
  },
  {
    label: 'low_14',
    value: low_14,
  },
  {
    label: 'low_15',
    value: low_15,
  },
  {
    label: 'low_16',
    value: low_16,
  },
  {
    label: 'low_17',
    value: low_17,
  },
  {
    label: 'low_18',
    value: low_18,
  },
  {
    label: 'low_19',
    value: low_19,
  },
]

const lowToHighMap = new Map([
  [low_10, high_10],
  [low_11, high_11],
  [low_12, high_12],
  [low_13, high_13],
  [low_14, high_14],
  [low_15, high_15],
  [low_16, high_16],
  [low_17, high_17],
  [low_18, high_18],
  [low_19, high_19],
])

function handleSelectValueUpdate() {
  showHighImage.value = false
}
function handleSwinIR() {
  highImage.value = lowToHighMap.get(selectVal.value)
  showHighImage.value = true
}
</script>

<template>
  <div
    class="flex justify-center items-center gap-6 bg-black/5 rounded-xl p-6"
  >
    <div class="flex flex-col gap-2">
      <n-image
        class="justify-center"
        width="112"
        :src="selectVal"
      />
      <n-select
        v-model:value="selectVal"
        :options="options"
        @update:value="handleSelectValueUpdate"
      />
    </div>
    <n-button
      strong
      secondary
      round
      type="primary"
      icon-placement="right"
      @click="handleSwinIR"
    >
      <template #icon>
        <i-material-symbols-arrow-right-alt />
      </template>
      SwinIR
    </n-button>
    <div class="w-[448px] h-[448px] bg-white">
      <n-image
        v-show="showHighImage"
        class="justify-center"
        width="448"
        :src="highImage"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
