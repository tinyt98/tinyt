'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.ctx.render('index',{
      csrf:this.ctx.csrf
    })

  }
  async login() {
    await this.ctx.request('ok')
  }
}

module.exports = HomeController;
