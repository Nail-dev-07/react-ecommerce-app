import './Button.css';
function Button({text, onClick, type="button"}) {
    return (
        <button className="global-button" onClick={onClick} type={type}>
            {text}
        </button>
    );
};

export default Button;