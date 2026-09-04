import Tolkien_Img from "../../assets/images/recommendList/tolkien.jpg"
import { Button } from "@mui/material";
import Container from "../common/Container"

function UserPageRecomended() {
    return ( 

        <Container>
            <div className="flex justify-between">
                <h2>Rrcomended Books fo yout</h2>
                <Button variant="contained">Contained</Button>
                
            </div>
            {/* Dashboard */}
            <div className="flex flex-col">
                {/* ITEM */}
                <div className="flex bg-amber-50 shadow-md p-4 rounded-2xl mt-2">
                    {/* IMG_BOX */}
                    <div className="flex gap-3">
                        <img src={Tolkien_Img} alt="tolkien" className="rounded-2xl object-cover w-[200px] h-[100px]"/>
                        {/* TEXT_BOX */}
                        <div>
                            <h3>Authot</h3>
                            <p>book</p>
                            <p>Book desc</p>
                        </div>
                    </div>
                </div>
                {/* ITEM */}
                <div className="flex bg-amber-50 shadow-md p-4 rounded-2xl mt-2">
                    {/* IMG_BOX */}
                    <div className="flex gap-3">
                        <img src={Tolkien_Img} alt="tolkien" className="rounded-2xl object-cover w-[150px] h-[150px]"/>
                        {/* TEXT_BOX */}
                        <div>
                            <h3>Authot</h3>
                            <p>book</p>
                            <p>Book desc</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
     );
}

export default UserPageRecomended;