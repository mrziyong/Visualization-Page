<!--
 * @Author: 秦自勇
 * @Date: 2021-07-28 09:55:11
 * @LastEditors: huangl
 * @LastEditTime: 2021-09-27 15:32:20
 * @Description: 公告组件
 * @FilePath: \Visualization-Page\src\components\View\Notice.vue
-->

<template>
    <div class="notice-box" :style="{margin: `${data.slider}px 0`}">
        <el-alert
            :style="{ background: data.backgroundColor }"
            :title="data.title"
            type="warning"
            :description="data.remarks"
            show-icon>
        </el-alert>
    </div>
</template>

<script>

export default ({
    name: 'Notice',
    props: ['data'],
    mounted() {
        console.log('公告数据', this.data)
    }
})
</script>

<style scoped lang="scss">
.notice-box {
    
}
</style>
