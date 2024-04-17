import { useState } from 'react';

import { Field } from '../../components/field/Field';
import { INumber } from '../../components/Interface/number';
import { generateRandomNumbers } from '../../components/utils/generateRandomNumbers';
import s from './index.module.css';


export const MainPage = () => {
  const [selectedNumbers, setSelectedNumbers] = useState<INumber>({
    numbers: [],
    numberSecond: 0,
  });
  const [winningNumbers, setWinningNumbers] = useState<INumber>({
    numbers: [],
    numberSecond: 0,
  });

  const onSelectNumber = (number: number, isSecondField: boolean) => {
    if (isSecondField) {
      setSelectedNumbers((prevNumbers) => ({
        ...prevNumbers,
        numberSecond: number,
      }));
    } else {
      setSelectedNumbers((prevNumbers) => ({
        ...prevNumbers,
        numbers: [...prevNumbers.numbers, number],
      }));
    }
  };

  return (
    <div className={ s.wrap }>
      <div className={ s.ticketWrap }>
        <div className={ s.ticketTitleBlog }>
          <h1 className={ s.ticketTitle }>Билет 1</h1>
          <button type="button" onClick={ () => generateRandomNumbers({ setNumbers: setSelectedNumbers }) }>
            Сгенерировать числа
          </button>
        </div>
        <Field
          numbers={ selectedNumbers.numbers }
          onSelectNumber={ (number: number) => onSelectNumber(number, false) }
        />
        <Field
          isSecondField
          numbers={ [selectedNumbers.numberSecond] }
          onSelectNumber={ (number: number) => onSelectNumber(number, true) }
        />
        <button type="button">
          Показать результаты
        </button>
      </div>
    </div>
  );
};
