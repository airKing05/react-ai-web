import React from 'react';
import "./Agents.css";
import AgentCard from './components/AgentCard';

export default function Agents() {
  return (
      <div className='main__container'>
          <h2>List of all Agents</h2>
          <div className='agent_list__container'>
          {
            [...new Array(5).fill(0)].map((_agent, index) => {
                return  <React.Fragment key={index}>
                    <AgentCard agentId={index}/>

                </React.Fragment>
            })
          }
          </div>
        </div>
  )
}
