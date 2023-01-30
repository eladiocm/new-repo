import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./SimpleAcordion.scss";
// import video from "../../../img/video.mp4";

export default function SimpleAccordion({ setStateView }) {
    React.useEffect(() => {
        setStateView(3);
    }, []);
    return (
        <div style={{ marginTop: "22px" }}>
            <Accordion disableGutters>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    {/* <Typography>Accordion 1</Typography> */}
                    <div className="ac-title">
                        <div className="ac-title-1">
                            <b>Folio: 11205</b>
                            <span>26/02/22 09:32:03</span>
                            <span>Tiempo: 06:03:00</span>
                        </div>
                        <p>
                            <b>Descripción:</b> Nueva emergencia desde el
                            Android de Mayme Alvarez
                        </p>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    {/* <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                    </Typography> */}
                    <div className="ac-content-video">
                        <p className="video-title">Trasmición en vivo</p>
                        <div className="ac-video">
                            <div class="video-content"></div>
                            {/* <video
                                src="https://www.dropbox.com/s/lic8mucy61nqzku/VideoMuestra.mp4?dl=0"
                                controls
                            ></video> */}
                            {/* <video width="320" height="240" controls>
                                <source src={video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video> */}
                        </div>
                        <p className="video-time">4:49 p.m.</p>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion disableGutters>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    {/* <Typography>Accordion 1</Typography> */}
                    <div className="ac-title">
                        <div className="ac-title-1">
                            <b>Folio: 11205</b>
                            <span>26/02/22 09:32:03</span>
                            <span>Tiempo: 06:03:00</span>
                        </div>
                        <p>
                            <b>Descripción:</b> Nueva emergencia desde el
                            Android de Mayme Alvarez
                        </p>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    {/* <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                    </Typography> */}
                    <div className="ac-video"></div>
                </AccordionDetails>
            </Accordion>
            <Accordion disableGutters>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    {/* <Typography>Accordion 1</Typography> */}
                    <div className="ac-title">
                        <div className="ac-title-1">
                            <b>Folio: 11205</b>
                            <span>26/02/22 09:32:03</span>
                            <span>Tiempo: 06:03:00</span>
                        </div>
                        <p>
                            <b>Descripción:</b> Nueva emergencia desde el
                            Android de Mayme Alvarez
                        </p>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    {/* <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                    </Typography> */}
                    <div className="ac-video"></div>
                </AccordionDetails>
            </Accordion>
            <Accordion disableGutters>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    {/* <Typography>Accordion 1</Typography> */}
                    <div className="ac-title">
                        <div className="ac-title-1">
                            <b>Folio: 11205</b>
                            <span>26/02/22 09:32:03</span>
                            <span>Tiempo: 06:03:00</span>
                        </div>
                        <p>
                            <b>Descripción:</b> Nueva emergencia desde el
                            Android de Mayme Alvarez
                        </p>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    {/* <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                    </Typography> */}
                    <div className="ac-video"></div>
                </AccordionDetails>
            </Accordion>
            <Accordion disableGutters>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    {/* <Typography>Accordion 1</Typography> */}
                    <div className="ac-title">
                        <div className="ac-title-1">
                            <b>Folio: 11205</b>
                            <span>26/02/22 09:32:03</span>
                            <span>Tiempo: 06:03:00</span>
                        </div>
                        <p>
                            <b>Descripción:</b> Nueva emergencia desde el
                            Android de Mayme Alvarez
                        </p>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    {/* <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                    </Typography> */}
                    <div className="ac-video"></div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
