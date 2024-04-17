import { INumber } from '../Interface/number';


export const checkLotteryResult = (
  selectedNumbers: INumber,
  winningNumbers: INumber
): boolean => {
  const { numbers: selected, numberSecond: selectedSecond } = selectedNumbers;
  const { numbers: winning, numberSecond: winningSecond } = winningNumbers;

  const matchingNumbers = selected.filter((number) => winning.includes(number));

  const matchingSecondNumber = selectedSecond === winningSecond;

  if (
    matchingNumbers.length >= 4
    || (matchingNumbers.length >= 3 && matchingSecondNumber)
  ) {
    return true;
  }
  return false;
};
