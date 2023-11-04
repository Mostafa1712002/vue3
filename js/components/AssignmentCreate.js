export default {

    template: `
        <form @submit.prevent='store'>
            <input v-model="newAssignment" type="text" placeholder="Add new assignment" />
            <button type="submit">Add</button>
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