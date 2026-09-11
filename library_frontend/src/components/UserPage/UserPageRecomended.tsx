


import Tolkien_Img from "../../assets/images/recommendList/tolkien.jpg"
import { Button } from "@mui/material";
import Container from "../common/Container"
import { useState,useEffect } from "react";
import useGetUser from "../../hooks/useGetUser";

function UserPageRecomended() {

    const { userName } = useGetUser();
    const [reccomedationList, setReccomedationList] = useState([]);

    useEffect(  () => {
        const getReccomendation =   async  () => {


                const res = await fetch(`http://localhost:5110/search/Books/recomended?userName=${ userName }`,{
                method: 'GET',
                    
                });
                const data = await res.json();

                console.log(data);
                setReccomedationList(data);

        }

        getReccomendation();
    },
    
    
    [])




return (
        <Container>
            {reccomedationList.length === 0 ? (
                <p>You don't have recommendations yet</p>
            ) : (
                reccomedationList.map((book) => (
                    <div key={book.id}>
                        <h3>{book.title}</h3>
                        <p>{book.autor}</p>
                    </div>
                ))
            )}
        </Container>
    );


    
}

export default UserPageRecomended;