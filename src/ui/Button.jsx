// eslint-disable-next-line react/prop-types
const Button = ({ children, className, type, onClick }) => {
  const base = 'bg-indigo-600 inline-block rounded-full text-lg tracking-normal text-white font-semibold py-2 px-5 transition active:scale-95 hover:bg-indigo-700 focus:bg-indigo-700 active:bg-indigo-700';

  const style = {
    primary: base + `px-16 py-3 ${className} `,
    secondary: `bg-white inline-block rounded-full text-md tracking-normal text-gray font-semibold py-2 px-5 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200 transition active:scale-95 ${className}`,
  };

  return (
    <button className={style[type]} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
