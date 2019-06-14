var adr = "http://localhost:8080/api/"

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
        fetch( adr + "courses", {
                method: 'POST',
                body: JSON.stringify(course),
                headers: {
                    'content-type': 'application/json'
                }
            }).then(this.findAllCourses)


    findAllCourses = () => 
        fetch(adr +  "courses").then(response => response.json())
    
    findCourseById = courseId => 
        fetch( adr +  `courses/${courseId}`).then(response => response.json())
    

    updateCourse = (newCourse) => 
        fetch( adr +  `courses/${newCourse.id}`, {
            method: 'PUT',
            body: JSON.stringify(newCourse),
            headers: {
                'content-type': 'application/json'
            }
        }).then(this.findAllCourses)
    

    deleteCourse = courseId => 
       fetch( adr +  `courses/${courseId}`, {
            method: 'DELETE'
        }).then(this.findAllCourses)
    }

export default CourseService