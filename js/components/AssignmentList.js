import assignment from './Assignment.js';

export default {
    components: {
        assignment
    },
    'template': `
    <section class="col-12" v-if="show && assignments.length">
    <button @click="show = !show">&times</button>
    <ul >
        <h1>{{ title }} <span class="badge badge-light">{{ assignments.length }}</span></h1>
            
        <li v-for="item in assignments" :key="item.id">
           <assignment :item="item"></assignment>
        </li>
    </ul>
    <slot></slot>
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

    data() {
        return {
            show: true
        }
    }


}