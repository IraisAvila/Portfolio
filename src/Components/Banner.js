import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../img/banner.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const toRotate = [ "creative", "a gamer", "an avid baker", "a Star Wars fan","a Software Developer"];
    const period = 2000;

    useEffect(() => {
        
        let ticker = setInterval(() => {
          tick();
        },delta)

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        
        setText(updatedText);

        if (isDeleting) {
          setDelta(prevDelta => prevDelta / 2);
        }
    
        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setDelta(period);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setDelta(500);
        } else {
        }
      }
    return (
        <section className="banner" id="home">
            <Container>
               <Row className="align-items-center">
                   <Col xs={12} md={6} xl={7}>
                       <span className="tagline"> Welcome, I'm glad you're here!</span>
                       <h1>{"I'm Irais and I'm "}<span className="wrap">{text}</span></h1>
                       <p> Hello here will go my about me and other things blah blah blah more details and what not! :D</p>
                       <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25}/></button>
                   </Col>
                   <Col xs={12} md={6} xl={5}>
                       <img src={headerImg} alt="Header Img"/>
                   </Col>
                   </Row> 
            </Container>
        </section>
    )
}