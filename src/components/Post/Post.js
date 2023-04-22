function Post(props) {

    return (
        <div className="post__container">
           <p className="post">{props.message}</p> 
      </div>
    )
}

export default Post;