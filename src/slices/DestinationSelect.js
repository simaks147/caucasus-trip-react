import React from 'react';
import DestinationSelectFigure from '../components/DestinationSelectFigure';

export default ({ slice: {primary: {image1, caption1, data_pic_attr1,
                                    image2, caption2, data_pic_attr2,
                                    image3, caption3, data_pic_attr3,
                                    image4, caption4, data_pic_attr4}} }) => (
    <section className="destination_select">
        <DestinationSelectFigure image={image1.url} caption={caption1} data_pic_attr={data_pic_attr1} />
        <DestinationSelectFigure image={image4.url} caption={caption4} data_pic_attr={data_pic_attr4} />
        <DestinationSelectFigure image={image2.url} caption={caption2} data_pic_attr={data_pic_attr2} />
        <DestinationSelectFigure image={image3.url} caption={caption3} data_pic_attr={data_pic_attr3} />
    </section>
);
