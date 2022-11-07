<script setup>
const props = defineProps({
  data: {
    type: Array,
    required: true,
    default: () => [],
  },
})
const columns = [
  {
    title: 'TPR@FPR',
    key: 'TPR@FPR',
    children: [
      {
        title: 'FPR',
        key: 'FPR',
      },
    ],
  },
  {
    title: 'Young/Old',
    key: 'Young/Old',
    children: [
      {
        title: '1e-2',
        key: 'yo_1e-2',
      },
      {
        title: '1e-3',
        key: 'yo_1e-3',
      },
      {
        title: '1e-4',
        key: 'yo_1e-4',
      },
      {
        title: '1e-5',
        key: 'yo_1e-5',
      },
    ],
  },
  {
    title: 'Female/Male',
    key: 'Female/Male',
    children: [
      {
        title: '1e-2',
        key: 'fm_1e-2',
      },
      {
        title: '1e-3',
        key: 'fm_1e-3',
      },
      {
        title: '1e-4',
        key: 'fm_1e-4',
      },
      {
        title: '1e-5',
        key: 'fm_1e-5',
      },
    ],
  },
]
</script>

<template>
  <n-data-table
    :data="props.data"
    :columns="columns"
    :single-line="false"
  />
</template>

<style scoped>

</style>
