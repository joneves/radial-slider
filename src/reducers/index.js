export default (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE' :
        let calculations = state.calculations.slice(0);
        calculations[action.index] = {...calculations[action.index] , ...{value: action.value}};

        console.log(calculations[0]);

        return {...state, calculations};
    default:
        return state;
    }
};


