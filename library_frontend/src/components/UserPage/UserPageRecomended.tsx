
import Container from "../common/Container"
import { useState,useEffect } from "react";
import useGetUser from "../../hooks/useGetUser";

type RecommendedBook = {
    id: number;
    tytul: string;
    autor: string;
};

function UserPageRecomended() {

    const { userName } = useGetUser();
    const [reccomedationList, setReccomedationList] = useState<RecommendedBook[]>([]);


    useEffect(  () => {
        const getReccomendation =   async  () => {
                if (!userName) return;

                const res = await fetch(`http://localhost:5110/search/Books/recomended?userName=${ userName }`,{
                method: 'GET',
                });

                if (!res.ok) return;
                const data = await res.json();

                console.log(data);
                setReccomedationList(data);

        }

        getReccomendation();
    },
    
    
    [userName])


 


return (
        <Container>
            {reccomedationList.length === 0 ? (
                <p>You don't have recommendations yet</p>
            ) : (
                reccomedationList.map((book) => (
                    <div key={book.id}>
                        <h3>{book.tytul}</h3>
                        <p>{book.autor}</p>
                    </div>
                ))
            )}
        </Container>
    );


    
}

export default UserPageRecomended;
