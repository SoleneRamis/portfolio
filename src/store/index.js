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
                state.current++
                if (state.current == state.projectsLength) {
                    state.current = 0
                }
            },
            previous(state) {
                if (state.current == 0) {
                    state.current = state.projectsLength - 1
                } else {
                    state.current--
                }
            }
        },
        getters: {
            setCurrentProject: state => {
                return state.appData[Object.keys(state.appData)[state.current]]
            },
            valueMax: state => {
                return state.projectsLength // * 100
            },
        }
    })
}

export default createStore