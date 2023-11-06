import assignmentList from './AssignmentList.js';
import AssignmentCreate from './AssignmentCreate.js';
import AssignmentTags from './AssignmentTags.js';
import panel from './Panel.js';
export default {
    components: {
        assignmentList,
        AssignmentCreate,
        AssignmentTags,
        panel
    },
    template: `
        <Assignment-tags :initialTags="this.assignments.map(a => a.tag)" v-model:currentTag='currentTag' @change="currentTag = $event"  ></Assignment-tags>
        <assignmentList :assignments="filter.inProgress" title='progress'>
        <AssignmentCreate @store='store'></AssignmentCreate> 
        </assignmentList>
        <assignmentList :assignments="filter.completed" title='Finished'>
        </assignmentList>

       <panel>
         <template #title>
            <h1>Assignment List</h1>
            </template>
            <template #body>
      body panel
            </template>
       </panel>
       
        
    `,
    data() {
        return {
            assignments: [],
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
                id: this.assignments.length + 1,
                tag: 'others'
            });

        }
    },

    created() {

        fetch('http://localhost:3001/assignments').then(response => response.json()).then(data => {
            this.assignments = data;
        }
        );
    },

}