import { useParams } from "react-router";

function CategoryPage() {
    const { categoryName } = useParams();

    return ( 

        <div>
                <h2>{categoryName}</h2>
        </div>
     );
}

export default CategoryPage;