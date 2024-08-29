// Vendors
import styled from 'styled-components';

const DialogResizeComponentStyled = styled.div`
  position: absolute;
  user-select: none;
  touch-action: none;
`;

const DialogResizeComponentTopRigtCornerStyled = styled(DialogResizeComponentStyled)<{
  disabled?: boolean;
}>`
  cursor: ${(props) => (props.disabled ? 'default' : 'ne-resize')};
  height: 16px;
  left: calc(100% - 8px);
  top: -8px;
  width: 16px;
`;

const DialogResizeComponentTopLeftCornerStyled = styled(DialogResizeComponentStyled)<{
  disabled?: boolean;
}>`
  cursor: ${(props) => (props.disabled ? 'default' : 'nw-resize')};
  height: 16px;
  left: -8px;
  top: -8px;
  width: 16px;
`;

const DialogResizeComponentBottomRightCornerStyled = styled(DialogResizeComponentStyled)<{
  disabled?: boolean;
}>`
  cursor: ${(props) => (props.disabled ? 'default' : 'se-resize')};
  height: 16px;
  left: calc(100% - 8px);
  top: calc(100% - 8px);
  width: 16px;
`;

const DialogResizeComponentBottomLeftCornerStyled = styled(DialogResizeComponentStyled)<{
  disabled?: boolean;
}>`
  cursor: ${(props) => (props.disabled ? 'default' : 'sw-resize')};
  height: 16px;
  left: -8px;
  top: calc(100% - 8px);
  width: 16px;
`;

const DialogResizeComponentTopSideStyled = styled(DialogResizeComponentStyled)<{
  disabled?: boolean;
}>`
  cursor: ${(props) => (props.disabled ? 'default' : 'n-resize')};
  height: 16px;
  left: 8px;
  top: -8px;
  width: calc(100% - 16px);
`;

const DialogResizeComponentRightSideStyled = styled(DialogResizeComponentStyled)<{
  disabled?: boolean;
}>`
  cursor: ${(props) => (props.disabled ? 'default' : 'e-resize')};
  height: calc(100% - 16px);
  left: calc(100% - 8px);
  top: 8px;
  width: 16px;
`;

const DialogResizeComponentBottomSideStyled = styled(DialogResizeComponentStyled)<{
  disabled?: boolean;
}>`
  cursor: ${(props) => (props.disabled ? 'default' : 's-resize')};
  height: 16px;
  left: 8px;
  top: calc(100% - 8px);
  width: calc(100% - 16px);
`;

const DialogResizeComponentLeftSideStyled = styled(DialogResizeComponentStyled)<{
  disabled?: boolean;
}>`
  cursor: ${(props) => (props.disabled ? 'default' : 'w-resize')};
  height: calc(100% - 16px);
  left: -8px;
  top: 8px;
  width: 16px;
`;

export {
  DialogResizeComponentBottomLeftCornerStyled,
  DialogResizeComponentBottomRightCornerStyled,
  DialogResizeComponentBottomSideStyled,
  DialogResizeComponentLeftSideStyled,
  DialogResizeComponentRightSideStyled,
  DialogResizeComponentTopLeftCornerStyled,
  DialogResizeComponentTopRigtCornerStyled,
  DialogResizeComponentTopSideStyled,
};
