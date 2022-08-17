import "./WidgetMain.css";
import { useContext, useEffect } from "react";
import { MovContext } from "../../context/movContext/MovContext";
import { getMovies } from "../../context/movContext/apiCalls";
export default function WidgetMain() {

  const { movies, dispatch } = useContext(MovContext);
  useEffect(() => {
    getMovies(dispatch);

  }, [dispatch]);
  return (

    <div className="WidgetMain">
      <h3 className="WidgetMainTitle">Movies &amp; Series</h3>
      <table className="WidgetMainTable">
        <tbody>
          <tr className="WidgetMainTr">
            <th className="WidgetMainTh">MovieTitle</th>
            <th className="WidgetMainTh">Year</th>
            <th className="WidgetMainTh">Description</th>
            <th className="WidgetMainTh">Genre</th>
          </tr>

          {movies.map((movie) => (
            <tr className="WidgetMainTr">
              <td className="WidgetMainUser">
                <img
                  src={movie.img}
                  alt=""
                  className="WidgetMainImg"
                />
                <span className="WidgetMainName">{movie.movieTitle}</span>
              </td>
              <td className="WidgetMainDate">{movie.year}</td>
              <td className="WidgetMainAmount">{movie.movieDesc}</td>
              <td className="WidgetMainStatus">{movie.genre}</td>
            </tr>
          ))}





        </tbody>
      </table>
    </div>
  );
}
