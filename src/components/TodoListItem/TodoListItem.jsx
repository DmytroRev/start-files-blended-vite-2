import { GridItem, Text } from 'components';
import { RiDeleteBinLine } from 'react-icons/ri';
import { RiEdit2Line } from 'react-icons/ri';
import css from './TodoListItem.module.css';

export const TodoListItem = ({ todo }) => {
  return (
    <GridItem>
      <div className={css.box}>
        <Text textAlign="center" marginBottom="20">
          TODO #{todo.id}
        </Text>
        <Text>{todo.text}</Text>
        <button className={css.deleteButton} type="button">
          <RiDeleteBinLine size={24} />
        </button>

        <button className={css.editButton} type="button">
          <RiEdit2Line size={24} />
        </button>
      </div>
    </GridItem>
  );
};
