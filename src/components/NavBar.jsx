
function NavBar({handleNextClick, handlePreviousClick}) {


    return (

        <div>
          <button onClick={handlePreviousClick}> Previous </button>
          <button onClick={handleNextClick}>Next </button>

          
        </div>
      );
}

// function NavBar({actions}) {

//     return (

//         <div>
//           <button onClick={actions.previous}> Previous </button>
//           <button onClick={actions.next}>Next </button>
//         </div>
//       );
// }

export default NavBar;

