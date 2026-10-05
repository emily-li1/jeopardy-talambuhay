import type { PlayerData, Question } from '$lib/index';

const playerData: PlayerData[] = [];
const TIME_LEFT = 8; // seconds
const sortQuestions = (questions: { points: number; question: string; answer: string; imgSrc?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => ({ ...q, answered: false, buzzers: [] as string[] }));
const pastQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question: 'What city did I grow up in?',
        answer: 'New York City',
    },
    {
        points: 200,
        question:
            'What instrument is a high pitched string instrument? ',
        answer: 'Violin',
    },
    {
        points: 300,
        question:
            'What month was I born in?',
        answer: 'September',
    },
    {
        points: 400,
        question: 'What country is this?',
        answer: 'Italy',
        imgSrc: "/italy.png"
    }
]);

const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 400,
            question:
                'What is my favorite sport?',
            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Outdoor_ice_rink_in_It%C3%A4kyl%C3%A4_20170306.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original',
            answer: 'Figure Skating',
        },
        {
            points: 300,
            question:
                'What breed dog is this?',
            imgSrc: '/dog.jpeg',
            answer: 'Maltipoo',
        },
        {
            points: 200,
            question: 'What other sport do I do?',
            answer: 'Running',
        },
        {
            points: 100,
            question:
                'What food is this?',
            imgSrc: '/pasta.jpeg',
            answer: 'pasta',
        }
    ]);
const randomQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question:
            'What season is my favorite?',
            imgSrc: 'https://media.istockphoto.com/id/513694026/photo/southern-california-sunset-beach-with-backlit-palm-trees.jpg?s=612x612&w=0&k=20&c=dgPw2mSoKqvNYr7keC7mi8NcvqbVw7vYMxGhjCXLrwo=',
        answer: 'Summer',
    },
    {
        points: 200,
        question:
            'What color has the shortest wavelength ',
        answer: 'Purple',
    },
    {
     points: 300,
        question:
            'What did I like baking have when I had more free time?',
        imgSrc: '/cake.jpg',
        answer: 'Cake',
    },
    {
     points: 400,
        question:
            'What did I learn to solve during COVID',
        answer: 'Rubiks cube',
    }
]);


const categories = [
    {
        title: 'Emily\'s Past',
        questions: pastQuestions
    },
    {
        title: `Emily's Present`,
        questions: presentQuestions
    },
    {
        title: "Emily's Random",
        questions: randomQuestions
    }
];

export const state = {
    playerData,
    categories,
    selectedQuestion: null as Question | null | undefined,
    whoControls: null as string | null,
    timeLeft: TIME_LEFT,
    intervalId: null as NodeJS.Timeout | null,
    whoBuzzed: null as string | null,
};

export interface CheckAnswerPayload {
    answer: string;
    question: Question;
    socketId: string;
}