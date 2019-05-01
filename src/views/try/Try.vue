<template>
    <div>
        
        <try-son v-model="id" @hhh="hhh"></try-son>

    </div>
</template>
<script>
import trySon from "./trySon.vue"
export default {
    data () {
        return {
            id: 123
        }
    },
    methods: {
        hhh () {
            alert(1)
        }
    },
    components: {
        trySon
    }
}
</script>

