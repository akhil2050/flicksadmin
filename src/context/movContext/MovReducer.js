const MovReducer = (state, action) => {
  switch (action.type) {
    case "GET_MOV_START":
      return {
        movies: [],
        isFetching: true,
        error: false,
      };
    case "GET_MOV_SUCCESS":
      return {
        movies: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_MOV_FAILURE":
      return {
        movies: [],
        isFetching: false,
        error: true,
      };
    case "CREATE_MOV_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "CREATE_MOV_SUCCESS":
      return {
        movies: [...state.movies, action.payload],
        isFetching: false,
        error: false,
      };
    case "CREATE_MOV_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "UPDATE_MOV_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "UPDATE_MOV_SUCCESS":
      return {
        movies: [...state.movies, action.payload],
        isFetching: false,
        error: false,
        // movies: state.movies.map(
        //   (movie) => movie._id === action.payload._id && action.payload
        // ),
        // isFetching: false,
        // error: false,
      };
    case "UPDATE_MOV_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "DELETE_MOV_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "DELETE_MOV_SUCCESS":
      return {
        movies: state.movies.filter((movie) => movie._id !== action.payload),
        isFetching: false,
        error: false,
      };
    case "DELETE_MOV_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export default MovReducer;
