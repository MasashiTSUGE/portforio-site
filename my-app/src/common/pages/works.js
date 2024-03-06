import React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import WorksSlide from './WorksSlide';
import Worksthumb from './Worksthumb';
import Data from '../resource/worksdata.json';

function Works() {
  const workdata = [...Data.worksdata].reverse();
  const [FocusCard, setFocusCard] = useState(workdata[0]);
  const [Fader, setFader] = useState(false);
  const FocusCardChange = (newFocus) => {
    if (newFocus !== FocusCard) {
      setFader(true);
      setTimeout(() => {
        setFocusCard(newFocus);
        setTimeout(() => {
          setFader(false);
        }, 150);
      }, 150);
    }
  };

  return (
    <section className="bg-body-tertiary" id="works">
      <Container className="py-4">
        <h2 className="mb-4 p-4">制作物紹介</h2>
        <div className="row vh-100 justify-content-between">
          <div className="col-lg-6 mh-100 overflow-auto">
            {workdata.map((data, index) => (
              <WorksSlide workdata={data} key={index} FocusCardChange={FocusCardChange} />
            ))}
          </div>
          <div className="vr p-0 me-2 d-none d-lg-inline-block" style={{ width: '1px' }}></div>
          <Container className="col-lg-6 d-none d-lg-flex row ">
            <Worksthumb thumbdata={FocusCard} Fader={Fader} />
          </Container>
        </div>
      </Container>
      <div className="bg-none" style={{ height: '80px' }}></div>
    </section>
  );
}

export default Works;
