export default {
    'template': `
        <label>{{ item.title }} <input type="checkbox" v-model="item.completed"></label>
    `,
    props: {
        item: {
            type: Object
        }
      
    },
}