import assignmentList from './AssignmentList.js';
import AssignmentCreate from './AssignmentCreate.js';
import AssignmentTags from './AssignmentTags.js' ;
export default {
    components: {
        assignmentList,
        AssignmentCreate,
        AssignmentTags
    },
    template: `
        <Assignment-tags :initialTags="this.assignments.map(a => a.tag)" :currentTag='currentTag' @change="currentTag = $event"  ></Assignment-tags>
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