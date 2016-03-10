import Ember from 'ember';

const { isArray } = Ember;

/**
  Convert an array to space delimited String

  @method makeString
  @returns String
  @public
*/
export const makeString = (arr, unique = true) => {
  return isArray(arr) ? (unique ? arr.uniq() : arr).toString().replace(/,/g, ' ') : arr;
};

/**
  Camel case a string

  @method camelCase
  @returns String
  @public
*/
export const camelCase = (str) => {
  if ((/[a-z]/).test(str)) {
    let arr = str.split('');
    return `${arr[0].toUpperCase()}${arr.slice(1, arr.length)}`.replace(/,/g, '');
  } else {
    return str;
  }
};
