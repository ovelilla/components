// Vendors
import styled from 'styled-components';

const DialogHeaderComponentStyled = styled.div`
  align-items: center;
  cursor: move;
  display: flex;
  flex: 0 0 auto;
  gap: 16px;
  justify-content: space-between;
  padding: 16px;
  touch-action: none;
  user-select: none;
`;

const DialogHeaderComponentTitleStyled = styled.div``;

const DialogHeaderComponentActionsStyled = styled.div`
  display: flex;
  gap: 16px;
`;

export {
  DialogHeaderComponentStyled,
  DialogHeaderComponentTitleStyled,
  DialogHeaderComponentActionsStyled,
};
