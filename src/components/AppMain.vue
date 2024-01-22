<script>
import { store } from '../store.js';
import SingleCard from './SingleCard.vue';
export default {
    data() {
        return {
            store
        };
    },
    components: {
        SingleCard
    }
}
</script>

<template>
    
    <main>
        
        <div class="container">
            
            <div class="py-4">
                <select class="form-select w-25" aria-label="Default select example">
                    <option selected>Alien</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </select>
            </div>

            <!-- white box -->
            <div class="bg-white">
                <div class="container p-4">
                    <div class="col-12 bg-dark p-3">
                        <h3 class="text-white fs-5">Found {{store.cards.length}} cards</h3>
                    </div>

                    <div class="row">
                    
                        <SingleCard v-for="(card, i) in store.cards" :key="i" :card="card"/>
                            
                    </div>
                </div>

            </div>
        
        </div>
    
    </main>

</template>

<style lang="scss" scoped>
    @use "../assets/scss/partials/variables.scss" as *;
    @use "../assets/scss/partials/mixins.scss" as *;

    main{
        background-color: $bg_color;
    }
</style>
