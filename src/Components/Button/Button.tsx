import React from "react";

interface Props {
  primary: boolean;
  text: string;
  children?: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ 
    primary,
    text,
    children,
    onClick, 
  }) => { 
  return (
    <button 
      onClick={onClick}
      className={
        primary ? 
        ("bg-purple hover:bg-hover-purple text-white font-body py-2 px-4 rounded") :
        ("bg-transparent hover:bg-purple text-purple font-body hover:text-white py-2 px-4 border border-purpke hover:border-transparent rounded")
      }
    >
    {text}
    </button>
  );
}

export default Button;