<!--
 * @Author: 秦自勇
 * @Date: 2021-09-27 12:02:26
 * @LastEditors: huangl
 * @LastEditTime: 2021-10-08 15:57:14
 * @Description: 限时秒杀
 * @FilePath: \Visualization-Page\src\components\View\Seckilling.vue
-->

<template>
    <div class="product" :class="className">
        <div class="seckill">
            <div class="seckill-left">
                <div class="tilte">
                    限时秒杀
                </div>
                <div class="time">
                    <span class="num">00</span>
                    <span class="icon">:</span>
                    <span class="num">58</span>
                    <span class="icon">:</span>
                    <span class="num">36</span>
                </div>
            </div>
            <div class="seckill-right">
                <div class="icon-text">
                    <span>更多</span>
                    <i class="el-icon-arrow-right"></i>
                </div>
            </div>
        </div>
        <template v-if="data.data && data.data.length > 0">
            <div 
                class="product-item" 
                v-for="(item, index) in data.data" 
                :key="index"
            >
                <div class="image">
                    <img :src="item.productImg">
                </div>
                <div class="info">
                    <p class="name">{{ item.productName }}</p>
                    <p class="num">
                        {{ options.volumeStr ? item.volumeStr + ' 已购买' : '' }} {{ line }} {{ options.goodRatio ? item.goodRatio + '99%' : '' }}
                    </p>
                    <p class="price">
                        <span>￥{{ item.productPrice }}</span>
                        <span v-if="options.originalPrice">￥{{ item.originalPrice }}</span>
                    </p>
                </div>
            </div>
        </template>
        <template v-else>
            <div class="product-item product-default" v-for="index in 3" :key="index">
                <div class="image">
                    <img src="https://img.quanminyanxuan.com/other/21188f7a1e9340759c113aa569f96699.jpg?x-oss-process=image/resize,h_600,m_lfit" alt="">
                </div>
                <div class="info">
                    <p class="name">这是商品名称</p>
                    <p class="num">
                        12124 已购买 | 99%
                    </p>
                    <p class="price">
                        <span>￥9.99</span>
                        <span>￥9.99</span>
                    </p>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    name: 'Product',
    props: ['data', 'className'],
    computed: {
        options() {
            return this.data.options
        },
        line() {
            return this.options.volumeStr && this.options.goodRatio ? '| ' : ''
        }
    }
}
</script>

<style lang="scss" scoped>
.product{
    display: flex;
    flex-wrap: wrap;
    padding: 4px 8px;
    box-sizing: border-box;
    * {
        box-sizing: border-box;
    }

    .seckill {
        width: 100%;
        padding: 5px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        .seckill-left {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-evenly;
            align-items: center;
            .tilte {
                font-size: 18px;
                font-weight: 600;
            }
            .time {
                margin: 0 10px;
                .icon {
                    margin: 0 3px;
                }
                .num {
                    color: #fff;
                    padding: 5px;
                    font-size: 14px;
                    border-radius: 5px;
                    background: #000;
                }
            }
        }
        .seckill-right {
            font-size: 14px;
        }
    } 

    &.one .product-item{
        width: 100%;
        padding: 10px;
        display: flex;
        border-bottom: 1px dashed #eee;
        .image{
            width: 100px;
            border-radius: 5px;
            overflow: hidden;
            margin-right: 10px;
        }
        .info{
            padding: 0 5px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex: 1;
            .price{
                font-size: 20px;
                margin: 0;
            }
            .num{
                margin: 12px 0 0;
            }
        }
    }
    &.three .product-item{
        width: 33.33%;
        .info .price{
            font-size: 16px;
        }
        &.product-default:nth-of-type(3){
            display: block;
        }
    }
    .product-item {
        width: 50%;
        padding: 5px;
        &.product-default:nth-of-type(3){
            display: none;
        }
        .image {
            font-size: 0;
            img{
                max-width: 100%;
            }
        }
        .info{
            padding: 10px 5px 0;
            .name{
                font-size: 14px;
                margin: 0;
                color: #333;
                text-overflow: ellipsis;
                word-break: break-all;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
                height: 38px;
                line-height: 18px;
            }
            .num{
                font-size: 12px;
                color: #d23000;
                font-weight: 600;
            }
            .price{
                font-weight: 600;
                margin: 12px 0 0;
                font-size: 18px;
                span:nth-of-type(1){
                    color: red;
                }
                span:nth-of-type(2){
                    color: #b5b5b5;
                    font-weight: 400;
                    font-size: 12px;
                    margin-left: 4px;
                    text-decoration: line-through;
                }
            }
        }
    }
}
</style>