// Vendors
import { Link } from 'react-router-dom';
// Constants
import { STYLED_AS_BUTTON } from './constants/button.component.utils.constants';
// Enums
import { ButtonComponentModeEnum } from '../enums/button.component.enums';
// Types
import { GetStyledAsPropsType } from './types/get-styled-as.util.props.type';

const getStyledAs = ({ mode }: GetStyledAsPropsType): string | typeof Link =>
  mode === ButtonComponentModeEnum.LINK ? Link : STYLED_AS_BUTTON;

export { getStyledAs };
