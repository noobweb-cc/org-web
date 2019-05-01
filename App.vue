<template>
    <div>
        {{msg}}234
        <router-view />
    </div>
</template>
<script>
export default {
    data () {
        return {
            msg: 'hello-vue-cli'
        }
    }
}
</script>
<style>
body {
    background-color: #acccef;
}
</style>

