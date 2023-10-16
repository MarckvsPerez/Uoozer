import { createApp } from 'vue'
import App from './App.vue'

// Font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faSearch, faChevronRight, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
library.add({ faBars, faSearch, faChevronRight, faUser, faSignOutAlt })

// styles
import 'bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"; // bootstrap
import "./styles/main.scss";

// firebase
import "./firebase";

const app = createApp(App);
app.component('fa-icon', FontAwesomeIcon);
app.mount("#app")
