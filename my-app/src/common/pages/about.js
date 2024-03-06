import React from 'react';
import Container from 'react-bootstrap/Container';
import SkillList from './SkillList';
const about = () => {
  return (
    <section className="bg-body-tertiary pb-5" id="about">
      <Container>
        <h2 className="py-4 mb-3 text-center display-4">自己紹介</h2>
        <div className="text-center">
          <img src="img/dummy.png" alt="画像を挿入" className="mb-3" />
        </div>
        <div className="justify-content-end">
          <p className="text-justify col-md-6 ms-auto me-auto">
            2023年11月より、中央キャリアアップアカデミーのwebプログラミングコースにてHTML、CSS、Javascriptを学習し、web開発者への転職を目標としています。
          </p>
          <SkillList />
        </div>
      </Container>
    </section>
  );
};

export default about;
