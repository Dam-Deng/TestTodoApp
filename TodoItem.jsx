class TodoItem extends React.Component {
    constructor(props, context, updater) {
        super(props, context, updater);
        this.state = {editable: false};
        this.toggleEditMode = this.toggleEditMode.bind(this);
        this.handelKeyDown =this.handelKeyDown.bind(this);
    }

    handelKeyDown(e) {
        const {onKeyDown, onUpdate} = this.props;
        const {value} = e.target;
        switch (e.keyCode) {
            case 13:
                if (value.trim()) {
                    onUpdate && onUpdate(value)
                }
                this.toggleEditMode();
                break;

            case 27:
                e.preventDefault();
                this.toggleEditMode();
                break;
        }

        onKeyDown && onKeyDown(e);
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
        const {title} = this.props;
        return (
            <input
                autoFocus
                placeholder="編輯待辦事項"
                defaultValue={title}
                onBlur={this.toggleEditMode}
                onDoubleClick={this.toggleEditMode}
                onChange={()=> {
                }}
                onKeyDown={this.handelKeyDown}
            />
        );
    }


    render() {
        return this.state.editable ? this.renderEditMode() : this.renderViewMode();

    }
}

window.App.TodoItem = TodoItem;
