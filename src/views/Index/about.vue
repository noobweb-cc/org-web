<template>
    <div>
        <div class="demo-split">
            <div class="top">
                <img class="position" :src="require('@/assets/imgsv1/其它/01.jpg')" />
                <Timeline>
                    <TimelineItem color="green">
                        <Icon type="ios-trophy" slot="dot"></Icon>
                        <span>关于街头社区</span>
                    </TimelineItem>
                    <TimelineItem>地址：阜阳市颍泉区中市街道办事处街头社区居民委员会</TimelineItem>
                    <TimelineItem color="green">社区电话: 0558-2612023</TimelineItem>
                    <TimelineItem color="red">本社区种植多种农作物, 欢迎商业合作！</TimelineItem>
                </Timeline>
            </div>
            <div class="bottom">
                <div id="container"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            split2: 0.5,
            key: '87c44e8ed30daeda43ee799ca1717d1f',
            map: null
        }
    },
    created () {
        let url = `https://webapi.amap.com/maps?v=1.4.14&key=${this.key}&callback=onLoad`;
        let jsapi = document.createElement('script');
        jsapi.charset = 'utf-8';
        jsapi.src = url;
        document.head.appendChild(jsapi);
        /* eslint-disable */
        window.onLoad  = function(){
            // 折线的节点坐标数组，每个元素为 AMap.LngLat 对象
            this.map = new AMap.Map('container', {
                zoom:11,//级别
                resizeEnable: true,
                center: [115.777059,33.001795],//中心点坐标
                viewMode:'3D' //使用3D视图
            });
            let marker = new AMap.Marker({
                position: new AMap.LngLat(115.777059,33.001795),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
                title: '北京'
            })
            this.map.add(marker);
            // 创建 infoWindow 实例 
            let infoWindow = new AMap.InfoWindow({
                isCustom: true,  //使用自定义窗体
                content: `<div style='background:#fff;border: 2px solid #3691f6;padding: 10px;'>*街头社区位置*</div>`,  //传入 dom 对象，或者 html 字符串
                offset: new AMap.Pixel(0, -30) // 图标偏移
            });
            // 打开信息窗体
            infoWindow.open(map,[115.777059,33.001795])
        }
    }
}
</script>
<style lang="less">
.demo-split {
    height: 730px;
    border: 1px solid #dcdee2;
    .top {
        position: relative;
        height: 300px;
        padding: 20px;
        overflow: hidden;
        .ivu-timeline-item-content{
            font-size: 14px;
        }
        .position {
            position: absolute;
            right: -50px;
            top: -60px;
            width: 360px;
        }
    }
    .bottom {
        height: 400px;
    }
}
#container {
    width: 100%;
    height: 430px;
}  
</style>

