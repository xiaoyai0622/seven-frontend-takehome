/**
 * Created by xiaoY on 2/9/18.
 */
import styled from 'styled-components';
import React, { Component } from 'react';

const mainColor = 'indianred';

const Background = styled.img`
  flex-grow: 1;
  width: 300px;
  height: 250px;
  padding: 5px;
  margin: 15px;
  border: 1px solid ${mainColor};
  border-radius: 8px;
`;



class Thumbnail extends Component {
	render() {
		return (
			<div>
				<Background> something interesting</Background>
			</div>
		);
	}
}



export default Thumbnail;