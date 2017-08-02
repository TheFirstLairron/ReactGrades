import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as _ from 'lodash';

import { GetCourses } from '../actions/actions';
import Course from '../models/course';

interface IHomeProp {
    courses: Course[]
    GetCourses: () => any;
}

class ClassList extends React.Component<IHomeProp, {}> {
    public render() {
        if (!this.props.courses) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <ul className="list-group">
                    {this.RenderList()}
                </ul>
            </div>
        );
    }

    public RenderList() {
        return _.map(this.props.courses, course => {
            return <li key={course.id} className="list-group-item clearfix">
                {course.name}
                <Link to={`/courses/${course.id}`} className="btn btn-primary pull-right">View Class</Link>

            </li>
        });
    }

    public componentDidMount() {
        this.props.GetCourses();
    }
}

function mapStateToProps({ courses }) {
    return {
        courses
    };
}

export default connect(mapStateToProps, { GetCourses })(ClassList);
