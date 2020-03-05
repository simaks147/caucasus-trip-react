import React from 'react';

import Header from './Header'

// export { Header };

export default ({slices}) => {
    return slices.map((slice, index) => {
        switch(slice.type) {
            case 'header':
                return (
                    <Header slice={slice} key={index} />
                );
            default: return
        }
    });
};
