export default function Container({ children, className = "", size = "default" }) {
  const maxWidth = {
    small: "max-w-4xl",
    default: "max-w-7xl",
    large: "max-w-8xl",
  }[size];

  return (
    <div className={`${maxWidth} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
