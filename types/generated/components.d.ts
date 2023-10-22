import type { Schema, Attribute } from '@strapi/strapi';

export interface CarPrice extends Schema.Component {
  collectionName: 'components_car_prices';
  info: {
    displayName: 'Price';
    icon: 'money-bill';
    description: '';
  };
  attributes: {
    minDays: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    amount: Attribute.Decimal &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 0;
      }>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'car.price': CarPrice;
    }
  }
}
