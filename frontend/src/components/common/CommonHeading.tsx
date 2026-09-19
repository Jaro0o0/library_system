import type { ReactNode } from "react";

function CommonHeading({ children }: { children: ReactNode }) {
    return (  
        <span className="inline-block text-sm font-semibold uppercase tracking-wider text-green-400 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-1.5 mb-6">
                {children}
        </span>
    );
}

export default CommonHeading;
