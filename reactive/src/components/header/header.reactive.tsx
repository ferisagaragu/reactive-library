import * as React from 'react';

interface Props {}

interface State {}

export class HeaderReactive extends React.Component<Props, State> {

  headerRef: any = null;

  constructor(props: Props) {
    super(props);
    this.headerRef = React.createRef();
  }

  componentDidMount() {
    window.onscroll = () => {
      this.strictPosition();
    };
  }

  private strictPosition(): void {
    let header = this.headerRef.current;
    let sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
      header.classList.add("sticky-reactive");
    } else {
      header.classList.remove("sticky-reactive");
    }
  }

  render() {
    return (
      <header ref={ this.headerRef } className="header-reactive">
        { this.props.children }
      </header>
    );
  }
}