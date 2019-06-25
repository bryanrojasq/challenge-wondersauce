import React from "react"
import { LazyLoadImage } from 'react-lazy-load-image-component';

import "./styles.css"

class VideoPlayer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false
        };
        this.playVideo = this.playVideo.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll() {
        this.setState((prevState) => ({
            isPlaying: false
        }));
        this.refs.sampleVideo.pause();
    }

    playVideo() {
        this.setState((prevState) => ({
            isPlaying: !prevState.isPlaying
        }));
        const method = this.refs.sampleVideo.paused ? 'play' : 'pause';
        this.refs.sampleVideo[method]();
    }

    render() {
        const isVideoOpen = this.state.isPlaying ? "video__source--open" : "";
        const videoClass = `video__source ${isVideoOpen}`
        return (
            <div className="video__container">
                <div className="video__caption">
                    <button className="hero__cta-video" onClick={this.playVideo}>
                        {!this.state.isPlaying ? "play" : "pause"} video
                    </button>
                </div>
                <video muted loop src={this.props.video} className={videoClass} ref="sampleVideo"></video>
                {/* <img src={this.props.poster}  /> */}
                <LazyLoadImage src={this.props.poster} className="video__poster" effect="blur" />
            </div>
        )
    }
}

VideoPlayer.defaultProps = {
    poster: "./images/04_1280 (16x9 Video).jpg",
    video: "./SampleVideo_1280x720_1mb.mp4"
};

export default VideoPlayer;
