import { toast } from 'react-toastify';
import axios from 'axios';

import { INumber } from '../Interface/number';
import { checkLotteryResult } from './checkResult';
import { generateRandomNumbers } from './generateRandomNumbers';


interface IProps {
  selectedNumbers: INumber;
  setIsWin: React.Dispatch<React.SetStateAction<boolean>>;
  isWin: boolean;
  retryCount: number;
  setRetryCount: React.Dispatch<React.SetStateAction<number>>;
  navigate: (path: string) => void;
  winningNumbers: INumber;
  setWinningNumbers: React.Dispatch<React.SetStateAction<INumber>>;
}
export const getResult = async ({
  selectedNumbers, setIsWin, isWin, retryCount, setRetryCount, winningNumbers, setWinningNumbers, navigate
}: IProps) => {
  try {
    if (selectedNumbers.numbers.length === 8 && selectedNumbers.numberSecond) {
      generateRandomNumbers({ setNumbers: setWinningNumbers });
      setIsWin(checkLotteryResult(selectedNumbers, winningNumbers));

      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        selectedNumber: {
          firstField: selectedNumbers.numbers,
          secondField: [selectedNumbers.numberSecond],
        },
        isTicketWon: Boolean(isWin),
      });

      if (response.status === 201) {
        navigate('/result');
      } else {
        throw new Error('Ошибка при отправке данных на сервер');
      }
    } else {
      toast.error('Вы не выбрали все необходимые номера', {
        style: {
          background: '#F19C9C'
        }
      });
    }
  } catch (error) {
    console.error(error);
    if (retryCount < 2) {
      setRetryCount(retryCount + 1);
    } else {
      toast.error('Произошла ошибка при отправке данных на сервер', {
        style: {
          background: '#F19C9C'
        }
      });
      setRetryCount(0);
    }
  }
};
