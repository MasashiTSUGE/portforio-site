import React from 'react';
import Container from 'react-bootstrap/Container';
import SkillList from './SkillList';
const about = () => {
  return (
    <section className="bg-body-tertiary pb-5" id="about">
      <Container>
        <h2 className="py-4 mb-3 text-center display-4">自己紹介</h2>
        <div className="text-center">
          <img
            src="img/myphoto.jpg"
            alt="自分の画像を挿入"
            className="mb-3 rounded-circle border border-3 col-4 col-md-2 ms-auto me-auto"
            style={{ width: '200px', height: '200px' }}
          />
        </div>
        <div className="justify-content-end">
          <p className=" col-md-4 ms-auto me-auto text-justify" style={{ textAlign: 'justify' }}>
            2023年11月より、中央キャリアアップアカデミーのwebプログラミングコースにてHTML、CSS、Javascriptを学習し、web開発者への転職を目標としています。
          </p>
          <SkillList />
        </div>
      </Container>
    </section>
  );
};

export default about;
