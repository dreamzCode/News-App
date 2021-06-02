const express = require('express')
const newsRouter = express.Router()
const axios = require('axios')



//https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=API_KEY

newsRouter.get('', async(req, res) => {
    try {

        const newsAPI = await axios.get(`https://newsapi.org/v2/everything?q=Tech&sortBy=publishedAt,popularity&apiKey=${process.env.API_KEY}`)
        newsAPI.data.articles.forEach((article, index) => article.source.id = index)
        res.render('news', { articles: newsAPI.data.articles })
    } catch (err) {
        if (err.response) {
            res.render('news', { articles: null})
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if (err.request) {
            res.render('news', { articles: null })
            console.log(err.request)
        } else {
            res.render('news', { articles: null })
            console.error('Error', err.message)
        }
    }
})

newsRouter.post('', async(req, res) => {
    let search = req.body.search
    try {
        const newsAPI = await axios.get(`https://newsapi.org/v2/everything?q=${search}&sortBy=popularity,publishedAt&apiKey=${process.env.API_KEY}`)
        res.render('newsSearch', { articles: newsAPI.data.articles })
    } catch (err) {
        if (err.response) {
            res.render('newsSearch', { articles: null})
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if (err.request) {
            res.render('newsSearch', { articles: null })
            console.log(err.request)
        } else {
            res.render('newsSearch', { articles: null })
            console.error('Error', err.message)
        }
    }
})

module.exports = newsRouter