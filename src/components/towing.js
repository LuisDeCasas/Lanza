import * as React from "react";
import {Row, Button, Collapse} from "react-bootstrap";

const Towing = () => {

    const [open, setOpen] = React.useState("");

    const clickHandle = ({target}) => {
        setOpen(open === target.name ? "" : target.name);
    }

    return (
        <Row className="towing">
            <div className="col-12 text-center">
            <h2>TOWING KNOWLEDGE</h2>
            <h3>FIRST TIME NEEDING A TOW?</h3>
            <p>READ COMMONLY ASKED QUESTIONS FOR FIRST TIMERS</p>
            </div>
            <div className="col-12 card px-0">
                <Button
                    name="collapse-1"
                    onClick={clickHandle}
                    aria-controls="collapse-text"
                    aria-expanded={open}
                    className={`${open === "collapse-1" && "active"} card-header`}
                > How much will the towing service cost?
                </Button>
                <Collapse in={open === "collapse-1"}>
                    <div id="example-collapse-text">
                        <p className="p-3 m-0">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                            labore wes anderson cred nesciunt sapiente ea proident.
                        </p>
                    </div>
                </Collapse>
            </div>
            <div class="col-12 card px-0">
                <Button
                    name="collapse-2"
                    onClick={clickHandle}
                    aria-controls="collapse-text"
                    aria-expanded={open}
                    className={`${open === "collapse-2" && "active"} card-header`}
                > I have an insurance policy, can I still have you tow my car?
                </Button>
                <Collapse in={open === "collapse-2"}>
                    <div id="example-collapse-text">
                        <p className="p-3 m-0">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                            labore wes anderson cred nesciunt sapiente ea proident.
                        </p>
                    </div>
                </Collapse>
            </div>
            <div className="col-12 card px-0">
                <Button
                    name="collapse-3"
                    onClick={clickHandle}
                    aria-controls="collapse-text"
                    aria-expanded={open}
                    className={`${open === "collapse-3" && "active"} card-header`}
                > How fast can your tow truck arrive at my location?
                </Button>
                <Collapse in={open === "collapse-3"}>
                    <div id="example-collapse-text">
                        <p className="p-3 m-0">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                            labore wes anderson cred nesciunt sapiente ea proident.
                        </p>
                    </div>
                </Collapse>
            </div>
        </Row>
    );
}

export default Towing;