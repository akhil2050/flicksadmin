import axios from "axios";
import {
  createMovFail,
  createMovStart,
  createMovSuccess,
  deleteMovFailure,
  deleteMovStart,
  deleteMovSuccess,
  updateMovFailure,
  updateMovStart,
  updateMovSuccess,
  getMovFailure,
  getMovStart,
  getMovSuccess,
} from "./MovActions";

export const getMovies = async (dispatch) => {
  dispatch(getMovStart());
  try {
    const res = await axios.get("https://flickstv.herokuapp.com/api/movies", {
      // headers: {
      //   token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      // },
    });
    dispatch(getMovSuccess(res.data));
  } catch (err) {
    dispatch(getMovFailure());
  }
};

//create
export const createMovie = async (movie, dispatch) => {
  dispatch(createMovStart());
  try {
    const res = await axios.post("https://flickstv.herokuapp.com/api/movies", movie, {
      // headers: {
      //   token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      // },
    });
    dispatch(createMovSuccess(res.data));
  } catch (err) {
    dispatch(createMovFail());
  }
};

//delete
export const deleteMovie = async (id, dispatch) => {
  dispatch(deleteMovStart());
  try {
    await axios.delete("https://flickstv.herokuapp.com/api/movies/" + id, {
      // headers: {
      //   token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      // },
    });
    dispatch(deleteMovSuccess(id));
  } catch (err) {
    dispatch(deleteMovFailure());
  }
};


//update
export const updateMovie = async (inp, dispatch) => {
  console.log("update movie called")
  console.log("data is in update", inp )
  dispatch(updateMovStart());
  try {
    const res = await axios.put("https://flickstv.herokuapp.com/api/movies/" + inp.movID, inp, {
      // headers: {
      //   token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      // },
    });
    dispatch(updateMovSuccess(res.data));
  } catch (err) {
    dispatch(updateMovFailure());
  }
};