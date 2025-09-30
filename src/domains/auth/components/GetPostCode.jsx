import OpenDaumPostCode from "../../../commons/components/OpenDaumPostCode";
import {useState} from "react";
import useSignUpStore from "../../../stores/signUpStore";

export default function GetPostCode({form, setForm}) {
    const [showPost, setShowPost] = useState(false);

    const signUpInfo = useSignUpStore((state) => state.signUpInfo);
    const setInfo = useSignUpStore((state) => state.setInfo);

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
                value={signUpInfo.postcode}
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
                value={signUpInfo.address1}
            />
            <br/>
        </>
    );
}
