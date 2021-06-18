const Blog = require('../models/blog')

const initialBlogs = [
  {
    title: 'hoge',
    author: 'fuga',
    url: 'http://example.com',
    likes: 123
  },
  {
    title: 'hoge2',
    author: 'fuga2',
    url: 'http://example2.com',
    likes: 5
  },
  {
    title: 'hoge3',
    author: 'fuga3',
    url: 'http://example3.com',
    likes: 2
  }
]
const nonExistingId = async () => {
  const blog = new Blog({ title: 'willremovethissoon' })
  await blog.save()
  await blog.remove()

  return blog._id.toString()
}

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}

module.exports = {
  initialBlogs, nonExistingId, blogsInDb
}