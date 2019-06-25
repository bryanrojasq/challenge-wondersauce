import React from "react"
import "./styles.css"

class Hero extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: 0
        };
        this.handleOptionChange = this.handleOptionChange.bind(this);
    }
    handleOptionChange(e) {
        console.log(e.target.value);
        this.setState({
            selectedOption: e.target.value
        });
    }
    render() {
        const imgId = this.state.selectedOption;
        return (
            <div className="hero__container" style={{ backgroundImage: `url("${this.props.bgImgs[imgId]}")` }}>
                <div className="hero__caption">
                    <div className="hero__title">
                        <h1>{this.props.title} <br /><small>${this.props.price} usd</small></h1>
                        <p>{this.props.caption}</p>
                    </div>
                    <div className="hero__form-options">
                        <p>Select Color</p>
                        <label>
                            <input type="radio" value="0" onChange={this.handleOptionChange} name="radioColor" defaultChecked />
                            White
                </label>
                        <label>
                            <input type="radio" value="1" onChange={this.handleOptionChange} name="radioColor" />
                            Yellow
                </label>
                        <label>
                            <input type="radio" value="0" onChange={this.handleOptionChange} name="radioColor" />
                            Rose Gold
                </label>
                    </div>
                    <button className="hero__cta" onClick={this.props.addNewItem}>add ( {this.props.itemsCount} pair ) to bag</button>
                </div>
            </div>
        );
    }
}
Hero.defaultProps = {
    bgImgs: [
        './images/01_1280_(16x9_Hero).jpg',
        './images/04_1280 (16x9 Video).jpg'
    ],
    title: 'oshe earring',
    caption: 'Custom cut quartz rock crystal hoop earrings with solid gold or silver end caps and hinge closure. Available in White, Yellow or Rose 14k Gold and Silver. Sold as pair.'
};

export default Hero;
