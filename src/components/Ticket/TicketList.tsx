import { FC } from "react";
import { Filter } from "../../utils/types";
import { TicketElement } from "./TicketElement";
import { useTicketFilter } from "../../utils/hooks/useFilter";
import { useAppSelector } from "../../redux/redux.hooks";

interface TicketListProps {
  filters: Filter;
}

export const TicketList: FC<TicketListProps> = ({ filters }) => {
  const { filteredTickets } = useTicketFilter(filters);
  const page = useAppSelector((state) => state.tickets.page);
  const slicedTickets = filteredTickets.slice(0, page * 5);
  return (
    <ul className="thicket__list">
      {slicedTickets.length === 0 ? (
        <li className="nodata">Немає інформації для відображення</li>
      ) : (
        <>
          {slicedTickets.map((thicket) => (
            <TicketElement key={thicket.id} thicket={thicket} />
          ))}
        </>
      )}
    </ul>
  );
};
