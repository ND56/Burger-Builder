// recall this is used to make it so we can return adjacent elements in our
// JSX without needing to  wrap them in a div
// there isn't even any JSX in this file, so we don't need to import React to
// call React.buildElement
const aux = (props) => props.children

export default aux
