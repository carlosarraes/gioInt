<script setup lang="ts">
import { Ref, inject, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { register } from '@teamhanko/hanko-elements'

const router = useRouter()
const hankoApiRef = inject('hankoApi') as Ref<string>
const hankoApi = hankoApiRef.value

const redirectAfterLogin = () => {
  router.push({ name: 'success' })
}

onMounted(() => {
  const connect = async () => {
    try {
      await register(hankoApi)
    } catch (e) {
      if (e instanceof Error) {
        console.error(e.message)
      }
    }
  }

  connect()
})
</script>

<template>
  <hanko-events @onAuthFlowCompleted="redirectAfterLogin" />
  <hanko-auth />
</template>
