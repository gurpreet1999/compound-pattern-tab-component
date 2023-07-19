import React, { useContext } from 'react'

const TabContext=createContext()

const Tab = ({currentTab,onChange,children}) => {
  return (
  <TabContext.provider value={{onChange,currentTab}}  >
  {children}
  </TabContext.provider>
  )
}

export default Tab


Tab.HeadsContainer=({children})=>{

    return (
        <div>{children}</div>
    )


}


Tab.Item=({label,index,children})=>{

const {currentTab,onChange}=useContext(TabContext)
const handleClick=()=>{
onChange(index)
}

return (
    <div onClick={handleClick}  >  {label}</div>
  
)

}


Tab.Container=({children})=>{

return (
    <>
    {children}
    </>
)



}


Tab.ContentItem=({children,index})=>{
    const {currentTab,onChange}=useContext(TabContext)
    return currentTab===index?<div>
{children}
</div>:null


    
}