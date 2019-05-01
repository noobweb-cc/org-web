<template>
    <div>
        <div ref="editor"></div>
    </div>
</template>
<script>
import E from 'wangeditor'
export default {
    name: 'editor',
    data () {
        return {
            editorContent: ''
        }
    },
    props:['catchData'],
    mounted () {
        var editor = new E(this.$refs.editor)        //创建富文本实例
        editor.customConfig.onchange = (html) => {
            this.editorContent = html
            this.catchData(html)  //把这个html通过catchData的方法传入父组件
        }
        editor.customConfig.menus = [          //菜单配置
            'head',
            'list',  // 列表
            'justify',  // 对齐方式
            'bold',
            'fontSize',  // 字号
            'italic',
            'underline',
            'image',  // 插入图片
            'foreColor',  // 文字颜色
            'undo',  // 撤销
            'redo',  // 重复
        ] 
        editor.create() 
    },
    methods: {
    }
}
</script>
