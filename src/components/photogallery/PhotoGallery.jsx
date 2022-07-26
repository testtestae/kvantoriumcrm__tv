import { Carousel } from 'react-bootstrap';

export default function PhotoGallery() {
    return(
        <div className="photo_gallery" style={{display: "flex", flexDirection:"column", justifyContent: "center"}}>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://picsum.photos/500/300?img=1"
                                    alt="First slide"
                                />
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://picsum.photos/500/300?img=2"
                                    alt="Second slide"
                                />
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://picsum.photos/500/300?img=3"
                                    alt="Third slide"
                                />
                            </Carousel.Item>

                        </Carousel>

        </div>


    )
}

