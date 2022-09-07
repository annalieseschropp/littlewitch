import './Collection.scss';
import React from "react";

interface Props {
  // text: string;
  imageURL: string;
  children?: React.ReactNode;
}

const Collection: React.FC<Props> = ({ 
  // text,
  imageURL,
  children,
}) => { 
  return (
    <div className="main justify-center">
      <div className="container">
        <div className="bg-purple"></div>
        <div className="bg-purple"></div>
        <div className="bg-purple"></div>
      </div>
    </div>
  );
}

export default Collection;