import courses from './courses.json'

class CourseService {

    static myInstance = null;

    static getInstance() {
        if (CourseService.myInstance == null) {
            CourseService.myInstance =
                new CourseService();
        }
        return this.myInstance;
    }

    createCourse = (course) => 
        fetch("http://localhost:8080/api/courses", {
                method: 'POST',
                body: JSON.stringify(course),
                headers: {
                    'content-type': 'application/json'
                }
            }).then(response => response.json())


    findAllCourses = () => 
        fetch("http://localhost:8080/api/courses").then(response => response.json())
    
    findCourseById = courseId => 
        fetch(`http://localhost:8080/api/courses/${courseId}`).then(response => response.json())
    

    updateCourse = (newCourse) => 
        fetch(`http://localhost:8080/api/courses/${newCourse.id}`, {
            method: 'PUT',
            body: JSON.stringify(newCourse),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
    

    deleteCourse = courseId => 
       fetch(`http://localhost:8080/api/courses/${courseId}`, {
            method: 'DELETE'
        }).then(response => response.json())
    }

export default CourseService