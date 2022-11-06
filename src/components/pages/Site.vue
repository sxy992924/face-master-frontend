<script setup>
import StatusIcon from '~icons/icon-park-solid/dashboard-one'
import HostsIcon from '~icons/icon-park-solid/server'

const router = useRouter()
const menuSelected = ref(router.currentRoute.value.name)

const menuOptions = [
  {
    label: '数据展示',
    key: 'data',
    icon: renderIcon(StatusIcon),
    children: [
      {
        label: '超分辨率重建',
        key: 'super-res',
        icon: renderIcon(StatusIcon),
      },
      {
        label: '风格编辑',
        key: 'style-edit',
        icon: renderIcon(StatusIcon),
      },
    ],
  },
  {
    label: '效能分析',
    key: 'analyze',
    icon: renderIcon(HostsIcon),
  },
]

const handleUpdateValue = (key, item) => {
  // eslint-disable-next-line no-console
  console.log(key, item, router.currentRoute)
  router.push(`/${key}`)
}
</script>

<template>
  <n-layout position="absolute" content-style="display: flex; flex-direction: column;">
    <n-layout-header bordered class="p-2 flex justify-between items-center">
      <span class="text-2xl font-semibold">
        编辑鲁棒的人脸识别系统
      </span>
      <div class="flex-1" />
      <!-- <Time /> -->
      <!-- <Lang /> -->
      <NavAccount />
    </n-layout-header>
    <n-layout has-sider class="flex-1">
      <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="50"
        :width="240"
        show-trigger="circle"
        :show-collapse-content="false"
        :native-scrollbar="false"
      >
        <n-menu
          v-model:value="menuSelected"
          :collapsed-width="50"
          :collapsed-icon-size="22"
          :options="menuOptions"
          @update:value="handleUpdateValue"
        />
      </n-layout-sider>
      <n-layout-content content-style="padding: 2rem;">
        <router-view />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<style scoped>
</style>
