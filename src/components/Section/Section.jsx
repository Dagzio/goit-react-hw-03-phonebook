import { SectionTitle } from "./Section.styled";
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
    return <div>
        <SectionTitle>{title}</SectionTitle>
        {children}
    </div>
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Section;