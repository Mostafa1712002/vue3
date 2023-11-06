import assignment from './Assignment.js';

export default {
    components: {
        assignment
    },
    'template':
        ` <div class="card  mt-2 ">
        <div class="card-body">
            <h5 class="card-title">{{ title }} <span class="badge badge-light">{{ assignments.length }}</span></h5>
            <p class="card-text">
            <ul>
                <li v-for="item in assignments" :key="item.id">
                    <assignment :item="item"></assignment>
                </li>
            </ul>
            </p>
            <slot></slot>
        </div>
    </div>



`

    ,
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