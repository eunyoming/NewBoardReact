import UseMemberStore from "../../../stores/memberStore";
import {useEffect, useState} from "react";
import axios from "axios";

const Mypage = () => {
    // 로그인한 사용자 기본 정보 가져오기
    const member = UseMemberStore((state) => state.member);
    // 기본 정보 외에 자세한 정보 가져오기
    const [detailMember, setDetailMember] = useState({
        phone:"", email:"", postcode:"", address1:"", address2:""
    });

    useEffect(() => {
        axios.get(`/api/member/info?id=${member.id}`).then((resp) => {
            setDetailMember(resp.data);
        });
    }, [member.id]);

    return(
        <div>
            <h1>마이페이지</h1>
            <hr/>
            <div className={"info"}>
                <div>
                    <h6>아이디</h6>
                    <h6>{member.id}</h6>
                </div>
                <div>
                    <h6>이름</h6>
                    <h6>{member.name}</h6>
                </div>
                <div>
                    <h6>연락처</h6>
                    <h6>{member.phone}</h6>
                </div>
                <div>
                    <h6>이메일</h6>
                    <h6>{member.email}</h6>
                </div>
                <div>
                    <h6>우편번호</h6>
                    <h6>{member.postcode}</h6>
                </div>
                <div>
                    <h6>도로명 주소</h6>
                    <h6>{member.address1}</h6>
                </div>
                <div>
                    <h6>상세 주소</h6>
                    <h6>{member.address2}</h6>
                </div>
            </div>
        </div>
    );
}

export default Mypage;