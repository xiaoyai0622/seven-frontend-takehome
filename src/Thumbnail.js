/**
 * Created by xiaoY on 2/9/18.
 */
import styled from 'styled-components';
import React, { Component } from 'react';
import backgroundImg from './assets/background.jpg';

// several components to render the seven box

const Background = styled.div`
	width: 500px;
  height: 280px;
  margin: 2.5%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: url(${backgroundImg}); 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  @media (max-width: 500px) {
    width: 95%;
    height: 50vw;
  }
`;

const BottomWrapper =  styled.div`
	height: 70px;
	display: flex;
	flex-direction: row;
  justify-content: start;
  background-color: rgba(0,0,0,0.5); 
  align-items: center;
`

const Logo = styled.img`
	height: 45px;
	width: 45px;
	margin: 10px; 
`;

const Title = styled.h2`
	color: white;
`;


class Thumbnail extends Component {

	render() {
		return (
			<Background>
				<BottomWrapper>
					<Logo src={require('./assets/logo.png')}/>
					<Title>Home and Away</Title>
				</BottomWrapper>
			</Background>
		);
	}
}



export default Thumbnail;