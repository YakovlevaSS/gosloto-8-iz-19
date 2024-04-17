import s from './index.module.css';


interface IProps {
  numbers: number[];
  onSelectNumber: (number: number) => void;
  isSecondField?: boolean;
}

export const Field: React.FC<IProps> = ({
  numbers,
  onSelectNumber,
  isSecondField,
}) => {
  const fieldNumbers = Array.from(
    { length: isSecondField ? 2 : 19 },
    (_, index) => index + 1
  );

  return (
    <div className={ s.fieldBlog }>
      <div className={ s.titleFieldBlog }>
        <h2 className={ s.titleField }>{ isSecondField ? 'Поле 2' : 'Поле 1' }</h2>
        <p className={ s.textField }>
          { isSecondField ? 'Отметьте 1 число.' : 'Отметьте 8 чиcел.' }
        </p>
      </div>
      <div className={ s.numberFieldBlog }>
        { fieldNumbers.map((number) => (
          <button
            key={ number }
            className={ s.number }
            disabled={ numbers.includes(number) }
            type="button"
            onClick={ () => onSelectNumber(number) }
          >
            { number }
          </button>
        )) }
      </div>
    </div>
  );
};
