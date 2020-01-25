import React from 'react';

import { Label, Checkbox, Icon } from './styles';

import iconEdit from '../../img/edit.svg';
import iconDelete from '../../img/delete.svg';

const MainTask = ({ id, content }) => (
    <>
        <Checkbox id={id}/>
        <Label for={id}> 
            {content} 

            <Icon src={iconEdit} />
            <Icon src={iconDelete} />
        </Label>
    </>
);

export default MainTask;