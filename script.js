

// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

//I need to check if the course id is 451. I will use a while loop to do determine if the course id is correct.
while (AssignmentGroup.course_id === CourseInfo.id) {
  AssignmentGroup.course_id ++;
  console.log(`correct course id`);
  if (AssignmentGroup.course_id !== CourseInfo.id) {
   break;
}
  console.log(`incorrect course id`);
}

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};




// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];

getLearnerData;//getLearnerData is open to recieving any input data from above
let avg=ag;



//const possiblePoints=  (ag?.assignments?.[0]?.points_possible || 0) + (ag?.assignments?.[1]?.points_possible || 0);
//const totalScore=(submissions?.[3]?.score || 0) + (submissions?.[1]?.score || 0);


let submissions=LearnerSubmissions;
const possiblePoints=AssignmentGroup.assignments[0].points_possible + AssignmentGroup.assignments[1].points_possible;//(50 + 150)
const totalScore = LearnerSubmissions[3].score + LearnerSubmissions[1].score;//(47 + 150)

function getLearnerData(course, ag, submissions) {
  // here, this data would be processed to achieve the desired result.

  //Formulas for calculating averages: 



if (i=0; i < LearnerSubmissions.length; i++); {
console.log(LearnerSubmissions[i]);

}if (i=0; i < CourseInfo.course_info.length; i++); {
  console.log(CourseInfo.course_info[i]);
}if (i=0; i < AssignmentGroup.assignments.length; i++); {
  console.log(AssignmentGroup.assignments[i]);
}

if (LearnerSubmissions[i].learner_id===125); {
  console.log(true);
  }else {
    console.log(false);
  }
}if (LearnerSubmissions[i].learner_id===132); {
  console.log(true);
  }else {
    console.log(false);
  }if (LearnerSubmissions[i].assignment_id===1); {
  console.log(true);
  }else {
    console.log(false);
  }if (LearnerSubmissions[i].assignment_id===2); {
  console.log(true);
  }else {
    console.log(false);
}if (LearnerSubmissions[i].assignment_id===3); {
  console.log(true);
  }
else {
  console.log(false);
}
 try {
	if (CourseInfo.course_info[0].id===451) {
		 console.log(CourseInfo);

  } else {
		throw "This is not the correct course id.";
	}
} catch (error) {
	console.log(error);
}
if (AssignmentGroup.id===12345); {
  console.log(`Assignment Group ID 12345 found`);
}
if (AssignmentGroup.course_id===451); {
  console.log(`Assignment Group Course ID 451 found`);
}if (AssignmentGroup.assignments.length===3); {
  console.log(`Assignment Group has 3 assignments`);
}
}

   


if(totalScore = LearnerSubmissions[0]?.score)//to avoid error
{
  console.log(true);
}else{
  console.log(false);
}
if (totalScore=LearnerSubmissions[1]?.score)//to avoid error
{
  console.log(true);
}else{
  console.log(false); 
  if (totalScore=LearnerSubmissions[2]?.score){
    console.log(true);    
  }else{
    console.log(false);
  }if (totalScore=LearnerSubmissions[3]?.score){
    console.log(true);    
  }else{
    console.log(false);
  }if (totalScore=LearnerSubmissions[4]?.score){
    console.log(true);    
  }else{
    console.log(false);
  } 


  
}
/*if (avg = score/possible_points)
  console.log(avg);
    
    try {
	if (points_possible!==0 || points_possible!=='') {//Testing if points_possible is valid. It cannot equal 0 or be a string.
		 console.log(`You got it!`);

	} else {
		throw "You cannot divide by 0.";
	}
} catch (error) {
	console.log(error);
}*/
 //const possiblePoints1= AssignmentGroup.assignments[0].points_possible + AssignmentGroup.assignments[1].points_possible//(50 + 150)
 //const totalScore1 = LearnerSubmissions.submissions[3].score + LearnerSubmissions.submissions[1].score;//(47 + 150)

 //const PossiblePoints2= AssignmentGroup.assignments[0].points_possible + AssignmentGroup.assignments[1].points_possible;
 //const totalScore2= LearnerSubmissions.submissions[0].score + LearnerSubmissions.submissions[1].score;



  const result = [
    {
      id: 125,
      avg: 0.985, // (47 + 150) / (50 + 150) totalScore1/possiblePoints1 (weighted average)
      1: 0.94, // 47 / 50 score1/possiblePoints1
      2: 1.0 // 150 / 150 score2/possiblePoints2
    },
    {
      id: 132,
      avg: 0.82, // (39 + 125) / (50 + 150)
      1: 0.78, // 39 / 50
      2: 0.833 // late: (140 - 15) / 150
    }
  ];

  return result;


const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);


