import type { ReactNode } from "react";

function Container( {children }: { children: ReactNode }) {
    return (  
        <div className="container mx-auto max-w-9xl">
            {children}
        </div>
    );
}

export default Container;
