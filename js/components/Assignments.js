import assignmentList from './AssignmentList.js';
import AssignmentCreate from './AssignmentCreate.js';
export default {
    components: {
        assignmentList,
        AssignmentCreate
    },
    template: `
    <div class="d-flex justify-content-around">
    <button v-for="tag in tags" @click="currentTag = tag" class="
    btn btn-outline-secondary 
    "
    :class="{
        'active': currentTag == tag
    }"
    >{{ tag }}</button>
    </div>
        <assignmentList :assignments="filter.inProgress" title='progress'></assignmentList>
        <assignmentList :assignments="filter.completed" title='Finished'></assignmentList>
        <AssignmentCreate @store='store'></AssignmentCreate> 
    `,
    data() {
        return {
            assignments: [
                { title: 'Do Homework', completed: false, id: 1, tag: 'math' },
                { title: 'Review 2 Books', completed: false, id: 2, tag: 'math' },
                { title: 'Make Research', completed: false, id: 3, tag: 'science' },

            ],
            newAssignment: '',
            currentTag: 'all'

        }
    },
    computed: {
        filter() {
            return {
                completed: this.filteredAssignments.filter(a => a.completed),
                inProgress: this.filteredAssignments.filter(a => !a.completed)
            }
        },
        tags() {
            return ['all',...new Set(this.assignments.map(a => a.tag))];
        },
        filteredAssignments() {
            
            if (this.currentTag == 'all') {
                return this.assignments;
            }
            return this.assignments.filter(a => a.tag === this.currentTag);
        }


    },
    methods: {
        store(name) {
            this.assignments.push({
                title: name,
                completed: false,
                id: this.assignments.length + 1
            });

        }
    },

}