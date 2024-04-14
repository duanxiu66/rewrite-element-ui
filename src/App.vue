<template>
    <div id="app">
        <el-container>
            <el-header height="64px">Header</el-header>
            <el-container>
                <el-aside width="200px">Aside</el-aside>
                <el-main>
                    Main
                    <el-row :gutter="20">
                        <el-col :span="12">666</el-col>
                        <el-col :span="4" :push="2">666</el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="6" :offset="12">777</el-col>
                        <el-col :span="6" :pull="12">888</el-col>
                    </el-row>
                    <el-row type="flex" justify="center">
                        <el-col :span="6">777</el-col>
                        <el-col :span="6">888</el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="6" :lg="12">777</el-col>
                        <el-col :span="6" :lg="12">888</el-col>
                    </el-row>
                    <el-row tag="ul"></el-row>

                    <el-row>
                        <el-row>
                            <el-button>默认按钮</el-button>
                            <el-button type="primary">主要按钮</el-button>
                            <el-button type="success">成功按钮</el-button>
                            <el-button type="info">信息按钮</el-button>
                            <el-button type="warning">警告按钮</el-button>
                            <el-button type="danger">危险按钮</el-button>
                        </el-row>
                    </el-row>
                    <el-row>
                        <el-button plain type="primary">主要按钮</el-button>
                        <el-button plain type="success">成功按钮</el-button>
                        <el-button plain type="info">信息按钮</el-button>
                        <el-button plain type="warning">警告按钮</el-button>
                        <el-button plain type="danger">危险按钮</el-button>
                    </el-row>
                    <el-row>
                        <el-button round type="primary">主要按钮</el-button>
                        <el-button circle type="success"><i class="iconfont icon-duigou"></i></el-button>
                        <el-button type="primary" disabled>主要按钮</el-button>
                    </el-row>
                </el-main>
            </el-container>
            <el-footer height="100px">Footer</el-footer>
        </el-container>
    </div>
</template>

<script>
export default {
    name: "App",
};
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
}
.el-header,
.el-footer {
    background-color: #b3c0d1;
    color: #333;
}

.el-aside {
    background-color: #d3dce6;
    color: #333;
}

.el-main {
    background-color: #e9eef3;
    color: #333;
    height: 768px;
}

body > .el-container {
    margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}
</style>
