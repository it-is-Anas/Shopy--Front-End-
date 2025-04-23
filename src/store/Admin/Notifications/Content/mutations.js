export default {
    updateLocalNots(state,nots){
        state.nots = nots;
    },createNot(state,not){
        const nots = [not,...state.nots];
        state.nots= nots;
    }
};