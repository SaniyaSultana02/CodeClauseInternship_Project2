document.addEventListener('DOMContentLoaded', () => {
    const activities = [];
    const workoutPlans = [];
    const activitiesList = document.getElementById('activities-list');
    const workoutPlansList = document.getElementById('workout-plans-list');
    const statisticsContent = document.getElementById('statistics-content');
    const addActivityBtn = document.getElementById('add-activity-btn');
    const addWorkoutPlanBtn = document.getElementById('add-workout-plan-btn');
    const workoutPlansDropdown = document.getElementById('workout-plans-dropdown');

    const predefinedWorkoutPlans = {
        plan1: 'Push-ups= Strengthens chest, shoulders, and triceps',
        plan2: 'Squats= Builds thighs, hips, and buttocks.',
        plan3: 'Planks= Engages core muscles.',
        plan4: 'Sit-ups= Targets abdominal muscles.',
        plan5: 'Jumping Jacks= Full-body cardio exercise.',
        plan6: 'Pull-ups= Works back and biceps.',
        plan7: 'Dips= Strengthens triceps and chest.',
        plan8: 'Leg Raises= Focuses on lower abs.',
        plan9: 'Shoulder Press= Strengthens shoulders and triceps.',
        plan10: 'Deadlifts= Targets the entire posterior chain.',
        plan11: 'Chest Press= Builds chest, shoulders, and triceps.',

    };

    addActivityBtn.addEventListener('click', () => {
        const activity = prompt('Enter activity (e.g., Running, Cycling):');
        const duration = prompt('Enter duration in minutes:');
        if (activity && duration && !isNaN(duration)) {
            activities.push({ activity, duration: parseInt(duration) });
            updateActivitiesList();
            updateStatistics();
        } else {
            alert('Invalid input. Please enter valid activity and duration.');
        }
    });

    addWorkoutPlanBtn.addEventListener('click', () => {
        const selectedPlan = workoutPlansDropdown.value;
        if (selectedPlan) {
            workoutPlans.push({ name: selectedPlan, details: predefinedWorkoutPlans[selectedPlan] });
            updateWorkoutPlansList();
        } else {
            alert('Please select a workout plan.');
        }
    });

    function updateActivitiesList() {
        activitiesList.innerHTML = '';
        activities.forEach((activity) => {
            const li = document.createElement('li');
            li.textContent = `${activity.activity} - ${activity.duration} mins`;
            activitiesList.appendChild(li);
        });
    }

    function updateWorkoutPlansList() {
        workoutPlansList.innerHTML = '';
        workoutPlans.forEach((plan) => {
            const li = document.createElement('li');
            li.textContent = `${plan.name}: ${plan.details}`;
            workoutPlansList.appendChild(li);
        });
    }

    function updateStatistics() {
        const totalDuration = activities.reduce((total, activity) => total + activity.duration, 0);
        const totalActivities = activities.length;
        statisticsContent.innerHTML = `
            <p>Total Activities: ${totalActivities}</p>
            <p>Total Duration: ${totalDuration} mins</p>
        `;
    }
});
