import { useState } from 'react';
import axios from 'axios'
import { backendPath } from "../../../../../config"



export const useSeq = () => {


  // const [addUser, { data }] = useMutation(mutationCreateAccount);
  const [values, setValues] = useState({
    res: "?",
    newSeq: {
      a1_index: "",
      a1_value: "",
      a2_index: "",
      a2_value: "",
      n_index: "",
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
    //console.log(values.newSeq)
    setValues((prevValues) => (
      {
        newSeq: {
          ...prevValues.newSeq,
          [event.target.name]: event.target.value
        }
      }))
  }


  const onDeleteClick = (id, reqDataCB) => {
    console.log("id from del : ", id)

    axios.delete(backendPath + `remove/${id}`)
      .then(res => {
        reqDataCB()
        console.log(res.data)
      })
      
  }


  const handleSubmit =  async (seq, refreshCB) => {
    console.log(seq)
    let res = await axios.post(backendPath + 'create', seq)
      .catch(err => { console.log("error creating new newSeq : ", err) })
    console.log("рес дата", res.data)  
    refreshCB()
    return res.data
  }



  return {
    solveHandle,
    onDeleteClick,
    handleChange,
    handleSubmit,
    state: values
  }
};
