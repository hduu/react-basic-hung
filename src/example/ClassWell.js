import React from "react";
class ClassWell extends React.Component{
    
    render() {
        return(
            <h1>hello {this.props.name}</h1>
        )
    }
}
export default ClassWell;
// gọi <ClassWell name = 'value' / >