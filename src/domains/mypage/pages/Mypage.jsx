import {useEffect, useState} from "react";
import {meAPI} from "../api/mypageAPI";

const Mypage = () => {
    // 기본 정보 외에 자세한 정보 가져오기
    const [detailMember, setDetailMember] = useState({
        id: "", name: "", phone: "", email: "", postcode: "", address1: "", address2: ""
    });

    useEffect(() => {
        meAPI().then(resp => {
            setDetailMember(resp.data);
        });
    }, []);

    return (
        <div>
            <h1>마이페이지</h1>
            <hr/>
            <div className="container">
                <div>
                    <h6>아이디</h6>
                    <h6>{detailMember.id}</h6>
                </div>
                <div>
                    <h6>이름</h6>
                    <h6>{detailMember.name}</h6>
                </div>
                <div>
                    <h6>연락처</h6>
                    <h6>{detailMember.phone}</h6>
                </div>
                <div>
                    <h6>이메일</h6>
                    <h6>{detailMember.email}</h6>
                </div>
                <div>
                    <h6>우편번호</h6>
                    <h6>{detailMember.postcode}</h6>
                </div>
                <div>
                    <h6>도로명 주소</h6>
                    <h6>{detailMember.address1}</h6>
                </div>
                <div>
                    <h6>상세 주소</h6>
                    <h6>{detailMember.address2}</h6>
                </div>
            </div>
        </div>
    );
}

export default Mypage;