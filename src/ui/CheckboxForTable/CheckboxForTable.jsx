import './CheckboxForTable.css';

const CheckboxFortable = ({ onClick, defaultChecked }) => {
    return (
        <div className="checkbox">
            <label className="checkbox__label">
                <input className="checkbox__input" type="checkbox" name="checkbox" defaultChecked={defaultChecked} onChange={onClick} />
                <span className="checkbox__switch"></span>
            </label>
        </div>
    );
};

export default CheckboxFortable;
