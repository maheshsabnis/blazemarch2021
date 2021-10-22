// shallow: will render and mount the spcific component and test
// it w/o its hildren
// configure: used to attach or establish bridge between Enzyme and React  
import Enzyme, { shallow, configure, mount  } from "enzyme";
// Adapter is an object that map enzyme with React DOM
import Adapter from 'enzyme-adapter-react-16';
// React + Enzyme Mapping
configure({
    adapter: new Adapter()
});

// export so that test file can import
export {shallow,mount};

export default Enzyme;
