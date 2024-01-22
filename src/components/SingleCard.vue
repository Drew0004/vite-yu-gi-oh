<script>
export default {
    data() {
        return {

        };
    },
    props: {
        card: Object,
    }
}
</script>

<template>
    <div>
        <img :src="card.card_images[0].image_url" alt="">
    </div>

    <div>
        {{ card.name }}
    </div>

    <div>
        {{ card.archetype }}
    </div>
</template>

<style lang="scss" scoped>
    @use "../assets/scss/partials/variables.scss" as *;
    @use "../assets/scss/partials/mixins.scss" as *;
</style>
