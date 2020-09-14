-- Total number of students from any number of cohorts combined.

-- SELECT COUNT(id) 
-- FROM students
-- WHERE cohort_id
-- BETWEEN 1
-- AND 3;

SELECT count(id)
FROM students 
WHERE cohort_id IN (1,2,3);