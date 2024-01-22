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
    
    <header class="bg-white p-4">
        <div class="row">
            <div class="col-12 d-flex align-items-center">
                <div class="my-logo-container pe-4">
                    <img src="../../public/img/Yu-Gi-OhLogo.png" alt="Logo Yu-Gi-Oh">
                </div>
                <h2 class="m-0">Yu-Gi-Oh Api</h2>
            </div>
        </div>
    </header>

</template>

<style lang="scss" scoped>
    @use "../assets/scss/partials/variables.scss" as *;
    @use "../assets/scss/partials/mixins.scss" as *;

    .my-logo-container{
        width: 100px;

        img{
            width: 100%;
        }
    }
</style>
