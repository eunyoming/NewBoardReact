import { useEffect } from "react";

const GetDaumPostCode = ({ onComplete }) => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
        script.async = true;
        script.onload = () => {
            new window.daum.Postcode({
                oncomplete: function (data) {
                    onComplete(data);
                }
            }).open();
        };
        document.body.appendChild(script);
    }, []);

    return null; // 팝업만 띄우고 컴포넌트 자체는 렌더링하지 않음
};

export default GetDaumPostCode;
