import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Content } from './content';

export class ContentData implements InMemoryDbService {

    createDb() {
        const contents: Array<Content> = [
            {
                id: 1,
                'name': 'Batman',
                'description': 'Robin\'s partner'
            },
            {
                id: 2,
                'name': 'Fridge',
                'description': 'House Electronic'
            },
            {
                id: 3,
                'name': 'Mobile Phone',
                'description': 'Today\'s most used item'
            },
            {
                id: 4,
                'name': 'Football',
                'description': 'Some sport'
            },
            {
                id: 5,
                'name': 'Idea',
                'description': 'I ran out of those'
            }
        ]
        return {contents}
    }

}