const indexCtrl= {};

indexCtrl.renderIndex = (req, res)=>{
    res.render('index')
};

indexCtrl.renderPendientes = (req, res)=>{
    res.render('pendientes')
};
indexCtrl.renderTodo = (req, res)=>{
    res.render('todo')
};

module.exports = indexCtrl;