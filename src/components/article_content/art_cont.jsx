import "./art_cont.css"
import content_img from "../article_content/6g.jpg"

export default function art_cont() {
  return (
    <>
    <div className="content">
      <img src={content_img} alt="Image" />
      <div className="information">
        <div className="categories">
          <span className="cate">Technology</span>
        </div>

        <div className="artcont">
          <span className="art_title">6G TECHNOLOGY</span>
          <br />
          <span className="art_desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat repudiandae ducimus debitis accusamus aliquam aliquid architecto tempore voluptate adipisci cum minus perferendis, veniam reiciendis dicta iusto quibusdam at temporibus vitae!</span>
          <br />
          <span className="postTime">1 hour ago</span>
        </div>

        <div className="likeBtns">
          <span><i class="fa-regular fa-heart"></i> Likes</span>
          <i class="fa-solid fa-ban"></i>
        </div>
      </div>
    </div>
    <div className="content">
      <div className="information">
        <div className="categories">
          <span className="cate">Technology</span>
        </div>

        <div className="artcont">
          <span className="art_title">6G TECHNOLOGY</span>
          <br />
          <span className="art_desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat repudiandae ducimus debitis accusamus aliquam aliquid architecto tempore voluptate adipisci cum minus perferendis, veniam reiciendis dicta iusto quibusdam at temporibus vitae!</span>
          <br />
          <span className="postTime">1 hour ago</span>
        </div>

        <div className="likeBtns">
          <span><i class="fa-regular fa-heart"></i> Likes</span>
          <i class="fa-solid fa-ban"></i>
        </div>
      </div>
      <img src={content_img} alt="Image" />
    </div>
    </>
  )
}
