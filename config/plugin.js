'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  ejs: {
    enable: true,
    package: 'egg-view-ejs'
  },
  mysql:{
    enable: true,
    package: 'egg-mysql'
  }
};