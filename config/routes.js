module.exports = app =>{

    app.route('/kitchen')
        .post(app.api.kitchen.save);
           
}