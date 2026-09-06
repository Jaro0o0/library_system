import Container from "../common/Container";
import { Button } from "@mui/material";

const premiumData = [
    {
        name: 'Individual'
    },
    {
        name: 'Student'
    },
    {
        name: 'Duo'
    },
]


function Premium() {
    return ( 
        <>
        <Container>
            <div className="text-center mb-12 py-8">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Explore more possibilities</h2>
                <p className="text-slate-500 mt-3 max-w-xl mx-auto">Unlock unlimited reading, audiobooks and offline access with a Premium plan.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {premiumData.map((item, index) => {
                    return(
                        <div key={index} className="shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-slate-100 rounded-2xl p-8 relative flex flex-col justify-between min-h-[560px] h-full bg-white hover:border-green-400 hover:-translate-y-1 transition-all duration-300">
                            {/* for_month */}
                            <div className="px-4 py-1.5 max-w-[160px] w-full bg-gradient-to-r from-green-400 to-green-500 text-white text-sm font-semibold rounded-lg absolute -top-0 left-0 shadow-md ">
                                <span>0 PLN for month</span>
                            </div>
                            {/* Title_BOx */}
                            <div className="mt-10">
                                <h3 className="text-2xl font-bold text-slate-900 mt-3">{item.name}</h3>
                                <span className="text-slate-500 text-sm">after this 30 PLN for month</span>
                            </div>
                            <div className="p-4 border-b border-slate-100 bg-slate-50 rounded-xl">
                                 <span className="text-3xl font-bold text-slate-900">0 PLN</span>
                                 <span className="text-slate-500 block text-sm mt-1">after this 30 PLN for month</span>
                            </div>
                            {/* List */}
                            <div className="mt-6 mb-10" >
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-slate-700">
                                        <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                                        <span>1 Premium account</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-700">
                                        <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                                        <span>Cancel at any time</span>
                                    </li>
                                </ul>
                            </div>
                            
                            <Button className="!bg-green-400 !rounded-lg !font-semibold w-full" variant="contained">try now</Button>
                            <p className="mt-6 text-xs text-slate-400 leading-relaxed">0 PLN for 3 months, then 26.99 PLN per month. Offer available only to users who have not yet used Premium. </p>

                        </div>

                    )
                }) }
                

            </div>
        </Container>
        </>
     );
}

export default Premium;