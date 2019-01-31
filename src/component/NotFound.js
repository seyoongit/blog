import React from 'react';

const NotFound = () => {

    return (
        <section>
        <h2 style={{textAlign: 'center', paddingTop: '10%'}}>
            <div>
                404 Page Not Found!
            </div>
            잘못된 경로로 들어왔거나,
            해당하는 포스트 번호가 없습니다!
            <p><a href="http://codingmentor.me/">CodingMentor 메인화면으로 가기</a></p>
        </h2>
        </section>
    )
};

export default NotFound;