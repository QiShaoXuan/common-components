export interface Props {
  content: string;
  fontSize?: number;
  rows?: number;
  lineHeight?: number;
  mode?: "normal" | "ellipsis";
  className?: string;
  Tag?: keyof JSX.IntrinsicElements;
}
