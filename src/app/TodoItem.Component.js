import React from "react";


class TodoItem extends React.Component {
    render() {
        return (
            <li>
                {this.props.item.item}
            </li>
        )
    }
}

export default TodoItem;