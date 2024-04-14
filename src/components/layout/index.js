import Row from "./src/Row";
import Col from "./src/Col";

import Container from './src/Container.vue'
import Main from './src/Main.vue';
import Aside from './src/Aside.vue';
import Header from './src/Header.vue';
import Footer from './src/Footer.vue';

const components = [Row, Col, Container, Main, Aside, Header, Footer]

const install = function (Vue) {
    components.forEach(component => {
        Vue.component(component.name, component);
    })
}
export { Row, Col, Container, Main, Aside, Header, Footer };
export default { install };
