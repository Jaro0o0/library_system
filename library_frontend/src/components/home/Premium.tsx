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
            <h2>Explore more possibilities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {premiumData.map((item, index) => {
                    return(
                        <div key={index} className="shadow-sm border border-slate-200  rounded-xl p-6 relative flex flex-col justify-between min-h-[600px] h-full">
                            {/* for_month */}
                            <div className="p-2 max-w-[150px] w-full bg-green-400 rounded-xl absolute top-0 left-0 ">
                                <span>0 pln for month</span>
                            </div>
                            {/* Title_BOx */}
                            <div className="mt-2">
                                <h3 className="text-2xl mt-3">{item.name}</h3>
                                <span>after this 30pln for month </span>
                            </div>
                            <div className="p-2 border-b-2">
                                 <span>0 pln for month</span>
                                 <span>after this 30pln for month </span>
                            </div>
                            {/* List */}
                            <div className="mt-4 mb-12" >
                                <ul className="list-disc pl-5">
                                    <li>1 Premium account</li>
                                    <li>Cancel at any time</li>
                                </ul>
                            </div>
                            
                            <Button variant="contained">try now</Button>
                            <p className="mt-8">0 PLN for 3 months, then 26.99 PLN per month. Offer available only to users who have not yet used Premium. </p>

                        </div>

                    )
                }) }
                

            </div>
        </Container>
        </>
     );
}

export default Premium;