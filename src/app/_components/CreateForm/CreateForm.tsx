'use client';

import { useFormState } from 'react-dom';
import { createTodo } from '@/app/actions/actions';
import { ButtonElement } from '../ButtonElement/ButtonElement';

import styles from './CreateForm.module.css';
import { ButtonActionEnum } from '../../Enum/ButtonAction.enum';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';

const initialState = {
  message: null,
};

export const CreateForm = () => {
  // TODO Remove @ts-expect-error once type definition for useFormState hook will be added to Next.js
  // @ts-expect-error
  const [state, formAction] = useFormState(createTodo, initialState);
  const router = useRouter();

  const handleCreateTodo = useCallback(() => {
    router.push('/todos');
  }, [router]);

  return (
    <form action={formAction} className={styles.createForm}>
      <label htmlFor="title" className={styles.createFormLabel}>
        Title:
      </label>
      <input name="title" type="text" className={styles.createFormInput} required />
      <ButtonElement
        label="submit"
        buttonAction={ButtonActionEnum.CREATE}
        handleButtonAction={handleCreateTodo}
      />
    </form>
  );
};
