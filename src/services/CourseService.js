var adr = "https://wbdv-su19-hao-qin-server-react.herokuapp.com/api/"

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
            }).then(response => response.json())


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
        }).then(response => response.json())
    

    deleteCourse = courseId => 
       fetch( adr +  `courses/${courseId}`, {
            method: 'DELETE'
        }).then(response => response.json())
    }

export default CourseService