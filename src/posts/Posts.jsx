import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, getCommit, deletComent } from '../store/PostReduser';
import style from '../posts/post.module.css';
import imageLik from '../image/iconLike.png';
import imageDizLaik from '../image/icondislik.png';

const Posts = () => {
  const dataPosts = useSelector((state) => state.ReduxPost);

  console.log(dataPosts);

  const dispath = useDispatch();
  useEffect(() => {
    dispath(getPosts());
  }, []);
  //  рендеринг

  return (
    <>
      <div className={style.container}>
        {dataPosts &&
          dataPosts.map((post) => (
            <div className={style.blockContiner} key={post.id}>
              <div className={style.title}>{post.title}</div>
              <div className={style.body}>{post.body}</div>

              {post.commit !== null ? (
                <div className={style.blockKCommentaryWraper}>
                  <div className={style.addComentary}>
                    <div>коментарий</div>

                    <div className={style.comentaryValue}>
                      <img className={style.avatar} src="" alt="" srcset="" />
                      <input
                        className={style.CommentaryInput}
                        type="text"
                        placeholder="введите  коментарийй"
                      />
                      <button className={style.LikeBtn} type="button">
                        Добваить{' '}
                      </button>
                    </div>
                  </div>
                  {post.commit.map((comentary) => (
                    <div className={style.blockComentary}>
                      <img className={style.avatar} src="" alt="" srcset="" />
                      <div>
                        <div className={style.username}>
                          {comentary.user.username}
                        </div>
                        <div> {comentary.body}</div>
                        <div className={style.blokckLik}>
                          <span className={style.spanLike}>
                            <img
                              className={style.image}
                              src={imageLik}
                              alt="n"
                              srcset=""
                            />
                          </span>
                          <span className={style.spanLike}>
                            <img
                              className={style.image}
                              src={imageDizLaik}
                              alt=""
                            />
                          </span>
                          <button className={style.LikeBtn} type="button">
                            ответить
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <button
                  onClick={() => dispath(getCommit(post.id))}
                  type="button"
                >
                  коментарий
                </button>
              )}
              {post.commit && (
                <button
                  onClick={() =>
                    dispath({ type: deletComent, payload: post.id })
                  }
                  type="button"
                >
                  закрыть
                </button>
              )}
            </div>
          ))}
      </div>
    </>
  );
};

export default Posts;
