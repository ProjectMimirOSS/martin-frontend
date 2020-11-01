import GlobalActions from "./actions.enum";

const rootreducer = (state: any, action: any) => {
    const { type, payload } = action;
    switch (type) {
        case GlobalActions.UPDATE_THEME:
            return { ...state, isDarkThemed: !state.isDarkThemed };
        case GlobalActions.LOGIN:
            return {...state, isDarkThemed: payload.isUser};
        default:
            return state;
    }
};

export default rootreducer;