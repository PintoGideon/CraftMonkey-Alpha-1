import SigninWrapper from '../components/SigninWrapper';
import Order from '../components/Order';

const OrderPage = props => (
	<div>
		<SigninWrapper>
			<Order id={props.query.id} />
		</SigninWrapper>
	</div>
);

export default OrderPage;
