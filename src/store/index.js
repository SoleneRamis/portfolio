import Vuex from 'vuex'
import appData from '../../static/data/data.json'

const createStore = () => {
    return new Vuex.Store({
        state: {
            appData: appData,
            current: 0,
            projectsLength: appData.length,
            resize: Boolean(),
            mobileInfos: Object(),
            loaderDisplayer: Boolean(true),
            resources: Object(),
            newResources: Object(),
            progressValue: Number(),
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
            },
            resize(state, bool) {
                //if resized -> return true = watch this, do actions then set with false
                state.resize = bool;
            },
            mobile(state, infos) {
                //detect info for mobile
                state.mobileInfos = infos;
            },
            resources(state, resource) {
                //init resource with loader and resource file
                state.resources[resource.id] = resource;
            },
            resourcesChange(state, resources) {
                //init resource if resources was changed
                state.newResources = resources;
            },
            progressValue(state, progress) {
                //for loader progress bar
                state.progressValue = progress;
            }
        },
        getters: {
            setCurrentProject: state => {
                return state.appData[Object.keys(state.appData)[state.current]];
            },
            valueMax: state => {
                return state.projectsLength;
            },
            getUpdateSizeState: state => {
                return state.resize;
            },
            getMobileState: state => {
                return state.mobileInfos;
            },
            getResourcesChangeState: state => {
                return state.newResources;
            },
            getProgressValueState: state => {
                return state.progressValue;
            }
        },
        actions: {
            setUpdateSizeState: ({ commit, state }, bool) => {
                commit('resize', bool);
            },
            setMobileState: ({ commit, state }, infos) => {
                commit('mobile', infos);
            },
            setResourcesChangeState: ({ commit, state }, resources) => {
                commit('resourcesChange', resources);
            },
            setProgressValueState: ({ commit, state }, progress) => {
                commit('ProgressValue', progress);
            }
        },
    })
}

export default createStore