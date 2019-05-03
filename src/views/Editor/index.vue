<template>
    <div>
        <div class="nav">
            <div class="logo">
                <Icon type="ios-construct" />
                街头社区管理系统
            </div>
            <Menu @on-select="onSelect" mode="horizontal" :theme="theme1" active-name="1">
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-stats" />
                        我的
                    </template>
                    <MenuGroup title="目录">
                        <MenuItem name="2-1">退出登录</MenuItem>
                    </MenuGroup>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-stats" />
                        菜单导航
                    </template>
                    <MenuGroup title="目录">
                        <MenuItem name="3-1">新闻</MenuItem>
                        <MenuItem name="3-2">农作</MenuItem>
                        <MenuItem name="3-3">关于我们</MenuItem>
                    </MenuGroup>
                </Submenu>
            </Menu>
        </div>
        <div class="Editor">
            <Card :bordered="false">
                <p slot="title">新增文章</p>
                <Form :model="formLeft" label-position="left" :label-width="100">
                    <FormItem label="标题">
                        <Input style="max-width: 520px;" v-model="formLeft.title" :maxlength="30" placeholder="请输入标题，不超过30个字" />
                    </FormItem>
                    <FormItem label="分类">
                        <RadioGroup v-model="formLeft.type">
                            <Radio label="news">新闻</Radio>
                            <Radio label="nong">农作</Radio>
                            <Radio label="intro">介绍</Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem label="文章内容">
                        <wangeditor ref="wangeditorRef" @getcontent='getcontent' />
                    </FormItem>
                    <FormItem>
                        <Button type="primary">发布文章</Button>
                        <Button style="margin-left: 8px">存到我的草稿箱</Button>
                    </FormItem>
                </Form>
            </Card>
        </div>
        
    </div>
</template>
<script>
import wangeditor from '../../components/wangeditor.vue'
export default {
    data () {
        return {
            theme1: 'light',
            formLeft: {
                title: '',
                type: 'news',
                content: ''
            }
        }
    },
    created () {
        setTimeout(() => {
            this.$refs.wangeditorRef.show()
        }, 0);
    },
    methods: {
        getcontent () {
            console.log(23)
        },
        onSelect (name) {
            console.log(name)
        }
    },
    components: { wangeditor }
}
</script>
<style lang="less">
.Editor {
    min-width: 860px;
    height: 100vh;
    background-color: #eee;
    padding: 20px;
    .ivu-form .ivu-form-item-label, .ivu-input, .ivu-select-selection, .ivu-select-item {
        font-size: 14px;
    }
    .h2 {
        font-size: 18px;
        font-weight: normal;
        padding: 10px;
    }
    .ivu-radio-wrapper {
        margin-right: 15px;
    }
}
.nav{
    .ivu-menu-horizontal .ivu-menu-item,
    .ivu-menu-horizontal .ivu-menu-submenu{
        float: right;
    }
    .logo{
        position: absolute;
        left: 20px;
        top: 18px;
        z-index: 3333;
        font-size: 15px;
    }
}
</style>

