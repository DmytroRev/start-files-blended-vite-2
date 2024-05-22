import { Grid, GridItem, TodoListItem } from 'components';
import { nanoid } from 'nanoid';

export const TodoList = ({ query }) => {
  const newTask = {
    text: query,
    id: nanoid(),
  };

  const tasks = [newTask];
  return (
    <Grid>
      {tasks.map(task => (
        <GridItem key={task.id + 1}>
          <TodoListItem todo={task} />
        </GridItem>
      ))}
    </Grid>
  );
};
