import './style.css'
import {GridView} from "./classes/GridView.js";

document.addEventListener('DOMContentLoaded', () => {
	
	const fetch = {
		south: {
			title: 'Papers Please',
			items: [
				{
					id: 1,
					company: '<b>Tander</b>',
					director: 'Jon Douglas',
					about: 'food'
				},
				{
					id: 1,
					company: 'X5',
					director: 'Maria Petrova',
					about: 'chimical'
				},
				{
					id: 1,
					company: 'Diksi',
					director: 'Bill Go',
					about: 'medicine'
				},
			]
		}
	}
	
	const data = {
		element: '#app',
		headlingClass: ['headling'],
		headling: fetch["south"]["title"],
		attr: {
			company: {
				label: 'Company',
				src: 'html'
			},
			director: {
				label: 'Director',
			},
			about: {
				label: 'About',
				value: (data) => {
					return data + 'map'
				}
			}
		},
		items: fetch["south"]["items"]
	}

	const gridView = new GridView() // экземпляр класса
	gridView.render(data)
})