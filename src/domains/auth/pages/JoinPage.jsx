import GetDaumPostCode from "../../../commons/components/GetDaumPostCode";
import {useState} from "react";

const JoinPage = () => {

    // ID 중복체크 상태변수
    const [checkDuplicateId, setCheckDuplicateId] = useState("");

    // 중복 확인 버튼 클릭시
    const handleCheckDuplicate = () => {

    }

    const handleChange = (e) => {

    }

    // 우편번호 찾기 클릭 후 데이터 입력시
    const [show, setShow] = useState(false); // 우편번호 팝업창 상태변수
    const [form, setForm] = useState({}); // 우편번호 데이터 입력 저장할 상태변수

    const handleComplete = (data) => {
        setForm(prev => ({
            ...prev,
            postcode: data.zonecode,
            address1: data.roadAddress
        }));
    }

    // 회원가입 버튼 클릭시
    const handleJoin = () => {

    }

    return (
        <div>
            <input type="text" placeholder="아이디" onChange={handleChange} name={"id"}/>
            <button onClick={handleCheckDuplicate}>중복 확인</button><br/>
            <input type="text" placeholder="비밀번호" onChange={handleChange} name={"pw"}/><br/>
            <input type="text" placeholder="이름" onChange={handleChange} name={"name"}/><br/>
            <input type="text" placeholder="연락처" onChange={handleChange} name={"phone"}/><br/>
            <input type="text" placeholder="이메일" onChange={handleChange} name={"email"}/><br/>
            <input type="text" placeholder="우편번호" onChange={handleChange} name={"postcode"} readOnly={true}/>
            <button onClick={() => setShow(true)}>찾기</button>
            {show && <GetDaumPostCode onComplete={handleComplete}/>}<br/>
            <input type="text" placeholder="도로명 주소" onChange={handleChange} name={"address1"} readOnly={true}/><br/>
            <input type="text" placeholder="상세 주소" onChange={handleChange} name={"address2"}/>
            <button onClick={handleJoin}>회원가입</button>
        </div>
    );
}


export default JoinPage;