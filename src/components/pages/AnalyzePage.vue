<script setup>
const table1Data = [
  {
    'FPR': 'Arcfac（无 StarGAN 数据）',
    'yo_1e-2': 0.981,
    'yo_1e-3': 0.981,
    'yo_1e-4': 0.981,
    'yo_1e-5': 0.981,
    'fm_1e-2': 0.981,
    'fm_1e-3': 0.981,
    'fm_1e-4': 0.981,
    'fm_1e-5': 0.981,
  },
  {
    'FPR': 'Arcfac（无 StarGAN 数据）',
    'yo_1e-2': 0.981,
    'yo_1e-3': 0.981,
    'yo_1e-4': 0.981,
    'yo_1e-5': 0.981,
    'fm_1e-2': 0.981,
    'fm_1e-3': 0.981,
    'fm_1e-4': 0.981,
    'fm_1e-5': 0.981,
  },
  {
    'FPR': 'Arcfac（无 StarGAN 数据）',
    'yo_1e-2': 0.981,
    'yo_1e-3': 0.981,
    'yo_1e-4': 0.981,
    'yo_1e-5': 0.981,
    'fm_1e-2': 0.981,
    'fm_1e-3': 0.981,
    'fm_1e-4': 0.981,
    'fm_1e-5': 0.981,
  },
  {
    'FPR': 'Arcfac（无 StarGAN 数据）',
    'yo_1e-2': 0.981,
    'yo_1e-3': 0.981,
    'yo_1e-4': 0.981,
    'yo_1e-5': 0.981,
    'fm_1e-2': 0.981,
    'fm_1e-3': 0.981,
    'fm_1e-4': 0.981,
    'fm_1e-5': 0.981,
  },
]
const table2Data = [
  {
    'FPR': 'Arcfac（无 StarGAN 数据）',
    'yo_1e-2': 0.981,
    'yo_1e-3': 0.981,
    'yo_1e-4': 0.981,
    'yo_1e-5': 0.981,
    'fm_1e-2': 0.981,
    'fm_1e-3': 0.981,
    'fm_1e-4': 0.981,
    'fm_1e-5': 0.981,
  },
  {
    'FPR': 'Arcfac（无 StarGAN 数据）',
    'yo_1e-2': 0.981,
    'yo_1e-3': 0.981,
    'yo_1e-4': 0.981,
    'yo_1e-5': 0.981,
    'fm_1e-2': 0.981,
    'fm_1e-3': 0.981,
    'fm_1e-4': 0.981,
    'fm_1e-5': 0.981,
  },
  {
    'FPR': 'Arcfac（无 StarGAN 数据）',
    'yo_1e-2': 0.981,
    'yo_1e-3': 0.981,
    'yo_1e-4': 0.981,
    'yo_1e-5': 0.981,
    'fm_1e-2': 0.981,
    'fm_1e-3': 0.981,
    'fm_1e-4': 0.981,
    'fm_1e-5': 0.981,
  },
  {
    'FPR': 'Arcfac（无 StarGAN 数据）',
    'yo_1e-2': 0.981,
    'yo_1e-3': 0.981,
    'yo_1e-4': 0.981,
    'yo_1e-5': 0.981,
    'fm_1e-2': 0.981,
    'fm_1e-3': 0.981,
    'fm_1e-4': 0.981,
    'fm_1e-5': 0.981,
  },
]
const table3Data = [
  {
    'FPR': 'Arcfac（无 StarGAN 数据）',
    'yo_1e-2': 0.981,
    'yo_1e-3': 0.981,
    'yo_1e-4': 0.981,
    'yo_1e-5': 0.981,
    'fm_1e-2': 0.981,
    'fm_1e-3': 0.981,
    'fm_1e-4': 0.981,
    'fm_1e-5': 0.981,
  },
  {
    'FPR': 'Arcfac（无 StarGAN 数据）',
    'yo_1e-2': 0.981,
    'yo_1e-3': 0.981,
    'yo_1e-4': 0.981,
    'yo_1e-5': 0.981,
    'fm_1e-2': 0.981,
    'fm_1e-3': 0.981,
    'fm_1e-4': 0.981,
    'fm_1e-5': 0.981,
  },
  {
    'FPR': 'Arcfac（无 StarGAN 数据）',
    'yo_1e-2': 0.981,
    'yo_1e-3': 0.981,
    'yo_1e-4': 0.981,
    'yo_1e-5': 0.981,
    'fm_1e-2': 0.981,
    'fm_1e-3': 0.981,
    'fm_1e-4': 0.981,
    'fm_1e-5': 0.981,
  },
  {
    'FPR': 'Arcfac（无 StarGAN 数据）',
    'yo_1e-2': 0.981,
    'yo_1e-3': 0.981,
    'yo_1e-4': 0.981,
    'yo_1e-5': 0.981,
    'fm_1e-2': 0.981,
    'fm_1e-3': 0.981,
    'fm_1e-4': 0.981,
    'fm_1e-5': 0.981,
  },
]

const show1 = ref(false)
const show2 = ref(false)
const show3 = ref(false)

const config = [
  {
    data: table1Data,
    show: show1,
    buttonName: '基线人脸模型',
    handler: () => {
      show1.value = !show1.value
    },
  },
  {
    data: table2Data,
    show: show2,
    buttonName: '特征解构人脸模型',
    handler: () => {
      show2.value = !show2.value
    },
  },
  {
    data: table3Data,
    show: show3,
    buttonName: '对比学习人脸模型',
    handler: () => {
      show3.value = !show3.value
    },
  },
]
</script>

<template>
  <div class="flex flex-col gap-12">
    <div
      v-for="(conf, index) in config"
      :key="index"
      class="grid grid-cols-[10rem,1fr] grid-rows-1 gap-x-6"
    >
      <n-button
        class="self-center"
        @click="conf.handler"
      >
        {{ conf.buttonName }}
      </n-button>
      <div class="bg-black/5">
        <AnalyzeTable
          :data="conf.data"
          :class="[conf.show.value ? 'show' : 'hide']"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.show {
  opacity: 1;
}
.hide {
  opacity: 0;
}
</style>
