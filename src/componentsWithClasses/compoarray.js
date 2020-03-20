import React from 'react';

export default class Array extends React.Component{
    constructor(props){
        super(props);
        this.state = {arr : ['q', 'u', 'i', 'y', '8', 'dg', 'is', 'thg', 'insj']}
    }
    // for = () => {
    //     for (let i= 0 ; i< this.state.arr.length; i++ ){
    //         <h1>i</h1>
    //     }
    // };

    render() {
        const items = []
      
        for (const [index, value] of this.state.arr.entries()) {
          items.push(<h1>{value}</h1>)
        }
      
        return (
          <div>
            {this.state.arr.map((data) => {
                return(
                <h1>{data}</h1>
                )
            })}
          </div>
        )
      }
}