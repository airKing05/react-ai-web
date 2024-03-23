import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function AgentCard(props) {
    const {agentId} = props
    const navigate = useNavigate();

    const handleVideoClick = () => {
        navigate(`/layout/agent/${agentId}`);
    };
  return (
      <div className='agent__card cursor_pointer' onClick={handleVideoClick}>
        <div className='row'>
            <div className='col-6'>
                  <h5 className='agent_card__name'>Agent 1</h5>
                <label >Title of the task</label>
            </div>
              <div className='col-6 algin_items_right'>
                <div className='progress_bar'> 100% </div>
                <span>Task-2 is in progress</span>
              </div>
        </div>
    </div>
  )
}
