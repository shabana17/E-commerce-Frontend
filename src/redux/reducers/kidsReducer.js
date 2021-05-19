import {KIDS} from '../actions/actions';
const kid=[  
    // {
//     id:'111',
//     title: 'Yellow Jacket',
//     image: '../daiga-ellaby-JZ51o_-UOY8-unsplash.jpg',
//     description: 'Yellow Wollen Jacket',
//     price: '360',
//     catagoryname:"kids"
// },
// { id:'222',
//     title: 'Sky Blue T-shirt',
//     image: '../guillaume-de-germain-fgmLRBlUIpc-unsplash.jpg',
//     description: 'Sky Blue Rounded T-Shirt',
//     price: '360',
//     catagoryname:"kids"
// },
// {id:'333',
//     title: 'Pink Hoddie',
//     image: '../jonathan-borba-Z1Oyw2snqn8-unsplash.jpg',
//     description: 'Baby Pink  Hoodie',
//     price: '360',
//     catagoryname:"kids"
// },
// { id:'444',
//     title: 'Sky Blue Shirt',
//     image: '../marina-abrosimova-r8LmVbUKgns-unsplash.jpg',
//     description: 'Sky Blue Formal Shirt',
//     price: '360',
//     catagoryname:"kids"
// },
// { id:'555',
//     title: 'Kurta',
//     image: '../muhammad-murtaza-ghani-Jcd1QCImfeE-unsplash.jpg',
//     description: 'White Kurta With Basket',
//     price: '360',
//     catagoryname:"kids"
// },
// { id:'666',
//     title: 'T-Shirts with Leggies',
//     image: '../nathan-dumlao-puWkYFKJVbA-unsplash.jpg',
//     description: 'Baby Girl T-Shirts with Leggies',
//     price: '360',
//     catagoryname:"kids"
// },
// { id:'777',
//     title: 'Round Neck T-Shirt',
//     image: '../priscilla-du-preez-3CTufp-cpzo-unsplash.jpg',
//     description: 'Printed Round Neck T-Shirt',
//     price: '360',
//     catagoryname:"kids"
// },
// { id:'888',
//     title: 'Round Neck T-Shirt',
//     image: '../tetbirt-salim-4LunKr1gTd8-unsplash.jpg',
//     description: 'Printed Round Neck T-Shirt In Pink Color',
//     price: '360',
//     catagoryname:"kids"
// },
]

const kidsReducer = (state = kid, action) => {
    switch (action.type) {
        case KIDS:
            return action.payload
         
            break;
        default:
            return state
    }
}
export default kidsReducer;