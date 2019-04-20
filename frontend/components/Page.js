import React, { Component } from 'react';
import Header from '../components/Header';
import Meta from './Meta';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';

const theme = {
	onyx: '#3A2E39',
	tangelo: '#FCB07E',
	grey: '#3A3A3A',
	bistre: '#472C1B',
	lightGrey: '#E1E1E1',
	offWhite: '#EDEDED',
	maxWidth: '1000px',
	bs: '0 12px 24px 0 rgba(0,0,0,0.09)'
};

const StyledPage = styled.div`
	font-weight: 400;
`;

const Inner = styled.div`
	max-width: 1000px;
	margin: 0 auto;
	padding: 2rem;
`;

//Global Stylings
injectGlobal`

@font-face {
	font-family:'AlegreyaSans' ;
	src: url('/static/') format('TTF');
	font-style:normal;
}

html{
box-sizing:border-box;
font-size:10px;
}

*, *:before,*:after {
	box-sizing:inherit;
}

body{
	padding:0;
	margin:0;
	font-size:1.5em;
	line-height:2;
    font-family:'AlegreyaSans'
}

a{
	text-decoration:none;
	color:${theme.bistre};
}

`;

class Page extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<StyledPage>
					<Meta />
					<Header />
					<Inner>{this.props.children}</Inner>
				</StyledPage>
			</ThemeProvider>
		);
	}
}

export default Page;
