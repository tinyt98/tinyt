'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.ctx.render('index',{
      csrf:this.ctx.csrf
    });
    var data = await  this.app.mysql.get('noob', {id:1}); 
    console.log(data);
    

  }
  async login() {
    await this.ctx.request('ok')
  }
}

module.exports = HomeController;
