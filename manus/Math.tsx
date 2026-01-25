import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

export const MathInline = ({ math }: { math: string }) => {
  return <span className="text-primary font-medium"><InlineMath math={math} /></span>;
};

export const MathBlock = ({ math }: { math: string }) => {
  return (
    <div className="my-6 p-4 bg-secondary/30 border border-border overflow-x-auto">
      <BlockMath math={math} />
    </div>
  );
};
