import type { PlayerData, Question } from '$lib/index';

const playerData: PlayerData[] = [];
const TIME_LEFT = 8; // seconds
const sortQuestions = (questions: { points: number; question: string; answer: string; imgSrc?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => ({ ...q, answered: false, buzzers: [] as string[] }));
const pastQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question: 'What country is this?',
        answer: 'Italy',
    },
    {
        points: 200,
        question:
            'What instrument is a high pitched string instrument? ',
        imgSrc: "https://cdn.britannica.com/34/4034-050-91EE1BCF/Flag-Myanmar.jpg",
        answer: 'Violin',
    },
    {
        points: 300,
        question:
            'Which city did I grow up in',
        answer: 'New York City',
    },
    {
        points: 400,
        question: 'What month is my birthday?',
        answer: 'September',
    }
]);

const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 400,
            question:
                'What is my favorite sport?',
            imgSrc: '/',
            answer: 'Figure Skating',
        },
        {
            points: 300,
            question:
                'What breed dog is this?',
            imgSrc: 'https://www.aforkstale.com/wp-content/uploads/how-to-make-homemade-tahini-1200-x-1200.jpg',
            answer: 'Maltipoo',
        },
        {
            points: 200,
            question: 'What other sport do I do?',
            imgSrc: '/programming_language.png',
            answer: 'Running',
        },
        {
            points: 100,
            question:
                'What food is this?',
            imgSrc:
                "https://laguidalpina.it/cdn/shop/products/ferrata-marmolada-cresta-ovest-Cristiano-Gregnanin-Guida-Alpina-Certificata-Dolomiti-5.jpg?v=1738870778",
            answer: 'Pasta',
        }
    ]);
const futureQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question:
            'This type of 2D drawing allows you to see the sides of a 3D object at the same scale.',
        imgSrc:
            "https://static.mathigon.org/cms/a8141a111490d026fa6578a4933d1d47.png",
        answer: 'Isometric',
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
        title: "Emily's Future",
        questions: futureQuestions
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