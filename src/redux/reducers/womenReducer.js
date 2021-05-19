import {WOMEN} from '../actions/actions';
const women=[
//     {
//     id:'11',
//     title: 'Blazer',
//     image: '../etty-fidele-AzVexpHvuKY-unsplash.jpg',
//     description: 'Plain Orange Color Blazer',
//     price: '360',
//     catagoryname:"women"
// },
// { id:'22',
//     title: 'Round Neck T-Shirt',
//     image: '../junior-moran-SYlzcTAwTWE-unsplash.jpg',
//     description: 'Printed Round Neck T-Shirt In Orange Color',
//     price: '360',
//     catagoryname:"women"
// },
// { id:'33',
//     title: 'Crop Top',
//     image: '../laura-chouette-enQcrUMOp_U-unsplash.jpg',
//     description: 'PLain Crop Top For Women',
//     price: '360',
//     catagoryname:"women"
// },
// { id:'44',
//     title: 'White Gown',
//     image: '../laura-chouette-MSDzTRbypMM-unsplash.jpg',
//     description: 'Plain White Gown For Marriage',
//     price: '360',
//     catagoryname:"women"
// },
// { id:'55',
//     title: 'Blazer',
//     image: '../laura-chouette-t5Zpa8s32JU-unsplash.jpg',
//     description: 'Plain Women Long Jacket',
//     price: '360',
//     catagoryname:"women"
// },
// { id:'66',
//     title: 'Crop Top In Black',
//     image: '../kitera-dent-Dpnrop8vb7k-unsplash.jpg',
//     description: 'Plain Balck Crop Top For Women',
//     price: '360',
//     catagoryname:"women"
// },
// { id:'77',
//     title: 'Cream Jacket',
//     image: '../laura-chouette-d7wSG9uPev4-unsplash.jpg',
//     description: 'Plain Cream Long Jacket',
//     price: '360',
//     catagoryname:"women"
// },
// { id:'88',
//     title: 'Wollen Jacket',
//     image: '../laura-chouette-W6N869esmYM-unsplash.jpg',
//     description: 'Wollen Long Jacket',
//     price: '360',
//     catagoryname:"women"
// },
]

const womenReducer = (state = women, action) => {
    switch (action.type) {
        case WOMEN:
            return action.payload
            
            break;
        default:
            return state
    }
}
export default womenReducer;