import * as React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  label: string;
  child: React.ReactElement;
  onClick?: Function;
  expanded?: boolean;
}

interface State {
  isOpen: boolean;
}

class TreeItemReactive extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      isOpen: this.props.expanded ? this.props.expanded : false
    }
  }

  render() {
    const { isOpen } = this.state;
    const { label, child, onClick } = this.props;

    return (
      <Accordion
        defaultActiveKey={ isOpen ? '0' : '-1' }
      > 
        <button className="tree-button-reactive">
          <Accordion.Toggle 
            className="tree-reactive"
            as={Card.Header} 
            eventKey="0"
            onClick={ () => this.setState({ isOpen: !isOpen }) }
          >
            <FontAwesomeIcon rotation={ isOpen ? 90 : undefined } icon="chevron-right" />
            <label className="ml-2 mb-0" onClick={ () => onClick && onClick() }>
              { label }
            </label>
          </Accordion.Toggle>
        </button>

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

export default TreeItemReactive;