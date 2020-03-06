import React from 'react';

import Header from './Header';
import Intro from './Intro';
import DestinationSummary from './DestinationSummary';
import DestinationSelect from './DestinationSelect';

export default ({slices}) => {
    return slices.map((slice, index) => {
        switch(slice.type) {
            case 'header':
                return (
                    <Header slice={slice} key={index} />
                )
            case 'intro':
                return (
                    <Intro slice={slice} key={index} />
                )
            case 'destination_summary':
                return (
                    <DestinationSummary slice={slice} key={index} />
                )
            case 'destination_select':
                return (
                    <DestinationSelect slice={slice} key={index} />
                )
            default: return
        }
    });
};
