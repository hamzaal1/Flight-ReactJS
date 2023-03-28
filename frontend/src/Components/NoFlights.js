import React from 'react';
// import "./scss/_Error.css"
import { BsFillExclamationCircleFill } from "react-icons/bs";
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <button
      type="button"
      className='btn btn-danger'
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

export default function NoFlights() {
  return (
    <div className='body'>
      <div>
        <section className="py-5">
          <div className="container section-reseravtion ">
            <h4><BsFillExclamationCircleFill size={40} /> Une erreur est survenue</h4>
            <li>Nous n'avons pas trouvé de résultats pour les vols recherchés. Veuillez modifier vos dates de vol.</li>
          </div>
          <div>
            <Accordion defaultActiveKey="0" className='colapse' >
              <Card >
                <div className='btnCol my-3'>
                  <CustomToggle eventKey="0">Modif</CustomToggle>
                </div>
                <Accordion.Collapse eventKey="0" >
                  <Card.Body >
                    <div className='mt-4 inptCol pb-3'>
                      <input className='me-5' type="text" placeholder='Depart' onFocus={(e) => e.target.type = "date"} onBlur={(e) => e.target.type = "text"} required />
                      <input type="text" placeholder='Retour' onFocus={(e) => e.target.type = "date"} onBlur={(e) => e.target.type = "text"} required />
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </section>
      </div>
    </div>
  )
}
