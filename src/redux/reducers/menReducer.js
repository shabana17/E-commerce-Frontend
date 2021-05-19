import {MEN} from '../actions/actions';
const men=[
    // {
    //     id:'1',
    //     title: "Black Jacket",
    //     image: '../tyler-nix-3OG8ywzgjJY-unsplash.jpg',
    //     description: 'Pure Black Lether Jacket',
    //     price: 360,
    // },
    // {
    //     id:'2',
    //     title: "White T-Shirt",
    //     image:"../dewang-gupta-Ti3t6Vid6oM-unsplash.jpg",
    //     description: "White Cotton Half T-Shirt",
    //     price: 300,
    // },
    // { 
    //     id:'3',
    //     title: "'Navy Blue Shirt'",
    //     image: "'../andreea-pop-12zefBEZMvg-unsplash.jpg'",
    //     description: "'Navy Blue Denim Shirt'",
    //     price: 360,
    // },
    // { 
    //     id:'4',
    //     title: "'Checked Shirt'",
    //     image: "'../sincerely-media-by3bSk3G1P8-unsplash.jpg'",
    //     description: "'Pure Cotton Stuffed Checked Shirt'",
    //     price: 360,
    // },
    // { 
    //     id:'5',
    //    title: "Black T-Shirt'",
    //     image: "'../creaslim-BK4DswauUmo-unsplash.jpg'",
    //     description: "'Black Round Neck T-Shirt'",
    //     price: 360,
    // },
    // { 
    //     id:'6',
    //     title: 'Black T-Shirt',
    //     image: '../silviu-beniamin-tofan-wCjdgOQY8iY-unsplash.jpg',
    //     description: 'Black Round Neck T-Shirt',
    //     price: 360,
    // },
    // { 
    //     id:'7',
    //     title: 'Black Wollen Jacket',
    //     image: '../erik-mclean-VsxZziZzbLY-unsplash.jpg',
    //     description: 'Dark Black Wollen Jacket',
    //     price: 360,
    // },
    // { 
    //     id:'8',
    //     title: 'Black Shirt',
    //     image: '../pedram-normohamadian-EtbWtewRQJs-unsplash.jpg',
    //     description: 'Black Formal Shirt',
    //     price: 360,
    // },
]

const menReducer = (state = men, action) => {
    switch (action.type) {
        case MEN:
            return action.payload
            
           
        default:
            return state
    }
}
export default menReducer;