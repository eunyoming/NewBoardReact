import {useEffect, useState} from "react";
import {meAPI} from "../api/mypageAPI";
import styles from "./MyPage.module.css"
import ModifyPostCode from "../components/ModifyPostCode";
import useMemberStore from "../../../stores/memberStore";
import MyPageInputForm from "../components/MyPageInputForm";

const Mypage = () => {
    // 로그인한 사용자 정보 채워넣기
    const setMemberInfo = useMemberStore(state => state.setInfo);
    // input css 기본 설정 상태 변수
    const [customInput, setCustomInput] = useState(true);
    // input title 상태 변수
    const inputMenu = [
        {name: "id", title: "아이디", customFlag: false},
        {name: "name", title: "이름", customFlag: false},
        {name: "phone", title: "연락처", customFlag: true},
        {name: "email", title: "이메일", customFlag: true},
    ];
    // input 입력 값 저장할 상태 변수
    const [modifyMember, setModifyMember] = useState({
        phone: "",
        email: "",
        postcode: "",
        address1: "",
        address2: ""
    });

    useEffect(() => meAPI().then(resp => {
        setMemberInfo(resp.data);
    }), [setMemberInfo]);


    return (
        <div>
            <h1>마이페이지</h1>
            <hr/>
            <div className={styles.container}>
                {inputMenu.map(({name, title, customFlag}) =>
                    <MyPageInputForm customFlag={customFlag} customInput={customInput} name={name} title={title}/>
                )}
                <ModifyPostCode showInput={!customInput}/>
                <MyPageInputForm customFlag={true} customInput={customInput} name={"address2"} title={"상세주소"}/>
            </div>
            <div className={styles.btns}>
                {customInput ?
                    <button onClick={() => setCustomInput(!customInput)}>수정</button> :
                    <>
                        <button onClick={() => {
                            setCustomInput(!customInput)
                        }}>수정완료
                        </button>
                        <button onClick={() =>
                            setCustomInput(!customInput)
                        }>수정취소
                        </button>
                    </>
                }
            </div>
        </div>
    );
}

export default Mypage;