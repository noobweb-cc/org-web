<template>
    <div id="orgIndex">
        <Layout>
                <Header id="header">
                    <div class="centerWidth fixedTop">
                        <img class="logo" :src="logo" />
                        <div class="navbar">
                            <span :class="{'act': item.isAct}" :key="index"
                                  @click="navClick(index)" v-for="(item, index) in nav">
                                {{item.name}}
                            </span>
                        </div>
                    </div>
                </Header>
                <Content id="content">
                    <div class="centerWidth">
                        <router-view />
                    </div>
                </Content>
                <Footer id="foot"><Icon type="ios-at" />街头社区欢迎您！</Footer>
            
        </Layout>
    </div>
</template>
<script>
export default {
    data () {
        return {
            logo: require('../../assets/img/web_logo.png'),
            nav: [
                {
                    name: '首页',
                    isAct: true,
                    path: '/index'
                },
                {
                    name: '农作',
                    isAct: false,
                    path: '/nong'
                },
                {
                    name: '关于我们',
                    isAct: false,
                    path: '/about'
                }
            ]
        }
    },
    methods: {
        navClick (index) {
            for (let i of this.nav) {
                i.isAct = false
            }
            this.nav[index].isAct = true
            this.$router.push(this.nav[index].path)
        }
    },
    created () {
        if (this.$route.path === "/about") {
            this.navClick(2);
        } else if (this.$route.path === "/nong") {
            this.navClick(1);
        } else if (this.$route.path === "/index") {
            this.navClick(0);
        }
    }
}
</script>

<style lang="less">
body {
    background-color: #f5f7f9;
}
.centerWidth {
    position: relative;
    width: 860px;
    margin: 0 auto;
}
#header{
    .fixedTop {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        width: 100%;
        background-color: #fff;
        border-bottom: 1px solid #e4e4e4;
    }
    background-color: #fff;
    .logo{
        height: 57px;
        position: absolute;
        left: 0;
        top: 6px;
    }
    .navbar {
        margin-left: 180px;
        span{
            display: inline-block;
            padding: 0 15px;
            height: 65px;
            line-height: 64px;
            font-size: 16px;
            cursor: pointer;
        }
        .act {
            border-bottom: 3px solid #ff6400;
        }
    }
}
#content {
    padding: 24px;
    margin-bottom: 80px;
    background-color: #fff;
    .art {
        position: relative;
        border-bottom: 1px solid #e4e4e4;
        height: 120px;
        margin-bottom: 20px;
        overflow: hidden;
        cursor: pointer;
        .img {
            position: absolute;
            left: 0;
            top: 0;
            width: 220px;
            height: inherit;
            padding-bottom: 15px;
            background-color: #fff;
            box-sizing: border-box;
            word-break: break-all;
            img{
                width: inherit;
                height: inherit;
            }
        }
        .content {
            margin-left: 240px;
            font-size: 16px;
            .time{
                color: #c5c5c5;
            }
            h4 {
                &:hover{
                    color: #ff6400;
                }
            }
            .text {
                line-height: 30px;
                &:hover{
                    color: #ff6400;
                }
            }
        }
    }
}
#foot {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    background-color: #f8f8f8;
    border-top: 2px solid #e4e4e4;
    font-size: 16px;
}
</style>
