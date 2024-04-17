import { ReactNode } from 'react';

import s from './Button.module.css';


interface IButtonProps {
  children: ReactNode;
  classes?: string;
  onClick?: () => void;
  isDisabled?: boolean;
  isActive?: boolean;
  icon?: ReactNode;
}

const Button = ({
  children,
  classes,
  onClick,
  isDisabled = false,
  isActive = false,
  icon,
}: IButtonProps) => (
  <button
    className={ `${classes && s[classes]} ${isDisabled && s.disabled} ${isActive && s.active}` }
    disabled={ isDisabled }
    type="button"
    onClick={ onClick }
  >
    { icon }
    { children }
  </button>
);

export default Button;
