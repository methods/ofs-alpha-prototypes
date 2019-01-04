import allCourses from './allCourses'

export default (courseId) => {
    const filtered = allCourses.filter(course => course._id === courseId)
    if(filtered.length > 0) {
        return filtered[0]
    } else {
        return null
    }
}