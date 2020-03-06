import React from 'react';
import {RichText} from "prismic-reactjs";
import {linkResolver} from "../utils/linkResolver";

export default ({ slice: {primary: {title1, text, image, data_section_attr}} }) => (
    <section className="intro scroll-section animated" data-section={data_section_attr}>
        <article>
            <figure>
                <img src={image.url} alt="" />
            </figure>
            <RichText render={title1} linkResolver={linkResolver} />
            <RichText render={text} linkResolver={linkResolver} />
        </article>
    </section>
);
