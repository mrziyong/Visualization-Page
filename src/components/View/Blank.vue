<!--
 * @Author: 秦自勇
 * @Date: 2021-09-27 15:00:13
 * @LastEditors: huangl
 * @LastEditTime: 2021-09-27 17:02:16
 * @Description: 辅助空白
 * @FilePath: \Visualization-Page\src\components\View\Blank.vue
-->

<template>
    <div class="divider-box">
        <div :style="[{height: data.slider+'px'}, {background: data.backgroundColor}]">

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    props: {
        data: {
            type: Object,
            default: {}
        }
    }
}
</script>

<style scoped lang="scss">
.divider-box {
    div {
        height: 20px;
    }
}
</style>