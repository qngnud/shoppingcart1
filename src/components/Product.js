import React from "react";
import {Card, List} from "antd"

const {Meta} = Card

const Product = ({title, inventory, price, layout}) => {
    if (layout) {
        return (
            <Meta
                title={title}
                description={<div><h2 style={{color: "red"}}>{price}$</h2>
                    <p>Inventory: {inventory > 0 ? inventory : "Sold out"}</p></div>}
            >
            </Meta>
        )

    } else {
        return (
            <List.Item.Meta
                title={title}
                description={<div><h2 style={{color: "red"}}>{price}$</h2>
                    <p>Inventory: {inventory > 0 ? inventory : "Sold out"}</p></div>}
            />
        )
    }
}

export default Product;
