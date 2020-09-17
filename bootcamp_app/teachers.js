const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: 'xxx',
  host: 'localhost',
  database: 'bootcampx'
});

const cohortName = process.argv[2];
const queryString = `
SELECT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name LIKE $1
GROUP BY cohorts.name, teachers.name
ORDER BY teacher;
`;

pool.query(queryString, [cohortName])
.then (res => {
  res.rows.forEach( teacher => 
    console.log(`${teacher.cohort}: ${teacher.teacher}`))
})
.catch (err => {
  console.error('query error', err.stack)
})
