'use client';

import { useFormState } from 'react-dom';
import { deleteTodo } from '@/app/actions/actions';

import styles from './DeleteForm.module.css';

import { ButtonElement } from '../ButtonElement/ButtonElement';
import { ButtonActionEnum } from '../../Enum/ButtonAction.enum';
import { useCallback } from 'react';
import { ITodo } from '../../interfaces/todo.interface';

const initialState = {
  message: null,
};

interface IDeleteFormProps extends Pick<ITodo, 'title' | 'id'> {
  onTodoRemove: (id: string) => void;
}

export const DeleteForm = (props: IDeleteFormProps) => {
  const { id, title, onTodoRemove } = props;

  // TODO Remove @ts-expect-error once type definition for useFormState hook will be added to Next.js
  // @ts-expect-error
  const [state, formAction] = useFormState(deleteTodo, initialState);

  // Imitation of element DELETE from list
  const handleRemove = useCallback(() => {
    onTodoRemove(id);
  }, [id, onTodoRemove]);

  return (
    <form action={formAction} className={styles.deleteForm}>
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="title" value={title} />

      <ButtonElement
        label="Delete"
        buttonAction={ButtonActionEnum.CREATE}
        handleButtonAction={handleRemove}
      />

      {/* TODO Update view with API response and remove message placeholder*/}
      {state?.message && (
        <p aria-live="polite" role="status" className={styles.deleteFormMessagePlaceholder}>
          {state.message}
        </p>
      )}
    </form>
  );
};
