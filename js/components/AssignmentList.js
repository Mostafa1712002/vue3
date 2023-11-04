import assignment from './Assignment.js';
export default {
    components: {
        assignment
    },  
    'template': `
    <section class=" col-12">
    <ul v-if="assignments.length">
        <h1>{{ title }}</h1>
        <li v-for="item in assignments" :key="item.id">
           <assignment :item="item"></assignment>
        </li>
    </ul>
    </section>
    `,
    props: {
        assignments: {
            type: Array,
            default: () => []
        },
        title: {
            type: String,
            default: '' 
        }
    },
}