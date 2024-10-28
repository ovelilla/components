// Components
import { ButtonComponent } from 'components/atoms/button/button.component';
import { DialogComponent } from 'components/molecules/dialog/dialog.component';
import { ParagraphComponent } from 'components/atoms/paragraph/paragraph.component';
import { ScrollareaComponent } from 'components/atoms/scrollarea/scrollarea.component';
// Constants
import {
  DEFAULT_BUTTON_CANCEL_PROPS,
  DEFAULT_BUTTON_CLOSE_PROPS,
  DEFAULT_BUTTON_CONFIRM_PROPS,
  DEFAULT_BUTTON_FULLSCREEN_PROPS,
  DEFAULT_SIZE,
} from './constants/confirm-dialog.component.constants';
// Enums
import { ScrollareaComponentPositionEnum } from 'components/atoms/scrollarea/enums/scrollarea.component.enums';
// Hooks
import { ConfirmDialogHook } from './hooks/confirm-dialog.hook';
// Styles
import {
  ConfirmDialogComponentStyled,
  ConfirmDialogComponentBodyStyled,
  ConfirmDialogComponentFooterStyled,
} from './styles/confirm-dialog.component.styled';
// Types
import { ConfirmDialogComponentPropsType } from './types/confirm-dialog.component.props.type';

const ConfirmDialogComponent = ({
  animation,
  buttonCancelProps = DEFAULT_BUTTON_CANCEL_PROPS,
  buttonCloseProps = DEFAULT_BUTTON_CLOSE_PROPS,
  buttonConfirmProps = DEFAULT_BUTTON_CONFIRM_PROPS,
  buttonFullscreenProps = DEFAULT_BUTTON_FULLSCREEN_PROPS,
  isFullscreen,
  message,
  minSize,
  onCancel,
  onClose,
  onConfirm,
  open,
  position,
  size = DEFAULT_SIZE,
  style,
  title,
}: ConfirmDialogComponentPropsType): React.ReactElement<ConfirmDialogComponentPropsType> | null => {
  const { handleCancelEvent, handleConfirmEvent } = ConfirmDialogHook({
    onCancel,
    onConfirm,
  });

  return (
    <DialogComponent
      {...{
        animation,
        buttonCloseProps,
        buttonFullscreenProps,
        isFullscreen,
        minSize,
        onClose,
        open,
        position,
        size,
        style,
        title,
      }}>
      <ConfirmDialogComponentStyled>
        <ScrollareaComponent {...{ position: ScrollareaComponentPositionEnum.ABSOLUTE }}>
          <ConfirmDialogComponentBodyStyled>
            <ParagraphComponent>{message}</ParagraphComponent>
          </ConfirmDialogComponentBodyStyled>
        </ScrollareaComponent>
        <ConfirmDialogComponentFooterStyled>
          <ButtonComponent {...{ onClick: handleCancelEvent, ...buttonCancelProps }} />
          <ButtonComponent {...{ onClick: handleConfirmEvent, ...buttonConfirmProps }} />
        </ConfirmDialogComponentFooterStyled>
      </ConfirmDialogComponentStyled>
    </DialogComponent>
  );
};

export { ConfirmDialogComponent };
