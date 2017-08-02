import * as React from 'react';
import { connect } from 'react-redux';
import * as _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import { Link } from 'react-router-dom';

import { GetCourses } from '../actions/actions';
import Course from '../models/course';

interface DisplayCourseProps {
    course: Course
    GetCourses: () => any;
}

class DisplayCourse extends React.Component<DisplayCourseProps, {}> {
    public render() {
        if (!this.props.course) {
            return <div>Loading...</div>;
        }

        return <div>
            <Link to="/courses" className="pull-left">Back to list</Link><br />
            <div className="pull-left course-desc-area">
                <div>{this.props.course.name}</div>
                <div>{this.props.course.description}</div>
                <div className="average">Average GPA: {this.average(this.props.course.grades)}</div>
            </div>
            <div>
                {this.RenderGradeChart(this.props.course.grades)}
            </div>
        </div>;
    }

    public RenderGradeChart(numbers: number[]) {

        let graph = <div className="no-data-on-graph">There are no grades associated with this course</div>

        if(numbers.length > 0) {
            graph = (
                <Sparklines data={numbers} width={100} height={20}>
                    <SparklinesLine color="red" />
                    <SparklinesReferenceLine type="avg" />
                </Sparklines>
            );
        }

        return (
            <div className="pull-right graph">
                {graph}
            </div>
        );
    }

    public average(numbers: number[]) {
        if (numbers.length < 1) {
            return "No grades for this course";
        }

        return _.round(_.sum(numbers) / numbers.length, 3);
    }

    public componentDidMount() {
        this.props.GetCourses();
    }
}

function mapStateToProps({ courses }, ownProps) {
    return {
        course: courses[ownProps.match.params.id]
    };
}

export default connect(mapStateToProps, { GetCourses })(DisplayCourse);