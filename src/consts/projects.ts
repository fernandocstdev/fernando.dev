import { type Project } from '../types/project'

export const PROJECTS: Project[] = [
	{
		name: 'Control de gastos',
		description: 'Este itio web permite al usuario tener una gestion y un control sobre los gastos que el usuario vaya realizando. Se añadieron graficas para indicarle al usuario cuanto porcentaje de su presupuesto habia gastado.',
		technologies: ['JavaScript', 'CSS', 'React'],
		repository: 'https://github.com/fernandocstdev/control-gastos-app',
		url: 'control-de-gastos',
		date: new Date('11/19/2023'),
		image: 'https://res.cloudinary.com/doby4wtg5/image/upload/v1704746741/control-gastos_qbncqq.webp'
	},
	{
		name: 'Api REST - Blog',
		description: 'API REST para la gestion y creacion de un Blog personal.',
		repository: 'https://github.com/fernandocstdev/api-rest-blog',
		technologies: ['JavaScript','Node JS', 'MongoDB', 'Mongoose' ,' Express', 'API REST'],
		date: new Date('11/17/2023'),
	},
	{
		name:'Todo List',
		description: 'Sitio web para crear lista de tareas, permitiendo al usuario marcar una tarea cuando ya este terminada y poder filtrar por tareas completadas y no completadas.',
		repository: 'https://github.com/fernandocstdev/todo-list',
		technologies: ['TypeScript', 'Next Js', 'Tailwind', 'React'],
		url: 'todo-list',
		date: new Date('09/25/2023'),
		image: 'https://res.cloudinary.com/doby4wtg5/image/upload/v1704746764/todo-list_uifdvj.webp'
	},
]