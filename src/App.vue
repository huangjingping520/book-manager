<script setup>
</script>

<template>
  <div id="app">
    <el-menu router :default-active="$route.path" class="el-menu-demo" mode="horizontal" background-color="#5B8FB9"
      text-color="#03001C" active-text-color="#ffd04b">
      <el-menu-item index="/book">
        图书管理
      </el-menu-item>
      <el-menu-item index="/user">
        读者管理
      </el-menu-item>
      <el-menu-item index="/admin">
        管理员管理
      </el-menu-item>
      <el-menu-item index="/borrow">
        借还管理
      </el-menu-item>
      <el-menu-item index="/ticket">
        罚单管理
      </el-menu-item>
      <el-menu-item index="/return">
        还书管理
      </el-menu-item>
    </el-menu>
    <el-main>
      <router-view />
    </el-main>
  </div>
</template>
