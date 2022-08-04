/* eslint-disable array-callback-return */
import { Component } from "react";

export default class Weather extends Component{
    render(){
        return(
            <>
            {this.props.weatherInfo.map(value => <li> {value.description} : {value.date}</li>)}
            </>
        )
    }
}