export default {

    template: `
    <div class="d-flex justify-content-around">
    <button v-for="tag in tags" @click="$emit('update:currentTag',tag)" class="
    btn btn-outline-secondary 
    "
    :class="{
        'active': currentTag == tag
    }"
    >{{ tag }}</button>
    </div>
    `,
    props: {
        initialTags: {
            type: Array,
            default: () => []
        },
        currentTag: String
    },

    computed: {
        tags() {
            return ['all', ...new Set(this.initialTags)];
        },
    },

}