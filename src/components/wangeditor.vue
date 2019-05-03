<template>
    <div id="editor_th" class="editor_th">
        <div ref="editorRef"></div>
        <span v-if="total" class="total">总字数: {{thisEditorTextLength}}</span>
        <p v-if="isErrorShow" :class="{'errorMes': isErrorShow}" ref="errorMes">{{errorMes}}</p>
    </div>
</template>
<script>
import E from 'wangeditor'
// import {SERVER_URL} from 'utils';
// import {proxy_fetch} from '../utils/fetch.js';
export default {
    name: 'wangeditor',
    props: {
        errorMes: {
            type: String,
            default: '请输入问题描述，不少于10个字'
        }
    },
    data () {
        return {
            editor: null,
            created: true,
            editorContent: '',
            editorText: '',
            isErrorShow: false,
            total: false
        }
    },
    watch: {
        isErrorShow (val) {
            if (val) {
                setTimeout(()=>{
                    this.$refs.errorMes.style.height = '20px'
                }, 500)
            }
        }
    },
    computed: {
        thisEditorTextLength () {
            return this.editorText.length
        }
    },
    methods: {
        /**
         * @param showContent {需要展示的html}
         */
        reset () {
            this.editorContent = ''
            this.editorText = ''
        },
        show (showContent='') {
            this.editorContent = showContent
            if(this.created) {
                this.$nextTick(() => {
                    this.editor = new E(this.$refs.editorRef)        // 创建富文本实例
                    this.editor.customConfig.onchange = (html) => {
                        this.editorContent = html
                        this.editorText = this.editor.txt.text()
                        this.$emit('getcontent', {
                            html: this.editorContent,
                            text: this.editorText,
                        })
                    }
                    this.editor.customConfig.showLinkImg = false
                    this.editor.customConfig.uploadImgMaxLength = 1
                    this.editor.customConfig.menus = [          // 菜单配置
                        'head',  // 标题
                        'bold',  // 粗体
                        'fontSize',  // 字号
                        'fontName',  // 字体
                        'italic',  // 斜体
                        'underline',  // 下划线
                        'strikeThrough',  // 删除线
                        'foreColor',  // 文字颜色
                        'backColor',  // 背景颜色
                        'link',  // 插入链接
                        'list',  // 列表
                        'justify',  // 对齐方式
                        'quote',  // 引用
                        'emoticon',  // 表情
                        'image',  // 插入图片
                        'table',  // 表格
                        'video',  // 插入视频
                        'code',  // 插入代码
                        'undo',  // 撤销
                        'redo'  // 重复
                    ]
                    // 上传图片
                    // this.editor.customConfig.customUploadImg = function (files) { // , insert
                    //     let formData = new FormData();
                    //     formData.append("file", files[0]);
                    //     formData.append("name", files[0].name);

                        // proxy_fetch({url:`${SERVER_URL}/file/upload`,
                        //     method:'post', data: formData
                        // }).then(res=>{
                        //     insert(res.data.url)
                        // })
                    // }
                    this.editor.create()
                    this.editor.txt.html(showContent);
                    this.editorText = this.editor.txt.text()
                    this.total = true
                })
                this.created = false;
                
            }else{
                this.editor.txt.html(showContent);
                this.editorText = this.editor.txt.text()
            }
        }
    },
}
</script>
<style lang="less">
.editor_th {
    position: relative;
    .w-e-text {
        overflow: auto;
    }
    .errorMes {
        height: 0;
        padding: 0;
        line-height: 20px;
        animation: changebox .5s ;
        color: #f56c6c;
        font-size: 12px;
        filter: 0;
    }
    @keyframes changebox {
        from {height: 0; filter: 0;}
        to {height: 20px; filter: 1;}
    }
    .total {
        position: absolute;
        right: 5px;
        bottom: 0;
        z-index: 9;
        user-select:none;
    }
    .w-e-text-container{
        padding-bottom: 25px;
        height: auto !important;
        min-height: 300px;
        z-index: 89 !important;
    }
    .w-e-menu{
        z-index: 89 !important;
    }
}
</style>
