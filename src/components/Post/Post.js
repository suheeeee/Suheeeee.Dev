// @flow strict
import React from 'react';
import Comments from './Comments';
import Title from './Title';
import PostInfo from './PostInfo';
import Content from './Content';
import styles from './Post.module.scss';
import type { Node } from '../../types';

type Props = {
  post: Node
};

const Post = ({ post }: Props) => {
  const { html } = post;
  const { tagSlugs } = post.fields;
  const { tags, title, date } = post.frontmatter;

  return (
    <div className={styles['post']}>
      {/* <Link className={styles['post__home-button']} to="/">All Articles</Link> */}

      <Title title={title} />
      {tags && tagSlugs && <PostInfo date={date} tags={tags} tagSlugs={tagSlugs} />}
      <div className={styles['post__content']}>
        <Content body={html}/>
      </div>

      <div className={styles['post__comments']}>
        <Comments/>
      </div>
    </div>
  );
};

export default Post;
