<!--
 * @Author: 秦自勇
 * @Date: 2021-08-14 11:26:03
 * @LastEditors: huangl
 * @LastEditTime: 2021-08-16 15:46:25
 * @Description: 分割线组件
 * @FilePath: \Visualization-Page\src\components\Edit\Divider.vue
-->
<template>
    <div class="divider-content">
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
            list: {
                slider: 0, title: '', remarks: '', backgroundColor: ''
            }
        }
    }
})
</script>

<style scoped lang="scss">

</style>