const reducer = (state = [], action = {}) => {
    switch (action.type) {
      case "BREED_IMAGES":
          return [
          state,
          ...action.payload
          ]
      default:
          return state
      }
  }

export default reducer