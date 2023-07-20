import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: base + "md:px-6 md:py-4 px-4 py-3",
    small: base + "sm:px-5 sm:py-2.5 px-4 py-2 text-xs",
    secondary:
      "inline-block text-sm border-2 border-stone-300 px-4 py-2.5 md:px-6 md:py-3.5 rounded-full font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-200 focus:outline-none focus:ring focus:ring-stone-300 focus:text-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed",
    round: base + "md:px-3.5 md:py-2 px-2.5 py-1 text-sm",
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
