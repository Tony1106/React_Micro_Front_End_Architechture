import React from 'react';
import {Product} from '../models'
import Cart from '../components/Cart';

export default {
  title: 'Example/Cart',
  argTypes: { onRemove: { action: 'clicked' } },
  component: Cart,
};
const Template = (args) => <Cart {...args} />;

export const ListProduct = Template.bind({});
ListProduct.args = {
  products: [new Product({
    id: 'asdasd',
    name: 'Nike shoe',
    description: 'New Nike shoe description',
    price: 201,
    discount: {
      type: 'fixed',
      value: 20
    }
  }), new Product({
    id: '12312',
    name: 'Adidas shoe',
    description: 'New Adidas shoe description',
    price: 201,
    discount: {
      type: 'fixed',
      value: 20
    }
  })],
};
