<!--
 * @Author: 秦自勇
 * @Date: 2021-07-28 11:24:04
 * @LastEditors: huangl
 * @LastEditTime: 2021-10-08 15:27:22
 * @Description: file content
 * @FilePath: \Visualization-Page\src\components\View\Search.vue
-->

<template>
    <div class="search-box">
        <div class="input">
            <el-input v-model="list.input" placeholder="请输入内容" prefix-icon="el-icon-search"></el-input>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: { input: '' }
        }
    }
}
</script>

<style scoped lang="scss">
.search-box {
    .input {
        padding: 10px;
    }
}
</style>
