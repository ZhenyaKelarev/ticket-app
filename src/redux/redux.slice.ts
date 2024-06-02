import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ReduxStoteType, TicketType } from "../utils/types";

const initialState: ReduxStoteType = {
  tickets: [],
  page: 1,
  total: 0,
};

export const thicketSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    setTickets(state, actions: PayloadAction<TicketType[]>) {
      state.tickets = actions.payload;
    },
    nextPage(state) {
      state.page += 1;
    },
    setTotal(state, actions: PayloadAction<number>) {
      state.total = actions.payload;
    },
  },
});

export const { setTickets, nextPage, setTotal } = thicketSlice.actions;

export default thicketSlice.reducer;
