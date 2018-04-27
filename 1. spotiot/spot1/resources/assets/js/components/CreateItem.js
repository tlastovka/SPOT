// CreateItem.js

import React, {Component} from 'react';


class CreateItem extends React.Component {
    render() {
        return (
            <div className="form-control-lg align-content-center ">
                <h1>Create An Item</h1>
                <form>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Item Name:</label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Item Price:</label>
                                <input type="text" className="form-control col-md-6" />
                            </div>
                        </div>
                    </div><br />
                    <div className="form-group">
                        <button className="btn btn-primary">Add Item</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default CreateItem;