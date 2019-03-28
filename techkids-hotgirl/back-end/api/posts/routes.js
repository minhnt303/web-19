const express = require('express');
const PostModel = require('./model');
const postRouter = express();

postRouter.post('/', async (req, res) => {
    try {
        const postInfo = req.body;
        const newPost = await PostModel.create(postInfo);
        res.status(201).json(newPost)

    } catch (err) {
        res.status(500).end(err.message)
    }
});

postRouter.get('/:postId', async (req, res) => {
    try {
        const { postId } = req.params;
        const postInfo = await PostModel.findById(postId)
            //.populate('author', 'email firstName') //dùng để join hai cái bảng
            .populate({
                path: 'author',
                select: 'email firstName lastName createAt'
            })
            .exec();
        res.status(200).json(postInfo)
    } catch (err) {
        res.status(500).end(err.message)
    }
})

postRouter.get('/', async (req, res) => {
    try {
        const { pageNumber, pageSize } = req.query;
        const totalRecord = await PostModel.find().countDocuments();
        const data = await PostModel.find({})
            .skip(pageSize * (pageNumber - 1))
            .limit(Number(pageSize))
            .exec();
        res.status(200).json(data)
    } catch (err) {
        res.status(500).end(err.message)
    }
})
module.exports = postRouter;

