import React from 'react';
import {Product} from '../models'
import ProductCard from '../components/ProductCard';

export default {
  title: 'Example/ProductCard',
  argTypes: { onAddToCart: { action: 'clicked' } },
  component: ProductCard,
};
const Template = (args) => <ProductCard {...args} />;

export const Discount = Template.bind({});
Discount.args = {
  product: new Product({
    id: 'asdasd',
    name: 'Nike shoe',
    description: 'New Nike shoe description',
    price: 201,
    discount: {
      type: 'fixed',
      value: 20
    }
  }),
};
export const Normal = Template.bind({});
Normal.args = {
  product: new Product({
    name: 'Nike shoe',
    description: 'New Nike shoe description',
    price: 201,
    id: '2312'
  }),
};
