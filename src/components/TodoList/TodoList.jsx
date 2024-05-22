import { Grid, GridItem, TodoListItem } from 'components';

export const TodoList = ({ todos }) => {
  return (
    <Grid>
      {todos.map(task => (
        <GridItem key={task.id}>
          <TodoListItem todo={task} />
        </GridItem>
      ))}
    </Grid>
  );
};
