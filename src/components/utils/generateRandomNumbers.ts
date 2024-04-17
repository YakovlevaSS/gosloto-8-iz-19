import { IGenerateRandomNumbersProps } from '../Interface/number';


export const generateRandomNumbers = ({ setNumbers }: IGenerateRandomNumbersProps) => {
  const randomNumbers = Array.from(
    { length: 8 },
    () => Math.floor(Math.random() * 19) + 1
  );
  const randomPowerball = Math.floor(Math.random() * 2) + 1;

  setNumbers({
    numbers: randomNumbers,
    numberSecond: randomPowerball,
  });
};
