// Enums
import {
  TitleComponentFontSizeEnum,
  TitleComponentFontWeightEnum,
  TitleComponentTagEnum,
} from '../enums/title.component.enums';

type TitleComponentPropsType = {
  children: React.ReactNode;
  fontSize?: TitleComponentFontSizeEnum;
  fontWeight?: TitleComponentFontWeightEnum;
  tag?: TitleComponentTagEnum;
};

export { TitleComponentPropsType };
