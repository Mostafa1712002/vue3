export default {
    template: `<button :class='{
        "btn btn-primary": type === "primary",
        "btn btn-success": type === "success",
        "btn btn-danger": type === "danger",
        "btn btn-warning": type === "warning",
        "btn btn-info": type === "info",
    }' :disabled='disabled'><slot></slot> <br> {{ message }}</button>`,
    props: {
        type: {
            type: String,
            default: 'danger'
        },
        disabled: {
            type: Boolean,
            default: false
        },
    }

}