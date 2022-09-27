const cohort = {
    name: 'Aug 2022',
    id: 34,
    students: ['james', 'matt', 'jon']
};

const cohortMessage = (a) => {
    return (a.id + ' - ' + a.name + ' - ' + a.students.length + ' students in this cohort');
};

console.log(cohortMessage(cohort));