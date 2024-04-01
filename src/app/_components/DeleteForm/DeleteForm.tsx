'use client';

import { useFormState } from 'react-dom';
import { deleteTodo } from '@/app/actions/actions';

import styles from './DeleteForm.module.css';

import { ButtonElement } from '../ButtonElement/ButtonElement';
import { Todo } from '../../types/todo.type';

const initialState = {
  message: null,
};

type DeleteFormProps = {
  title: string;
  id: string;
};

export const DeleteForm = (props: DeleteFormProps) => {
  const { id, title } = props;

  // TODO Remove @ts-expect-error once type definition for useFormState hook will be added to Next.js
  // @ts-expect-error
  const [state, formAction] = useFormState(deleteTodo, initialState);

  return (
    <form action={formAction} className={styles.deleteForm}>
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="title" value={title} />

      <ButtonElement label="Delete" isButtonColored={false} />

      {/* TODO Update view with API response and remove message placeholder*/}
      {state?.message && (
        <p aria-live="polite" role="status" className={styles.deleteFormMessagePlaceholder}>
          {state.message}
        </p>
      )}
    </form>
  );
};
