import React, { useState } from 'react';
import "./AddLabelPopup.css";
import { useDispatch, useSelector } from 'react-redux';
import { addLabelToSelectedLabelsList } from '../../../../../../redux/actions/calendarActions';

const isLabelExist = (allLabels, inputLabel) => {
    const isLabelFound = allLabels.filter((label) => label.title.includes(inputLabel));
    if (isLabelFound.length) {
        return isLabelFound;
    }

}

export default function AddLabelPopup() {
    const allLabels = useSelector((state) => state.calendar.selectedLabels);
    const [inputLabel, setInputLabel] = useState('');
    // const [allLabels, setAllLabels] = useState([{ title: 'labels', checked: false }, { title: 'now', checked: true }, { title: 'lal', checked: false }]);

const dispatch = useDispatch()
    const handleLabelChange = (e) => {
        setInputLabel(e.target.value);
    }

    const handleCheckLabel = (selectedLabel) => {
        dispatch(addLabelToSelectedLabelsList(selectedLabel))
        // const modifiedLabelsAfterCheck = allLabels.map((label) => {
        //     if (label.title === selectedLabel.title){
        //         return ({
        //             ...label, checked : !label.checked
        //         })
        //     }else{
        //         return label
        //     }
        // })
        // setAllLabels(modifiedLabelsAfterCheck)
    }

    console.log("38", allLabels)

    return (
        <div className='add_label_popup'>
            <input type='text' value={inputLabel} placeholder='Type a label' onChange={handleLabelChange} />

            {
                isLabelExist(allLabels, inputLabel) ?
                    isLabelExist(allLabels, inputLabel).map((label) => <div 
                    className='label__list_item' 
                    onClick={() => handleCheckLabel(label)}
                        // style={{ background: label.checked ? '#f3f3f3': 'transparent' }}
                    >
                  
                        <div>
                            <span style={{ marginTop: '5px' }}>
                                <svg width="16px" height="16px" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.11 3.24558L2.74998 14.6056C2.54998 14.8056 2.54998 15.1156 2.74998 15.3156L9.17998 21.7456C9.37998 21.9456 9.68998 21.9456 9.88998 21.7456L21.25 10.3856C21.34 10.2956 21.4 10.1656 21.4 10.0356V3.60558C21.4 3.32558 21.18 3.10558 20.9 3.10558H14.47C14.33 3.09558 14.21 3.15558 14.11 3.24558Z" stroke="#999999" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M17.83 7.66559C18.3822 7.66559 18.83 7.21787 18.83 6.66559C18.83 6.1133 18.3822 5.66559 17.83 5.66559C17.2777 5.66559 16.83 6.1133 16.83 6.66559C16.83 7.21787 17.2777 7.66559 17.83 7.66559Z" fill="#999999" />
                                </svg>
                            </span>
                            <span style={{ marginLeft: '5px' }}>
                                {label.title}
                            </span>
                        </div>

                        <div className='label__list_item_checkbox'>
                            <input type='checkbox' value={label} checked={label.checked}/>
                        </div>
                    </div>) : inputLabel !== '' ? <span className='label_not_exist'>
                        Does not exist
                    </span> : null
            }

            {
                inputLabel ? <div className='new_label'>
                    <span style={{ marginTop: '4px' }}>
                        <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 12H18M12 6V18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span>
                    <span className='new_label__name'>
                        Create "{inputLabel}"
                    </span>
                </div> : null
            }
        </div>
    )
}
