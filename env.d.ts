/// <reference types="vite/client" />

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'box-icon': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}