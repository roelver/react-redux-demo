import React, {Component} from 'react';

class Child extends Component {

    render () {
        const remark = preferredGreeting === this.props.greeting ? '' : <p>While I preferred {preferredGreeting}</p>
        return (
            <div className="child">
                <h3>{this.props.greeting}</h3>
                { remark }
                <div className="button-panel">
                    <button onClick={() => this.props.decrease(1)}>-</button>
                    <button onClick={() => this.props.increase(1)}>+</button>
                </div>
            </div>
        );
    }
}
export const preferredGreeting = 'Hi';

export default Child;