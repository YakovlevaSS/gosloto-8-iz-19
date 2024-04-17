import { IGenerateRandomNumbersProps } from '../Interface/number';


export const generateRandomNumbers = ({ setNumbers }: IGenerateRandomNumbersProps) => {
  const randomNumbers: number[] = [];
  while (randomNumbers.length < 8) {
    const randomNumber = Math.floor(Math.random() * 19) + 1;
    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
    }
  }
  const randomNumberSecond = Math.floor(Math.random() * 2) + 1;

  setNumbers({
    numbers: randomNumbers,
    numberSecond: randomNumberSecond,
  });
};
