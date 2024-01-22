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
        <img class="img" src="../../public/img/Spinner-1s-200px.gif" alt="loading..."/>
    </div>
</template>

<style lang="scss" scoped>
    @use "../assets/scss/partials/variables.scss" as *;
    @use "../assets/scss/partials/mixins.scss" as *;

    .loading {
        position: relative;
        z-index: 1;
        background-color: white;
        height: 100vh;
        width: 100vw;
        text-align: center;
        line-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .img {
        position: absolute;
        margin: auto
    }
</style>
