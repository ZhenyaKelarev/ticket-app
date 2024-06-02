import { useEffect, useState } from "react";
import { Filter, StatusFilterVariants, TicketType } from "../types";
import { useAppDispatch, useAppSelector } from "../../redux/redux.hooks";
import { setTotal } from "../../redux/redux.slice";

const useTicketFilter = (filters: Filter) => {
  const tickets = useAppSelector((state) => state.tickets.tickets);
  const [filteredTickets, setFilteredTickets] = useState<TicketType[]>([]);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setTotal(tickets.length));
    setFilteredTickets(tickets);
  }, [tickets, dispatch]);

  const { byTransfers, statusFilter } = filters;

  const filterByTransfer = (transfers: string[]) => {
    if (transfers?.length === 0) {
      return setFilteredTickets(tickets);
    }
    const searchedArr = transfers.map((el) => {
      switch (el) {
        case "-1":
          return tickets;
        case "0":
          return tickets.filter((el) => el.transfers === 0);
        case "1":
          return tickets.filter((el) => el.transfers === 1);
        case "2":
          return tickets.filter((el) => el.transfers === 2);
        case "3":
          return tickets.filter((el) => el.transfers === 3);
        default:
          return tickets;
      }
    });
    dispatch(setTotal(searchedArr.flat().length));
    return setFilteredTickets(searchedArr.flat());
  };

  const filterByStatus = (status: StatusFilterVariants) => {
    switch (status) {
      case "price":
        return setFilteredTickets((state) =>
          [...state].sort((a, b) => a.price - b.price)
        );

      case "time":
        return setFilteredTickets((state) =>
          [...state].sort((a, b) => a.total_duration - b.total_duration)
        );

      case "optimal": {
        const filtredByPrice = [...filteredTickets].sort(
          (a, b) => a.price - b.price
        );
        const filtredByTransfers = [...filtredByPrice].sort(
          (a, b) => a.price - b.price
        );
        const filtredByTime = [...filtredByTransfers].sort(
          (a, b) => a.total_duration - b.total_duration
        );
        return setFilteredTickets(filtredByTime);
      }

      default:
        break;
    }
  };

  useEffect(() => {
    const filterData = async () => {
      filterByTransfer(byTransfers);
      filterByStatus(statusFilter);
    };
    filterData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statusFilter, byTransfers]);

  return { filteredTickets };
};

export { useTicketFilter };
