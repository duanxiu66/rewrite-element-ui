import Button from './src/Button.vue';

const install = function (Vue) {
    Vue.component(Button.name, Button);
}

export { Button }
export default {
    install,
}