// Made By sx9.is-a.dev ;)

var domjs = {
  init: doc => {
    'use strict';
    if (!doc) return console.error("domjs: Please Specify The 'document' Object.");
    return {
      el: element => {
        if (!element) return console.error("domjs: Please Specify A Valid Element.");
        return doc.querySelector(element);
      },
      els: elements => {
        if (!elements) return console.error("domjs: Please Specify Valid Elements.");
        return doc.querySelectorAll(elements);
      },
      create: element => {
        if (!element) return console.error("domjs: Please Specify A Valid Tag Name.");
        return doc.createElement(element);
      }
    }
  },
}
