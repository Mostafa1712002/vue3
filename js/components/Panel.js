export default {
    template: `    <!-- panel -->
    <div class="card mt-2" v-if="$slots.title || $slots.body">
    <h5 class="card-header" v-if="$slots.title"><slot name="title"/></h5>
    <div class="card-body">
        <h5 class="card-title"><slot name="body"/></h5>
    </div>
</div>`


}