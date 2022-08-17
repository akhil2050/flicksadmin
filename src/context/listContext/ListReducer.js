const ListReducer = (state, action) => {
  switch (action.type) {
    case "GET_LST_START":
      return {
        lists: [],
        isFetching: true,
        error: false,
      };
    case "GET_LST_SUCCESS":
      return {
        lists: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_LST_FAILURE":
      return {
        lists: [],
        isFetching: false,
        error: true,
      };
    case "CREATE_LST_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "CREATE_LST_SUCCESS":
      return {
        lists: [...state.lists, action.payload],
        isFetching: false,
        error: false,
      };
    case "CREATE_LST_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "UPDATE_LST_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "UPDATE_LST_SUCCESS":
      return {
        lists: state.lists.map(
          (list) => list._id === action.payload._id && action.payload
        ),
        isFetching: false,
        error: false,
      };
    case "UPDATE_LST_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "DELETE_LST_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "DELETE_LST_SUCCESS":
      return {
        lists: state.lists.filter((list) => list._id !== action.payload),
        isFetching: false,
        error: false,
      };
    case "DELETE_LST_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export default ListReducer;
