/* eslint-disable import/no-extraneous-dependencies */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'

import { Field } from '../../components/field/Field';
import { INumber } from '../../components/Interface/number';
import Button from '../../components/UI/Button/Button';
import { generateRandomNumbers } from '../../components/utils/generateRandomNumbers';
import s from './index.module.css';
import { checkLotteryResult } from '../../components/utils/checkResult';
import { onSelectNumber } from '../../components/utils/onSelectNumber';

interface IProps {
  setIsWin: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MainPage: React.FC<IProps> = ({ setIsWin }) => {
  const [selectedNumbers, setSelectedNumbers] = useState<INumber>({
    numbers: [],
    numberSecond: 0,
  });
  const [winningNumbers, setWinningNumbers] = useState<INumber>({
    numbers: [],
    numberSecond: 0,
  });

  const navigate = useNavigate();

  const getResult = () => {
    if (selectedNumbers.numbers.length === 8 && selectedNumbers.numberSecond) {
        generateRandomNumbers({ setNumbers: setWinningNumbers });
        setIsWin(checkLotteryResult(selectedNumbers, winningNumbers));
        navigate('/result');
    } else {
        toast.error('Вы не выбрали все необходимые номера', { className: s.errorTost })
    }
  };


  return (
    <div className={ s.wrap }>
      <div className={ s.ticketWrap }>
        <div className={ s.ticketTitleBlog }>
          <h1 className={ s.ticketTitle }>Билет 1</h1>
          <Button
            isActive
            classes="buttonText"
            onClick={ () => (generateRandomNumbers({ setNumbers: setSelectedNumbers })) }
          >
            Сгенерировать числа
          </Button>
        </div>
        <Field
          numbers={ selectedNumbers.numbers }
          onSelectNumber={ (number: number) => onSelectNumber({
            selectedNumbers, setSelectedNumbers, number, isSecondField: false
          }) }
        />
        <Field
          isSecondField
          numbers={ [selectedNumbers.numberSecond] }
          onSelectNumber={ (number: number) => onSelectNumber({
            selectedNumbers, setSelectedNumbers, number, isSecondField: true
          }) }
        />
        <div className={ s.buttonBlog }>
          <Button
            classes="buttonText"
            onClick={ getResult }
          >Показать результаты
          </Button>
        </div>
      </div>
    </div>
  );
};
