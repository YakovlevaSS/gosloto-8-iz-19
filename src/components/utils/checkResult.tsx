import { INumber } from '../Interface/number';


export const checkLotteryResult = (
  selectedNumbers: INumber,
  winningNumbers: INumber
): boolean => {
  const { numbers: selected, numberSecond: selectedSecond } = selectedNumbers;
  const { numbers: winning, numberSecond: winningSecond } = winningNumbers;

  // Проверка на совпадение чисел в первом поле
  const matchingNumbers = selected.filter((number) => winning.includes(number));

  // Проверка на совпадение чисел во втором поле
  const matchingSecondNumber = selectedSecond === winningSecond;

  // Условие победы в лотерее
  if (
    matchingNumbers.length >= 4
    || (matchingNumbers.length >= 3 && matchingSecondNumber)
  ) {
    return true;
  }
  return false;
};
