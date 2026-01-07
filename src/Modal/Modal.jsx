import ReactDOM from "react-dom";  

  

function Modal({ children }) {  

 const modalRoot = document.getElementById("portal");  

 return ReactDOM.createPortal(  

   <div className="fixed inset-0 bg-black/40 flex justify-center items-center">  
     <div className=" w-[40%] bg-white">  
       {children}  
     </div>  
   </div>, modalRoot  
 );  
}  

export  default Modal