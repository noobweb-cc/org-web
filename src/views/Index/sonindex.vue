<template>
    <div>
        <!-- <div class="art" v-for="(item, index) in arts" :key="index" @click="art(item.id)">
            <div class="img">
                <img :src="item.img"/>
            </div>
            <div class="content">
                <h4>{{item.title}}</h4>
                <p class="time">{{item.time}}</p>
                <div class="text">{{textSubstr(item.text)}}</div>
            </div>
        </div> -->
        <!-- 上面是版本2.0.0要做的内容 -->
        <!-- 下面是版本1.0.0要做的内容 -->
        <div class="sonIndexCard" v-for="(item, index) in images" :key="index">
            <h2>{{item.title}}</h2>
            <div class="items">
                <div class="item" v-for="(urls, indexUrl) in item.imgs" :key="indexUrl">
                    <img :src="urls.url"/>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    data () {
        return {
            arts: [
                {
                    "title": '交代工作',
                    'id': 1,
                    "time": '2018-09-92 10:54',
                    "img": 'https://file.iviewui.com/dist/dc1e877946dd4568404a432623fca8fc.jpg',
                    "text": '一旦你成为管理者，在安排工作时，一定要把工作讲清楚，让团队明确工作内容和目标。否则，很可能大家都是白忙活。',
                },
                {
                    "title": '交代工作',
                    'id': 1,
                    "time": '2018-09-92 10:54',
                    "img": 'https://file.iviewui.com/dist/e1cf12c07bf6458992569e67927d767e.png',
                    "text": '一旦你成为管理者，在安排工作时，一定要把工作讲清楚，让团队明确工作内容和目标。否则，很可能大家都是白忙活。',
                },
                {
                    "title": '交代工作',
                    'id': 1,
                    "time": '2018-09-92 10:54',
                    "img": 'https://file.iviewui.com/dist/dc1e877946dd4568404a432623fca8fc.jpg',
                    "text": '一旦你成为管理者，在安排工作时，一定要把工作讲清楚，让团队明确工作内容和目标。否则，很可能大家都是白忙活。',
                },
                {
                    "title": '交代工作',
                    'id': 1,
                    "time": '2018-09-92 10:54',
                    "img": 'https://file.iviewui.com/dist/e1cf12c07bf6458992569e67927d767e.png',
                    "text": '一旦你成为管理者，在安排工作时，一定要把工作讲清楚，让团队明确工作内容和目标。否则，很可能大家都是白忙活。',
                },
                {
                    "title": '交代工作',
                    'id': 1,
                    "time": '2018-09-92 10:54',
                    "img": 'https://file.iviewui.com/dist/dc1e877946dd4568404a432623fca8fc.jpg',
                    "text": '一旦你成为管理者，在安排工作时，一定要把工作讲清楚，让团队明确工作内容和目标。否则，很可能大家都是白忙活。',
                },
                {
                    "title": '交代工作',
                    'id': 1,
                    "time": '2018-09-92 10:54',
                    "img": 'https://file.iviewui.com/dist/e1cf12c07bf6458992569e67927d767e.png',
                    "text": '一旦你成为管理者，在安排工作时，一定要把工作讲清楚，让团队明确工作内容和目标。否则，很可能大家都是白忙活。',
                },
                {
                    "title": '交代工作',
                    'id': 2,
                    "time": '2018-09-92 10:54',
                    "img": 'https://file.iviewui.com/dist/dc1e877946dd4568404a432623fca8fc.jpg',
                    "text": '一旦你成为管理者，在安排工作时，一定要把工作讲清楚，让团队明确工作内容和目标。否则，很可能大家都是白忙活。',
                },
                {
                    "title": '交代工作',
                    'id': 3,
                    "time": '2018-09-92 10:54',
                    "img": 'https://file.iviewui.com/dist/e1cf12c07bf6458992569e67927d767e.png',
                    "text": '一旦你成为管理者，在安排工作时，一定要把工作讲清楚，让团队明确工作内容和目标。否则，很可能大家都是白忙活。',
                },
                {
                    "title": '交代工作',
                    'id': 4,
                    "time": '2018-09-92 10:54',
                    "img": 'https://file.iviewui.com/dist/dc1e877946dd4568404a432623fca8fc.jpg',
                    "text": '一旦你成为管理者，在安排工作时，一定要把工作讲清楚，让团队明确工作内容和目标。否则，很可能大家都是白忙活。一旦你成为管理者，在安排工作时，一定要把工作讲清楚，让团队明确工作内容和目标。否则，很可能大家都是白忙活。一旦你成为管理者，在安排工作时，一定要把工作讲清楚，让团队明确工作内容和目标。否则，很可能大家都是白忙活。',
                }
            ],
            images : [
                {
                    'title': '甜瓜',
                    'imgs': [
                        { 'url': require('@/assets/imgsv1/甜瓜/01.jpg') },
                        { 'url': require('@/assets/imgsv1/甜瓜/02.jpg') },
                        { 'url': require('@/assets/imgsv1/甜瓜/03.jpg') },
                        { 'url': require('@/assets/imgsv1/甜瓜/04.jpg') },
                    ]
                },
                {
                    'title': '羊角酥',
                    'imgs': [
                        { 'url': require('@/assets/imgsv1/羊角酥/01.jpg') },
                        { 'url': require('@/assets/imgsv1/羊角酥/02.jpg') },
                        { 'url': require('@/assets/imgsv1/羊角酥/03.jpg') },
                        { 'url': require('@/assets/imgsv1/羊角酥/04.jpg') },
                    ]
                },
                {
                    'title': '麒麟西瓜',
                    'imgs': [
                        { 'url': require('@/assets/imgsv1/麒麟西瓜/01.jpg') },
                        { 'url': require('@/assets/imgsv1/麒麟西瓜/02.jpg') },
                        { 'url': require('@/assets/imgsv1/麒麟西瓜/03.jpg') },
                        { 'url': require('@/assets/imgsv1/麒麟西瓜/04.jpg') },
                    ]
                },
                {
                    'title': '粘玉米',
                    'imgs': [
                        { 'url': require('@/assets/imgsv1/粘玉米/01.jpg') },
                        { 'url': require('@/assets/imgsv1/粘玉米/02.jpg') },
                        { 'url': require('@/assets/imgsv1/粘玉米/03.jpg') },
                        { 'url': require('@/assets/imgsv1/粘玉米/04.jpg') },
                        { 'url': require('@/assets/imgsv1/粘玉米/05.jpg') },
                    ]
                },
                {
                    'title': '红薯',
                    'imgs': [
                        { 'url': require('@/assets/imgsv1/红薯/01.jpg') },
                        { 'url': require('@/assets/imgsv1/红薯/02.jpg') },
                        { 'url': require('@/assets/imgsv1/红薯/03.jpg') },
                        { 'url': require('@/assets/imgsv1/红薯/04.jpg') },
                    ]
                },
                {
                    'title': '线椒-湖南椒',
                    'imgs': [
                        { 'url': require('@/assets/imgsv1/线椒-湖南椒/01.jpg') },
                        { 'url': require('@/assets/imgsv1/线椒-湖南椒/02.jpg') },
                        { 'url': require('@/assets/imgsv1/线椒-湖南椒/03.jpg') },
                        { 'url': require('@/assets/imgsv1/线椒-湖南椒/04.jpg') },
                    ]
                },
                {
                    'title': '艾草',
                    'imgs': [
                        { 'url': require('@/assets/imgsv1/艾草/01.jpg') },
                        { 'url': require('@/assets/imgsv1/艾草/02.jpg') },
                        { 'url': require('@/assets/imgsv1/艾草/03.jpg') },
                        { 'url': require('@/assets/imgsv1/艾草/04.jpg') },
                    ]
                },
                {
                    'title': '大葱',
                    'imgs': [
                        { 'url': require('@/assets/imgsv1/大葱/01.jpg') },
                        { 'url': require('@/assets/imgsv1/大葱/02.jpg') },
                        { 'url': require('@/assets/imgsv1/大葱/03.jpg') },
                        { 'url': require('@/assets/imgsv1/大葱/04.jpg') },
                    ]
                },
            ]
        }
    },
    methods: {
        art (id) {
            alert(id)
        },
        textSubstr (text) {
            return text.substr(0, 70).replace(/[。|!|,|、]$/, '') + '...'
        }
    },
    
}
</script>
<style lang="less" scoped>
.sonIndexCard {
    h2 {
        padding: 10px;
        margin-bottom: 10px;
        font-size: 16px;
        font-weight: normal;
        border-bottom: 1px solid #e4e4e4;
    }
    .items {
        display: flex;
        flex-wrap: wrap;
        .item {
            // width: 240px;
            flex: 0 0 240px;
            height: 240px;
            margin: 6px;
            text-align: center;
            img {
                width: inherit;
                height: inherit;
            }
        }
    }
}

</style>

