import React from "react";
import { ListGroup } from "react-bootstrap";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPhp } from "react-icons/fa6";
const SkillList = () => {
    const mySkills = [
        {
            icon: <FaHtml5 />,
            language: "HTML",
            paragraph:
                "HTML Living Standardに準拠した構造のHTMLを記述することができます",
        },
        {
            icon: <FaCss3Alt />,
            language: "CSS3",
            paragraph:
                "htmlのクラス設計から始め、保守性と拡張性を備えたCSSのコーディングが可能です",
        },
        {
            icon: <IoLogoJavascript />,
            language: "javascript",
            paragraph:
                "javascriptやjavascriptフレームワークを使用し、動的なwebサイトを表現することが可能です",
        },
        {
            icon: <FaReact />,
            language: "React",
            paragraph:
                "jsx記法を使ってReactを利用し、webサイトの要素をコンポーネント化し構築することができます",
        },
        {
            icon: <FaPhp />,
            language: "PHP",
            paragraph:
                "PHPを利用し、簡単なサーバサイドでの処理やデータベースへのアクセスが可能です",
        },
    ];
    return (
        <>
            <h3 className='mb-3 p-4'>習得技術</h3>
            <ListGroup
                variant='flush'
                style={{ boxShadow: "5px 5px 0px rgba(0,0,0,0.5)" }}
            >
                {mySkills.map((item, index) => (
                    <ListGroup.Item key={index}>
                        <h4 className='py-2'>
                            <span className='mx-2'>{item.icon}</span>
                            <span
                                className='pe-1'
                                style={{
                                    background:
                                        "linear-gradient(transparent 70%, rgba(200,200,200,0.5) 30%)",
                                }}
                            >
                                {item.language}
                            </span>
                        </h4>
                        <p>{item.paragraph}</p>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </>
    );
};

export default SkillList;
