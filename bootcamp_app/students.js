const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: 'xxx',
  host: 'localhost',
  database: 'bootcampx'
});


pool.query(`
SELECT students.id as id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name LIKE '%${process.argv[2]}%'
LIMIT ${process.argv[3]};
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort} cohort`);
  // console.log(res.rows)
  })
  
})
.catch(err => console.error('query error', err.stack));