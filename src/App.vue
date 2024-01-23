<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import LoadingScreen from './components/LoadingScreen.vue'
import axios from 'axios';
import { store } from './store.js';

export default {
    data() {
        return {
            store,
            loading: true
        };
    },
    components: {
        AppHeader,
        AppMain,
        AppFooter,
        LoadingScreen
    },  
    methods: {

    },
    created(){
        setTimeout(()=>{
            this.loading = false;
        }, 2000);
        
    },
    mounted(){
        axios.get(this.store.baseUrl)
        .then((response)=>{
            // console.log('Dati Carte:',response);
            this.store.cards = response.data.data;
            // console.log('Dati Carte:',this.store.cards);
            
        });

        axios.get(this.store.urlArc)
        .then((response)=>{
            console.log('Archetipi Carte:',response);
            this.store.archetypes = response.data;
            console.log('Archetipi Carte:',this.store.archetypes);
            
        });
    },
}
</script>

<template>

    <LoadingScreen v-if="loading"/>

    <AppHeader v-if="loading == false" />

    <AppMain v-if="loading == false" />

</template>

<style lang="scss">
@use "assets/scss/partials/reset" as *;
@use "assets/scss/main" as *;
</style>
