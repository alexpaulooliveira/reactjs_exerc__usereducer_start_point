import { useReducer } from 'react'
import { INPUT_FONT_SIZE, SpinningLoader, SBLoad, SBLeft, GlobalStyle, SCenter, SForm, STitle, SBRight } from './StyledComponents'
const axios = require('axios').default;

function App() {
  
  type Professor = {id_professor:number, tx_nome: string} 
  type Disciplina = {id_disciplina:number, id_tipo_disciplina: number, id_professor: number, tx_sigla: string, tx_descricao: string, in_periodo:number, in_carga_horaria:number}  

  type TState = { naoAlocadas: Disciplina [], alocadas: Disciplina [] }

  const initialState: TState = {naoAlocadas:[], alocadas:[]}  

  enum Action {
    INIT,
    LOAD_NAO_ALOCADA,
    LOAD_ALOCADA,
    NAO_ALOCADA_TO_ALOCADA,
    ALOCADA_TO_NAO_ALOCADA
  }  

  interface TAction {
    type: Action
    discs: Disciplina []
  }  


  function reducer(state:TState, action: TAction) {
    return state    
  }    

  const [state, dispatch] = useReducer(reducer, initialState);
  
   
  if ( false ) 
    return <SpinningLoader size='180'/>
  else
    return <>  
           <GlobalStyle/>           

           <SForm>
             <STitle > Exemplo useReducer </STitle>
             <SCenter>
               PROFESSOR:
               <select>
                <option value="-1"> -- SELECIONE -- </option>
 
               </select>          
             </SCenter>

                    

               <table style={{width:'100%', height:'1px'}}>
                 <tr style={{textAlign:'center'}}>
                   <td>  
                     <SCenter>DISCIPLINAS NÃO ALOCADAS </SCenter>
                   </td>
  
                   <td/>                       
  
                   <td>
                     <SCenter> DISCIPLINAS ALOCADAS </SCenter>  
                   </td>                   
                 </tr>
  


                 <tr>
                   <td>
                     <SCenter>
                       <select 
                         style={{fontSize:INPUT_FONT_SIZE}} multiple={false} size={10} >
                                  
                       </select>  
                     </SCenter>
                   </td>

                   <td>
                     <table style={{height:'1px'}}>
                       <tr>
                         <td>
                           <SCenter > <SBLoad/> </SCenter>
                         </td>                         
                       </tr>                                                    
                       <tr>
                         <td>
                           <SCenter onClick={  () => dispatch({type: Action.ALOCADA_TO_NAO_ALOCADA, discs:[]}) }>  <SBLeft/> </SCenter>
                         </td>
                       </tr>                       
                       <tr>
                         <td/>
                       </tr>                             
                       <tr>
                         <td>
                           <SCenter onClick={  () => dispatch({type: Action.NAO_ALOCADA_TO_ALOCADA, discs:[]}) }>  <SBRight/> </SCenter>
                         </td>
                       </tr>
                     </table>                                                               
                   </td>          

                   <td>

                     <SCenter>
                       <select 
                         style={{fontSize:INPUT_FONT_SIZE}} multiple={false} size={10} >
                                  
                        </select>  
                     </SCenter>  
                                                             
                   </td>                   
                 </tr>
               </table>
             
           </SForm>
           
         </>  
}

export default App;