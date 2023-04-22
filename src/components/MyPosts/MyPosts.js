import React from "react";
import Post from "../Post/Post";

function MyPosts(props) {


    let postsElements = props.posts.map(post => <Post message={post.message} />)
    
    const newPostElement = React.createRef();


    const onAddPost = () => {
        props.addPost();

    }

    const handlePostChange = (e) => {
        let  text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <section className="posts">
        <div className='profile__posts'>
        <h2 className='profile__posts-title'>My posts</h2>
            <textarea className='profile__post-form' ref={newPostElement} value={props.newPostText} onChange={handlePostChange}> </textarea>
          <button className='profile__form-submit' onClick={onAddPost} 
           >AddPost</button>
        <div className='profile__post-blocks'></div>
            {postsElements}
        </div>  
      </section>
    )
}

export default MyPosts;