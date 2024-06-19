// Styles
import { ListItemComponentStyled } from './list-item.component.styled';
// Types
import { ListItemComponentPropsType } from './types/list-item.component.props.type';

const ListItemComponent = ({
  children,
}: ListItemComponentPropsType): React.ReactElement<ListItemComponentPropsType> => (
  <ListItemComponentStyled>{children}</ListItemComponentStyled>
);

export { ListItemComponent };
