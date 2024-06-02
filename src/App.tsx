import { useEffect } from "react";
import { useAppDispatch } from "./redux/redux.hooks";

import { setTickets, setTotal } from "./redux/redux.slice";
import ticketList from "./mock/thicket.mock.json";
import { TicketMain } from "./components/TicketMain";
import { useSimulateDelay } from "./utils/hooks/useSimulateDelay";
import { Loader } from "./components/Loader/Loader";

function App() {
  const dispatch = useAppDispatch();
  const { simulateDelay, loading } = useSimulateDelay();
  useEffect(() => {
    const getThicketList = async () => {
      await simulateDelay(500);
      dispatch(setTickets(ticketList));
      dispatch(setTotal(ticketList.length));
    };
    getThicketList();
  },[dispatch, simulateDelay]);
  return (
    <>
      <TicketMain />
      {loading && <Loader />}
    </>
  );
}

export default App;
