class InputField extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.handelKeyDown = this.handelKeyDown.bind(this);
    }

    handelKeyDown(e) {
        const {onKeyDown, onSubmitEditing} = this.props;
        const {value} = e.target;
        switch (e.keyCode) {
            case 13:
                if (value.trim()) {
                    onSubmitEditing && onSubmitEditing(value)
                }

                e.target.value = '';
                break;
        }

        onKeyDown && onKeyDown(e);
    }

    render() {
        const {onSubmitEditing, ...otherProps} = this.props;
        return (
            <input
                {...otherProps}
                name="item"
                onKeyDown={this.handelKeyDown}
            />
        )
    }
}

InputField.propTypes = {
    onSubmitEditing: React.PropTypes.func
};

window.App.InputField = InputField;
