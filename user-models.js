
const db = require("../config/db")

const getAllStudent = async () => {
   const [rows] = await db.query("select * from siswa")
   return roWS
}

module.exports = {getAllStudent}
