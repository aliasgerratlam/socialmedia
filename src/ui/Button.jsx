const Button = ({ children }) => {
  return <button className="bg-indigo-600 inline-block rounded-full text-lg px-16 py-3 tracking-normal text-white font-semibold py-2 px-4 hover:bg-indigo-700 focus:bg-indigo-700 active:bg-indigo-700">{children}</button>;
};

export default Button;
