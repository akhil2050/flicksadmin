export const getLstStart = () => ({
  type: "GET_LST_START",
});

export const getLstSuccess = (lists) => ({
  type: "GET_LST_SUCCESS",
  payload: lists,
});

export const getLstFailure = () => ({
  type: "GET_LST_FAILURE",
});

export const createLstStart = () => ({
  type: "CREATE_LST_START",
});

export const createLstSuccess = (list) => ({
  type: "CREATE_LST_SUCCESS",
  payload: list,
});

export const createLstFailure = () => ({
  type: "CREATE_LST_FAILURE",
});

export const updateLstStart = () => ({
  type: "UPDATE_LST_START",
});

export const updateLstSuccess = (movie) => ({
  type: "UPDATE_LST_SUCCESS",
  payload: movie,
});

export const updateLstFailure = () => ({
  type: "UPDATE_LST_FAILURE",
});

export const deleteLstStart = () => ({
  type: "DELETE_LST_START",
});

export const deleteLstSuccess = (id) => ({
  type: "DELETE_LST_SUCCESS",
  payload: id,
});

export const deleteLstFailure = () => ({
  type: "DELETE_LST_FAILURE",
});
