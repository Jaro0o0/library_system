import Container from "../common/Container";
import { useState, useEffect } from "react";
// import History_IMG from '../assets/images/temporaryImages/pragmatic-programmer-img.jpg'


type RentalHistory = {
    id: number;
    startDate: string;
    endDate: string;
    book: {
        id: number;
        tytul: string;
        autor: string;
        gatunek: string | null;
    };
};

function UserPageDashboardHistory() {

    const [data, setData] = useState<RentalHistory[]>([]);

    useEffect(() => {
        const getHistory = async () => {
            const res = await fetch('http://localhost:5110/search/Books/rent', {
                headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
            });

            if (res.ok) {
                setData(await res.json());
            }
        };

        getHistory();
    }, [])


    return ( 
        
        <>
           
            <div className="flex flex-col gap-10 justify-start p-10 overflow-y-auto bg-slate-50/50">
                    
                
                    
                    {/* Dashboard */}
                    <Container>
                        <div className="overflow-y-auto">
                            <h1 className="text-3xl mb-4 font-semibold text-slate-800">History of rents</h1>
                    
                                {data.length === 0 ? (
                                    <p>No rented books yet.</p>
                                ) : (
                                    data.map((rental) => (
                                        // History_Item
                                        <div key={rental.id} className="p-4 shadow-md flex justify-between items-center">
                                            <div>
                                                <img  className="rounded-2xl object-cover w-[150px] h-[150px]" alt="product-img"/>
                                            </div>
                                            <div>
                                                <p>{rental.book.tytul} — {rental.book.autor}</p>
                                                <p>Rented: {new Date(rental.startDate).toLocaleDateString()}</p>
                                                <p>End date: {new Date(rental.endDate).toLocaleDateString()}</p>
                                            </div>
                                        </div>
                                    ))
                                )}
                        </div>
                    </Container>

                </div>
        </>
     );
}

export default UserPageDashboardHistory;
