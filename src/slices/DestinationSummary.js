import React from 'react';
import {RichText} from "prismic-reactjs";
import {linkResolver} from "../utils/linkResolver";

export default ({ slice: {primary: {title1, text, data_section_attr}} }) => (
    <section className="destination_summary scroll-section animated" data-section={data_section_attr}>
        <RichText render={title1} linkResolver={linkResolver} />
        <RichText render={text} linkResolver={linkResolver} />
    </section>
);
