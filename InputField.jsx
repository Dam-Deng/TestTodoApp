class InputField extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = { value: props.value || '' };
        this.handelKeyDown = this.handelKeyDown.bind(this);
        this.handelChange = this.handelChange.bind(this);
    }

    handelChange(e) {
        this.setState({ value: e.target.value });
    }


    handelKeyDown(e) {
        const {onKeyDown, onSubmitEditing} = this.props;
        const {value} = e.target;
        switch (e.keyCode) {
            case 13:
                if (value.trim()) {
                    onSubmitEditing && onSubmitEditing(value)
                }
                this.setState({value: ''});
                break;
        }

        onKeyDown && onKeyDown(e);
    }

    render() {
        const {placeholder} = this.props;
        return (
            <input
                placeholder={placeholder}
                name="item"
                value={this.state.value}
                onChange={this.handelChange}
                onKeyDown={this.handelKeyDown}
            />
        )
    }
}
window.App.InputField = InputField;
