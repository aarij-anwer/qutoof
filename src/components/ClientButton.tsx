'use client';

import { Button } from './Button';

type BaseButtonProps = Omit<
  React.ComponentPropsWithoutRef<'button'>,
  'color'
> & {
  href?: undefined;
};

type ClientButtonProps = (
  | {
      variant?: 'solid';
      color?: 'slate' | 'orange' | 'white';
    }
  | {
      variant: 'outline';
      color?: 'slate' | 'white';
    }
) &
  BaseButtonProps;

export function ClientButton({ ...props }: ClientButtonProps) {
  return <Button {...props} />;
}
