export interface INumber {
  numbers: number[];
  numberSecond: number;
}

export interface IGenerateRandomNumbersProps {
  setNumbers: React.Dispatch<React.SetStateAction<INumber>>;
}
