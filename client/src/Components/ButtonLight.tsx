interface ButtonLightProps {
  children: string;
  onClick: () => void;
}

const ButtonLight = ({ children, onClick }: ButtonLightProps) => {
  return (
    <button
      className="bg-tan p-1 px-3 rounded-lg border border-darkTan text-darkTan font-gopher"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonLight;
