<script setup>
// stargan
import p_000007_0 from '@/assets/stargan/000007_0.jpg'
import p_000007_16 from '@/assets/stargan/000007_16.jpg'
import p_000007_17 from '@/assets/stargan/000007_17.jpg'
import p_000007_18 from '@/assets/stargan/000007_18.jpg'
import p_000007_19 from '@/assets/stargan/000007_19.jpg'
import p_000007_20 from '@/assets/stargan/000007_20.jpg'
// stgan
import p_182643_0 from '@/assets/stgan/182643_0.jpg'
import p_182643_1 from '@/assets/stgan/182643_1.png'
import p_182643_2 from '@/assets/stgan/182643_2.png'
// faceapp
import p_000009_0 from '@/assets/faceapp/000009_0.jpg'
import p_000009_1 from '@/assets/faceapp/000009_1.jpg'
import p_000009_2 from '@/assets/faceapp/000009_2.jpg'
</script>

<template>
  <div
    class="grid grid-cols-[3rem,1fr,1fr,1fr,1fr,1fr,1fr] grid-rows-[1rem,1fr] gap-4"
  >
    <!-- first line -->
    <div />
    <n-tag
      :bordered="false"
      type="success"
      class="justify-self-center self-center"
    >
      原图
    </n-tag>
    <n-tag
      :bordered="false"
      type="success"
      class="justify-self-center self-center"
    >
      戴眼镜
    </n-tag>
    <n-tag
      :bordered="false"
      type="success"
      class="justify-self-center self-center"
    >
      山羊胡
    </n-tag>
    <n-tag
      :bordered="false"
      type="success"
      class="justify-self-center self-center"
    >
      灰发
    </n-tag>
    <n-tag
      :bordered="false"
      type="success"
      class="justify-self-center self-center"
    >
      浓妆
    </n-tag>
    <n-tag
      :bordered="false"
      type="success"
      class="justify-self-center self-center"
    >
      高颧骨
    </n-tag>
    <!-- second line -->
    <span
      class="justify-self-center self-center"
    >
      StarGAN
    </span>
    <n-image
      class="justify-center"
      width="112"
      :src="p_000007_0"
    />
    <n-image
      class="justify-center"
      width="112"
      :src="p_000007_16"
    />
    <n-image
      class="justify-center"
      width="112"
      :src="p_000007_17"
    />
    <n-image
      class="justify-center"
      width="112"
      :src="p_000007_18"
    />
    <n-image
      class="justify-center"
      width="112"
      :src="p_000007_19"
    />
    <n-image
      class="justify-center"
      width="112"
      :src="p_000007_20"
    />
  </div>
  <div
    class="mt-12 grid grid-cols-[3rem,1fr,1fr,1fr,1fr,1fr,1fr] grid-rows-[1rem,1fr,1fr] gap-4"
  >
    <!-- first line -->
    <div />
    <n-tag
      :bordered="false"
      type="success"
      class="justify-self-center self-center"
    >
      原图
    </n-tag>
    <n-tag
      :bordered="false"
      type="success"
      class="justify-self-center self-center"
    >
      年轻/老年
    </n-tag>
    <n-tag
      :bordered="false"
      type="success"
      class="justify-self-center self-center"
    >
      男性/女性
    </n-tag>
    <div />
    <div />
    <div />
    <!-- second line -->
    <span
      class="justify-self-center self-center"
    >
      STGAN
    </span>
    <n-image
      class="justify-center"
      width="112"
      :src="p_000009_0"
    />
    <n-image
      class="justify-center"
      width="112"
      :src="p_000009_1"
    />
    <n-image
      class="justify-center"
      width="112"
      :src="p_000009_2"
    />
    <div />
    <div />
    <div />
    <!-- third line -->
    <span
      class="justify-self-center self-center"
    >
      FaceAPP
    </span>
    <n-image
      class="justify-center"
      width="112"
      :src="p_182643_0"
    />
    <n-image
      class="justify-center"
      width="112"
      :src="p_182643_1"
    />
    <n-image
      class="justify-center"
      width="112"
      :src="p_182643_2"
    />
    <div />
    <div />
    <div />
  </div>
</template>

<style scoped>

</style>
