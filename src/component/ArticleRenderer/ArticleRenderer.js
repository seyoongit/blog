import React, { Component } from 'react';
import { Container, Segment, Image, TextArea, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Quote from './Quote';
import Skill from './Skill';
import SubHeader from './SubHeader';
import './css/ArticleRenderer.css';

class ArticleRenderer extends Component {
    parseParagraph = (plain, mobile=false) => {
        plain = plain.trim(); 
        if (plain.startsWith("<Image>")) {
            const [, src, href] = plain.split("<Image>")
            return <Image src={src} href={href} rounded fluid />
        }
        if (plain.startsWith("<Quote>")) {
            const [, content, color] = plain.split("<Quote>")
            return <Quote content={content} color={color} mobile={mobile} />
        }
        if (plain.startsWith("<a>")) {
            const [, content, href] = plain.split("<a>")
            return <a href={href}>{content}</a>
        }
        if (plain.startsWith("<Link>")) { // 내부링크
            const [, content, postId] = plain.split("<Link>")
            const { postFetchRequest } = this.props.ArticleRendererDispatch
            return <Link to={`/${postId}`} onClick={() => postFetchRequest(postId)} >{content}</Link>
        }
        if (plain.startsWith("<Skill>")) {
            const [, src, content, gray] = plain.split("<Skill>")
            return <Skill src={src} content={content} gray={gray} mobile={mobile} />
        }
        if (plain.startsWith("<SubHeader>")) {
            const [, content, icon] = plain.split("<SubHeader>")
            return <SubHeader content={content} icon={icon} mobile={mobile} />
        }
        return <p>{plain + " "}</p> // innerText 가 띄어쓰기 문자 한개라도 있어야 p 태그가 자리를 차지한다. innerText가 빈 문자열이면 안됨
    }
    render() {
        const { post, mobile=false } = this.props;
        const parsed = post.content.split("<br>").map(plain => this.parseParagraph(plain, mobile))

        return (
            <Container className='ArticleRenderer'>
                {mobile
                    ? parsed
                    : <Segment>{parsed}</Segment>
                }
            </Container>
        )
    }
};

export default ArticleRenderer