import { useEffect, useState } from 'react';

import { Field } from '../../components/field/Field';
import { INumber } from '../../components/Interface/number';
import Button from '../../components/UI/Button/Button';
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
      if (selectedNumbers.numberSecond === number) {
        // Если номер уже выбран, удаляем его
        setSelectedNumbers((prevNumbers) => ({
          ...prevNumbers,
          numberSecond: 0,
        }));
      } else if (!selectedNumbers?.numberSecond) {
        // Иначе устанавливаем новый номер
        setSelectedNumbers((prevNumbers) => ({
          ...prevNumbers,
          numberSecond: number,
        }));
      }
    }
    if (!isSecondField) {
      if (selectedNumbers.numbers.includes(number)) {
        // Если номер уже выбран, удаляем его
        setSelectedNumbers((prevNumbers) => ({
          ...prevNumbers,
          numbers: prevNumbers.numbers.filter((num) => num !== number),
        }));
      } else if (selectedNumbers.numbers.length < 8) {
        // Иначе добавляем новый номер, если количество выбранных чисел меньше 8
        setSelectedNumbers((prevNumbers) => ({
          ...prevNumbers,
          numbers: [...prevNumbers.numbers, number],
        }));
      }
    }
  };

  useEffect(() => {
console.log(selectedNumbers)
  }, [selectedNumbers])

  return (
    <div className={ s.wrap }>
      <div className={ s.ticketWrap }>
        <div className={ s.ticketTitleBlog }>
          <h1 className={ s.ticketTitle }>Билет 1</h1>
          <Button
            classes="buttonText"
            onClick={ () => (generateRandomNumbers({ setNumbers: setSelectedNumbers })) }
            isActive
          >
            Сгенерировать числа
          </Button>
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
        <div className={s.buttonBlog}>
          <Button
            classes="buttonText"
          >Показать результаты
          </Button>
        </div>
      </div>
    </div>
  );
};
