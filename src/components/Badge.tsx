interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'accent' | 'outline' | 'dark';
  className?: string;
}

export const Badge = ({ children, variant = 'primary', className = '' }: BadgeProps) => {
  const variants = {
    primary: 'bg-primary text-white',
    accent: 'bg-accent text-secondary',
    outline: 'border border-primary text-primary bg-primary/5',
    dark: 'bg-secondary text-white'
  };

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-accent uppercase tracking-wider ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};
