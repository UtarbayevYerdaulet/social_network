import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getPost } from "../../store/postSlice";

function PostPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.post);
  console.log(post);

  useEffect(() => {
    dispatch(getPost(id));
  }, []);

  return (
    <div>
      <div>PostPage</div>
      <div>{post[0]?.text}</div>
      {post[0]?.image && <img src={post[0]?.image} alt="" />}
    </div>
  );
}

export default PostPage;
