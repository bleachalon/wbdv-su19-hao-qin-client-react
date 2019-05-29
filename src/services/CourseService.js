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

    createCourse = course => {
        courses.push(course)
    }
    findAllCourses = () => {
        return courses
    }
    findCourseById = courseId => {
        return courses.find(course => course.id == courseId)
    }
    updateCourse = (courseId, newCourse) => {
        courses = courses.map(course => course.id == courseId ? newCourse : course)
    }
    deleteCourse = courseId => {
        courses = courses.filter(course => course.id !== courseId)
    }
}

export default CourseService