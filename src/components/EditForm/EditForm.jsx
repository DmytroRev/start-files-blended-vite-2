import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import css from './EditForm.module.css';

export const EditForm = () => {
  return (
    <form className={css.form}>
      <button className={css.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button className={css.editButton} type="button">
        <MdOutlineCancel color="red" size="16px" />
      </button>

      <input
        className={css.input}
        placeholder="What do you want to write?"
        name="text"
        required
        // defaultValue={defaultValue}
        autoFocus
      />
    </form>
  );
};
