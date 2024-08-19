/* eslint-disable no-unused-vars */
//simpler version of reducer
import { createSlice, nanoid } from "@reduxjs/toolkit";

// it can be array, string or any thing but we are defining as object as it can contain many thing
const initialState = {
    //so in  object, an array is created
    //agar local storae me is key ke saath koi data hai to wo le lo nahi to hello world ke saath initilize kar do
    todos: JSON.parse(localStorage.getItem('todos')) || [{      
        //{/* todos key and and local storage me key value ke saath pass kar rahe so le v usi se rahe hai */},
        id: 1,
        text: "Hello World",
    }]
}

//only for explanation
function sayhello(){
    console.log("Say Hello");
}

//now we need to create slice so we are defining it as a variable and then we will export it
export const Todoslice = createSlice({
    name: 'todo',       // it should be name only
    initialState,       //the initial state defined in the starting
    //store me jo configure store empty hai wo yaha se manage hoga
    reducers: {
        // addtodo: sayhello, 
        //or we can write the function directly inside it
        //**********always we will get two thing inside these methods 1. state, 2. action
        addtodo:(state, action) => {
            //we will add this todo everytime
            const todo = {
                    //so we need to give different id to it so we use nanoid
                    id: nanoid(),
                    //no we have some text which user will write so that will be fetched using action
                    text: action.payload,       //payload is an object so we can fetch other things from it as well
            }

            //ab todo bna diya to isko state ke andar dalna v to padega
            //todos sara todo ka collection hai usme mai todo ko uskar raha
            state.todos.push(todo)
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        //state give access to the initial values present in the state
        //action ab jaise remove ko call kiye then we need to pass some id, that id will be in action
        removetodo: (state, action) => {
            //action me id aaya hoga to payload me sirf id hi hoga
            //state.todos jo ki mera todos ka array hai usko hi overwrite kar dete hai
            state.todos = state.todos.filter((prev_todo) => (prev_todo.id !== action.payload))
            localStorage.setItem('todos', JSON.stringify(state.todos));
            //jo todo ka id match kar gaya existing todo ke sath usko filter kar dega
            //filter kya karta hai --> jo condition match nahi krega usko filter kar dega
            //so todo agar match nahi kar raha id se means usko delete nahi karna hai and wo condition match kar raha
            //but jo todo ko delete karna hai wo condition match nahi karega and filter out ho jayega
        },

        updatetodo: (state, action) => {
            const {id, newtext} =  action.payload;
            //find me list veja jisme find karna hai or uske baad condition likh diya
            const todotoupdate = state.todos.find((todo) => (todo.id === id))
            if(todotoupdate){
                todotoupdate.text = newtext;
                localStorage.setItem('todos', JSON.stringify(state.todos));
            }   
        }
    }        
})

//ab jo reducers ke andar function hai wo sab ko individually export karna hoga 
//createSlice has two property action and reducer 
//actian corrospond to each function written in reducer and while exporting we destructured the things of redurcer and then exporting so that the required thng can be export only
export const {addtodo, removetodo, updatetodo} = Todoslice.actions

//store ko reducer access me mil jaye uske liye usko v export karna padega

export default Todoslice.reducer
