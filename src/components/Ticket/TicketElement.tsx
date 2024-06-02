import { FC } from "react";
import { TicketType } from "../../utils/types";

interface ThicketElementProps {
  thicket: TicketType;
}

export const TicketElement: FC<ThicketElementProps> = ({ thicket }) => {
  const { price, currency, legs } = thicket;
  return (
    <li className="thicket__wrapper">
      <div className="thicket__header">
        <p>
          {price}
          {currency}
        </p>
        <img src="/company.jpg" alt="company logo" />
      </div>
      <div className="thicket__body__wrapper">
        {legs.map((leg) => (
          <div key={leg.from + leg.to} className="thicket__body">
            <div className="thicket__body__element">
              <p className={""}>
                <span>{leg.from}</span> - <span>{leg.to}</span>
              </p>
              <p className={""}>
                <span> {leg.departureTime}</span> -{" "}
                <span>{leg.arrivalTime}</span>
              </p>
            </div>
            <div className={"thicket__body__element"}>
              <p>В дорозі</p>
              <p>{leg.duration}</p>
            </div>
            <div>
              {!leg.transferPoints || leg.transferPoints.length === 0 ? (
                <p className={"thicket__transfer__single"}>Без пересадок</p>
              ) : (
                <div className={"thicket__transfer"}>
                  <span className={"thicket__transfer__title"}>
                    Пересадок: {leg.transferPoints?.length}
                  </span>
                  <ul className="thicket_transfer__vector">
                    {leg.transferPoints?.map((point, index) => (
                      <li key={`${point}-${index}`}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </li>
  );
};
