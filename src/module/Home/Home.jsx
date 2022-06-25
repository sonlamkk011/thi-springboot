import React from "react";
import { Component } from "react";
import { Form } from "../Form/Form";
import { View } from "../View/View";

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <>
                <Form />
                <View />
            </>


        )
    }
}