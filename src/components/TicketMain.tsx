import { Header } from "./Header/Header";
import { StatusFilter } from "./StatusFilter/StatusFilter";
import { TransferFilter } from "./TransferFilter";
import { TicketList } from "./Ticket/TicketList";
import { Pagination } from "./Pagination/Pagination";
import { useEffect, useState } from "react";
import { Filter, StatusFilterVariants } from "../utils/types";

export const TicketMain = () => {
  const [filter, setFilter] = useState<Filter>({
    statusFilter: "price",
    byTransfers: [],
  });
  const [isFiltersVisible, setIsFiltersVisible] = useState<boolean>(false);

  const showFilter = () => {
    setIsFiltersVisible((state) => !state);
  };

  const handleTabsChange = (string: StatusFilterVariants) => {
    setFilter((state) => ({ ...state, statusFilter: string }));
  };

  const handleFilterChange = (strings: string[]) => {
    setFilter((state) => ({ ...state, byTransfers: strings }));
  };

  useEffect(() => {
    if (isFiltersVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isFiltersVisible]);

  return (
    <>
      <Header />
      <section>
        <div className="container main">
          <div
            className={`filters__wrapper ${isFiltersVisible ? "active" : ""}`}
          >
            <button className="filter-close___btn" onClick={showFilter}>
              X
            </button>
            <div className="pseudo__wrapper">
              <StatusFilter
                active={filter.statusFilter}
                tabsChange={handleTabsChange}
              />
            </div>
            <TransferFilter onSelect={handleFilterChange} />
          </div>
          <button className="filter-open___btn" onClick={showFilter}>
            Filters
          </button>
          <div>
            <div className="pseudo__wrapper--descktop">
              <StatusFilter
                active={filter.statusFilter}
                tabsChange={handleTabsChange}
              />
            </div>
            <TicketList filters={filter} />
            <Pagination />
          </div>
        </div>
      </section>
    </>
  );
};
