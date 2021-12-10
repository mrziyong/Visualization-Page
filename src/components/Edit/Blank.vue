<!--
 * @Author: 秦自勇
 * @Date: 2021-09-27 15:00:49
 * @LastEditors: huangl
 * @LastEditTime: 2021-09-27 17:43:34
 * @Description: 辅助空白
 * @FilePath: \Visualization-Page\src\components\Edit\Blank.vue
-->

<template>
    <div class="divider-content">
        <el-form label-width="80px">
            <el-form-item label="上下间距">
                <el-slider v-model="list.slider" :min="10" ></el-slider>
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
    },
    props: {
        data: {
            type: Object,
            default: () => {}
        }
    },
    mounted() {
        this.list = this.data
    }
})
</script>

<style scoped lang="scss">

</style>