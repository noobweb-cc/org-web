<template>
    <div>


        <button style="background: red; color: #fff;"
            @click="ppp">{{msg}}</button>
        <div>{{oId}}</div>

    </div>
</template>
<script>
export default {
    props: ["id"],
    data () {
        return {
            oId: this.id,
            msg: 'button'
        }
    },
    methods: {
        ppp () {
            this.oId = Math.random()
            this.$emit("input", this.oId)
            // this.$emit("hhh")
        }
    }
}
</script>