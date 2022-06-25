import React from "react";
import { Component } from "react";
import { Footer } from "../View/Components/Footer";
import { Navbar } from "../View/Components/Navbar";
import { Slidebar } from "../View/Components/Slidebar";


export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <>
                <div className="container-scroller">
                    <Navbar />
                    <div className="container-fluid page-body-wrapper">
                        <Slidebar />
                        <div className="main-panel">
                            <div className="content-wrapper">
                                <div className="row">
                                    <div className="col-md-6 grid-margin stretch-card">
                                        <div className="card">
                                            <div className="card-body">
                                                <h4 className="card-title">Default form</h4>
                                                <p className="card-description">Basic form layout</p>
                                                <form className="forms-sample">
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputUsername1">Tên thành phố</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="exampleInputUsername1"
                                                            placeholder="Username"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">Tên Quận</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="exampleInputEmail1"
                                                            placeholder="Email"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputPassword1">Ngày thành lập</label>
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            id="exampleInputPassword1"
                                                            placeholder="Password"
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group row">
                                                            <label className="col-sm-4 col-form-label">Status</label>
                                                            <div className="col-sm-12">
                                                                <select className="form-control">
                                                                    <option>using</option>
                                                                    <option>under construction</option>
                                                                    <option>under repair</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button type="submit" className="btn btn-primary me-2">
                                                        Submit
                                                    </button>
                                                    <button className="btn btn-light">Cancel</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Footer />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}