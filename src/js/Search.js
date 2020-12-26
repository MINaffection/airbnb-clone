import React, { useState } from 'react';
import '../css/Search.css';
import 'react-date-range/dist/styles.css';  // main style file
import 'react-date-range/dist/theme/default.css';   // theme css file
// Module not found: Can't resolve 'date-fns' 오류 뜨면
// npm install date-fns --save로 해결
// npm i date-fns 아니면 이걸로

import { DateRangePicker } from 'react-date-range';
// 날짜표시를 위한 package (경로 체크!)
// npm i react-date-range

import { Button } from '@material-ui/core'
import PeopleIcon from '@material-ui/icons/People';
import { useHistory } from 'react-router-dom';

// DATA PICKER COMPONENT
function Search() {
    const history = useHistory();

    // 시작일
    const [startDate, setStartDate] = useState(new Date());
    // 종료일
    const [endDate, setEndDate] = useState(new Date());

    // 날짜 선택 범위 설정을 위한 객체 추가
    const selectionRange = {
        startDate: startDate,   // 이런 문법은 뭐지?
        endDate: endDate,       // key : value 인가?
        key: 'selection',
    };

    // 날짜를 선택할 때마다 시작날짜를 설정
    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className='search'>
            {/* 날짜 범위 선택기 */}
            <DateRangePicker 
            // 범위 설정
            ranges={ [selectionRange] } 
            // onChange시 handleSelect함수 동작
            onChange={ handleSelect } />
            <h2>Number of guests
                <PeopleIcon />
            </h2>
            <input min={0} defaultValue={2} type="number" />
            
            {/* 화살표 함수도 정확히 어떻게 쓰는건지 잘 모르겠어 */}
            <Button onClick={() => history.push('/search')}>Search Airbnb</Button>
        </div>
    )
}

export default Search