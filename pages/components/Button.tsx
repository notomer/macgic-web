import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'solid';
}

export const Button: React.FC<ButtonProps> = ({ variant = 'solid', children, ...props }) => {
  const className =
    variant === 'outline'
      ? 'border border-gray-800 dark:border-gray-100 text-gray-800 dark:text-gray-100 px-4 py-2 rounded-lg'
      : 'bg-blue-500 text-white px-4 py-2 rounded-lg';

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};