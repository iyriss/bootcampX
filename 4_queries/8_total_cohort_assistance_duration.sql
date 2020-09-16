-- Get the total duration of all assistance requests for each cohort.
-- Order by total_duration.


SELECT cohorts.name as cohort, SUM(completed_at-started_at) as total_duration
FROM students
JOIN cohorts ON cohorts.id = cohort_id
JOIN assistance_requests ON student_id = students.id
GROUP BY cohorts.name
ORDER BY total_duration;
