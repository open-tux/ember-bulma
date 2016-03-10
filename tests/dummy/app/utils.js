import Ember from 'ember';

/**
  Evaluate if item is an Object

  @method isObject
  @returns Boolean
  @public
*/
export const isObject = (item) => {
  return Object.prototype.toString.call(item) === '[object Object]';
};

/**
  Convert POJO to Ember Object

  @method fromPOJO
  @returns Class
  @public
*/
export const fromPOJO = (obj) => {
  return Ember.Object.create(obj);
};

/**
  Convert POJA to Ember Array and first level objects to Ember Objects

  @method fromPOJA
  @returns Array
  @public
*/
export const fromPOJA = (arr) => {
  return Ember.A(arr.map((item) => {
    return isObject(item) ? fromPOJO(item) : item;
  }));
};
