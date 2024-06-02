import { ChangeEvent, FC, useState } from "react";

interface TransferFilterProps {
  onSelect: (strings: string[]) => void;
}

export const TransferFilter: FC<TransferFilterProps> = ({ onSelect }) => {
  const [checked, setChecked] = useState<string[]>([]);
  const changeHadnler = (e: ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.value;
    const isChecked = e.target.checked;
    setChecked((state) =>
      isChecked ? [...state, fieldName] : state.filter((el) => el !== fieldName)
    );
    onSelect(
      isChecked
        ? [...checked, fieldName]
        : checked.filter((el) => el !== fieldName)
    );
  };

  return (
    <div className="transfer-filter">
      <h3 className="transfer-filter__title">КІЛЬКІСТЬ ПЕРЕСАДОК</h3>
      <label className="transfer-filter__checkbox" key={"all"}>
        <input onChange={changeHadnler} type="checkbox" name="all" value={-1} />
        <span className="transfer-filter__icon">
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.28571 8L0 4.16123L1.20857 3.0787L4.28571 5.82726L10.7914 0L12 1.09021L4.28571 8Z"
              fill="currentColor"
            />
          </svg>
        </span>
        <span className="transfer-filter__text">Всі</span>
      </label>
      <label className="transfer-filter__checkbox" key={"witout_transfers"}>
        <input
          onChange={changeHadnler}
          type="checkbox"
          name="witout_transfers"
          value={0}
        />
        <span className="transfer-filter__icon">
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.28571 8L0 4.16123L1.20857 3.0787L4.28571 5.82726L10.7914 0L12 1.09021L4.28571 8Z"
              fill="currentColor"
            />
          </svg>
        </span>
        <span className="transfer-filter__text">Без пересадок</span>
      </label>
      <label className="transfer-filter__checkbox" key={"one_transfers"}>
        <input
          onChange={changeHadnler}
          type="checkbox"
          name="one_transfers"
          value={1}
        />
        <span className="transfer-filter__icon">
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.28571 8L0 4.16123L1.20857 3.0787L4.28571 5.82726L10.7914 0L12 1.09021L4.28571 8Z"
              fill="currentColor"
            />
          </svg>
        </span>
        <span className="transfer-filter__text">1 пересадка</span>
      </label>
      <label className="transfer-filter__checkbox" key={"two_transfers"}>
        <input
          onChange={changeHadnler}
          type="checkbox"
          name="two_transfers"
          value={2}
        />
        <span className="transfer-filter__icon">
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.28571 8L0 4.16123L1.20857 3.0787L4.28571 5.82726L10.7914 0L12 1.09021L4.28571 8Z"
              fill="currentColor"
            />
          </svg>
        </span>
        <span className="transfer-filter__text">2 пересадки</span>
      </label>
      <label className="transfer-filter__checkbox" key={"three_transfers"}>
        <input
          onChange={changeHadnler}
          type="checkbox"
          name="three_transfers"
          value={3}
        />
        <span className="transfer-filter__icon">
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.28571 8L0 4.16123L1.20857 3.0787L4.28571 5.82726L10.7914 0L12 1.09021L4.28571 8Z"
              fill="currentColor"
            />
          </svg>
        </span>
        <span className="transfer-filter__text">3 пересадки</span>
      </label>
    </div>
  );
};
