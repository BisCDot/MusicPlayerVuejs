import { createApp } from 'vue'
import App from './App.vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret,faHome,faAngleDown,faSearch,faEllipsisH,faStepBackward,faPause,faPlay,faStepForward,faRandom} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret,faHome,faAngleDown,faEllipsisH,faSearch,faStepBackward,faPause,faPlay,faStepForward,faRandom)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
