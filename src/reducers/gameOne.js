const reducer = (state = [], action = {}) => {
    switch (action.type) {

        case "GAME_ONE":
            return [
                ...state,
                ...action.payload
            ]


        default:
            return state
      }
  }

export default reducer