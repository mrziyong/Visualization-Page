<!--
 * @Author: 秦自勇
 * @Date: 2021-09-28 09:47:06
 * @LastEditors: huangl
 * @LastEditTime: 2021-09-28 11:29:34
 * @Description: 导航栏
 * @FilePath: \Visualization-Page\src\components\View\Navigation.vue
-->

<template>
    <div class="navigation-bar">
        <div class="list-bar" v-if="data.data.length <= 0">
            <div class="bar-btn" v-for="(item, index) in 4" :key="index">
                <el-image class="img" src="https://gtms03.alicdn.com/tps/i3/TB1gXd1JXXXXXapXpXXvKyzTVXX-520-280.jpg" fit="cover"></el-image>
                <div class="bar-title">图文按钮{{ index }}</div>
            </div>
        </div>

        <div class="list-bar" v-else>
            <div class="bar-btn" v-for="(item, index) in data.data" :key="index">
                <el-image class="img" :src="item.url || 'https://gtms03.alicdn.com/tps/i3/TB1gXd1JXXXXXapXpXXvKyzTVXX-520-280.jpg'" fit="cover"></el-image>
                <div class="bar-title">{{ item.name || '导航标题' }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default ({
    name: '',
    data() {
        return {}
    },
    props: ['data', 'className']
})
</script>

<style lang="scss" scoped>
.navigation-bar {
    box-sizing: border-box;
	font-family: '微软雅黑';
    color: #333;
    padding: 10px;
    .list-bar {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: center;
        .bar-btn {
            width: 25%;
            text-align: center;
            .img {
                width: 60px;
                height: 60px;
                border-radius: 50%;
            }
            .bar-title {
                font-family: '微软雅黑';
                color: #333;
                font-size: 14px;
                text-align: center;
                padding-top: 6px;
            }
        }
    }
}
</style>
