const { response } = require('express');

const usersGet = (req, res = response) => {
    const { city = 'Zapopan', country = 'Mexico' } = req.query;
    res.json({
        message : 'GET api - response',
        city,
        illness
    });
}

const usersPut = (req, res = response) => {
    const { id } = req.params;
    res.status(400).json({
        message : 'PUT api - response',
        id
    });
}

const usersPost = (req, res = response) => {
    const {name,age} = req.body;
    res.json({
        message : 'POST api - response',
        name,
        age
    });
}

const usersPatch = (req, res = response) => {
    res.json({
        message : 'PATCH api - response'
    });
}

const usersDelete = (req, res = response) => {
    res.json({
        message : 'DELETE api - response'
    });
}


module.exports = {
    usersGet,
    usersPut,
    usersPost,
    usersPatch,
    usersDelete
}