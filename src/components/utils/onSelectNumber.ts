import { INumber } from '../Interface/number';


interface IProps {
  selectedNumbers: INumber;
  setSelectedNumbers: (value: React.SetStateAction<INumber>) => void;
  number: number;
  isSecondField: boolean;
}

export const onSelectNumber = ({
  selectedNumbers, setSelectedNumbers, number, isSecondField
}: IProps) => {
  if (isSecondField) {
    if (selectedNumbers.numberSecond === number) {
      setSelectedNumbers((prevNumbers) => ({
        ...prevNumbers,
        numberSecond: 0,
      }));
    } else if (!selectedNumbers?.numberSecond) {
      setSelectedNumbers((prevNumbers) => ({
        ...prevNumbers,
        numberSecond: number,
      }));
    }
  }
  if (!isSecondField) {
    if (selectedNumbers.numbers.includes(number)) {
      setSelectedNumbers((prevNumbers) => ({
        ...prevNumbers,
        numbers: prevNumbers.numbers.filter((num) => num !== number),
      }));
    } else if (selectedNumbers.numbers.length < 8) {
      setSelectedNumbers((prevNumbers) => ({
        ...prevNumbers,
        numbers: [...prevNumbers.numbers, number],
      }));
    }
  }
};
