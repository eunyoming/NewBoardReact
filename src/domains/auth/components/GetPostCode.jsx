import OpenDaumPostCode from "../../../commons/components/OpenDaumPostCode";
import {useState} from "react";
import useMemberStore from "../../../stores/memberStore";

export default function GetPostCode() {
    const [showPost, setShowPost] = useState(false);

    const memberInfo = useMemberStore((state) => state.memberInfo);
    const setInfo = useMemberStore((state) => state.setInfo);

    const handleComplete = (data) => {
        setInfo( {
            postcode: data.zonecode,
            address1: data.roadAddress
        });
        setShowPost(false);
    }

    return (
        <>
            <input
                type="text"
                placeholder="우편번호"
                name={"postcode"}
                readOnly={true}
                value={memberInfo.postcode}
            />
            <button onClick={() => setShowPost(true)}>찾기</button>
            {showPost &&
                <OpenDaumPostCode onComplete={handleComplete} onClose={() => setShowPost(false)}/>
            }
            <br/>
            <input
                type="text"
                placeholder="도로명 주소"
                name={"address1"}
                readOnly={true}
                value={memberInfo.address1}
            />
            <br/>
        </>
    );
}
