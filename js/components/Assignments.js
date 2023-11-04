import assignmentList from './AssignmentList.js';
import AssignmentCreate from './AssignmentCreate.js';
export default {
    components: {
        assignmentList,
        AssignmentCreate
    },
    template: `
        <assignmentList :assignments="filter.inProgress" title='in progress'></assignmentList>
        <assignmentList :assignments="filter.completed" title='Finished Tasks'></assignmentList>
        <AssignmentCreate @store='store'></AssignmentCreate> 
    `,
    data() {
        return {
            assignments: [
                { title: 'Do Homework', completed: false, id: 1 },
                { title: 'Review 2 Books', completed: false, id: 2 },
                { title: 'Make Research', completed: false, id: 3 },

            ],
            newAssignment: ''

        }
    },
    computed: {
        filter() {
            return {
                completed: this.assignments.filter(a => a.completed),
                inProgress: this.assignments.filter(a => !a.completed)
            }
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