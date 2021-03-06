// // @flow strict
// import React from 'react';
// import ReactDisqusComments from 'react-disqus-comments';
// import { useSiteMetadata } from '../../../hooks';

// type Props = {
//   postTitle: string,
//   postSlug: string
// };

// const Comments = ({ postTitle, postSlug }: Props) => {
//   const { url, disqusShortname } = useSiteMetadata();

//   if (!disqusShortname) {
//     return null;
//   }

//   return (
//     <ReactDisqusComments
//       shortname={disqusShortname}
//       identifier={postTitle}
//       title={postTitle}
//       url={url + postSlug}
//     />
//   );
// };

// export default Comments;

import React, { createRef, useLayoutEffect } from 'react';
const src = 'https://utteranc.es/client.js';
const repo = 'suheeeee/Suheeeee.Dev';

export interface IUtterancesProps {
    repo: string;
}

const Utterances: React.FC<IUtterancesProps> = React.memo(({ }) => {
    const containerRef = createRef<HTMLDivElement>();

    useLayoutEffect(() => {
        const utterances = document.createElement('script');

        const attributes = {
            src,
            repo,
            'issue-term': 'pathname',
            label: 'comment',
            theme: 'github-light',
            crossOrigin: 'anonymous',
            async: 'true',
        };

        Object.entries(attributes).forEach(([key, value]) => {
            utterances.setAttribute(key, value);
        });

        containerRef.current.appendChild(utterances);
    }, [repo]);

    return <div ref={containerRef} />;
});

Utterances.displayName = 'Utterances';

export default Utterances;