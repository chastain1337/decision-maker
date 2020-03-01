import React, { useState } from "react";
import { Figure, Button, Accordion, Card } from "react-bootstrap";

function Help() {
  return (
    <Accordion className="text-center">
      <div>
        <Accordion.Toggle as={Button} size="sm" eventKey="0" variant="link">
          Help ↓
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body className="text-left small">
            <Card className="px-md-2 py-md-5 p-2 float-md-right ml-md-2 bg-light rounded-lg">
              <blockquote className="mb-0">
                "What do you want to do today?"
                <br />
                "I don't know, what do you want to do today?"
                <footer class="blockquote-footer">
                  <cite title="Source Title">
                    SpongeBob SquarePants, S2E27b, "Life of Crime"
                  </cite>
                </footer>
              </blockquote>
            </Card>
            <span className="h4 font-weight-bold">
              Everybody likes doing stuff.
            </span>
            <span className="text-justify">
              <p className="h6 text-muted ">
                Few people like deciding what to do.
              </p>
              <p>
                In large groups of people it can be hard to make decisions,
                especially when everyone is just <i>so</i> considerate. The
                reality is, when making decisions everyone has a certain{" "}
                <b>independent desire</b>: a level of want that does not
                consider anyone else. Sometimes this is a lot, sometimes it's a
                little.
              </p>
              <p>
                Most people, though, also have a level of{" "}
                <b>dependent desire</b>. That is to say, they only want to do
                something to the extent that those they are with also want to do
                it.
                <i>"Yeah, I'll go if you go."</i>
              </p>
              <p>
                This app uses an advanced formula to factor those desires
                together into a score. Follow these steps.
              </p>
            </span>
            <ol className="border border-dark rounded-lg bg-light pr-4">
              <li>Add as many people as you want.</li>
              <li>
                "i" is your Independent Desire. Enter a number between -5 and 5,
                consider:
                <ul>
                  <li>-5: "I would never do this by myself."</li>
                  <li>
                    0: "I probably wouldn't go out of my way to do this, but
                    wouldn't be upset if I ended up there."
                  </li>
                  <li>5: "I would do this by myself."</li>
                </ul>
              </li>
              <li>
                "d" is the "Dependency Factor". Enter a decimal between 0 and 1,
                consider:
                <ul>
                  <li>
                    0: "I don't care whether you want to or not, I will drag us
                    all there."
                  </li>
                  <li>
                    .5: "I'd like to do this, but I understand my opinion is not
                    the only one that matters."
                  </li>
                  <li>
                    1: "I really have no opinion. My desire is completely based
                    on yours."
                  </li>
                </ul>
              </li>
              <li>
                Click "Calculate" and the app will average everyone's indepenent
                desire by everyone else's dependency factor. If your score is
                between -5 and -1, you shouldn't do it. If it's between 1 and 5,
                you should. Between -1 and 1, and it's just too close to call.
              </li>
            </ol>
          </Card.Body>
        </Accordion.Collapse>
      </div>
    </Accordion>
  );
  {
    /*
    return (
    <>
      <Container>
        <Row>
          <Col className="text-center">
            <Button onClick={handleShow} size="sm" variant="outline-light">
              Help
            </Button>
          </Col>
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>The Decision Maker App</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <div>
              Everyone likes doing things
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
    */
  }
}

export default Help;
