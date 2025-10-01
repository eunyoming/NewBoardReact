import OpenDaumPostCode from "../../../commons/components/OpenDaumPostCode";
import {useState} from "react";
import useMemberStore from "../../../stores/memberStore";
import styles from "../pages/MyPage.module.css";

export default function ModifyPostCode({showInput}) {
    const [showPost, setShowPost] = useState(false);

    const memberInfo = useMemberStore((state) => state.memberInfo);
    const setInfo = useMemberStore((state) => state.setInfo);

    const handleComplete = (data) => {
        setInfo({
            postcode: data.zonecode,
            address1: data.roadAddress
        });
        setShowPost(false);
    }

    return (
        <>
            <div>
                <h4>우편번호</h4>
                <div>
                    <input
                        type="text"
                        name={"postcode"}
                        readOnly={true}
                        value={memberInfo.postcode}
                        className={!showInput ? styles.customInput : ""}
                    />
                    {showInput && <button onClick={() => setShowPost(true)}>찾기</button>}
                    {showPost &&
                        <OpenDaumPostCode onComplete={handleComplete} onClose={() => setShowPost(false)}/>
                    }
                </div>
            </div>
            <div>
                <h4>도로명 주소</h4>
                <input
                    type="text"
                    name={"address1"}
                    readOnly={true}
                    value={memberInfo.address1}
                    className={!showInput ? styles.customInput : ""}
                />
            </div>
        </>
    );
}
