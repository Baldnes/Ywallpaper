<template>
    <!-- 头部图标：PC端 -->
    <div class="hidden h-8 xl:block m-auto w-[240px]">
        <img v-lazy class="" src="@/assets/logo.png" alt="" />
    </div>
    <!-- 头部图标：移动端 -->
    <div class="h-[111px] xl:hidden">
        <img v-lazy class="dark:hidden" src="https://res.lgdsunday.club/login-bg.png" alt="" />
        <img v-lazy class="h-20 absolute top-1 left-[50%] translate-x-[-50%] w-20" src="@/assets/logo.png" alt=""
            srcset="" />
    </div>
</template>
<script setup>

</script>
<style scoped lang='scss'></style>