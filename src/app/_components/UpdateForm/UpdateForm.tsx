'use client';

import { useMemo, useRef } from 'react';
import { deleteTodo, updateTodo } from '@/app/actions/actions';
import { Todo } from '../../types/todo.type';

import styles from './UpdateForm.module.css';

type UpdateFormProps = {
  title: string;
  id: string;
};

export const UpdateForm = (props: UpdateFormProps) => {
  const { id, title } = props;
  const titleInputElement = useRef(null);

  const titleText = useMemo(() => {
    return !!titleInputElement.current
      ? (titleInputElement.current as HTMLInputElement).value
      : title;
  }, [titleInputElement, title]);

  return (
    <form className={styles.updateForm}>
      <label htmlFor="title" className={styles.updateFormLabel}>
        Title:
      </label>
      <input
        name="title"
        type="text"
        defaultValue={title}
        className={styles.updateFormInput}
        ref={titleInputElement}
        required
      />

      {/* This solution should be reconsidered and refactored in more approppriate way to resolve multiple actions on form */}
      {/* I believe the form should be placed within the Server Component */}
      <fieldset className={styles.updateFormFieldset}>
        <button
          type="button"
          className={`${styles.buttonElement} ${styles.btnColored}`}
          onClick={async () => {
            await updateTodo(id, titleText);
          }}
        >
          SAVE
        </button>
        <button
          type="button"
          className={styles.buttonElement}
          onClick={async () => {
            const buttonData = { id, title: titleText };
            await deleteTodo({ buttonData });
          }}
        >
          DELETE
        </button>
      </fieldset>
    </form>
  );
};
