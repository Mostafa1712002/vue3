import assignmentList from './AssignmentList.js';
export default {
    components: {
        assignmentList
    },
    'template': `
        <assignmentList :assignments="filter.inProgress" title='in progress'></assignmentList>
        <assignmentList :assignments="filter.completed" title='Finished Tasks'></assignmentList>
    `,
    data() {
        return {
            assignments: [
                { title: 'Do Homework', completed: false, id: 1 },
                { title: 'Review 2 Books', completed: false, id: 2 },
                { title: 'Make Research', completed: false, id: 3 },

            ]

        }
    },
    computed: {
        filter() {
            return {
                completed:  this.assignments.filter(a => a.completed),
                inProgress: this.assignments.filter(a => !a.completed)
            }
        }


    },
}