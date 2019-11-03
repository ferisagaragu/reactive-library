import * as React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

interface Props {
  icon: React.ReactElement;
  label: string;
  child: React.ReactElement;
  onClick: Function;
  expanded?: boolean;
  link?: string;
}

interface State {
  isOpen: boolean;
}

class NavMenuItemReactive extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      isOpen: this.props.expanded ? this.props.expanded : false
    }
  }

  render() {
    const { isOpen } = this.state;
    const { label, child, icon, onClick, link } = this.props;

    return (
      <Accordion
        defaultActiveKey={ isOpen ? '0' : '-1' }
      > 
        <Link 
          className="bm-element" 
          to={ link ? link : '#' }
          style={ {width: '100%'} }
        >
          <Accordion.Toggle 
            className="bm-reactive"
            as={Card.Header} 
            eventKey="0"
            onClick={ () => onClick() }
          >
            <div className="ml-2 mb-0">
              { icon ? icon : <FontAwesomeIcon icon="boxes" /> }
              &nbsp;&nbsp;
              { label }
            </div>
          </Accordion.Toggle>
        </Link>

        <Accordion.Collapse
          className="ml-4"
          eventKey="0"
        >
          { child }
        </Accordion.Collapse>
      </Accordion>
    );
  }
}

export default NavMenuItemReactive;