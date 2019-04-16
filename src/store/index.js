import Vuex from 'vuex'
import appData from '../../static/data/data.json'

const createStore = () => {
    return new Vuex.Store({
        state: {
            appData: appData,
            current: 0,
            projectsLength: appData.length,
        },
        mutations: {
            next(state) {
                state.currentProjectId++

                if (state.currentProjectId == state.projectsLength) {
                    state.currentProjectId = 0
                }
            },
            previous(state) {

                if (state.currentProjectId == 0) {

                    state.currentProjectId = state.projectsLength - 1

                } else {
                    state.currentProjectId--
                }
            }
        }
    })
}

export default createStore