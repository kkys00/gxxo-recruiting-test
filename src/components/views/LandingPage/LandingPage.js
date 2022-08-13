import React, { Component } from 'react'
import axios from 'axios';
import "./LandingPage.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


{/* 이화이언 소개 */}
let tableContent = [
  {
    title: "다양한 프로그램 운영",
    content: `이화이언은 재학생들이 직접 운영하고 있는 '이화를 사랑하는 사람들을 위한' 비영리 집단입니다. 
        이화이언을 이용하는 벗들을 위한 다양한 프로그램을 운영하기 위해 활동하는 이화이언 운영진은, 마케팅팀,
        디자인팀, 웹개발팀으로 구성되어 있습니다.`,
  },
  {
    title: "이화 안의 더 큰 만남",
    content: `이화이언 온라인에서는 다양한 컨텐츠와 이벤트를 통해 이용자들에게 많은 혜택과 정보를 제공합니다. 
        이화이언은 탄생 이래 이화인들의 가장 많은 사랑을 받은 ‘비밀의 화원’부터, 다양한 기사가 올라오는 컨텐츠 카테고리, 
        이화에서 생활하기 위해 꼭 필요한 정보들이 가득한 캠퍼스 카테고리, 열린광장, 벼룩시장 등이 있는 라이프 카테고리까지! 
        처음 이화의 문을 열고 들어온 새내기, 이화의 베테랑이 된 정든내기, 졸업한 선배님까지 
        이화이언 안에서 ‘이화 안의 더 큰 만남’을 이루고 있습니다. `,
  },
  {
    title: "오프라인 이벤트",
    content: `또한, 이화이언은 온라인 뿐만 아니라 오프라인에서도 많은 활동들을 진행하고 있습니다. 
        다소 지칠 수 있는 학교 생활 속 이화이언이 각각 5월, 11월에 여는 오월드림과 배꽃정원은 
        화연들에게 매번 색다른 즐거움을 선사하고 있습니다.`,
  },
  {
    title: "소개",
    content: `이처럼 이화이언은 ‘이화를 사랑하는 사람들의 모임’으로 더 많은 이화인들이 함께할 수 있는 공간을 지향합니다. 
        이화를 사랑하는 사람이라면 누구든지 이화이언이라 할 수 있습니다. 
        이화를 위한 공간을 만들겠다는 처음 그 신념 그대로 이화인들의 더 활기차고 따뜻한 하루하루를 만들기 위해 최선을 다할 것입니다. 
        ‘이화 안의 더 큰 만남’, 이화이언에서 함께하세요!`,
  },
];

{/* 팀 소개 */}
let teamInfo = [
  {
    name: "마케팅팀",
    content1: "온/오프라인 행사 기획",
    content_1: "이벤트 아이디어 제안, 기획안 작성, 협찬 기업 컨택",
    content2: "이화이언 SNS 콘텐츠 제작",
    content_2:
      "SNS를 운영하며 행사 홍보, 정보 제공, 이화인 일상 등을 주제로 한 다채로운 콘텐츠 개발",
    content3: "제휴 이벤트 진행",
    content_3: "기업에 제휴 제안 후 컨택을 통해 세부사항 조율",
  },
  {
    name: "디자인팀",
    content1: "행사 홍보물 디자인",
    content_1: "5월, 11월 행사 포스터, 배너, 팝업, 굿즈, 웹페이지 등 제작",
    content2: "이화이언 콘텐츠 제작",
    content_2: "웹툰, 계절배너, 게시글 등 제작",
    content3: "디자인 툴 스터디",
    content_3: "Adobe Photoshop, Illustrator 등",
  },
  {
    name: "웹개발팀",
    content1: "행사 사이트 기획/개발",
    content_1:
      "마케팅팀, 디자인팀과 협업하여 행사에 필요한 웹페이지 배포 후 행사에 사용",
    content2: "이화이언 운영진 프로그램 제작",
    content_2: "리크루팅 사이트와 같은 이화이언 운영에 필요한 소프트웨어 개발",
    content3: "웹프로그래밍 언어 스터디",
    content_3: "HTML, CSS, JavaScript, Node.js, MYSQL, Bootstrap, React 등",
  },
];

{/* 지난 행사들 */}
const activities = [
  {
    title: "배꽃정원",
    des: "2021.11.15 ~ 2021.11.26",
    link: "http://www.ewhaian.com/Ewha_board/Ewha_View.asp?psize=1&page=1&es_idx=0&ct_idx=0&bm_idx=11&sfield=&bp_idx=2073922&orderby=0&startDt=2001-01-01&endDt=2022-01-24&sword_type=&inputTagList=&bordtype=&sword=&useSdate=&sword2=5707819",
  },
  {
    title: "이화이언 스무 번째 봄",
    des: "2021.05.17 ~ 2021.05.23",
    link: "http://www.ewhaian.com/Ewha_board/Ewha_View.asp?psize=1&page=1&es_idx=0&ct_idx=0&bm_idx=11&sfield=&bp_idx=2030159&orderby=0&startDt=2001-01-01&endDt=2021-08-23&sword_type=&inputTagList=&bordtype=&sword=&useSdate=&sword2=8384363",
  },
  {
    title: "배꽃정원",
    des: "2020.11.16 ~ 2020.11.22",
    link: "http://www.ewhaian.com/Ewha_board/Ewha_View.asp?psize=1&page=1&es_idx=0&ct_idx=0&bm_idx=11&sfield=&bp_idx=1953722&orderby=0&startDt=2001-01-01&endDt=2021-08-23&sword_type=&inputTagList=&bordtype=&sword=&useSdate=&sword2=6528086",
  },
  {
    title: "사이버캠퍼스",
    des: "2020.05.18 ~ 2020.05.29",
    link: "http://www.ewhaian.com/Ewha_board/Ewha_View.asp?psize=1&page=1&es_idx=0&ct_idx=0&bm_idx=11&sfield=&bp_idx=1896845&orderby=0&startDt=2001-01-01&endDt=2021-08-23&sword_type=&inputTagList=&bordtype=&sword=&useSdate=&sword2=4752711",
  },
  {
    img: "C:\Users\가영\Desktop\세븐틴.jpg",
    title: "배꽃정원",
    des: "2019.11.21",
    link: "http://www.ewhaian.com/Ewha_board/Ewha_View.asp?psize=1&page=1&es_idx=0&ct_idx=0&bm_idx=11&sfield=&bp_idx=1778635&orderby=0&startDt=2001-01-01&endDt=2021-08-25&sword_type=&inputTagList=&bordtype=&sword=&useSdate=&sword2=9369912",
  },
  {
    img: "img/세븐틴.jpg",
    title: "오월드림",
    des: "2019.05.23",
    link: "http://www.ewhaian.com/Ewha_board/Ewha_View.asp?psize=1&page=1&es_idx=0&ct_idx=0&bm_idx=11&sfield=&bp_idx=1720733&orderby=0&startDt=2001-01-01&endDt=2021-08-23&sword_type=&inputTagList=&bordtype=&sword=&useSdate=&sword2=9412045",
  },
  {
    title: "배꽃정원",
    des: "2018.11.29",
    link: "http://www.ewhaian.com/Ewha_board/Ewha_View.asp?psize=1&page=1&es_idx=0&ct_idx=0&bm_idx=11&sfield=&bp_idx=1628376&orderby=0&startDt=2001-01-01&endDt=2021-08-25&sword_type=&inputTagList=&bordtype=&sword=&useSdate=&sword2=8669192",
  },
  {
    title: "이화이언 생일파티",
    des: "2018.05.24",
    link: "http://www.ewhaian.com/Ewha_board/Ewha_View.asp?psize=1&page=1&es_idx=0&ct_idx=0&bm_idx=11&sfield=&bp_idx=1428124&orderby=0&startDt=2001-01-01&endDt=2021-08-25&sword_type=&inputTagList=&bordtype=&sword=&useSdate=&sword2=3445512",
  },
];



function LandingPage() {
  
  {/* react-slick으로 슬라이드 구현 */}
  function Slide() {
    function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ ...style, display: "block", background: "black" }}
          onClick={onClick}
        />
      );
    }
    
    function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ ...style, display: "block", background: "black" }}
          onClick={onClick}
        />
      );
    }
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            },
          },
        ],
      };
  return (
    <div>
      <Slider {...settings}>
        {activities.map((item, i) => {
          return (
            <div className="s_box">
              <div style={{ position: "relative", marginTop: "2rem" }}>
              <SamplePrevArrow />
              </div>
              <img src={process.env.PUBLIC_URL+"/img/교표.png"} style={{width:"150px"}}></img>
              <div className="s_title"><b>{activities[i].title}</b></div>
              <div className="s_des">{activities[i].des}</div>
              <div className="s_link"><a href={activities[i].link}>이벤트 스케치</a></div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}


  return (

    <div>
      <div class="nav">
        <div class="logo">
          이화이언
        </div>
        <div class="nav_but">
          <a href="">지원하기</a>
          <a href="">결과 확인</a>
          <a href="">메인으로</a>
        </div>

      </div>


      <div className="intro">이화이언 소개</div>
      <table className="table">
        {tableContent.map((list, i) => {
          return (
            <tr className="tr">
              <td className="title">{tableContent[i].title}</td>
              <td className="content">{tableContent[i].content}</td>
            </tr>
          );
        })}
      </table>
      


      <div className="intro">팀 소개</div>
      <div className="teamIntroduce">
        {teamInfo.map((list, i) => {
          return (
            <div className="teamContent">
              
              <div className="team-name">{teamInfo[i].name}</div>
              <br />
              <div className="teamlist" style={{ marginTop: "70px" }}>
                <div className="number">1</div>
                <div className="team-explanation">{teamInfo[i].content1}</div>
              </div>
              <div className="team-explanation_">{teamInfo[i].content_1}</div>
              <br />
              <div className="teamlist">
                <div className="number">2</div>
                <div className="team-explanation">{teamInfo[i].content2}</div>
              </div>
              <div className="team-explanation_">{teamInfo[i].content_2}</div>
              <br />
              <div className="teamlist">
                <div className="number">3</div>
                <div className="team-explanation">{teamInfo[i].content3}</div>
              </div>
              <div className="team-explanation_">{teamInfo[i].content_3}</div>
            </div>
          );
        })}
      </div>
      <br />
      <br />
      <div className="intro">지난 행사들</div>
        <div>{Slide()}</div>
    </div>
    
    
    
  )
}


export default LandingPage

