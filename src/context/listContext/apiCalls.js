import axios from "axios";
import {
  createLstFailure,
  createLstStart,
  createLstSuccess,
  deleteLstFailure,
  deleteLstStart,
  deleteLstSuccess,
  getLstFailure,
  getLstStart,
  getLstSuccess,
  updateLstStart,
  updateLstSuccess,
  updateLstFailure


} from "./ListActions";

export const getLists = async (dispatch) => {
  dispatch(getLstStart());
  try {
    const res = await axios.get("https://flickstv.herokuapp.com/api/lists", {
      // headers: {
      //   token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      // },
    });
    dispatch(getLstSuccess(res.data));
  } catch (err) {
    dispatch(getLstFailure());
  }
};

//create
export const createList = async (list, dispatch) => {
  dispatch(createLstStart());
  try {
    const res = await axios.post("https://flickstv.herokuapp.com/api/lists", list, {
      // headers: {
      //   token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      // },
    });
    dispatch(createLstSuccess(res.data));
  } catch (err) {
    dispatch(createLstFailure());
  }
};

//delete
export const deleteList = async (id, dispatch) => {
  dispatch(deleteLstStart());
  try {
    await axios.delete("https://flickstv.herokuapp.com/api/lists/" + id, {
      // headers: {
      //   token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      // },
    });
    dispatch(deleteLstSuccess(id));
  } catch (err) {
    dispatch(deleteLstFailure());
  }
};

//update

export const updateList = async (inp, id, dispatch) => {
  console.log("update list called")
  console.log("data is in list update", inp )
  dispatch(updateLstStart());
  try {
    const res = await axios.put("https://flickstv.herokuapp.com/api/lists/" + id, inp, {
      // headers: {
      //   token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      // },
    });
    dispatch(updateLstSuccess(res.data));
  } catch (err) {
    dispatch(updateLstFailure());
  }
};
