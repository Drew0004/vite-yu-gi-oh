import { reactive } from 'vue';

export const store = reactive({
    baseUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    urlArc: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    cards: [],
    archetypes: [],
});
