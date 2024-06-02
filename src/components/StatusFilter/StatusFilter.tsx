import { FC } from "react";
import statusFilter from "../../utils/contants/statusFilter";
import { StatusFilterVariants } from "../../utils/types";

interface StatusFilterProps {
  active: StatusFilterVariants;
  tabsChange: (string: StatusFilterVariants) => void;
}

export const StatusFilter: FC<StatusFilterProps> = ({ active, tabsChange }) => {
  return (
    <div className="status__wrapper">
      {statusFilter.map((status) => (
        <button
          className={
            active === status.value
              ? "status__btn status__btn--active"
              : "status__btn"
          }
          onClick={() => tabsChange(status.value)}
          key={status.value}
        >
          {status.text}
        </button>
      ))}
    </div>
  );
};
