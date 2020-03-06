import React from 'react';
import {RichText} from "prismic-reactjs";
import {linkResolver} from "../utils/linkResolver";

export default ({slice: {primary: {}}}) => (
    <React.Fragment>
        <section className="info_brief">
            <div className="slider">
                <ul className="slider_list">
                    <li id="first" className="slider_item active" data-slide="one">
                        <figure>
                            <img src="img/info-kabarda.jpg" alt=""/>
                        </figure>
                        <article>
                            <figure>
                                <img src="img/img-mountains.png" alt=""/>
                            </figure>
                            <h3>Kabarda</h3>
                            <p>Kabardino-Balkaria is called the pearl of the Caucasus, where Elbrus – the marvelous
                                giant
                                with its two summits, the highest mountain in Europe.</p>
                        </article>
                    </li>
                </ul>
                <div className="slider_control">
                    <a href="#" className="conrol_button conrol_button_next">
                        <i className="fa fa-chevron-right fa-lg"></i>
                    </a>
                    <a href="#" className="conrol_button conrol_button_prev">
                        <i className="fa fa-chevron-left fa-lg"></i>
                    </a>
                </div>
            </div>
        </section>
        <section className="info_detail">
            <div className="detail_articles">
                <hr />
                <ul className="articles_list">
                    <li className="articles_item active" data-articles="one">
                        <h3>Kabarda</h3>
                        <ul>
                            <li>
                                <article className="article-elbrus">
                                    <h4>Elbrus</h4>
                                    <p>Elbrus – the highest mountain in Russia and Europe with the height of 5,642
                                        meters –
                                        rises proudly here, in the north of the watershed crest of the Greater
                                        Caucasus
                                        Mountain Range. Its two peaks are among not only the greatest peaks of the
                                        planet,
                                        but also the largest lost volcanoes.</p>
                                </article>
                            </li>
                            <li>
                                <article className="article-blue-lakes">
                                    <h4>Blue Lakes</h4>
                                    <p>Group of blue lakes are located in the beautiful nature, mountain deciduous
                                        forests
                                        and flowering alpine fields – phenomenon, interesting not only for Russia,
                                        but also
                                        in the whole world. One of the deepest lakes in Russia and Europe with depth
                                        of 368
                                        meters and bottom is not reached yet.</p>
                                </article>
                            </li>
                            <li>
                                <article className="article-nalchik">
                                    <h4>Nalchik</h4>
                                    <p>The capital of Kabardino-Balkarian republic – Nalchik – is a beautiful city
                                        surrounded by parks, mountains, lakes and river Nalchik. The city is covered
                                        by a
                                        semicircle of the majestic mountains of the northern foothills of the
                                        Caucasus
                                        Mountains, resembling “horseshoe”.</p>
                                </article>
                            </li>
                        </ul>
                    </li>
                    <li className="articles_item" data-articles="two">
                        <h3>Dombay</h3>
                        <ul>
                            <li>
                                <article className="article-dombay-ulgen">
                                    <h4>Dombay-Ulgen</h4>
                                    <p>Dombay meadow surrounded by mountains. The highest peak Dombai-Ulgen (4046 m)
                                        covered
                                        with eternal snows and glaciers. This is not only the most powerful, but
                                        also the
                                        most beautiful top of Western Caucasus. Majesty and picturesqueness of
                                        Dombai-Ulgen
                                        pales all other peaks.</p>
                                </article>
                            </li>
                            <li>
                                <article className="article-alibeksky-waterfall">
                                    <h4>Alibeksky Waterfall</h4>
                                    <p>Alibeksky waterfall is one of the largest waterfalls in the region. It is
                                        also called
                                        "the Terrible" due to the large screen of falling water from a height of 25
                                        meters.
                                        A walk through the pass through alpine meadows, then through birch crooked
                                        and will
                                        forever remain in the memory of travelers.</p>
                                </article>
                            </li>
                            <li>
                                <article className="article-teberda">
                                    <h4>Teberda</h4>
                                    <p>The river on the northern slope of the Greater Caucasus, its bed is pebbly
                                        and
                                        abounds in boulders. There are several waterfalls along the Teberda.
                                        Fifty-five
                                        percent of the river’s water is derived from snow and glaciers. The Teberda
                                        Preserve
                                        is in the upper course of the Teberda River.</p>
                                </article>
                            </li>
                        </ul>
                    </li>
                    <li className="articles_item" data-articles="three">
                        <h3>KMV</h3>
                        <ul>
                            <li>
                                <article className="article-roses-valley">
                                    <h4>Valley of Roses</h4>
                                    <p>No visitor was indifferent to the Rose Valley park, which is the most
                                        beautiful place
                                        in the resort park of Kislovodsk with area of about 3 hectare. Dozens of
                                        rose
                                        species from all over the world grow on the big flowerbeds ar-ranged as on a
                                        chess-board in the lower part of the valley.</p>
                                </article>
                            </li>
                            <li>
                                <article className="article-pyatigorsk">
                                    <h4>Pyatigorsk</h4>
                                    <p>The name Pyatigorsk is derived from the fused Russian words "five mountains"
                                        and the
                                        city is so called because of the five peaks of the Beshtau of the Caucasian
                                        mountain
                                        range overlooking the city. It was founded in 1780, and has been a health
                                        spa with
                                        mineral springs.</p>
                                </article>
                            </li>
                            <li>
                                <article className="article-essentuki">
                                    <h4>Essentuki</h4>
                                    <p>The balneological resort of Yessentuki is small comparing to resorts of
                                        Pyatigorsk
                                        and Kislovodsk, but its significance is as great as that of two main resorts
                                        in the
                                        Mineralnye Vody. The specific of the sanatoriums of Yessentuki was
                                        determined by the
                                        composition of the famous mineral waters.</p>
                                </article>
                            </li>
                        </ul>
                    </li>
                    <li className="articles_item" data-articles="four">
                        <h3>Kuban</h3>
                        <ul>
                            <li>
                                <article className="article-krasnaya-polyana">
                                    <h4>Krasnaya Polyana</h4>
                                    <p>High-land resort Krasnaya Polyana (Red Glade) is rightly considered one of
                                        the most
                                        important tourist sights of Greater Sochi. This is a mountain village, with
                                        a chair
                                        lift and four skiing centers located in its environs.</p>
                                </article>
                            </li>
                            <li>
                                <article className="article-psakho">
                                    <h4>Psakho</h4>
                                    <p>The canyon of the Psakho River is one of the most visited places, where you
                                        can see a
                                        relic yew & boxwood forest. There were laid wood decks in the relic groves.
                                        On them
                                        you can go along the bed of the river Psakho to the canyon. It is rather
                                        deep –
                                        rocks reach the height of several tens of meters.</p>
                                </article>
                            </li>
                            <li>
                                <article className="article-navalishinsky-canyon">
                                    <h4>Navalishinsky Canyon</h4>
                                    <p>Navalishinsky Canyon is one of the most curious places in Sochi, where you
                                        can get to
                                        a primeval relic forest. Semi-darkness always reigns in yew and boxwood
                                        groves and
                                        there you can feel the atmosphere of the tropics. In some places this trip
                                        will be
                                        rather hard, but it's worth the effort.</p>
                                </article>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div className="articles_switch">
                    <a href="#" className="switch_button">
                        <i className="fa fa-chevron-down fa-lg"></i>
                    </a>
                </div>
            </div>
        </section>
    </React.Fragment>
);
