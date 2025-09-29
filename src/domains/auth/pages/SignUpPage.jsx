import {useState} from "react";
import {checkMemberId, register} from "../api/AuthAPI";
import {useNavigate} from "react-router-dom";
import GetPostCode from "../components/GetPostCode";
import SignUpInputForm from "../components/SignUpInputForm";
import useSignUpStore from "../store/signUpStore";

const SignUpPage = () => {
    const navigate = useNavigate();

    // ID 중복체크 상태변수
    const [checkDuplicateId, setCheckDuplicateId] = useState("");
    const signUpInfo = useSignUpStore((state) => state.signUpInfo);

    // 회원가입 버튼 클릭시
    const handleJoin = () => {
        if (checkDuplicateId) {
            register(signUpInfo).then(() => navigate("/"));
        }
    }

    // 중복 확인 버튼 클릭시
    const handleCheckDuplicate = () => {
        checkMemberId(signUpInfo.id).then(res => setCheckDuplicateId(res.data));
    }

    return (
        <div>
            <SignUpInputForm placeholder="아이디" name="id" pattern="^[a-zA-Z0-9]{4,12}$"/>
            <button onClick={handleCheckDuplicate}>중복 확인</button>
            <br/>
            <SignUpInputForm type="password" placeholder="비밀번호" name="pw" pattern="^([a-zA-Z0-9]|[^a-zA-Z0-9\\s]){8,16}$"/>
            <br/>

            <SignUpInputForm placeholder="이름" name="name" pattern="^[a-zA-Z가-힣]{2,6}$"/>
            <br/>
            <SignUpInputForm placeholder="연락처" name="phone" pattern="^010[0-9]{8}$|^010-[0-9]{4}-[0-9]{4}$"/>
            <br/>
            <SignUpInputForm type="email" placeholder="이메일" name="email" pattern="^[\\da-z_]{4,12}@[\\w]+(\\.com|\\.co\\.kr)$"/>
            <br/>
            <GetPostCode />

            <SignUpInputForm placeholder="상세 주소" name="address2"/>
            <br/>
            <button onClick={handleJoin}>회원가입</button>
        </div>
    );
}

export default SignUpPage;