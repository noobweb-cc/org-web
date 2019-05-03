<template>
    <div>
        <div class="art" v-for="(item, index) in arts" :key="index" @click="art(item.id)">
            <div class="img">
                <img :src="item.img"/>
            </div>
            <div class="content">
                <h4>{{item.title}}</h4>
                <p class="time">{{item.time}}</p>
                <div class="text">{{textSubstr(item.text)}}</div>
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
    }
}
</script>
