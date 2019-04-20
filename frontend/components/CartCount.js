import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const AnimationStyles = styled.span`
	position: relative;
	.count {
		display: block;
		position: relative;
		transition: all 0.4s;
		backface-visibility: hidden;
	}

	.count-center {
		transform: scale(4) rotateX(0.5turn);
	}

	.count-enter-active {
		transform: rotateX(0);
	}

	.count-exit-active {
		transform: scale(4) rotateX(0.5turn);
	}
`;

const TotalCount = styled.div`
	background: ${props => props.theme.onyx};
	color: white;
	border-radius: 50%;
	padding: 0.5rem;
	line-height: 2rem;
	min-width: 3rem;
	font-weight: 100;
	font-feature-settings: 'tnum';
	font-variant-numeric: tabular-nums;
`;

const CartCount = ({ count }) => (
	<AnimationStyles>
		<TransitionGroup>
			<CSSTransition
				unmountonExit
				className="count"
				classNames="count"
				key={count}
				timeout={{ enter: 400, exit: 400 }}
			>
				<TotalCount>{count}</TotalCount>
			</CSSTransition>
		</TransitionGroup>
	</AnimationStyles>
);

export default CartCount;
