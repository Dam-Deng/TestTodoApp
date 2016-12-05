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
        const {title, completed, onDelete} = this.props;
        return (
            <div>
                <input type="checkbox" checked={completed} readOnly="readOnly"/>
                <span>{title}</span>
                <button onClick={()=> onDelete && onDelete()}>X</button>
            </div>
        );
    }

    renderEditMode() {
        return (
            <input
                autoFocus
                placeholder="編輯待辦事項"
                value={this.props.title}
                onBlur={this.toggleEditMode}
                onDoubleClick={this.toggleEditMode}
                onChange={()=>{}}
                onKeyDown={(e)=> {
                    if (e.keyCode === 27) {
                        e.preventDefault();
                        this.toggleEditMode();
                    }
                }}

            />
        );
    }


    render() {
        return this.state.editable ? this.renderEditMode() : this.renderViewMode();

    }
}

window.App.TodoItem = TodoItem;
