'use client';

import { useFormStatus } from 'react-dom';
import styles from './ButtonElement.module.css';
import { useMemo } from 'react';

type ButtonElementProps = {
  label: string;
  isButtonColored: boolean;
  handleButtonAction?: () => void;
};

export const ButtonElement = (props: ButtonElementProps) => {
  const { isButtonColored } = props;
  const { pending } = useFormStatus();

  const buttonModifier = useMemo(() => {
    return !!isButtonColored ? styles.btnColored : '';
  }, [isButtonColored]);

  return (
    <button
      type="submit"
      className={`${styles.buttonElement} ${buttonModifier}`}
      aria-disabled={pending}
      // Workaround to imitate actions
      onClick={props.handleButtonAction}
    >
      {props.label}
    </button>
  );
};
