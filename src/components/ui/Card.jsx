import PropTypes from 'prop-types';
import CircleIcon from '../ui/Icon';
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";


function Card(props) {
  return (
    <div className="flex md:w-80 h-32 items-center justify-around lg:w-[26vw] rounded-lg bg-slate-100 border border-1 border-gray-400 overflow-hidden dark:bg-slate-600">
      <div className="md:w-14 pl-4">
      <CircleIcon icon={props.icon} color={props.color} />
      </div>
      <div className="flex w-[10vw] flex-col justify-between pb-2">
        <div className="text-slate-600 dark:text-slate-50">{props.content}</div>
        <div className="text-slate-800 dark:text-slate-200 text-3xl">{props.value}</div>
      </div>
      <div className="flex pt-2">
        <img src={props.stats} alt="stats" className="h-12 w-[12vw]" />
      </div>
    </div>
  );
}

Card.propTypes = {
  icon: PropTypes.oneOf([faShoppingCart, faUser]).isRequired,
  color: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  stats: PropTypes.string.isRequired,
};

export default Card;
