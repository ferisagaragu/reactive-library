import * as React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  label: string;
  child: React.ReactElement;
}

interface State {
  isOpen: boolean;
}

class TreeFatherReactive extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      isOpen: false
    }
  }

  render() {
    const { isOpen } = this.state;
    const { label, child } = this.props;

    return (
      <Accordion
        defaultActiveKey={ isOpen ? '0' : '-1' }
      >
        <Accordion.Toggle 
          className="tree-reactive"
          as={Card.Header} 
          eventKey="0"
          onClick={ () => this.setState({ isOpen: !isOpen }) }
        >
          <FontAwesomeIcon rotation={ isOpen ? 90 : undefined } icon="chevron-right" />
          <label className="ml-2 mb-0">
            { label }
          </label>
        </Accordion.Toggle>

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

export default TreeFatherReactive;