// RFC : react functional Component
// function ChildComponent(){
// -- logic
// const componentName = 'ChildComponent';
// -- view
// return <div></div>
// }



export default function ChildComponent({ number, name, increase, children }) {

    // logic
    const componentName = 'ChildComponent';

    // view
    return (
        <div>
            <h1>Xin chào, tôi tên là: {componentName}. new</h1>
            <h3>
                Danh sách props của tôi là: 
                <p>number: {number * 2}</p>
                <p>name: {name}</p>
            </h3>

           <div>
            <button className='btn btn-primary' onClick={increase}>
                +
            </button>
           </div>

        </div>
    );
}


// export const SecondChild = () => {
//     // arrow function
//     // logic
//     const myMsg = 'Tôi là SecondChild';

//     // view
//     return (
//         <div>
//             <h1>{myMsg}</h1>
//         </div>
//     );
// }


// export const ThirdChild = () => {
//     // arrow function
//     // logic
//     const myMsg = 'Tôi là ThirdChild';

//     // view
//     return (
//         <div>
//             <h1>{myMsg}</h1>
//         </div>
//     );
// }