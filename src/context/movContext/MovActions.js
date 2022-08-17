export const getMovStart = () => ({
  type: "GET_MOV_START",
});

export const getMovSuccess = (movies) => ({
  type: "GET_MOV_SUCCESS",
  payload: movies,
});

export const getMovFailure = () => ({
  type: "GET_MOV_FAILURE",
});

export const createMovStart = () => ({
  type: "CREATE_MOV_START",
});

export const createMovSuccess = (movie) => ({
  type: "CREATE_MOV_SUCCESS",
  payload: movie,
});

export const createMovFail = () => ({
  type: "CREATE_MOV_FAILURE",
});

export const updateMovStart = () => ({
  type: "UPDATE_MOV_START",
});

export const updateMovSuccess = (movie) => ({
  type: "UPDATE_MOV_SUCCESS",
  payload: movie,
});

export const updateMovFailure = () => ({
  type: "UPDATE_MOV_FAILURE",
});

export const deleteMovStart = () => ({
  type: "DELETE_MOV_START",
});

export const deleteMovSuccess = (id) => ({
  type: "DELETE_MOV_SUCCESS",
  payload: id,
});

export const deleteMovFailure = () => ({
  type: "DELETE_MOV_FAILURE",
});
