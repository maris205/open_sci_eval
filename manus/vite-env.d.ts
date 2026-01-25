/// <reference types="vite/client" />

declare module 'react-katex' {
  import * as React from 'react';

  export interface MathProps {
    math: string;
    block?: boolean;
    errorColor?: string;
    renderError?: (error: Error | TypeError) => React.ReactNode;
    settings?: any;
    as?: string | React.ComponentType<any>;
    children?: React.ReactNode;
    className?: string;
  }

  export class InlineMath extends React.Component<MathProps> {}
  export class BlockMath extends React.Component<MathProps> {}
}
