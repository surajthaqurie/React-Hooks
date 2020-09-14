// first step - import userContext from react
import React, { useContext } from 'react';

// second step - import the necassry context
import { UserContext, ChannelContext } from '../App';

import ComponentF from './ComponentF';

function ComponentE() {

    // final - call the useContext function with passing  in context as in argument
    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);

    return (
        <div>
            {/* use */}
            {user} - {channel}
            <ComponentF />
        </div>
    );
}

export default ComponentE;
