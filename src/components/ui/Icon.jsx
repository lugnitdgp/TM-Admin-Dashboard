import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";

export default function CircleIcon(props) {
    return (
        <div
            className="rounded-full align-middle text-center bg-white p-2"
            style={{ backgroundColor: props.color }}
        >
            <FontAwesomeIcon icon={props.icon} className="text-lg text-white" />
        </div>
    );
}

CircleIcon.propTypes = {
  color: PropTypes.string.isRequired,
  icon: PropTypes.oneOf([faShoppingCart, faUser]).isRequired,
};
