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
        return (
            <input
                {...this.props}
                name="item"
                onKeyDown={this.handelKeyDown}
            />
        )
    }
}
window.App.InputField = InputField;
