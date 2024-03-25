'use client';

import { useFormStatus } from 'react-dom';
import { ButtonActionEnum } from '../../Enum/ButtonAction.enum';
import styles from './ButtonElement.module.css';

interface IButtonElementProps {
  label: string;
  buttonAction: ButtonActionEnum;
  handleButtonAction: () => void;
}

export const ButtonElement = (props: IButtonElementProps) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={styles.buttonElement}
      aria-disabled={pending}
      // Workaround to imitate actions
      // onClick={props.handleButtonAction}
    >
      {props.label}
    </button>
  );
};
