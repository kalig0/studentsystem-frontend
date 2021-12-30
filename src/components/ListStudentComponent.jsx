import React, { Component } from 'react';
import StudentService from '../services/StudentService';
import UpdateStudentComponent from './UpdateStudentComponent';

class ListStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            students: []
        }

        this.addStudent = this.addStudent.bind(this);
        this.editStudent = this.editStudent.bind(this);
        this.deleteStudent = this.deleteStudent.bind(this);
    }

    deleteStudent(id) {
        StudentService.deleteStudent(id).then(res => {
            this.setState({students: this.state.students.filter(student => student.id !== id)});
        });
    }

    viewStudent(id) {
        this.props.history.push('/view-student/' + id);
    }

    editStudent(id) {
        this.props.history.push('/add-student/' + id);
    }

    componentDidMount() {
        StudentService.getStudents().then((res) => {
            this.setState({students: res.data});
        });
    }

    addStudent() {
        this.props.history.push('/add-student/-1');
    }

    render() {
        return (
            <div>
                <h2 className = "text-center">Student List</h2>
                <div>
                    <button className = "btn btn-primary" style = {{marginBottom: "20px"}} onClick = {this.addStudent}>Add Student</button>
                </div>
                <div className = "row">
                    <table className = "table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th> Student First Name</th>
                                <th> Student Last Name</th>
                                <th> Student Email Id</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.students.map(
                                    student =>
                                    <tr key = {student.id}>
                                        <td> {student.firstName}</td>
                                        <td> {student.lastName}</td>
                                        <td> {student.emailId}</td>
                                        <td>
                                            <button className = "btn btn-primary" onClick = {() => this.editStudent(student.id)} >Update</button>
                                            <button className = "btn btn-danger" style = {{marginLeft: "10px"}} onClick = {() => this.deleteStudent(student.id)} >Delete</button>
                                            <button className = "btn btn-success" style = {{marginLeft: "10px"}} onClick = {() => this.viewStudent(student.id)} >View</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>   
                </div>
            </div>
        );
    }
}

export default ListStudentComponent;