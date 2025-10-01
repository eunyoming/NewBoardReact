import {useEffect, useState} from "react";
import {deleteAPI, meAPI, putAPI} from "../api/mypageAPI";
import styles from "./MyPage.module.css"
import ModifyPostCode from "../components/ModifyPostCode";
import useMemberStore from "../../../stores/memberStore";
import MyPageInputForm from "../components/MyPageInputForm";

const Mypage = () => {
    // 로그인한 사용자 정보 채워넣기
    const setMemberInfo = useMemberStore(state => state.setInfo);
    // 채워넣은 정보 가져오기
    const memberInfo = useMemberStore(state => state.memberInfo);
    // input css 기본 설정 상태 변수
    const [customInput, setCustomInput] = useState(true);
    // input title 상태 변수
    const inputMenu = [
        {name: "id", title: "아이디", customFlag: false},
        {name: "name", title: "이름", customFlag: false},
        {name: "phone", title: "연락처", customFlag: true},
        {name: "email", title: "이메일", customFlag: true},
    ];

    useEffect(() => {

        meAPI().then(resp => {
            setMemberInfo(resp.data)
        }
    )}, []);


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
                            putAPI();
                            setCustomInput(!customInput)
                        }}>수정완료
                        </button>
                        <button onClick={() => {
                            meAPI().then(resp => {
                                setMemberInfo(resp.data);
                            });
                            setCustomInput(!customInput)
                        }}>수정취소
                        </button>
                    </>
                }
                <button onClick={() => {
                    const result = window.confirm("정말로 회원 탈퇴 하시겠습니까?");
                    if(result) {
                    deleteAPI().then(resp => {
                            alert("회원 탈퇴가 정상적으로 처리되었습니다.");
                    }).catch(() =>
                        alert("회원 탈퇴가 정상적으로 처리되지 않았습니다.")
                    );
                }
                }}>회원 탈퇴</button>
            </div>
        </div>
    );
}

export default Mypage;