// Vendors
import styled from 'styled-components';

const DialogResizeComponentStyled = styled.div`
  position: absolute;
  user-select: none;
  touch-action: none;
`;

const DialogResizeComponentTopRigtCornerStyled = styled(DialogResizeComponentStyled)`
  cursor: ne-resize;
  height: 16px;
  left: calc(100% - 8px);
  top: -8px;
  width: 16px;
`;

const DialogResizeComponentTopLeftCornerStyled = styled(DialogResizeComponentStyled)`
  cursor: nw-resize;
  height: 16px;
  left: -8px;
  top: -8px;
  width: 16px;
`;

const DialogResizeComponentBottomRightCornerStyled = styled(DialogResizeComponentStyled)`
  cursor: se-resize;
  height: 16px;
  left: calc(100% - 8px);
  top: calc(100% - 8px);
  width: 16px;
`;

const DialogResizeComponentBottomLeftCornerStyled = styled(DialogResizeComponentStyled)`
  cursor: sw-resize;
  height: 16px;
  left: -8px;
  top: calc(100% - 8px);
  width: 16px;
`;

const DialogResizeComponentTopSideStyled = styled(DialogResizeComponentStyled)`
  cursor: n-resize;
  height: 16px;
  left: 8px;
  top: -8px;
  width: calc(100% - 16px);
`;

const DialogResizeComponentRightSideStyled = styled(DialogResizeComponentStyled)`
  cursor: e-resize;
  height: calc(100% - 16px);
  left: calc(100% - 8px);
  top: 8px;
  width: 16px;
`;

const DialogResizeComponentBottomSideStyled = styled(DialogResizeComponentStyled)`
  cursor: s-resize;
  height: 16px;
  left: 8px;
  top: calc(100% - 8px);
  width: calc(100% - 16px);
`;

const DialogResizeComponentLeftSideStyled = styled(DialogResizeComponentStyled)`
  cursor: w-resize;
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
