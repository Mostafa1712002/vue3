export default {

    template: `
        <form @submit.prevent='store' class='
            col-12
            d-flex
            flex-row
            justify-content-center
            align-items-center
            
        '>
            <input v-model="newAssignment" type="text" class="form-control" placeholder="Add new assignment" />
            <button type="submit" class="btn btn-success btn-sm ml-2">Add</button>
        </form>
    `,

    data() {
        return {
            newAssignment: ''
        }
    },
    methods: {
        store() {
            this.$emit('store', this.newAssignment);
        }
    },

}