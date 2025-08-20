import { CSSProperties, ReactNode } from "react";
import "./Card.css";

interface CardProps {
  style?: CSSProperties;
  children?: ReactNode;
  heading: string;
  para: string;
}

export default function Card({ style, children, heading, para }: CardProps) {
  return (
    <div className="card" style={style}>
      <div className="svg-container">{children}</div>
      <div className="card-info">
        <h2 className="card-heading">{heading}</h2>
        <p className="card-para">{para}</p>
      </div>
    </div>
  );
}
