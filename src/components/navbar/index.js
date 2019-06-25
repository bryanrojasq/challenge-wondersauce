import React from "react"
import { Link } from "gatsby"
import "./styles.css"

export default class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false,
            prevScrollPos: window.pageYOffset,
            visible: true,
            transparent: true
        };
        this.handleShowMenu = this.handleShowMenu.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }
    handleScroll() {
        const { prevScrollPos } = this.state;

        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollPos > currentScrollPos;

        this.setState({
            prevScrollPos: currentScrollPos,
            visible,
            transparent: currentScrollPos === 0 //nav is in top
        });
    }
    handleShowMenu() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }
    render() {
        const isHidden = !this.state.visible && !this.state.isToggleOn ? "nav__container--hidden" : "";
        const isTransparent = this.state.transparent ? "nav__container--transparent" : "";
        const dropdownToggle = this.state.isToggleOn ? "nav__mobile--open" : "";
        const dropdownClasses = `nav__mobile ${dropdownToggle}`;
        return (
            <nav className={`nav__container ${isHidden} ${isTransparent}`}>
                <ul className="nav__list">
                    <li className="logo"><Link to='/'>josh</Link></li>
                    <li className="nav__list--item">
                        <span className="hide-sm">shop all</span>
                        <span className="show-sm">
                            <button onClick={this.handleShowMenu}>
                                {!this.state.isToggleOn ? 'menu' : 'hide'}
                            </button>
                        </span>
                    </li>
                    <li>
                        <ul className="nav__container-pull-right">
                            <li className="hide-sm"><Link to='/about'>about</Link></li>
                            <li className="hide-sm"><Link to='/account'>account</Link></li>
                            <li>bag {this.props.itemsCount}</li>
                        </ul>
                    </li>
                </ul>
                <ul className={dropdownClasses}>
                    <li><Link to='/about'>about</Link></li>
                    <li><Link to='/account'>account</Link></li>
                    <li>bag {this.props.itemsCount}</li>
                </ul>
            </nav>
        );
    }
}

Navbar.defaultProps = {
    logo: './images/default_cover.png'
};
