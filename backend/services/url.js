const Url = require('../models/url')


const mongoose = require('mongoose')

const { customAlphabet } = require('nanoid')
const nanoid = customAlphabet('-1234567890abcdef', 5)

// getAndFilterUrl
exports.getUrls = (req, res) => {
  Url.find({})
    .exec()
    .then(doc => {
      res.status(200).json({
        ulrs: doc
      });
    })
    .catch(err => {
      // console.log(err);
      res.status(500).json({error: err})
    });
}

exports.getOneUrl = (req, res) => {
  const {id: slug} = req.params;
  Url.findOne({slug})
    .exec()
    .then(doc => {
      // console.log(doc.url)
      // return res.redirect(doc.url);
      // res.status(200).json({
      //   url: doc.url
      // })
      res.redirect(doc.url);
    })
    .catch(err => {
      // console.log(err);
      res.status(500).json({error: err})
    });
}

exports.addUrl = async (req, res) => {

  console.log(req.body)

  let { slug, url } = req.body

  if(!slug){
    slug = nanoid();
  }else {
    const existing = await Url.findOne({ slug });
    if (existing) {
      console.log("in use")
    }
  }

  slug = slug.toLowerCase();

  const Urls = new Url({
    slug: slug,
    url: url,
  });

  Urls
    .save()
    .then(doc =>{

      res.status(201).json({
        message: 'added with success',
        url: doc,
      });
    }).catch(err => {
    res.status(500).json({
      error: "Slug in use"
    });
  });


}



exports.deleteAllUrls = (req, res, next) => {
  Url.deleteMany({})
    .exec()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err});
    });
};





