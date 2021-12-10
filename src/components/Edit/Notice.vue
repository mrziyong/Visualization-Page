<!--
 * @Author: 秦自勇
 * @Date: 2021-07-28 09:51:31
 * @LastEditors: huangl
 * @LastEditTime: 2021-09-29 10:02:49
 * @Description: 公告组件控制栏
 * @FilePath: \Visualization-Page\src\components\Edit\Notice.vue
-->

<template>
    <div class="notice-content">
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
    name: '',
    props: {
        data: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {
            list: {}
        }
    },
    mounted() {
        console.log('数据源', this.data)
        this.list = this.data
    }
})
</script>

<style scoped lang="scss">
.notice-content {
    padding: 20px 0;
}
</style>
