import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { FaGithub } from 'react-icons/fa';
import { EnvelopeAt } from 'react-bootstrap-icons';
import { useState } from 'react';
const Hero = () => {
  const textBlur =
    window.innerWidth > 1000
      ? { background: 'transparent' }
      : {
          background:
            ' linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.6) 90%, rgba(255,255,255,0) 100%)',
        };
  const [Blur, setBlur] = useState(textBlur);
  useEffect(() => {
    const changeBlur = () => {
      if (window.innerWidth > 1000) {
        setBlur({ background: 'transparent' });
      } else {
        setBlur({
          background:
            ' linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.6) 90%, rgba(255,255,255,0) 100%)',
        });
      }
    };
    window.addEventListener('resize', changeBlur);
    return () => {
      window.removeEventListener('resize', changeBlur);
    };
  }, []);

  return (
    <section style={{ background: 'url(img/bghero.jpg) right/cover no-repeat' }} id="top">
      <div style={Blur}>
        <Container className="d-flex vh-100 justify-content-end">
          <div className=" col-md-11 h-100 ">
            <div className="d-flex h-50 align-items-end">
              <h1 className="mb-4 display-1">柘植雅志</h1>
            </div>
            <h2>ポートフォリオwebサイトへようこそ</h2>
            <p className="pb-4 text-align-justify col-md-8 mb-0">
              柘植雅志のポートフォリオwebサイトです。
              <br className="d-none d-md-inline" />
              ここは、私の自己紹介と制作物の紹介をするwebサイトになります。
              <br className="d-none d-md-inline" />
              このサイトは、react及び、bootstrapを用いて製作されています。
              <br className="d-none d-md-inline" />
              当サイトのソースコードは、制作物の一環として
              <a href="https://github.com/MasashiTSUGE/portforio-site" target="_blank" rel="noopener noreferrer" className="px-1">
                <FaGithub />
                Github上で公開しています
              </a>
              <br className="d-none d-md-inline" />
              私への連絡がありましたら、お手数ですが
              <a href="mailto:zhezhiyazhi@gmail.com" className="px-1">
                <EnvelopeAt />
                zhezhiyazhi@gmail.com
              </a>
              までメールをお願いいたします
            </p>
          </div>
        </Container>
      </div>
      <div style={{ height: '80px', background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(248,249,250,0.5) 100%)' }}></div>
    </section>
  );
};

export default Hero;
