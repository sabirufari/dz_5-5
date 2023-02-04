import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CheckAction, DecrAction, InputAction } from '../redux/actions'


function PassPage() {

    const dispatch = useDispatch()
    const {userPass, passed} = useSelector(state=> state.passReducer)
    

    const userInput = (e)=>{

        let user = parseInt(e.target.value) 

        dispatch(InputAction(user))
    }
    const checker = ()=>{
        passed===true
        ?
        alert("Access Granted")
        :
        ""
    }
    const passDecr = ()=>{
        dispatch(DecrAction())

    }

  return (
    <div>
        <form>
            <div>
                <input type="number" placeholder="0" id='inputForm'
                value={userPass}
                onChange={e=>{
                    e.target.value.length <= 4
                    ?
                    userInput(e)
                    :
                    userPass
                }}
                />
            </div>
            <div>
                <div >
                    <input type="button" name="b7" value="7" />
                    <input type="button" name="b8" value="8" />
                    <input type="button" name="b9" value="9" />
                </div>
                
                <div>
                    <input type="button" name="b4" value="4" />
                    <input type="button" name="b5" value="5" />
                    <input type="button" name="b6" value="6" />
                </div>
                
                <div>
                    <input type="button" name="b1" value="1" />
                    <input type="button" name="b2" value="2" />
                    <input type="button" name="b3" value="3" />
                </div>
                
                <div>
                    <input type="button" name="potb" value="<" 
                    onClick={passDecr}
                    />
                    <input type="button" name="b0" value="0" />
                    <input type="button" name="divb" value="E" 
                    onClick={() => {
                        dispatch(CheckAction(userPass))
                        checker()
                    }}/>
                </div>
            </div>
            
        </form>
    </div>
  )
}

export default PassPage