import React from 'react'; 

// export more than one we use export rather than export default
// export const Loading = () => <h2>Loading</h2>
// const Loading = (props) => <h2>{props.message}</h2>  //pass props from App.js to Loading.js

const Loading = ({message}) => <h2>{message}</h2>    //destruct message from App.js to Loading.js

export default Loading;