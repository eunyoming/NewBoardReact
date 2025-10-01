import styles from "../pages/MyPage.module.css";
import useMemberStore from "../../../stores/memberStore";

const MyPageInputForm = ({customFlag, customInput, name, title}) => {
    // 기본 정보 외에 자세한 정보 가져오기
    const memberInfo = useMemberStore((state) => state.memberInfo);
    const setMemberInfo = useMemberStore(state => state.setInfo);

    return (
        <div>
            <h4>{title}</h4>
            <input
                type={"text"}
                onChange={(e) => setMemberInfo({[name]: e.target.value})}
                value={memberInfo[name]}
                className={customInput ? styles.customInput : customFlag ? "" : styles.customInput}
            />
        </div>
    );
}

export default MyPageInputForm;