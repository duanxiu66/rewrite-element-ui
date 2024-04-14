export default {
    name: "ElCol",
    props: {
        tag: {
            type: String,
            default: "div",
        },
        span: {
            type: Number,
            default: 24,
        },
        offset: {
            type: Number,
            default: 0,
        },
        push: {
            type: Number,
            default: 0,
        },
        pull: {
            type: Number,
            default: 0,
        },
        xs: [Number, Object],
        sm: [Number, Object],
        lg: [Number, Object],
        md: [Number, Object],
        xl: [Number, Object],
    },
    computed: {
        gutter() {
            let parent = this.$parent;
            while (parent && parent.$options.name !== "ElRow") {
                parent = parent.$parent;
            }
            return parent ? parent.gutter : 0;
        },
        style() {
            const style = {};
            if (this.gutter) {
                style["padding-left"] = `${this.gutter / 2 + "px"}`;
                style["padding-right"] = `${this.gutter / 2 + "px"}`;
            }
            return style;
        },
        classList() {
            const classList = [];
            const operators = ["span", "offset", "push", "pull"];
            operators.forEach((prop) => {
                if (this[prop]) {
                    classList.push(
                        prop == "span"
                            ? `el-col-${this[prop]}`
                            : `el-col-${prop}-${this[prop]}`
                    );
                }
            });

            const adaptive = ["xs", "sm", "md", "lg", "xl"];
            adaptive.forEach((size) => {
                if (typeof this[size] === "number") {
                    classList.push(`el-col-${size}-${this[size]}`);
                } else if (typeof this[size] === "object") {
                    const props = this[size];
                    Object.keys(props).forEach((prop) => {
                        classList.push(
                            prop == "span"
                                ? `el-col-${prop}-${props[prop]}`
                                : `el-col-${size}-${prop}-${props[prop]}`
                        );
                    });
                }
            });

            return classList;
        },
    },
    render(h) {
        return h(
            this.tag,
            {
                class: ['el-col', this.classList], 
                style: this.style
            },
            this.$slots.default);
    }
};