interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionTitle = ({ title, subtitle, centered = true }: SectionTitleProps) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <span className="font-accent text-primary uppercase tracking-widest text-sm mb-2 block">
          {subtitle}
        </span>
      )}
      <h2 className="font-display text-4xl md:text-5xl font-bold text-text">
        {title}
      </h2>
      <div className={`w-16 h-1 bg-accent mt-6 ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};
