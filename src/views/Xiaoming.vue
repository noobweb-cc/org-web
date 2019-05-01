<template>
    <div style="padding-top: 15px;">
        <el-form :inline="true" v-model="formdata" label-width="76px">
            <el-form-item label="策略ID">
            <el-input type="mini" v-model="formdata.name" placeholder="请输入策略ID" />
            </el-form-item>
            <el-form-item label="策略名">
            <el-input type="mini" v-model="formdata.name" placeholder="请输入策略名" />
            </el-form-item>
            <el-form-item label="策略描述">
            <el-input type="mini" v-model="formdata.name" placeholder="请输入策略描述" />
            </el-form-item>
            <el-button type="primary" icon="el-icon-search" @click="search_information">查询</el-button>
            <el-button type="primary" icon="el-icon-plus" @click="add_more">新增</el-button>
            <el-button type="primary" @click="reset_select">重置</el-button>
        </el-form>
        <el-table :data="tableData">
            <el-table-column label="策略ID" prop="name"/>
            <el-table-column label="策略名" prop="name"/>
            <el-table-column label="策略规则" prop="name"/>
            <el-table-column label="操作人" prop="name"/>
            <el-table-column label="操作时间" prop="name"/>
            <el-table-column label="有效券数" prop="name"/>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="fix_info()">修改</el-button>
                    <el-button type="text" size="small" @click="delete_info()">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="block">
            <el-pagination layout="total, prev, pager, next"
            :current-page.sync="currentPage" @current-change="currentChange"
            :page-size='20' :total="total">
            </el-pagination>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            total: 100,
            currentPage: 1,
            pageSize: 20,
            tableData: [
                {
                    name: '暂时的name'
                }
            ],
            formdata: {
                name: ''
            }
        }
    },
    methods: {
        search_information(){
        },
        add_more(){
        },
        reset_select(){
        },
        currentChange () {

        },
        fix_info () {

        },
        delete_info () {

        },

    }
}
</script>
<style lang="less">

</style>


