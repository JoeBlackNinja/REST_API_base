const { Router } = require('express');
const router = Router();

const users = require('../controllers/user.controller');

router.get('/', users.usersGet);

router.put('/:id', users.usersPut);

router.post('/', users.usersPost);

router.patch('/', users.usersPatch);

router.delete('/', users.usersDelete);



module.exports = router;