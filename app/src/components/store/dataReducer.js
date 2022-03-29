import data from "../../dataset.json";

const defaultState = {
    notebooks: data.notebooks,
    parameters: data.parameters,
};

const dataReducer = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default dataReducer;
