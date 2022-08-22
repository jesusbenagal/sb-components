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
     * Color del Background
     */
    backgroundColor?: string;
    /**
     * Estilo personalizado
     */
    style?: CSSProperties;
}
export declare const MyLabel: ({ allCaps, color, fontColor, label, size, backgroundColor, style, }: MyLabelProps) => JSX.Element;
