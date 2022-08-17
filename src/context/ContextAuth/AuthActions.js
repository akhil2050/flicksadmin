export const loginStartAdm = () => ({
  type: "LOGIN_START_ADM",
});
export const loginSuccessAdm = (user) => ({
  type: "LOGIN_SUCCESS_ADM",
  payload: user,
});
export const loginFailureAdm = () => ({
  type: "LOGIN_FAILURE_ADM",
});

//logout

export const logout = () => ({
  type: "LOGOUT",
});
