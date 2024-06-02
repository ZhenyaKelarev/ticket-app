import { useAppDispatch, useAppSelector } from "../../redux/redux.hooks";
import { nextPage } from "../../redux/redux.slice";

export const Pagination = () => {
  const thicketsState = useAppSelector((state) => state.tickets);
  const dispatch = useAppDispatch();
  const nextPageHandler = () => {
    dispatch(nextPage());
  };
  const isMore = thicketsState.page * 5 >= thicketsState.total;
  return (
    <div className="pagination">
      {!isMore ? (
        <button onClick={nextPageHandler}>Показати ще 5 квитків</button>
      ) : (
        <div></div>
      )}
    </div>
  );
};
