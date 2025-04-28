import './icon-switch.css';

function IconSwitch({ icon, onSwitch }) {
  return (
    <button
      className={'store__btn material-icons'}
      onClick={onSwitch}>
      {icon}
    </button>
  )
}

export default IconSwitch;