const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const UrlService = require('../services/url');
// const router = require('express-promise-router')();

// getUrls
router.get('', UrlService.getUrls)


// getUrlbyId
router.get('/:id', UrlService.getOneUrl)


// addUrl
router.post('', UrlService.addUrl)


//deleteAllUrls
router.delete('', UrlService.deleteAllUrls)


module.exports = router;
