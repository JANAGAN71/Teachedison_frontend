import "../articles/article.css"
import Content from "../article_content/art_cont.jsx"
import { Link } from 'react-router-dom'

export default function Article() {
  // console.log(Posts);
  return (
    <div className="articles">
      <Link className='lists' to="/show">
        <Content />
      </Link>
      <Link className='lists' to="/show">
        <Content />
      </Link>
      <Link className='lists' to="/show">
        <Content />
      </Link>
      <Link className='lists' to="/show">
        <Content />
      </Link>
    </div>
  )
}
