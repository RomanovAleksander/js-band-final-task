import React from 'react';

import './scrollArrow.css'

export class ScrollArrow extends React.Component {
  constructor() {
    super();
    this.state = {
      isScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.trackScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.trackScroll);
  }

  trackScroll = () => {
    const scrolled = window.pageYOffset;
    const coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      this.setState({
        isScrolled: true
      });
    }
    if (scrolled < coords) {
      this.setState({
        isScrolled: false
      });
    }
  };

  backToTop = () => {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -100);
      setTimeout(this.backToTop, 0);
    }
  };

  render() {
    const isScrolled = (this.state.isScrolled) ? 'show' : '';

    return (
      <div className={`back-top ${isScrolled}`}
           title="Go top"
           onClick={this.backToTop}>
        <i className="fa fa-arrow-circle-up" aria-hidden="true"> </i>
      </div>

    );
  }
}
