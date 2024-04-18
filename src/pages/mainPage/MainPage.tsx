import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { Field } from '../../components/field/Field';
import { INumber } from '../../components/Interface/number';
import Button from '../../components/UI/Button/Button';
import { generateRandomNumbers } from '../../components/utils/generateRandomNumbers';
import { getResult } from '../../components/utils/getResultApi';
import s from './index.module.css';
import { onSelectNumber } from '../../components/utils/onSelectNumber';


interface IProps {
  setIsWin: React.Dispatch<React.SetStateAction<boolean>>;
  isWin: boolean;
}

export const MainPage: React.FC<IProps> = ({ setIsWin, isWin }) => {
  const [selectedNumbers, setSelectedNumbers] = useState<INumber>({
    numbers: [],
    numberSecond: 0,
  });
  const [winningNumbers, setWinningNumbers] = useState<INumber>({
    numbers: [],
    numberSecond: 0,
  });

  const navigate = useNavigate();

  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    if (retryCount > 0) {
      const timeout = setTimeout(() => {
        setRetryCount(retryCount - 1);
        getResult({
          selectedNumbers,
          setIsWin,
          isWin,
          retryCount,
          setRetryCount,
          navigate,
          winningNumbers,
          setWinningNumbers,
        });
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [retryCount]);

  return (
    <div className={ s.wrap }>
      <div className={ s.ticketWrap }>
        <div className={ s.ticketTitleBlog }>
          <h1 className={ s.ticketTitle }>Билет 1</h1>
          <Button
            isActive
            classes="buttonText"
            onClick={ () => generateRandomNumbers({ setNumbers: setSelectedNumbers }) }
          >
            Сгенерировать числа
          </Button>
        </div>
        <Field
          numbers={ selectedNumbers.numbers }
          onSelectNumber={ (number: number) => onSelectNumber({
            selectedNumbers,
            setSelectedNumbers,
            number,
            isSecondField: false,
          }) }
        />
        <Field
          isSecondField
          numbers={ [selectedNumbers.numberSecond] }
          onSelectNumber={ (number: number) => onSelectNumber({
            selectedNumbers,
            setSelectedNumbers,
            number,
            isSecondField: true,
          }) }
        />
        <div className={ s.buttonBlog }>
          <Button
            classes="buttonText"
            onClick={ () => getResult({
              selectedNumbers,
              setIsWin,
              isWin,
              retryCount,
              setRetryCount,
              navigate,
              winningNumbers,
              setWinningNumbers,
            }) }
          >
            Показать результаты
          </Button>
        </div>
      </div>
    </div>
  );
};
