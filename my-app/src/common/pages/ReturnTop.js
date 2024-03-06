import React from 'react';
import { useState, useEffect } from 'react';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import { Button } from 'react-bootstrap';

const ReturnTop = () => {
  const GoTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const [ShowButton, setShowButton] = useState(false);
  const ShowBorder = window.innerHeight / 3;
  const ChangeShow = () => {
    const WindowPos = window.scrollY;
    WindowPos > ShowBorder ? setShowButton(true) : setShowButton(false);
  };
  useEffect(() => {
    window.addEventListener('scroll', ChangeShow);
  });
  return (
    <>
      {ShowButton && (
        <Button variant="outline-primary" className="position-fixed" onClick={GoTop} style={{ bottom: '3rem', right: '1rem' }}>
          トップへ戻る
          <span className="ps-2">
            <FaArrowAltCircleUp size="1.5rem" />
          </span>
        </Button>
      )}
    </>
  );
};

export default ReturnTop;
