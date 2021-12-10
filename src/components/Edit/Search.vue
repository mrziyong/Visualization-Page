<!--
 * @Author: 秦自勇
 * @Date: 2021-07-28 11:21:23
 * @LastEditors: huangl
 * @LastEditTime: 2021-07-28 11:54:11
 * @Description: 搜索
 * @FilePath: \Visualization-Page\src\components\Edit\Search.vue
-->

<template>
    <div class="search-content">
        <el-form label-width="80px">
            <el-form-item label="上下间距">
                <el-slider v-model="list.slider"></el-slider>
            </el-form-item>
            <el-form-item label="页面标题">
                <el-input v-model="list.title"></el-input>
            </el-form-item>
            <el-form-item label="页面备注">
                <el-input type="textarea" :rows="4" v-model="list.remarks"></el-input>
            </el-form-item>
            <el-form-item label="背景颜色">
                <el-color-picker v-model="list.backgroundColor" show-alpha></el-color-picker>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>

export default ({
    data() {
        return {
            list: {}
        }
    }
})
</script>

<style scoped lang="scss">
.search-content {
    
}
</style>
