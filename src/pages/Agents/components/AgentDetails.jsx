import React, { useState } from 'react'
import Tasks from './Tasks/Tasks';
import Code from './Code/Code';
import Docs from './Docs/Docs';
import Brain from './Brain/Brain';

const tabs = ['Brain', 'Docs', 'Code', 'Tasks', 'Requirement'];
export default function AgentDetails() {
    const [activeTab, setActiveTab] = useState('Tasks');

    const handelTabChange = (tab) => {
        setActiveTab(tab)
    }
    return (<div className='main__container'>
        <div className='agent_details__layout'>
            <div className='agent_details__sidebar'>sidebar</div>
            <div className='agent_details__main'>
                <header>
                    <ul className='agent_details__tabs'>
                    {
                        tabs.map((tab) =>{
                            return <li 
                            key={tab} 
                            onClick={() => handelTabChange(tab)}
                                className={`${activeTab === tab ? 'agent_details__tab-active' : ''} agent_details__tab`}
                            >{tab}</li>
                        })
                    } 
                    </ul>
                </header>
                <section>
                    {
                        activeTab === 'Tasks' ? <Tasks /> : 
                        activeTab === 'Code' ? <Code/> : 
                        activeTab === 'Docs' ?  <Docs/> :
                        activeTab === 'Brain' ? <Brain /> :
                        null
                    }
                    {/* <Tasks /> */}
                </section>
            </div>
        </div>
    </div>
    )
}
