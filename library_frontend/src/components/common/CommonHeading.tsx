import type { ReactNode } from "react";

function CommonHeading({ children }: { children: ReactNode }) {
    return (  
        <span className=" inline-block py-1.5 px-4 rounded-full bg-lime-500/10 text-lime-400 border border-lime-500/20 uppercase font-semibold mb-6 tracking-wider ">
                {children}
        </span>
    );
}

export default CommonHeading;
