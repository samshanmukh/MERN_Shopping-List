import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELET_ITEM } from '../actions/types';

const initialstate = {
	items: [
			{ id: uuid(), name: 'Eggs' },
			{ id: uuid(), name: 'Milk' },
			{ id: uuid(), name: 'Steak' },
			{ id: uuid(), name: 'Water' }
		]
}

export default function(state = initialstate, action) {
	switch(action.type) {
		case GET_ITEMS: 
			return {
				...state
			}
		default:
			return state;
	}
}