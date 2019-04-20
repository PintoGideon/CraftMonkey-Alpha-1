import ItemComponent from '../components/Item';
import { shallow } from 'enzyme';

const fakeItem = {
	id: '1',
	title: 'Basic Tee',
	price: 'This item is trending',
	image: 'dog.jpg',
	largeImage: 'LargeDog.jpg'
};

describe('<Item/>', () => {
	it('renders and displays properly', () => {
		const wrapper = shallow(<ItemComponent item={fakeItem} />);
		console.log(wrapper);
	});
});
