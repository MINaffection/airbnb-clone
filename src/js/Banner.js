import React, { useState } from 'react'
import '../css/Banner.css'
import { Button } from '@material-ui/core'
import Search from './Search'
import { useHistory } from 'react-router-dom'

function Banner() {
    // 코드 맨 위에 작성해야됌
    // 정확히 뭘 하는 함수지?
    // 미리가본 페이지가 있으면 새로고침없이 매우 빠르게 페이지 이동하는건가?
    const history = useHistory();

    // 해당 버튼을 클릭했는지 여부를 추적하고 기본적으로 거짓으로 설정
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className='banner'>
            <div className='banner__search'>
                {/* showSearch가 true이면 화면에 보여짐 */}
                {showSearch && <Search />}
                
                {/* 클릭을 하면 showSearch의 상태가 바뀌나? */}
                {/* !showSearch의 상태가 뭐던간에 계속 상태가 반대로 된다는건가? */}
                <Button onClick = {() => setShowSearch(!showSearch)}
                className='banner__searchButton' variant='outlined'>
                    { showSearch ? "Hide" : "Search Dates" } 
                    </Button>
            </div>
            <div className='banner__info'>
                <h1>Get out and stretch your imagination</h1>
                <h5>
                    Plan a different kind of getaway to uncover the hidden gems near you.
                </h5>
                <Button onClick={() => history.push('/search')}
                variant='outlined'>Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
