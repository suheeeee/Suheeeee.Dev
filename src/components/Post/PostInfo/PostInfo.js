// @flow strict
import React from 'react';
import styles from './PostInfo.module.scss';
import Tags from '../Tags'

type Props = {
  date: string,
  tags: string[],
  tagSlugs: string[]
};

const Title = ({ date, tags, tagSlugs }: Props) => (
  <div className={styles['postinfo']}>
    <span className={styles['postinfo__date']}>Published {new Date(date).toLocaleDateString('ko-KR', { year: 'numeric', month: 'numeric', day: 'numeric' })}</span>
    {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
  </div>
);

export default Title;
