<script>
export default {
    data() {
        return {

        };
    },
    props: {
        card: Object,
        arch: { 
            type: String,
            default: 'Type not Defined'
        }
    }
}
</script>

<template>
    
    <div class="cards-container">

        <div>
            <img class="w-100" :src="card.card_images[0].image_url" :alt="card.name">
        </div>

        <div class="text-center text-box pt-3 mb-3">
            <h3 class="fs-5">{{ card.name }}</h3>
            <h5 class="fs-6">{{ arch }}</h5>
        </div>

    </div>

</template>

<style lang="scss" scoped>
    @use "../assets/scss/partials/variables.scss" as *;
    @use "../assets/scss/partials/mixins.scss" as *;

    .cards-container{
        width: calc(100% / 5);

        .text-box{
            height: 150px;
            background-color: $bg_color;

            h3{
                color: white;
                text-transform: uppercase;
            }
        }
    }
</style>
