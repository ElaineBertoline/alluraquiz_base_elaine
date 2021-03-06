import React from 'react'
import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import Head from 'next/head';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  border-color: 5px solid #fff41F;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
  .tuLaX > *:first-child {
    margin-top: 0;
    color: #fff41F;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
    <Head>
      <title> Allura Quiz - Modelo Base</title>
    </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quiz da Galera</h1>

            <p>você sabe tudo de Programação? 
            <br/>Topa o desafio?</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/omariosouto" />
    </QuizBackground>
  );
}