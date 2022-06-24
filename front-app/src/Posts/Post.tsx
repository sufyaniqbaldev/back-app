import { IPost } from '../types/data';
export const Post = (props: IPost) => (
  <>
    <h2>{props.title}</h2>
    <p>{props.content}</p>
  </>
)
