import { List, Button } from "antd";
import React from "react";

const CartProduct = ({ cartProducts, removeFromCart }) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={cartProducts}
      renderItem={item => (
        <List.Item key={item.id}>
          <List.Item.Meta
            title={item.title}
            description={"Price: " + item.price + " Quality: " + item.quality}
          />
          <Button type="link" onClick={() => removeFromCart(item.id)}>Remove</Button>
        </List.Item>
      )}
    />
  );
};

export default CartProduct;