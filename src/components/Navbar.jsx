import { initialData } from '../data';
import Button from './ui/Button';

export default function Navbar({ list, showList, onShowList, onDeleteList }) {
  const progress = list.length === 0 ? 0 : (list.length / initialData.length) * 100;
  const isThereList = list.length > 0;
  return (
    <nav>
      <div className='navbar'>
        <h1>Occurrence Tracker</h1>
        <p className='progress'>Progress: {Number(progress.toFixed(2))}%</p>
      </div>
      <div className='navbar-btns'>
        <Button
          className={isThereList ? 'btn-nav' : 'btn-disabled'}
          disabled={isThereList ? false : true}
          onClick={onShowList}
        >
          {showList ? 'Close' : 'Show'}
        </Button>
        <Button
          className={isThereList ? 'btn-nav' : 'btn-disabled'}
          disabled={isThereList ? false : true}
          onClick={onDeleteList}
        >
          Delete
        </Button>
      </div>
    </nav>
  );
}
