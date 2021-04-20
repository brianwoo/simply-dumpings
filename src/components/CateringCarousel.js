import { Component } from "react";
import { Carousel, CarouselControl, CarouselIndicators, CarouselItem } from "reactstrap";
import { cateringData } from '../data/cateringData';



class CateringCarousel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeIndex: 0,
            animating: false
        };

        this.setActiveIndex = this.setActiveIndex.bind(this);
        this.setAnimating = this.setAnimating.bind(this);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
    }


    setActiveIndex(index) {
        this.setState({
            activeIndex: index
        });
    }

    setAnimating(isAnimating) {
        this.setState({
            animating: isAnimating
        });
    }

    next() {
        if (this.state.animating) return;
        const nextIndex = this.state.activeIndex === cateringData.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setActiveIndex(nextIndex);
    }
    
    previous() {
        if (this.state.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? cateringData.length - 1 : this.state.activeIndex - 1;
        this.setActiveIndex(nextIndex);
    }
    
    goToIndex(newIndex) {
        if (this.state.animating) return;
        this.setActiveIndex(newIndex);
    }


    render() {
        
        var slides = cateringData.map((item) => {
            return (
              <CarouselItem
                onExiting={() => this.setAnimating(true)}
                onExited={() => this.setAnimating(false)}
                key={item.src}>
                <img src={item.src} alt={item.altText} />
              </CarouselItem>
            );
        });

        return (
            <Carousel activeIndex={this.state.activeIndex} next={this.next} previous={this.previous}>
                <CarouselIndicators items={cateringData} activeIndex={this.state.activeIndex} onClickHandler={this.goToIndex}/>
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
        );
    }


}

export default CateringCarousel;