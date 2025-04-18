import { Link, useParams } from "react-router-dom";

function ProductDisplay({product_list, set_product_list}){
    return(
        <div id="product_list">
            {product_list.map((value, index)=>{
                return(
                    <div id="product" key={index}>
                        <Link to="/detail" state={{id:value.id}}>
                           <img src={value.img}></img>
                        </Link>
                        <div>{value.name}</div>
                        <div style={{fontWeight:600}}>{value.price}</div>
                    </div>
                );
            })}
        </div>
    );
}

export default ProductDisplay;