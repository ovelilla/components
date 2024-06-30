// Styles
import { ListComponentStyled } from './styles/list.component.styled';
// Types
import { ListComponentPropsType } from './types/list.component.props.type';

const ListComponent = ({
  children,
}: ListComponentPropsType): React.ReactElement<ListComponentPropsType> => (
  <ListComponentStyled>{children}</ListComponentStyled>
);

export { ListComponent };
