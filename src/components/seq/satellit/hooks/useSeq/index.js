import { useState } from 'react';
import axios from 'axios'
import { backendPath } from "../../../../../config"



export const useSeq = () => {
  
  
  // const [addUser, { data }] = useMutation(mutationCreateAccount);
  const [values, setValues] = useState({
    res : "?",
    newSeq : {
      A1 : "999"
    }
  })


  const solveHandle = (oneObj) => {
    let aNnumb = oneObj.a1_index, aKnumb = oneObj.a2_index, aNval = oneObj.a1_value, aKval = oneObj.a2_value, Snum = oneObj.n_index
    let D = (aNval - aKval) / (aNnumb - aKnumb)
    let a1val = aNval - (aNnumb - 1) * D
    let aSval = a1val + D * (Snum - 1)
    let S = (a1val + aSval) / 2 * Snum
    let res = `a₁ = ${a1val}, D = ${D}, S(${Snum}) = ${S}, an = ${aSval}`
    setValues({ res: aSval })
  }


  const handleChange = (event) => {
    //console.log("handleChange")
    setValues((prevValues) => (
      {
        account: {
        ...prevValues.account,
        [event.target.name]: event.target.value
      }
    }))
  }


  const onDeleteClick = (id) => {
    console.log("id from del : ", id)

    // axios.delete(backendPath + `remove/${id}`)
    //     .then (res => {
    //       console.log(res.data)
    //     })
  }

  
  const handleSubmit = (event) => {
   console.log("hello from submit !")
  }
  

  
  return {
    solveHandle,
    onDeleteClick,
    handleChange,
    handleSubmit,
    state : values
  }
};
