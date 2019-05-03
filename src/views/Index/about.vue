<template>
    <div>
        <div class="demo-split">
            <div class="top">
                <Timeline>
                    <TimelineItem color="green">
                        <Icon type="ios-trophy" slot="dot"></Icon>
                        <span>关于街头社区</span>
                    </TimelineItem>
                    <TimelineItem>地址：阜阳市宁老子</TimelineItem>
                    <TimelineItem>联系电话: 1223333333</TimelineItem>
                    <TimelineItem>联系电话: 1223333333</TimelineItem>
                    <TimelineItem>联系电话: 1223333333</TimelineItem>
                    <TimelineItem>联系电话: 1223333333</TimelineItem>
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
                center: [116.397428, 39.90923],//中心点坐标
                viewMode:'3D' //使用3D视图
            });
            let marker = new AMap.Marker({
                position: new AMap.LngLat(116.39, 39.9),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
                title: '北京'
            })
            this.map.add(marker);
            // 创建 infoWindow 实例 
            let infoWindow = new AMap.InfoWindow({
                isCustom: true,  //使用自定义窗体
                content: `<div style='background:#fff;border: 2px solid red;padding: 10px;'>*街头社区位置*</div>`,  //传入 dom 对象，或者 html 字符串
                offset: new AMap.Pixel(0, -30) // 图标偏移
            });
            // 打开信息窗体
            infoWindow.open(map,[116.39, 39.9])
        }
    }
}
</script>
<style lang="less">
.demo-split {
    height: 730px;
    border: 1px solid #dcdee2;
    .top {
        height: 300px;
        padding: 20px;
        .ivu-timeline-item-content{
            font-size: 14px;
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

