<template>
  <div>
    <Sender
      v-model:value="senderValue"
      placeholder="请输入内容"
      :loading="senderLoading"
      :allow-speech="false"
      :read-only="senderLoading"
      ref="senderRef"
      @submit="onSubmit"
    >
      <template #prefix>
        <Button type="text" @click="upload">
          <template #icon>
            <IconLink />
          </template>
        </Button>
      </template>
    </Sender>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Sender } from "ant-design-x-vue";
import { Button } from "@arco-design/web-vue";
import { IconLink } from "@arco-design/web-vue/es/icon";

const senderValue = ref("");
const senderLoading = ref(false);
const senderRef = ref();

function onSubmit() {
  // 业务处理
}

function upload() {
  // 上传逻辑
}
</script>
