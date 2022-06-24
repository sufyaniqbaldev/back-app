import { useState, useEffect } from "react"
import { Post } from "./Post"
import { PostForm } from '../Posts/PostForm'
import { IPost } from "../types/data"
import axios from 'axios';

export const PostList = () => {
  const [posts, setPosts] = useState<IPost[]>([])
  const [isUpdate, setUpdate] = useState<boolean>(false)

  useEffect(() => {
    getPosts()
    setUpdate(false)
  }, [isUpdate])

  const getPosts = async () => {
    try {
      const response = await axios
        .get('http://localhost:3000/api/v1/posts')

      const data = response.data

      setPosts(data.reverse())

    } catch(error: any) {
      console.log(error)
    }
  }

  const updatePostList = (post: IPost) => {
    let _posts = posts;
    _posts.unshift(post);
    setPosts(_posts);

    setUpdate(true)
  }

  return (
    <>
      <PostForm updatePostList={updatePostList} />

      <h1>Post List</h1>
      {posts.map((post: IPost) => (
        <Post
          key={post.id}
          title={post.title}
          content={post.content}
        />
      ))}
    </>
  )
}
