import React from 'react';
import MyParagraph from './MyParagraph';

const DemoOutput = (props) => {
    console.log('DemoOutput RUNNING');
    return <MyParagraph>{props.show ? 'This is new!' : ''}</MyParagraph>;
};

//  This works, won't rerender this or <MyParagraph> bec false === false.
export default React.memo(DemoOutput);