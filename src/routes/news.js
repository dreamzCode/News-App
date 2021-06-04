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

newsRouter.get('/technology', async(req, res) => {
    req.params = 'technology'
    try {
        const newsAPI = await axios.get(`https://newsapi.org/v2/everything?q=${req.params}&sortBy=publishedAt,popularity&apiKey=${process.env.API_KEY}`)
        console.log(newsAPI)
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

newsRouter.get('/business', async(req, res) => {
    req.params = 'business'
    try {

        const newsAPI = await axios.get(`https://newsapi.org/v2/everything?q=${req.params}&sortBy=publishedAt,popularity&apiKey=${process.env.API_KEY}`)
        console.log(newsAPI)
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

newsRouter.get('/science', async(req, res) => {
    req.params = 'science'
    try {

        const newsAPI = await axios.get(`https://newsapi.org/v2/everything?q=${req.params}&sortBy=publishedAt,popularity&apiKey=${process.env.API_KEY}`)
        console.log(newsAPI)
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

newsRouter.get('/politics', async(req, res) => {
    req.params = 'politics'
    try {

        const newsAPI = await axios.get(`https://newsapi.org/v2/everything?q=${req.params}&sortBy=publishedAt,popularity&apiKey=${process.env.API_KEY}`)
        console.log(newsAPI)
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

newsRouter.get('/market', async(req, res) => {
    req.params = 'market'
    try {

        const newsAPI = await axios.get(`https://newsapi.org/v2/everything?q=${req.params}&sortBy=publishedAt,popularity&apiKey=${process.env.API_KEY}`)
        console.log(newsAPI)
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

newsRouter.get('/investing', async(req, res) => {
    req.params = 'investing'
    try {

        const newsAPI = await axios.get(`https://newsapi.org/v2/everything?q=${req.params}&sortBy=publishedAt,popularity&apiKey=${process.env.API_KEY}`)
        console.log(newsAPI)
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

newsRouter.get('/health', async(req, res) => {
    req.params = 'health'
    try {

        const newsAPI = await axios.get(`https://newsapi.org/v2/everything?q=${req.params}&sortBy=publishedAt,popularity&apiKey=${process.env.API_KEY}`)
        console.log(newsAPI)
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

newsRouter.get('/sport', async(req, res) => {
    req.params = 'sport'
    try {

        const newsAPI = await axios.get(`https://newsapi.org/v2/everything?q=${req.params}&sortBy=publishedAt,popularity&apiKey=${process.env.API_KEY}`)
        console.log(newsAPI)
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

newsRouter.get('/travel', async(req, res) => {
    req.params = 'travel'
    try {

        const newsAPI = await axios.get(`https://newsapi.org/v2/everything?q=${req.params}&sortBy=publishedAt,popularity&apiKey=${process.env.API_KEY}`)
        console.log(newsAPI)
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

newsRouter.get('/style', async(req, res) => {
    req.params = 'style'
    try {

        const newsAPI = await axios.get(`https://newsapi.org/v2/everything?q=${req.params}&sortBy=publishedAt,popularity&apiKey=${process.env.API_KEY}`)
        console.log(newsAPI)
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
    console.log(search)
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