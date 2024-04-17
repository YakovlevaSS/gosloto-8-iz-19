// eslint-disable-next-line import/no-extraneous-dependencies
import { useNavigate } from 'react-router-dom';

import s from './index.module.css';
import Button from '../../components/UI/Button/Button';


interface IProps {
  isWin: boolean;
}

export const ResultPage: React.FC<IProps> = ({ isWin }) => {
  const navigate = useNavigate();

  return (
    <div className={ s.wrap }>
      <div className={ s.ticketWrap }>
        <div className={ s.textBlog }>
          <h1 className={ s.ticketTitle }>Билет 1</h1>
          <p className={ s.textResult }>
            { isWin
              ? 'Ого, вы выиграли! Поздравляем!'
              : 'Вы проиграли, но удача может вам улыбнуться в следущий раз!' }
          </p>
        </div>
        <div className={ s.buttonBlog }>
          <Button classes="buttonText" onClick={ () => navigate('/') }>
            Играть еще раз
          </Button>
        </div>
      </div>
    </div>
  );
};
