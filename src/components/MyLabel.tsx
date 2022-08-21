import { CSSProperties } from "react";
import "./MyLabel.css";

export interface MyLabelProps {
  /**
   * Este es el mensaje que aparecerá en la etiqueta
   */
  label: string;
  /**
   * Este es el tamaño de la etiqueta
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * Este es el color de la etiqueta
   */
  color?: "primary" | "secondary" | "tertiary";
  /**
   * Mostrar en mayusculas
   */
  allCaps?: boolean;
  /**
   * Color de la fuente
   */
  fontColor?: string;
  /**
   * Estilo personalizado
   */
  style?: CSSProperties;
}

export const MyLabel = ({
  allCaps = false,
  color = "primary",
  fontColor,
  label = "No label",
  size = "normal",
  style,
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color} ${allCaps && "allCaps"}`}
      style={{ color: `${fontColor}`, ...style }}
    >
      {label}
    </span>
  );
};
