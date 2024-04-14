export default {
    name: "ElRow",
    props: {
        tag: {
            type: String,
            default: "div",
        },
        gutter: {
            type: Number,
            default: 0,
        },
        type: String,
        justify: {
            type: String,
            default: "start",
            validator: (val) =>
                [
                    "start",
                    "end",
                    "center",
                    "space-between",
                    "space-around",
                ].includes(val),
        },
        align: {
            type: String,
            default: "top",
            validator: (val) => ["top", "middle", "bottom"].includes(val),
        },
    },
    render(h) {
        return h(
            this.tag,
            {
                class: [
                    'el-row',
                    { 'el-row--flex': this.type === 'flex' },
                    this.justify !== 'start' && `is-justify-${this.justify}`,
                    this.align !== 'top' && `is-align-${this.align}`,
                ],
            },
            this.$slots.default);
    }
};