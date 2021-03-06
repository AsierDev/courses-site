const { success, fail } = require('../api-utils')
const logic = require('../../../logic')

module.exports = (req, res) => {
    const { body: { description, excerpt, price, image, pdf, capacity, location, date, teachers, students } } = req
    const { params: { name } } = req

    logic.editCourse(name, description, excerpt, price, image, pdf, capacity, location, date, teachers, students)
        .then(() => res.json(success()))
        .catch(err => res.json(fail(err.message)))
}