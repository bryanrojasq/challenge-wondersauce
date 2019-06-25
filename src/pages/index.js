import React from "react"
import Header from "../components/header/index"
import Carousel from "../components/carousel/index"
import VideoPlayer from "../components/video-player/index"
import Footer from "../components/footer/index"

export default () => (
    <div className="container__main">
      <Header headerText="Hello from Header" />
      <Carousel title="Carousel Title" caption="Carousel Caption" />
      <VideoPlayer title="VideoPlayer Title" caption="VideoPlayer Caption" />
      <Footer />
    </div>
  )