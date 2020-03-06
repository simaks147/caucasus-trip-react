import React from 'react';

export default ({ image, caption, data_pic_attr }) => (
        <figure data-pic={data_pic_attr}>
            <img src={image} alt={caption} key={caption} />
            <figcaption>{caption}</figcaption>
        </figure>
);
