import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getPosts } from "../../store/postsSlice";
import Button from "../../components/Button";

import s from "./FeedPage.module.scss";
function FeedPage() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const { posts } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts({ limit: 3, page }));
  }, [page]);

  const onPrev = () => {
    if (page === 1) return;
    setPage((prev) => prev - 1);
  };
  const onNext = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div>
      <div>FeedPage</div>
      <div className={s.buttons}>
        <Button onClick={onPrev} className={s.prev}>
          Prev
        </Button>
        <Button onClick={onNext} className={s.next}>
          Next
        </Button>
      </div>
      <div className={s.postBlock}>
        {posts.map((post) => (
          <div key={post.id} className={s.postId}>
            <Link to={`posts/${post.id}`}>
              <div className={s.postText}>{post.text}</div>
              {post.user.login && <div>{post.user.login}</div>}
              {post.image && (
                <img src={post.image} className={s.imagePost} alt="" />
              )}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeedPage;
