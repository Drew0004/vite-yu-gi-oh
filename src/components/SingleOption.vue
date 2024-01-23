<script>
export default {
    data() {
        return {

        };
    },
    props: {
        card: Object,
        singleArch: Object

    }
}
</script>

<template>
    
    <option :value="singleArch.archetype_name">{{ singleArch.archetype_name }}</option>

</template>

<style lang="scss" scoped>
    @use "../assets/scss/partials/variables.scss" as *;
    @use "../assets/scss/partials/mixins.scss" as *;
</style>
