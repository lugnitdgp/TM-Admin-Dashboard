import PropTypes from 'prop-types';

export default function Container(props) {
  return (
    <div className="flex flex-col rounded-xl items-center justify-center border border-1 border-gray-400 ">
      <div className="text-center font-bold pt-2 bg-slate-200 dark:bg-slate-500 dark:text-slate-100 w-full h-10 rounded-t-lg">
            {props.heading}
      </div>
      <div className="p-8 dark:bg-slate-600 bg-slate-50 dark:text-slate-50 w-full min-h-80 rounded-b-lg">
            {props.component}
      </div>
    </div>
  );
}

Container.propTypes = {
    heading: PropTypes.string.isRequired,
    component: PropTypes.any.isRequired,
    
}
