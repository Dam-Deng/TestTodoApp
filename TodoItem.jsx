const {InputField} = window.App;

class TodoItem extends React.Component {
    constructor(props, context, updater) {
        super(props, context, updater);
        this.state = {editable: false};
        this.toggleEditMode = this.toggleEditMode.bind(this);
    }

    toggleEditMode() {
        this.setState({editable: !this.state.editable});
    }

    renderViewMode() {
        const {title, completed, onDelete, onChange} = this.props;
        return (
            <div>
                <input
                    type="checkbox"
                    checked={completed}
                    readOnly="readOnly"
                    onChange={() => onChange && onChange(!completed)}
                />
                <span onDoubleClick={this.toggleEditMode}>{title}</span>
                <button onClick={()=> onDelete && onDelete()}>X</button>
            </div>
        );
    }

    renderEditMode() {
        const {title, onUpdate} = this.props;
        return (
            <InputField
                autoFocus
                placeholder="編輯待辦事項"
                value={title}
                onBlur={this.toggleEditMode}
                onDoubleClick={this.toggleEditMode}
                onChange={()=> {
                }}
                onKeyDown={(e)=> {
                    if (e.keyCode === 27) {
                        e.preventDefault();
                        this.toggleEditMode();
                    }
                }}
                onSubmitEditing={
                    (content) => {
                        onUpdate && onUpdate(content);
                        this.toggleEditMode();
                    }
                }

            />
        );
    }


    render() {
        return this.state.editable ? this.renderEditMode() : this.renderViewMode();

    }
}

TodoItem.propTypes = {
    title: React.PropTypes.string.isRequired,
    completed: React.PropTypes.bool.isRequired,
    onUpdate: React.PropTypes.func,
    onToggle: React.PropTypes.func,
    onDelete: React.PropTypes.func
};

window.App.TodoItem = TodoItem;
