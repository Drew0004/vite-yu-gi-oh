<script>
export default {
    data() {
        return {

        };
    },
    methods: {

    }
}
</script>

<template>
    <div class="loading">
        <img src="../../public/img/Spin-1s-200px.gif" alt="loading..."/>
    </div>
</template>

<style lang="scss" scoped>
    @use "../assets/scss/partials/variables.scss" as *;
    @use "../assets/scss/partials/mixins.scss" as *;

    .loading {
        z-index: 1;
        background-color: white;
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;

        img{
            width: 5%;
        }
    }
</style>
