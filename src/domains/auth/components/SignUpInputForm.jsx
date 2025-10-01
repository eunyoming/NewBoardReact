import useMemberStore from "../../../stores/memberStore";

export default function SignUpInputForm({type="text", placeholder, name, ...props}) {
    const signUpInfo = useMemberStore((state) => state.memberInfo);
    const setInfo = useMemberStore((state) => state.setInfo);

    return (
        <input
            type={type}
            placeholder={placeholder}
            onChange={(e) => setInfo({[e.target.name]: e.target.value})}
            name={name}
            value={signUpInfo[name]}
            {...props}
        />
    );
}