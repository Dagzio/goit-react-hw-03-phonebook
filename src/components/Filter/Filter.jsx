import { Input} from "./Filter.styled";
import PropTypes from 'prop-types';

const Filter = ({ onChange, value }) => {
    return <label>
        Find contacts by name <br/>
        <Input type="text" name="name" onChange={onChange} value={ value} />
    </label>
       
};

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string
}

export default Filter;