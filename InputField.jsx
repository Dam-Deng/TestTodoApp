class InputField extends React.Component {
    render() {
        const {placeholder} = this.props;
        return (
            <input placeholder={placeholder} name="item"/>
        )
    }
}
window.App.InputField = InputField;
