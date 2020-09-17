const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: 'xxx',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
SELECT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = '${process.argv[2]}'
GROUP BY cohorts.name, teachers.name
ORDER BY teacher;
`)
.then (res => {
  res.rows.forEach( teacher => 
    console.log(`${process.argv[2]}: ${teacher.teacher}`))
})
.catch (err => {
  console.error('query error', err.stack)
})
