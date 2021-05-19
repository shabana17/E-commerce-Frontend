import {FURNITURE} from '../actions/actions';
const furniture=[   
//     {
//     id:'1111',
//     title: 'Behaz Ghaffarian',
//     image: '../behzad-ghaffarian-nhWgZNV85LQ-unsplash.jpg',
//     description: 'Designer Behaz Ghaffarian',
//     price: '360',
//     catagoryname:"furniture"
// },
// {
//     id:'2222',
//     title: 'Benjamin Voros',
//     image: '../benjamin-voros-X63FTIZFbZo-unsplash.jpg',
//     description: 'White Color BEnjamin Voros',
//     price: '360',
//     catagoryname:"furniture"
// },
// { id:'3333',
//     title: 'Sofas',
//     image: '../di_an_h-g_8MrEZAvyE-unsplash.jpg',
//     description: 'Sofa With Table',
//     price: '360',
//     catagoryname:"furniture"
// },
// { id:'4444',
//     title: 'Balck Chair',
//     image: '../eugene-chystiakov-3neSwyntbQ8-unsplash.jpg',
//     description: 'Stylish Black Painted Chai',
//     price: '360',
//     catagoryname:"furniture"
// },
// { id:'5555',
//     title: 'Jocelyn Morales',
//     image: '../jocelyn-morales-77yGVQ9RFK8-unsplash.jpg',
//     description: 'Jocelyn Morales For Restaurants',
//     price: '360',
//     catagoryname:"furniture"
// },
// { id:'6666',
//     title: 'Tiana Borcherding',
//     image: '../tiana-borcherding-1eVYwkNHqVU-unsplash.jpg',
//     description: 'Tiana Borcherding For Restaurant',
//     price: '360',
//     catagoryname:"furniture"
// },
// { id:'7777',
//     title: 'Designer Chair',
//     image: '../toa-heftiba-7JaOPU9FrJA-unsplash.jpg',
//     description: 'Designer Chair For Living Room',
//     price: '360',
//     catagoryname:"furniture"
// },
// { id:'8888',
//     title: 'Toa Heftiba',
//     image: '../toa-heftiba-FV3GConVSss-unsplash.jpg',
//     description: 'Toa Heftiba For Living Rooms And Restaurants',
//     price: '360',
//     catagoryname:"furniture"
// },
]

const furnitureReducer = (state = furniture, action) => {
    switch (action.type) {
        case FURNITURE:
            return action.payload
            
            break;
        default:
            return state
    }
}
export default furnitureReducer;