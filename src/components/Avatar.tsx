import { ImgHTMLAttributes } from 'react';
import { AvatarImg } from './Avatar.styles';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
  return <AvatarImg hasBorder={hasBorder} {...props} />;
}
