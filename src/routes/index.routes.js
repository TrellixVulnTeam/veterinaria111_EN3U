const {Router} = require('express')
const router= Router();

const { renderIndex, renderPendientes, renderTodo} = require('../controller/index.controller')


router.get('/', renderIndex );
router.get('/pendientes', renderPendientes);
router.get('/todo', renderTodo);

module.exports = router;