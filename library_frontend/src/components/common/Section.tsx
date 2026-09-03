import type { ReactNode } from "react";

function Section({children}: { children: ReactNode }) {
    return ( 
        <section className="py-25">
            {children}
        </section>
     );
}

export default Section;
