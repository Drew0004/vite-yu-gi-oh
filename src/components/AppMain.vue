<script>
import axios from 'axios';
import { store } from '../store.js';
import SingleCard from './SingleCard.vue';
import SingleOption from './SingleOption.vue';
export default {
    data() {
        return {
            store
        };
    },
    components: {
        SingleCard,
        SingleOption

    },
    methods:{
        getDataFromApi(){
            let queryString = this.store.searchStatus;
            let finalUrl = this.store.baseUrlArcPath + queryString;

            console.log(finalUrl);

            if(this.store.searchStatus == 0){
                finalUrl = this.store.baseUrl
            }

            if (this.store.searchStatus.length > 0){
                
                axios.get(finalUrl)
                .then((response)=>{
                this.store.cards = response.data.data;
                
                });
            }

        }
    },
}

</script>

<template>
    
    <main>
        
        <div class="container">
            
            <div class="py-4">
                <form class="row" @submit.prevent="getDataFromApi()">
                    
                    <select v-model="store.searchStatus" class="form-select w-25" aria-label="Default select example">
                        <option value="0">Random Archetype</option>
                        <!-- <option v-for="(arch, i) in store.archetypes" :value="i">{{ arch.archetype_name }}</option> -->
                        <SingleOption v-for="(arch, j) in store.archetypes" :key="j" :singleArch="arch"/>
                    </select>

                    <button class="button-small ms-2 btn btn-secondary">Genera</button>

                </form>
            </div>

            <!-- white box -->
            <div class="bg-white">
                <div class="container p-4">
                    <div class="col-12 bg-dark p-3">
                        <h3 class="text-white fs-5">Found {{store.cards.length}} cards</h3>
                    </div>

                    <div class="row">
                    
                        <SingleCard v-for="(card, i) in store.cards" :key="i" :card="card" :arch="card.archetype"/>
                            
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

        .button-small{
            width: 10%;
        }
    }
</style>
