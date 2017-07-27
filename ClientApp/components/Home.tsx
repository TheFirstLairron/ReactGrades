import * as React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component<{}, {}> {
    public render() {
        return (
            <div>Hello from react</div>
        );
    }
}

export default connect(null, null)(Home);
