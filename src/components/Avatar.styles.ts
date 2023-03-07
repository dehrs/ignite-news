import styled, { css } from 'styled-components';

interface AvatarImgProps {
  hasBorder: boolean;
}

export const AvatarImg = styled.img<AvatarImgProps>`
  ${({ hasBorder }) =>
    hasBorder
      ? css`
          width: calc(3rem + 12px);
          height: calc(3rem + 12px);
          border-radius: 8px;
          border: 4px solid var(--gray-800);
          outline: 2px solid var(--green-500);
        `
      : css`
          width: 3rem;
          height: 3rem;
          border-radius: 8px;
        `}
`;
