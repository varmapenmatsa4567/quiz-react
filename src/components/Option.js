import React from 'react'

const Option = ({title, answer, wrong, ...props}) => {
    var styles = "hover:bg-black border-black";
    console.log(answer);
    if(answer == title){
        styles = "bg-green-400 hover:bg-green-500 hover:bg-green-400 border-green-500";
    }
    else if(wrong == title){
        styles = "bg-red-400 hover:bg-red-500 hover:bg-red-400 border-red-500";
    }
  return (
    <div {...props} className={`${styles} text-center border transition-all duration-200 hover:scale-x-105 hover:scale-y-105 rounded-md p-2 hover:text-white cursor-pointer`}>
        {title}
    </div>
  )
}

export default Option