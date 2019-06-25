import React from "react"
import Hero from "../hero/index"
import Navbar from "../navbar/index"

export default class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            itemsCount: 0,
            price: 300
        };
        this.addNewItem = this.addNewItem.bind(this);
    }

    addNewItem() {
        this.setState((prevState, props) => ({
            itemsCount: prevState.itemsCount + 1,
            price: (prevState.itemsCount + 1) * 300
        }));
    }

    render() {
        return (
            <div className="container__header" onScroll={this.handleScroll}>
                <Navbar itemsCount={this.state.itemsCount} />
                <Hero itemsCount={this.state.itemsCount} price={this.state.price} addNewItem={this.addNewItem} />
            </div>
        )
    }
}
