const listHelper = require('../utils/list_helper')
const Blog = require('../models/blog')

test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})

describe('total likes', () => {
  test('of empty list is zero', () => {
    const blogs = []

    const result = listHelper.totalLikes(blogs)
    expect(result).toBe(0)
  })

  test('when list has only oner blog equals the likes of that', () => {
    const blogs = [
      new Blog(
        {
          title: 'hoge',
          author: 'fuga',
          url: 'http://example.com',
          likes: 123
        }
      )
    ]
    expect(listHelper.totalLikes(blogs)).toBe(123)
  })

  test('of  a bigger list is calculated right', () => {
    const blogs = [
      new Blog(
        {
          title: 'hoge',
          author: 'fuga',
          url: 'http://example.com',
          likes: 123
        }
      ),
      new Blog(
        {
          title: 'hoge2',
          author: 'fuga2',
          url: 'http://example2.com',
          likes: 5
        }
      ),
      new Blog(
        {
          title: 'hoge3',
          author: 'fuga3',
          url: 'http://example3.com',
          likes: 2
        }
      )
    ]
    expect(listHelper.totalLikes(blogs)).toBe(130)
  })

  const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    }
  ]

  test('when list has only one blog, equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithOneBlog)
    expect(result).toBe(5)
  })
})